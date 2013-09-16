package ;

import org.flixel.FlxSprite;
import openfl.Assets;

/**
 * ステージ1のドア
 * @author mieki256
 */
class Stage1Door extends FlxSprite{

    /**
     * 初期化処理
     * @param _x    発生座標 x
     * @param _y    発生座標 y
     */
    public function new(_x:Int, _y:Int) {
        super(_x - 16, _y - (5*16));

        // 画像を割り当て
        loadGraphic(Assets.getBitmapData("assets/images/mulevel1_door.png"), true, false, 64, 96);
        
        // アニメパターンを設定
        addAnimation("notopen", [0]);
        addAnimation("open", [1]);
        play("notopen");
        solid = false;      // 最初はアタリ無し
        immovable = true;   // 当たっても動かない
    }

    /**
     * ステージクリア用のドアを開ける
     */
    public function openTheSesame():Void {
        solid = true;
        play("open");
    }

    /**
     * プレイヤーと接触した時の処理
     */
    public function hitPlayer():Void {
        solid = false;
    }
}