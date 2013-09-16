package ;

import haxe.Json;
import TmxObjGroup;

/**
 * Tiled Map Editor で export した json を解析
 * 
 * tilelayer(タイルレイヤー) と
 * objectgroup(オブジェクトレイヤー) にしか対応してない。
 * 
 * objectgroup は、タイルを置く種類にしか対応してない。
 * 
 * @author mieki256
 */
class TmxJson {

    public var width:Int;
    public var height:Int;
    
    public var layerTileData:Map<String,String>;
    public var layerWidth:Map<String,Int>;
    public var layerHeight:Map<String,Int>;
    public var objectLayer:Map < String, Array<TmxObjGroup> > ;
    
    public var tileWidth:Int;
    public var tileHeight:Int;
    
    public var jsonData:Json;
    
    public function new(jsondata:String) {
        // jsonを解析
        var jsonData = Json.parse(jsondata);
        var d = jsonData;
        
        // タイルの縦横個数を取得
        width = d.width;
        height = d.height;
        
        // タイルのサイズを取得
        tileWidth = d.tilewidth;
        tileHeight = d.tileheight;
        
        layerTileData = new Map();
        layerWidth = new Map();
        layerHeight = new Map();
        objectLayer = new Map();

        // 各レイヤーのタイル並び情報を取得
        var layernum:Int = d.layers.length;
        for (i in 0...layernum) {
            var name:String = untyped d.layers[i].name;
            var layerkind:String = untyped d.layers[i].type;
            
            switch(layerkind) {
                case "tilelayer":
                    // タイルレイヤー
                    
                    // レイヤーの縦横タイル個数を取得
                    var w:Int = untyped d.layers[i].width;
                    var h:Int = untyped d.layers[i].height;
                    layerWidth.set(name, w);
                    layerHeight.set(name, w);
                    
                    // タイル並びを整形
                    var tiledata:Array<Int> = untyped d.layers[i].data;
                    var count = 0;
                    var layer:String = "";
                    for (y in 0...h) {
                        var row = new Array();
                        for (x in 0...w) {
                            var c:Int = untyped tiledata[count];
                            
                            // Tiledのデータは、
                            // 0番が透明、1番からチップ番号が始まるので、
                            // 若干番号を調整する。
                            if ( c > 0 ) c -= 1;
                            
                            row.push(c);
                            count++;
                        }
                        layer += row.join(",") + "\n";
                    }
                    layerTileData.set(name, layer);
                    //trace('tmx layer=$name is save');
                    
                case "objectgroup":
                    // オブジェクトレイヤー
                    
                    var objdata:Array<Dynamic> = untyped d.layers[i].objects;
                    var objarray:Array<TmxObjGroup> = new Array();
                    var num:Int = objdata.length;
                    for (i in 0...num) {
                        var gid:Int = objdata[i].gid;
                        var objname:String = objdata[i].name;
                        var x:Int = objdata[i].x;
                        var y:Int = objdata[i].y;
                        objarray.push(new TmxObjGroup(objname, gid, x, y));
                    }
                    objectLayer.set(name, objarray);
            }
            
        }
    }

    /**
     * 与えられたレイヤー名のタイル並び(csv文字列)を返す
     * @param layerName レイヤー名
     * @return タイル並び(csv文字列)
     */
    public function getLayer(layerName:String):String {
        if (layerTileData.exists(layerName)) {
            return layerTileData.get(layerName);
        }
        else {
            trace('$layerName layer is None');
            return "0";
        }
    }
    
    public function getObjLayer(layerName:String):Array<TmxObjGroup> {
        if (objectLayer.exists(layerName)) {
            return objectLayer.get(layerName);
        }
        else {
            return null;
        }
    }
    
}