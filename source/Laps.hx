package ;
import org.flixel.FlxGroup;
import org.flixel.FlxG;
import org.flixel.FlxSprite;
import org.flixel.FlxText;

/**
 * クリア時間を記録・描画するクラス
 * グローバル変数扱い
 * @author mieki256
 */
class Laps{

    public static var laps:Array<Int>;
    public static var nowLap:Int;
    public static var playCount:Int;
    public static var lapsTexts:FlxGroup;
    public static var lapsTextWidth:Int;
    public static var lapsTextHeight:Int;
    
    public function new() {
        initLaps();
    }

    /**
     * クリア時間記録ワークを初期化。
     * どこで初期化したらいいのか分からないので、
     * あちこちからひたすら呼んでいるけど、
     * 本来はどうやって初期化すべきなんだろう…？
     * HaxeはAS3と違って、変数宣言時に内容まで設定できないらしいし…。
     */
    private static function initLaps():Void {
        if (laps == null) {
            laps = new Array<Int>();
            var deftime:Int = ((15 * 60)) * 1000;
            //var deftime:Int = (20) * 1000;
            for (i in 0...5) {
                laps.push(deftime);
                deftime += 60 * 1000;
            }
            nowLap = deftime;
            //nowLap = 60 * 1000;
            //laps[5] = nowLap;
            playCount = 0;
        }
    }
    
    /**
     * クリア時間表示用オブジェクトを設定して返す
     * @param _x    表示位置 x
     * @param _y    表示位置 y
     * @return      FlxGroup
     */
    public static function setLapsTextsPos(_x:Int, _y:Int, nowDisp:Bool):FlxGroup {
        initLaps();
        var w:Int = 132;
        var h:Int = 120;
        
        // クリア時間記録テキストを生成
        if ( lapsTexts != null ) lapsTexts.destroy();
        lapsTexts = null;
        lapsTexts = new FlxGroup();
        lapsTextWidth = w;
        lapsTextHeight = h;
        
        var lineh:Int = 16;
        var x:Int = _x;
        var y:Int = _y;
        var bx = _x;
        var by = _y;
        
        var bg:FlxSprite = new FlxSprite(bx, by);
        bg.makeGraphic(w, h, 0x60000000);
        lapsTexts.add(bg);

        x += 4;
        y += 4;
        var t:FlxText = new FlxText(x + 16, y, 160, "RANKING");
        t.setFormat("PlayBold", 14, 0xffffffff, "left", 0x1e90ff, true);
        lapsTexts.add(t);
        y += lineh + 4;
        
        for (i in 0...Laps.laps.length) {
            var lap:Int = Laps.laps[i];
            var str:String = StringTools.lpad('${i+1}', " ", 2);
            str += '  ' + Laps.getTimeString(lap);
            var col:Int = 0xffffffff;
            
            if ( nowDisp && nowLap == lap ) {
                // 直前のクリア時間が入っていた
                str += " < You!";
                var l:FlxSprite = new FlxSprite(bx, y);
                l.makeGraphic(w, lineh, 0x80ff0000);
                lapsTexts.add(l);
                nowDisp = false;
            }
            
            var t2:FlxText = new FlxText(x, y, 160, str);
            t2.setFormat("PlayBold", 14, col, "left", 0x1e90ff, true);
            lapsTexts.add(t2);
            y += lineh;
        }
        
        return lapsTexts;
    }

    /**
     * 今回のクリア時間を記録
     * @param n
     */
    public static function setNowLap(n:Int):Void {
        initLaps();
        nowLap = n;
        laps.push(nowLap);

        // ソートする
        laps.sort(function(a:Int, b:Int):Int {
            if ( a == b) return 0;
            if (a > b) return 1;
            else return -1;
        });
        
        laps.pop();     // 1つ追加したので、最後の要素を削除して総数を揃える
    }

    /**
     * 新記録(記録1位)か調べる
     * @return  true: 新記録 / false: 新記録ではない
     */
    public static function checkNewRecord():Bool {
        initLaps();
        if ( laps[0] == nowLap ) return true;
        return false;
    }

    /**
     * プレイ回数カウンタを1つ増やす
     */
    public static function incPlayCount():Void {
        initLaps();
        playCount++;
    }

    /**
     * プレイ回数カウンタを取得
     * @return  プレイ回数
     */
    public static function getPlayCount():Int {
        initLaps();
        return playCount;
    }
    
    /**
     * 経過時間を「??:??:??」の文字列にして返す
     * @param starttime     開始時間(ミリ秒)
     * @param endtime       終了時間(ミリ秒)
     * @return  結果文字列
     */
    public static function gettimeStringDiff(starttime:Int, endtime:Int):String {
        var t = endtime - starttime;
        if ( t < 0 ) t = 0;
        return getTimeString(t);
    }
    
    /**
     * 時間(ミリ秒)を「??:??:??」の文字列にして返す
     * @param t     時間(ミリ秒)
     * @return  結果文字列
     */
    public static function getTimeString(t:Int):String {
        if (t < 0 ) t = 0;
        var m = t % 1000;
        t = Math.floor((t - m) / 1000);
        var ss:Int = t % 60;
        t = Math.floor((t - ss) / 60);
        var mm:Int = t % 60;
        var hh = Math.floor((t - mm) / 60);
        var str:String = StringTools.lpad(Std.string(hh), "0", 2);
        str += ":" + StringTools.lpad(Std.string(mm), "0", 2);
        str += ":" + StringTools.lpad(Std.string(ss), "0", 2);
        return str;
    }
    
}