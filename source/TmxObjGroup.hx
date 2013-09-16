package ;

/**
 * ...
 * @author mieki256
 */
class TmxObjGroup{
    public var name:String;
    public var gid:Int;
    public var x:Int;
    public var y:Int;
        
    public function new(oname:String, ogid:Int, ox:Int, oy:Int) {
        name = oname;
        gid = ogid;
        x = ox;
        y = oy;
    }
}