package ;

import flash.display.BitmapData;
import flash.Lib;
import openfl.Assets;
import org.flixel.FlxEmitter;
import org.flixel.FlxG;
import org.flixel.FlxGroup;
import org.flixel.FlxObject;
import org.flixel.FlxParticle;
import org.flixel.FlxSprite;
import org.flixel.FlxState;
import org.flixel.FlxText;
import org.flixel.FlxTilemap;
import org.flixel.util.FlxPoint;
import Ruby;
import Banana;
import Stage1Door;
import TmxJson;
import Laps;
import LogoStageClear;

/**
 * ステージ1用クラス
 * @author mieki256
 */
class Stage1 extends FlxState
{
    // 画面に表示するオブジェクト
    var timeText:FlxText;
    var rubyText:FlxText;
    var rubyIcon:FlxSprite;
    var player:Player;
    var bg_hit:FlxTilemap;
    var bg_a:FlxTilemap;
    var bg_b:FlxTilemap;
    var bg_c:FlxTilemap;
    var bg_extra:FlxSprite;
    var rubys:FlxGroup;
    var bananas:FlxGroup;
    var emitter:FlxEmitter;
    var door:Stage1Door;
    var logoStageClear:LogoStageClear;

    // 取得アイテム数記録用
    var getRubyCount:Int;
    var getBananaCount:Int;
    
    // ステージクリア条件管理用
    var stageClearReq:Bool;
    var stageClear:Bool;

    // 開始時間・終了時間
    var startTime:Int;
    var clearTime:Int;
    
    // BG描画タイプ
    var useBgExt:Bool;
    
    /**
     * 初期化処理
     */
    override public function create():Void
    {
        bgColor = 0xFFACBCD7;
        
        #if flash
        FlxG.playMusic("BgmLevel1");    // BGM再生開始
        #end

        useBgExt = true;
        
        // jsonを読み込み・解析して、BG用データを記録
        var mapdt:String = Assets.getText("assets/maps/mylevel1.json.txt");
        var dt:TmxJson = new TmxJson(mapdt);

        createBg(dt);   // BG生成
        createBgBack(); // 一番奥のBG生成
        createText();   // テキスト表示部分生成
        createObjSprite(dt);    // ステージ上のオブジェクトを発生
        createEmitter();    // パーティクルを初期化
        logoStageClear = new LogoStageClear();  // ステージクリアロゴ生成

        // ----------------------------------------
        // ステージに登録
        add(bg_c);
        if (!useBgExt) add(bg_extra);
        add(bg_b);
        add(bg_a);
        add(bg_hit);
        add(door);
        
        add(timeText);
        add(rubyText);
        add(rubyIcon);
        
        add(player);
        add(rubys);
        add(bananas);
        add(emitter);
        
        add(logoStageClear);
        
        // カメラの追従対象を指定(プレイヤーを追いかける)
        FlxG.camera.follow(player, 2);
        bg_hit.follow();
        
        stageClearReq = false;
        stageClear = false;
        startTime = clearTime = Lib.getTimer();
        
        rubyText.text = '$getRubyCount / ${rubys.length}';
        
        super.create();
    }

    /**
     * 毎フレーム呼ばれる処理
     */
    override public function update():Void {
        super.update();
        
        if ( FlxG.keys.justPressed("B")) {
            // Bキーを押したら、アタリ範囲表示を切替
            FlxG.visualDebug = !FlxG.visualDebug;
        }

        // プレイヤーと地形のアタリ判定
        FlxG.collide(player, bg_hit);
        
        // プレイヤーと宝石のアタリ判定
        FlxG.collide(player, rubys, handlerGetRuby);

        // プレイヤーとバナナのアタリ判定
        FlxG.collide(player, bananas, handlerGetBanana);
        
        // プレイヤーとドアのアタリ判定
        if ( stageClearReq ) FlxG.overlap(player, door, handlerHitDoor);

        // 時間表示用テキスト内容を設定
        var ntime:Int = if (stageClear) clearTime else Lib.getTimer();
        timeText.text = Laps.gettimeStringDiff(startTime, ntime);

        if ( stageClear && !logoStageClear.myAlive) {
            // ステージクリア、かつ、ロゴ表示終了状態なので、次画面に切り替える
            FlxG.switchState(new StageClearAll());
        }
    }

