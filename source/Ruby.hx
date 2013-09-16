package ;

import openfl.Assets;
import org.flixel.FlxObject;
import org.flixel.FlxSprite;

/**
 * 宝石アイテム
 * @author mieki256
 */
class Ruby extends FlxSprite{

    /**
     * 初期化処理
     * @param _x    発生座標 x
     * @param _y    発生座標 y
     */
    public function new(_x:Int, _y:Int) {
        super(_x - 12, _y - 12);

        // 画像を割り当て
        loadGraphic(Assets.getBitmapData("assets/images/ruby2.png"), true, false, 24, 24);
        
        // アニメパターンを設定
        // 全部が同じパターンで動いてると気持ち悪いので、
        // ランダムに開始フレームをずらしてる
        var framelist = new Array();
        var cnt:Int = Std.random(7);
        for (i in 0...7) {
            framelist.push(cnt);
            cnt = (cnt + 1) % 7;
        }
        addAnimation("wait", framelist, 15);
        addAnimation("dead", [0, 1, 2, 3, 4, 5, 6], 5);
        play("wait");
        
        centerOffsets();    // 基準座標を中心座標に設定
        solid = true;       // アタリあり
        immovable = false;  // 当たったら動く
        mass = 0.1;         // オブジェクトの仮想的な質量
    }

    /**
     * 毎フレーム呼ばれる処理
     */
    override public function update():Void {
        if (isTouching(FlxObject.ANY)) {
            // 何かに当たったら消滅
            kill();
        }
        super.update();
    }
}