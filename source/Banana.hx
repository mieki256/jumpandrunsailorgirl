package ;

import openfl.Assets;
import org.flixel.FlxObject;
import org.flixel.FlxSprite;

/**
 * バナナアイテム
 * 
 * HP回復アイテムにする予定
 * @author mieki256
 */
class Banana extends FlxSprite {
    
    var scaleSpd:Float;

    /**
     * 初期化処理
     * @param _x    発生座標 x
     * @param _y    発生座標 y
     */
    public function new(_x:Int, _y:Int) {
        super(_x - 12, _y - 12);

        // 画像を割り当て
        loadGraphic(Assets.getBitmapData("assets/images/banana.png"), true, false, 24, 24);
        
        // アニメパターンを設定
        addAnimation("wait", [0, 0, 0, 1, 1, 2, 2, 2, 2, 1], 30);
        play("wait");
        
        centerOffsets();    // 基準座標を中心座標に設定
        solid = true;       // アタリあり
        immovable = false;  // 当たったら動く
        mass = 0.1;         // オブジェクトの仮想的な質量
        
        scaleSpd = 0.0;
   }
   
    /**
     * 毎フレーム呼ばれる処理
     */
    override public function update():Void {
        if (!alive) {
            // 消滅中の処理
            scale.x += scaleSpd;
            scale.y += scaleSpd;
            scaleSpd -= (scaleSpd / 5);
            alpha -= 0.05;
            if ( alpha <= 0 ) kill();
        }
        else if (isTouching(FlxObject.ANY)) {
            // 何かに当たったら消滅開始
            deadStart();
        }
        super.update();
    }

    /**
     * 消滅開始処理
     */
    private function deadStart():Void {
        if (!alive) return;
        velocity.x = 0;
        velocity.y = 0;
        alive = false;
        solid = false;
        scaleSpd = 3.0;
        alpha = 0.7;
    }
   
}