    /**
     * BGを発生
     * @param dt    TmxJson
     */
    private function createBg(dt:TmxJson):Void {
        // BG用画像ファイル読み込み
        var bgimg:BitmapData = Assets.getBitmapData("assets/maps/mylevel1_tiles.png");

        if ( !useBgExt ) {
            // 一番奥のBG
            bg_c = new FlxTilemap();
            bg_c.loadMap(dt.getLayer("layer4"), bgimg, dt.tileWidth, dt.tileHeight, FlxTilemap.OFF);
            bg_c.solid = false;
            bg_c.scrollFactor.x = 0.20;
            bg_c.scrollFactor.y = 0.20;
        }
        
        
        // 一つ奥のBG
        bg_b = new FlxTilemap();
        bg_b.loadMap(dt.getLayer("layer3"), bgimg, dt.tileWidth, dt.tileHeight, FlxTilemap.OFF);
        bg_b.solid = false;
        bg_b.scrollFactor.x = 0.5;
        bg_b.scrollFactor.y = 0.5;
        
        // 手前のBG
        bg_a = new FlxTilemap();
        bg_a.loadMap(dt.getLayer("layer2"), bgimg, dt.tileWidth, dt.tileHeight, FlxTilemap.OFF);
        bg_a.solid = false;
        
        // アタリ判定用BG
        // 表示を開始するチップ番号を大きくすることで非表示にしている
        bg_hit = new FlxTilemap();
        bg_hit.loadMap(dt.getLayer("layer1"), bgimg, dt.tileWidth, dt.tileHeight, FlxTilemap.OFF, 0, 250);
        bg_hit.immovable = true;
    }

    /**
     * 一番奥のBGを発生
     */
    private function createBgBack():Void {
        if (useBgExt) {
            // 別BG画像を使ってBG生成する場合
            // jsonを読み込み・解析して、BG用データを記録
            var mapdt:String = Assets.getText("assets/maps/mylevel1_b.json.txt");
            var dt:TmxJson = new TmxJson(mapdt);
            var bgimg:BitmapData = Assets.getBitmapData("assets/maps/mylevel1_b_tiles.png");
            
            bg_c = new FlxTilemap();
            bg_c.loadMap(dt.getLayer("layer_innermost"), bgimg, dt.tileWidth, dt.tileHeight, FlxTilemap.OFF);
            bg_c.solid = false; // アタリなし
            bg_c.scrollFactor.x = 0.125; // スクロール速度の割合
            bg_c.scrollFactor.y = 0.0;
        }

        // BGの手前に被せる半透明部分を生成
        bg_extra = new FlxSprite();
        bg_extra.loadGraphic(Assets.getBitmapData("assets/images/bg_extra.png"));
        bg_extra.scrollFactor = new FlxPoint();
        bg_extra.solid = false;
    }

    /**
     * テキスト表示部分を発生
     */
    private function createText():Void {
        rubyIcon = new FlxSprite(4, 10);
        rubyIcon.loadGraphic(Assets.getBitmapData("assets/images/rubyicon.png"));
        rubyIcon.scrollFactor = new FlxPoint();     // スクロールしないように指定
        rubyIcon.solid = false;
        
        rubyText = new FlxText(28, 2, 160, "");
        rubyText.setFormat("PlayBold", 24, 0xffffffff, "left", 0x1e90ff, true);
        rubyText.scrollFactor = new FlxPoint();
        
        timeText = new FlxText(256, 2, 640, "");
        timeText.setFormat("PlayBold", 24, 0xffffffff, "left", 0x1e90ff, true);
        timeText.scrollFactor = new FlxPoint();
    }

    /**
     * ステージ上のオブジェクト(プレイヤー、ドア、宝石、バナナ等)を発生
     * @param dt    TmxJson
     */
    private function createObjSprite(dt:TmxJson):Void {
        rubys = new FlxGroup();
        bananas = new FlxGroup();
        getRubyCount = 0;
        getBananaCount = 0;
        var px:Int = 32 * 6;
        var py:Int = 32 * 4;
        var doorx:Int = 0;
        var doory:Int = 0;

        // オブジェクトレイヤー情報に基づいてオブジェクトを発生
        var odt:Array<TmxObjGroup> = dt.getObjLayer("objlayer");
        if (odt == null ) {
            // オブジェクトレイヤー情報が見つからない
            trace("Not Found objectgroup data.");
        }
        else {
            for (i in 0...odt.length) {
                // 配置タイルの左下座標が記録されているので、
                // その値から、配置タイルの中心座標を得る
                var x:Int = odt[i].x + 16;
                var y:Int = odt[i].y - 16;

                // 配置タイルの種類に応じて処理
                switch(odt[i].name) {
                    case "ruby":
                        // 宝石アイテム
                        var ruby:Ruby = new Ruby(x, y);
                        rubys.add(ruby);
                    case "banana":
                        // バナナ
                        var banana:Banana = new Banana(x, y);
                        bananas.add(banana);
                    case "playerborn":
                        // プレイヤー発生位置
                        px = x;
                        py = y;
                    case "door":
                        // ステージクリア用ドアの位置
                        doorx = x;
                        doory = y;
                }
            }
        }
        
        player = new Player(px, py);    // プレイヤーキャラを発生
        door = new Stage1Door(doorx, doory);    // ステージクリア用ドア発生
    }

