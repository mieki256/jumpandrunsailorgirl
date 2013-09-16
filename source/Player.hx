package ;
import org.flixel.FlxObject;
import org.flixel.FlxSound;
import org.flixel.FlxSprite;
import org.flixel.FlxG;
import flash.Lib;
import openfl.Assets;


/**
 * プレイヤーキャラ
 * @author mieki256
 */
class Player extends FlxSprite
{
    private var player:FlxSprite;
    var jump:Int;
    var seRun:FlxSound;
    var seStand:FlxSound;
    var seJump:FlxSound;
    
    /**
     * 初期化処理
     * @param _x 発生位置 x
     * @param _y 発生位置 y
     */
    public function new(_x:Int, _y:Int) 
    {
        super(_x - 32, _y - 32);
        
        // 画像を割り当てる
        loadGraphic(Assets.getBitmapData("assets/images/player.png"), true, true, 64, 64);
        
        // アニメパターンを設定
        addAnimation("wait", [0, 1, 2, 3, 2, 1,], 10);
        addAnimation("right_walk", [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17], 15);
        addAnimation("right_run", [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37], 30);
        addAnimation("jump", [4]);
        addAnimation("jump_m", [5]);
        addAnimation("jump_down", [6]);
        play("wait");
        
        jump = 0;
        
        // アタリ判定領域の調整
        offset.x = 48;
        width = 64 - offset.x;
        centerOffsets();
        offset.y = 24;
        height = 64 - offset.y;
        
        #if flash
        seRun = FlxG.loadSound(Assets.getSound("SeRun"));
        seStand = FlxG.loadSound(Assets.getSound("SeStand"));
        seJump = FlxG.loadSound(Assets.getSound("SeJump"), 0.4);
        #end
    }

    /**
     * SE再生
     * @param kindstr
     */
    function playSe(kindstr:String) {
        // flash版の時だけ鳴らす
        #if flash
        switch(kindstr) {
            case "run":
                seRun.play();
            case "jump":
                seJump.play();
            case "stand":
                seStand.play();
        }
        #end
    }
    
    function stopSeRun():Void {
        #if flash
        seRun.stop();
        #end
    }
    
    /**
     * 毎フレーム呼ばれる処理
     */
    override public function update():Void
    {
        var ax = 400;
        maxVelocity.x = 200;
        acceleration.y = 1000;
        
        if (FlxG.keys.pressed("LEFT") || FlxG.keys.pressed("A")) {
            // 左キーが押されている
            acceleration.x = -ax; // 左向きに加速
            facing = FlxObject.LEFT; // 画像を左向きにする
        }
        else if (FlxG.keys.pressed("RIGHT") || FlxG.keys.pressed("D")) {
            // 右キーが押されている
            acceleration.x = ax; // 右向きに加速
            facing = FlxObject.RIGHT; // 画像を右向きにする
        }
        else {
            // 左右キーのどちらも押されていない
            if ( velocity.x == 0 ) {
                // 停止中
                velocity.x = 0;
                acceleration.x = 0;
                drag.x = 0;
            }
            else {
                // 減速する
                acceleration.x = 0;
                drag.x = ax;
                if (velocity.x == 0) {
                    drag.x = 0;
                }
            }
        }
        
        switch(jump) {
            case 0:
                // ジャンプ中ではない
                if (velocity.y > 0 ) {
                    // 落下中
                    jump = 2;
                    stopSeRun();
                    play("jump_down"); // ジャンプアニメを指定
                }
                else if (FlxG.keys.justPressed("Z") || FlxG.keys.justPressed("J")) {
                    // ジャンプキーが押されたのでジャンプする
                    velocity.y = -460;
                    jump = 1;
                    play("jump"); // ジャンプアニメを指定
                    stopSeRun();
                    playSe("jump");
                }
            case 1:
                // ジャンプ中(上向き)
                if (velocity.y == 0) {
                    // 何かと衝突して速度が0になった
                    jump = 0;
                }
                else if (velocity.y > 0) {
                    // 速度が下向きに転じた
                    jump = 2;
                }
            case 2:
                // ジャンプ中(下向き)
                if (velocity.y == 0) {
                    jump = 0;
                    stopSeRun();
                    playSe("stand");
                }
        }
        
        // アニメを指定
        switch(jump) {
            case 0:
                // ジャンプ中じゃない
                if (velocity.x == 0) {
                    // x速度が無いなら立ち止まっている。待ちポーズを指定
                    if (_curAnim.name == "right_run") stopSeRun();
                    play("wait");
                }
                else {
                    if (Math.abs(velocity.x) > 150) {
                        // 速度が出ているので、走りアニメを指定
                        // 今まで走りアニメでは無かったのなら、走ってる音を鳴らす
                        if (_curAnim.name != "right_run") playSe("run");
                        play("right_run");
                    }
                    else {
                        // 速度が出ていないので、歩きアニメを指定
                        if (_curAnim.name == "right_run") stopSeRun();
                        play("right_walk");
                    }
                }
            case 1, 2:
                // ジャンプ中
                if (Math.abs(velocity.y) < 50) {
                    // y速度があまり出ていないので、ジャンプの頂点付近にいる
                    // 頂点付近のアニメを指定
                    play("jump_m");
                }
                else if (velocity.y < 0 ) {
                    // 上方向に飛んでいる
                    play("jump");
                }
                else {
                    // 下方向に飛んでいる
                    play("jump_down");
                }
        }
        
        super.update();
    }
}