    /**
     * 宝石取得時のパーティクル(emitter)を初期化。
     */
    private function createEmitter():Void {
        var particles:Int = 300;
        emitter = new FlxEmitter(320, 240, particles);
        
        // パーティクルのアニメパターン
        var starAnime = [
        [0, 1, 2, 3, 2, 1],
        [1, 2, 3, 2, 1, 0],
        [2, 3, 2, 1, 0, 1],
        [3, 2, 1, 0, 1, 2]
        ];
        
        // こういう書き方をしないと画像が変わらず、
        // default.png が表示されてしまう。何故…？
        var particle:FlxParticle;   // パーティクル用のクラス

        // パーティクル用オブジェクトを個数分登録
        for (i in 0...particles) {
            particle = new FlxParticle();
            
            // 画像割り当て
            particle.loadGraphic("assets/images/part_star.png", true, false, 16, 16);   
            
            // アニメパターン指定
            particle.addAnimation("flash", starAnime[Std.random(starAnime.length)], 15);
            particle.play("flash");
            
            particle.exists = false; // 最初は非表示にしておく
            
            // emitter に登録
            emitter.add(particle);
        }
        emitter.setRotation(10, 80);    // 回転の最小最大速度を指定
    }
    
    /**
     * プレイヤーと宝石が当たった時の処理
     * @param obj1  プレイヤーオブジェクト
     * @param obj2  宝石オブジェクト
     */
    private function handlerGetRuby(obj1:FlxObject, obj2:FlxObject):Void {
        
        // 宝石消滅エフェクトとしてパーティクルを出す
        emitter.x = obj2.x - 16;    // 発生位置指定
        emitter.y = obj2.y - 16;
        emitter.width = 32;
        emitter.height = 32;
        emitter.setXSpeed( -800, 800);  // 最小速度と最大速度を設定
        emitter.setYSpeed( -800, 800);
        emitter.start(true, 1.5, 0.1, 150); // パーティクル発生

        // 取得宝石数を+1する
        getRubyCount++;
        rubyText.text = '$getRubyCount / ${rubys.length}';
        playSe("ruby");
        
        // 開発用：trueにすると、1つ宝石を取るだけでクリアできる
        //var dbg:Bool = true;
        var dbg:Bool = false;
        
        if ( getRubyCount >= rubys.length || dbg) {
            // 全部取得した
            
            // 画面を揺らす
            FlxG.shake(0.02, 1.0, function() {
                FlxG.shake(0.005, 1.5, openDoor);   // 更に画面を小さく揺らす
            });
            playSe("shake");
        }
    }

    /**
     * ステージクリア用のドアを開く
     */
    private function openDoor():Void {
        door.openTheSesame();
        stageClearReq = true;
    }
    
    /**
     * プレイヤーとバナナが当たった時の処理
     * @param obj1  プレイヤーオブジェクト
     * @param obj2  バナナオブジェクト
     */
    private function handlerGetBanana(obj1:FlxObject, obj2:FlxObject):Void {
        playSe("banana");
    }

    /**
     * ステージクリア用ドアと接触した場合の処理
     * @param obj1  プレイヤーオブジェクト
     * @param obj2  ドアオブジェクト
     */
    private function handlerHitDoor(obj1:FlxObject, obj2:FlxObject):Void {
        if ( stageClearReq ) {
            door.hitPlayer();
            stageClear = true;
            stageClearReq = false;
            clearTime = Lib.getTimer();
            
            logoStageClear.start();     // ステージクリアロゴの表示開始
            
            // クリア時間を記録
            Laps.setNowLap(clearTime - startTime);
            
            #if flash
            FlxG.music.stop();
            playSe("stageclear");
            #end
        }
    }
    
    /**
     * SEを鳴らす
     * @param kind  SE種類
     */
    private function playSe(kind:String):Void {
        #if flash
        // flash版のみ鳴らす
        switch(kind) {
            case "shake":
                FlxG.play(Assets.getSound("SeShake"));
            case "banana":
                FlxG.play(Assets.getSound("SeBanana"));
            case "ruby":
                FlxG.play(Assets.getSound("SeRuby"));
            case "stageclear":
                FlxG.play(Assets.getSound("SeStageClear"));
            case "newrecord":
                FlxG.play(Assets.getSound("SeNewRecord"));
        }
        #end
    }
}
