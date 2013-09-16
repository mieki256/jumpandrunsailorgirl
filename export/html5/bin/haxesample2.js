(function () { "use strict";
var $hxClasses = {},$estr = function() { return js.Boot.__string_rec(this,''); };
function $extend(from, fields) {
	function inherit() {}; inherit.prototype = from; var proto = new inherit();
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var ApplicationMain = function() { }
$hxClasses["ApplicationMain"] = ApplicationMain;
ApplicationMain.__name__ = ["ApplicationMain"];
ApplicationMain.main = function() {
	ApplicationMain.completed = 0;
	ApplicationMain.loaders = new haxe.ds.StringMap();
	ApplicationMain.urlLoaders = new haxe.ds.StringMap();
	ApplicationMain.total = 0;
	flash.Lib.get_current().loaderInfo = flash.display.LoaderInfo.create(null);
	try {
		if(Reflect.hasField(js.Browser.window,"winParameters")) flash.Lib.get_current().loaderInfo.parameters = (Reflect.field(js.Browser.window,"winParameters"))();
		flash.Lib.get_current().get_stage().loaderInfo = flash.Lib.get_current().loaderInfo;
	} catch( e ) {
	}
	ApplicationMain.preloader = new NMEPreloader();
	flash.Lib.get_current().addChild(ApplicationMain.preloader);
	ApplicationMain.preloader.onInit();
	var loader = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/data/apple.png",loader);
	ApplicationMain.total++;
	var loader1 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/data/autotiles.png",loader1);
	ApplicationMain.total++;
	var loader2 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/data/autotiles_alt.png",loader2);
	ApplicationMain.total++;
	var loader3 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/data/base.png",loader3);
	ApplicationMain.total++;
	var loader4 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/data/button.png",loader4);
	ApplicationMain.total++;
	var loader5 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/data/button_a.png",loader5);
	ApplicationMain.total++;
	var loader6 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/data/button_b.png",loader6);
	ApplicationMain.total++;
	var loader7 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/data/button_c.png",loader7);
	ApplicationMain.total++;
	var loader8 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/data/button_down.png",loader8);
	ApplicationMain.total++;
	var loader9 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/data/button_left.png",loader9);
	ApplicationMain.total++;
	var loader10 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/data/button_right.png",loader10);
	ApplicationMain.total++;
	var loader11 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/data/button_up.png",loader11);
	ApplicationMain.total++;
	var loader12 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/data/button_x.png",loader12);
	ApplicationMain.total++;
	var loader13 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/data/button_y.png",loader13);
	ApplicationMain.total++;
	var loader14 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/data/cursor.png",loader14);
	ApplicationMain.total++;
	var loader15 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/data/default.png",loader15);
	ApplicationMain.total++;
	var loader16 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/data/fontData10pt.png",loader16);
	ApplicationMain.total++;
	var loader17 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/data/fontData11pt.png",loader17);
	ApplicationMain.total++;
	var loader18 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/data/handle.png",loader18);
	ApplicationMain.total++;
	var loader19 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/data/logo.png",loader19);
	ApplicationMain.total++;
	var loader20 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/data/logo_corners.png",loader20);
	ApplicationMain.total++;
	var loader21 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/data/logo_light.png",loader21);
	ApplicationMain.total++;
	var urlLoader = new flash.net.URLLoader();
	urlLoader.set_dataFormat(flash.net.URLLoaderDataFormat.BINARY);
	ApplicationMain.urlLoaders.set("assets/data/Play-font-OFL.txt",urlLoader);
	ApplicationMain.total++;
	var loader22 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/data/stick.png",loader22);
	ApplicationMain.total++;
	var loader23 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/data/vcr/flixel.png",loader23);
	ApplicationMain.total++;
	var loader24 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/data/vcr/open.png",loader24);
	ApplicationMain.total++;
	var loader25 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/data/vcr/pause.png",loader25);
	ApplicationMain.total++;
	var loader26 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/data/vcr/play.png",loader26);
	ApplicationMain.total++;
	var loader27 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/data/vcr/record_off.png",loader27);
	ApplicationMain.total++;
	var loader28 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/data/vcr/record_on.png",loader28);
	ApplicationMain.total++;
	var loader29 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/data/vcr/restart.png",loader29);
	ApplicationMain.total++;
	var loader30 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/data/vcr/step.png",loader30);
	ApplicationMain.total++;
	var loader31 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/data/vcr/stop.png",loader31);
	ApplicationMain.total++;
	var loader32 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/data/vis/bounds.png",loader32);
	ApplicationMain.total++;
	var loader33 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/images/banana.png",loader33);
	ApplicationMain.total++;
	var loader34 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/images/bg_extra.png",loader34);
	ApplicationMain.total++;
	var loader35 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/images/itsanewrecord.png",loader35);
	ApplicationMain.total++;
	var loader36 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/images/mulevel1_door.png",loader36);
	ApplicationMain.total++;
	var loader37 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/images/part_star.png",loader37);
	ApplicationMain.total++;
	var loader38 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/images/player.png",loader38);
	ApplicationMain.total++;
	var loader39 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/images/present1.png",loader39);
	ApplicationMain.total++;
	var loader40 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/images/present2.png",loader40);
	ApplicationMain.total++;
	var loader41 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/images/present3.png",loader41);
	ApplicationMain.total++;
	var loader42 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/images/pressz.png",loader42);
	ApplicationMain.total++;
	var loader43 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/images/press_z_to_start.png",loader43);
	ApplicationMain.total++;
	var loader44 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/images/ruby2.png",loader44);
	ApplicationMain.total++;
	var loader45 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/images/rubyicon.png",loader45);
	ApplicationMain.total++;
	var loader46 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/images/stageclear.png",loader46);
	ApplicationMain.total++;
	var loader47 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/images/thankyouforplaying.png",loader47);
	ApplicationMain.total++;
	var loader48 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/images/title_image.png",loader48);
	ApplicationMain.total++;
	var urlLoader1 = new flash.net.URLLoader();
	urlLoader1.set_dataFormat(flash.net.URLLoaderDataFormat.BINARY);
	ApplicationMain.urlLoaders.set("assets/maps/mylevel1.json.txt",urlLoader1);
	ApplicationMain.total++;
	var urlLoader2 = new flash.net.URLLoader();
	urlLoader2.set_dataFormat(flash.net.URLLoaderDataFormat.BINARY);
	ApplicationMain.urlLoaders.set("assets/maps/mylevel1.tmx",urlLoader2);
	ApplicationMain.total++;
	var urlLoader3 = new flash.net.URLLoader();
	urlLoader3.set_dataFormat(flash.net.URLLoaderDataFormat.BINARY);
	ApplicationMain.urlLoaders.set("assets/maps/mylevel1_b.json.txt",urlLoader3);
	ApplicationMain.total++;
	var urlLoader4 = new flash.net.URLLoader();
	urlLoader4.set_dataFormat(flash.net.URLLoaderDataFormat.BINARY);
	ApplicationMain.urlLoaders.set("assets/maps/mylevel1_b.tmx",urlLoader4);
	ApplicationMain.total++;
	var loader49 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/maps/mylevel1_b_tiles.png",loader49);
	ApplicationMain.total++;
	var loader50 = new flash.display.Loader();
	ApplicationMain.loaders.set("assets/maps/mylevel1_tiles.png",loader50);
	ApplicationMain.total++;
	var resourcePrefix = "NME_:bitmap_";
	var _g = 0, _g1 = haxe.Resource.listNames();
	while(_g < _g1.length) {
		var resourceName = _g1[_g];
		++_g;
		if(StringTools.startsWith(resourceName,resourcePrefix)) {
			var type = Type.resolveClass(StringTools.replace(resourceName.substring(resourcePrefix.length),"_","."));
			if(type != null) {
				ApplicationMain.total++;
				var instance = Type.createInstance(type,[0,0,true,16777215,ApplicationMain.bitmapClass_onComplete]);
			}
		}
	}
	if(ApplicationMain.total == 0) ApplicationMain.begin(); else {
		var $it0 = ApplicationMain.loaders.keys();
		while( $it0.hasNext() ) {
			var path = $it0.next();
			var loader51 = ApplicationMain.loaders.get(path);
			loader51.contentLoaderInfo.addEventListener("complete",ApplicationMain.loader_onComplete);
			loader51.load(new flash.net.URLRequest(path));
		}
		var $it1 = ApplicationMain.urlLoaders.keys();
		while( $it1.hasNext() ) {
			var path = $it1.next();
			var urlLoader5 = ApplicationMain.urlLoaders.get(path);
			urlLoader5.addEventListener("complete",ApplicationMain.loader_onComplete);
			urlLoader5.load(new flash.net.URLRequest(path));
		}
	}
}
ApplicationMain.begin = function() {
	ApplicationMain.preloader.addEventListener(flash.events.Event.COMPLETE,ApplicationMain.preloader_onComplete);
	ApplicationMain.preloader.onLoaded();
}
ApplicationMain.bitmapClass_onComplete = function(instance) {
	ApplicationMain.completed++;
	var classType = Type.getClass(instance);
	classType.preload = instance;
	if(ApplicationMain.completed == ApplicationMain.total) ApplicationMain.begin();
}
ApplicationMain.loader_onComplete = function(event) {
	ApplicationMain.completed++;
	ApplicationMain.preloader.onUpdate(ApplicationMain.completed,ApplicationMain.total);
	if(ApplicationMain.completed == ApplicationMain.total) ApplicationMain.begin();
}
ApplicationMain.preloader_onComplete = function(event) {
	ApplicationMain.preloader.removeEventListener(flash.events.Event.COMPLETE,ApplicationMain.preloader_onComplete);
	flash.Lib.get_current().removeChild(ApplicationMain.preloader);
	ApplicationMain.preloader = null;
	if(Reflect.field(Main,"main") == null) {
		var mainDisplayObj = Type.createInstance(DocumentClass,[]);
		if(js.Boot.__instanceof(mainDisplayObj,flash.display.DisplayObject)) flash.Lib.get_current().addChild(mainDisplayObj);
	} else Reflect.field(Main,"main").apply(Main,[]);
}
var flash = {}
flash.events = {}
flash.events.IEventDispatcher = function() { }
$hxClasses["flash.events.IEventDispatcher"] = flash.events.IEventDispatcher;
flash.events.IEventDispatcher.__name__ = ["flash","events","IEventDispatcher"];
flash.events.IEventDispatcher.prototype = {
	__class__: flash.events.IEventDispatcher
}
flash.events.EventDispatcher = function(target) {
	if(target != null) this.nmeTarget = target; else this.nmeTarget = this;
	this.nmeEventMap = [];
};
$hxClasses["flash.events.EventDispatcher"] = flash.events.EventDispatcher;
flash.events.EventDispatcher.__name__ = ["flash","events","EventDispatcher"];
flash.events.EventDispatcher.__interfaces__ = [flash.events.IEventDispatcher];
flash.events.EventDispatcher.compareListeners = function(l1,l2) {
	return l1.mPriority == l2.mPriority?0:l1.mPriority > l2.mPriority?-1:1;
}
flash.events.EventDispatcher.prototype = {
	willTrigger: function(type) {
		return this.hasEventListener(type);
	}
	,toString: function() {
		return "[ " + this.__name__ + " ]";
	}
	,setList: function(type,list) {
		this.nmeEventMap[type] = list;
	}
	,removeEventListener: function(type,listener,inCapture) {
		if(inCapture == null) inCapture = false;
		if(!this.existList(type)) return;
		var list = this.getList(type);
		var capture = inCapture == null?false:inCapture;
		var _g1 = 0, _g = list.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(list[i].Is(listener,capture)) {
				list.splice(i,1);
				return;
			}
		}
	}
	,hasEventListener: function(type) {
		return this.existList(type);
	}
	,getList: function(type) {
		return this.nmeEventMap[type];
	}
	,existList: function(type) {
		return this.nmeEventMap != null && this.nmeEventMap[type] != undefined;
	}
	,dispatchEvent: function(event) {
		if(event.target == null) event.target = this.nmeTarget;
		var capture = event.eventPhase == flash.events.EventPhase.CAPTURING_PHASE;
		if(this.existList(event.type)) {
			var list = this.getList(event.type);
			var idx = 0;
			while(idx < list.length) {
				var listener = list[idx];
				if(listener.mUseCapture == capture) {
					listener.dispatchEvent(event);
					if(event.nmeGetIsCancelledNow()) return true;
				}
				if(idx < list.length && listener != list[idx]) {
				} else idx++;
			}
			return true;
		}
		return false;
	}
	,addEventListener: function(type,inListener,useCapture,inPriority,useWeakReference) {
		if(useWeakReference == null) useWeakReference = false;
		if(inPriority == null) inPriority = 0;
		if(useCapture == null) useCapture = false;
		var capture = useCapture == null?false:useCapture;
		var priority = inPriority == null?0:inPriority;
		var list = this.getList(type);
		if(!this.existList(type)) {
			list = [];
			this.setList(type,list);
		}
		list.push(new flash.events.Listener(inListener,capture,priority));
		list.sort(flash.events.EventDispatcher.compareListeners);
	}
	,__class__: flash.events.EventDispatcher
}
flash.display = {}
flash.display.IBitmapDrawable = function() { }
$hxClasses["flash.display.IBitmapDrawable"] = flash.display.IBitmapDrawable;
flash.display.IBitmapDrawable.__name__ = ["flash","display","IBitmapDrawable"];
flash.display.IBitmapDrawable.prototype = {
	__class__: flash.display.IBitmapDrawable
}
flash.display.DisplayObject = function() {
	flash.events.EventDispatcher.call(this,null);
	this._nmeId = flash.utils.Uuid.uuid();
	this.set_parent(null);
	this.set_transform(new flash.geom.Transform(this));
	this.nmeX = 0.0;
	this.nmeY = 0.0;
	this.nmeScaleX = 1.0;
	this.nmeScaleY = 1.0;
	this.nmeRotation = 0.0;
	this.nmeWidth = 0.0;
	this.nmeHeight = 0.0;
	this.set_visible(true);
	this.alpha = 1.0;
	this.nmeFilters = new Array();
	this.nmeBoundsRect = new flash.geom.Rectangle();
	this.nmeScrollRect = null;
	this.nmeMask = null;
	this.nmeMaskingObj = null;
	this.set_nmeCombinedVisible(this.get_visible());
};
$hxClasses["flash.display.DisplayObject"] = flash.display.DisplayObject;
flash.display.DisplayObject.__name__ = ["flash","display","DisplayObject"];
flash.display.DisplayObject.__interfaces__ = [flash.display.IBitmapDrawable];
flash.display.DisplayObject.__super__ = flash.events.EventDispatcher;
flash.display.DisplayObject.prototype = $extend(flash.events.EventDispatcher.prototype,{
	nmeSrUpdateDivs: function() {
		var gfx = this.nmeGetGraphics();
		if(gfx == null || this.parent == null) return;
		if(this.nmeScrollRect == null) {
			if(this._srAxes != null && gfx.nmeSurface.parentNode == this._srAxes && this._srWindow.parentNode != null) this._srWindow.parentNode.replaceChild(gfx.nmeSurface,this._srWindow);
			return;
		}
		if(this._srWindow == null) {
			this._srWindow = js.Browser.document.createElement("div");
			this._srAxes = js.Browser.document.createElement("div");
			this._srWindow.style.setProperty("position","absolute","");
			this._srWindow.style.setProperty("left","0px","");
			this._srWindow.style.setProperty("top","0px","");
			this._srWindow.style.setProperty("width","0px","");
			this._srWindow.style.setProperty("height","0px","");
			this._srWindow.style.setProperty("overflow","hidden","");
			this._srAxes.style.setProperty("position","absolute","");
			this._srAxes.style.setProperty("left","0px","");
			this._srAxes.style.setProperty("top","0px","");
			this._srWindow.appendChild(this._srAxes);
		}
		var pnt = this.parent.localToGlobal(new flash.geom.Point(this.get_x(),this.get_y()));
		this._srWindow.style.left = pnt.x + "px";
		this._srWindow.style.top = pnt.y + "px";
		this._srWindow.style.width = this.nmeScrollRect.width + "px";
		this._srWindow.style.height = this.nmeScrollRect.height + "px";
		this._srAxes.style.left = -pnt.x - this.nmeScrollRect.x + "px";
		this._srAxes.style.top = -pnt.y - this.nmeScrollRect.y + "px";
		if(gfx.nmeSurface.parentNode != this._srAxes && gfx.nmeSurface.parentNode != null) {
			gfx.nmeSurface.parentNode.insertBefore(this._srWindow,gfx.nmeSurface);
			flash.Lib.nmeRemoveSurface(gfx.nmeSurface);
			this._srAxes.appendChild(gfx.nmeSurface);
		}
	}
	,nmeGetSrWindow: function() {
		return this._srWindow;
	}
	,set_width: function(inValue) {
		if(this.get__boundsInvalid()) this.validateBounds();
		var w = this.nmeBoundsRect.width;
		if(this.nmeScaleX * w != inValue) {
			if(w == 0) {
				this.nmeScaleX = 1;
				this.nmeInvalidateMatrix(true);
				this._nmeRenderFlags |= 64;
				if(this.parent != null) this.parent._nmeRenderFlags |= 64;
				w = this.nmeBoundsRect.width;
			}
			if(w <= 0) return 0;
			this.nmeScaleX = inValue / w;
			this.nmeInvalidateMatrix(true);
			this._nmeRenderFlags |= 64;
			if(this.parent != null) this.parent._nmeRenderFlags |= 64;
		}
		return inValue;
	}
	,get_width: function() {
		if(this.get__boundsInvalid()) this.validateBounds();
		return this.nmeWidth;
	}
	,set_y: function(inValue) {
		if(this.nmeY != inValue) {
			this.nmeY = inValue;
			this.nmeInvalidateMatrix(true);
			if(this.parent != null) this.parent.nmeInvalidateBounds();
		}
		return inValue;
	}
	,get_y: function() {
		return this.nmeY;
	}
	,set_x: function(inValue) {
		if(this.nmeX != inValue) {
			this.nmeX = inValue;
			this.nmeInvalidateMatrix(true);
			if(this.parent != null) this.parent.nmeInvalidateBounds();
		}
		return inValue;
	}
	,get_x: function() {
		return this.nmeX;
	}
	,set_visible: function(inValue) {
		if(this.nmeVisible != inValue) {
			this.nmeVisible = inValue;
			this.setSurfaceVisible(inValue);
		}
		return this.nmeVisible;
	}
	,get_visible: function() {
		return this.nmeVisible;
	}
	,set_transform: function(inValue) {
		this.transform = inValue;
		this.nmeX = this.transform.get_matrix().tx;
		this.nmeY = this.transform.get_matrix().ty;
		this.nmeInvalidateMatrix(true);
		return inValue;
	}
	,get__topmostSurface: function() {
		var gfx = this.nmeGetGraphics();
		if(gfx != null) return gfx.nmeSurface;
		return null;
	}
	,get_stage: function() {
		var gfx = this.nmeGetGraphics();
		if(gfx != null) return flash.Lib.nmeGetStage();
		return null;
	}
	,set_scrollRect: function(inValue) {
		this.nmeScrollRect = inValue;
		this.nmeSrUpdateDivs();
		return inValue;
	}
	,get_scrollRect: function() {
		if(this.nmeScrollRect == null) return null;
		return this.nmeScrollRect.clone();
	}
	,set_scaleY: function(inValue) {
		if(this.nmeScaleY != inValue) {
			this.nmeScaleY = inValue;
			this.nmeInvalidateMatrix(true);
			this._nmeRenderFlags |= 64;
			if(this.parent != null) this.parent._nmeRenderFlags |= 64;
		}
		return inValue;
	}
	,get_scaleY: function() {
		return this.nmeScaleY;
	}
	,set_scaleX: function(inValue) {
		if(this.nmeScaleX != inValue) {
			this.nmeScaleX = inValue;
			this.nmeInvalidateMatrix(true);
			this._nmeRenderFlags |= 64;
			if(this.parent != null) this.parent._nmeRenderFlags |= 64;
		}
		return inValue;
	}
	,get_scaleX: function() {
		return this.nmeScaleX;
	}
	,set_rotation: function(inValue) {
		if(this.nmeRotation != inValue) {
			this.nmeRotation = inValue;
			this.nmeInvalidateMatrix(true);
			this._nmeRenderFlags |= 64;
			if(this.parent != null) this.parent._nmeRenderFlags |= 64;
		}
		return inValue;
	}
	,get_rotation: function() {
		return this.nmeRotation;
	}
	,set_parent: function(inValue) {
		if(inValue == this.parent) return inValue;
		this.nmeInvalidateMatrix();
		if(this.parent != null) {
			HxOverrides.remove(this.parent.nmeChildren,this);
			this.parent.nmeInvalidateBounds();
		}
		if(inValue != null) {
			inValue._nmeRenderFlags |= 64;
			if(inValue.parent != null) inValue.parent._nmeRenderFlags |= 64;
		}
		if(this.parent == null && inValue != null) {
			this.parent = inValue;
			var evt = new flash.events.Event(flash.events.Event.ADDED,true,false);
			this.dispatchEvent(evt);
		} else if(this.parent != null && inValue == null) {
			this.parent = inValue;
			var evt = new flash.events.Event(flash.events.Event.REMOVED,true,false);
			this.dispatchEvent(evt);
		} else this.parent = inValue;
		return inValue;
	}
	,set_nmeCombinedVisible: function(inValue) {
		if(this.nmeCombinedVisible != inValue) {
			this.nmeCombinedVisible = inValue;
			this.setSurfaceVisible(inValue);
		}
		return this.nmeCombinedVisible;
	}
	,get_mouseY: function() {
		return this.globalToLocal(new flash.geom.Point(0,this.get_stage().get_mouseY())).y;
	}
	,get_mouseX: function() {
		return this.globalToLocal(new flash.geom.Point(this.get_stage().get_mouseX(),0)).x;
	}
	,get__matrixInvalid: function() {
		return (this._nmeRenderFlags & 4) != 0;
	}
	,get__matrixChainInvalid: function() {
		return (this._nmeRenderFlags & 8) != 0;
	}
	,set_mask: function(inValue) {
		if(this.nmeMask != null) this.nmeMask.nmeMaskingObj = null;
		this.nmeMask = inValue;
		if(this.nmeMask != null) this.nmeMask.nmeMaskingObj = this;
		return this.nmeMask;
	}
	,get_mask: function() {
		return this.nmeMask;
	}
	,set_height: function(inValue) {
		if(this.get__boundsInvalid()) this.validateBounds();
		var h = this.nmeBoundsRect.height;
		if(this.nmeScaleY * h != inValue) {
			if(h == 0) {
				this.nmeScaleY = 1;
				this.nmeInvalidateMatrix(true);
				this._nmeRenderFlags |= 64;
				if(this.parent != null) this.parent._nmeRenderFlags |= 64;
				h = this.nmeBoundsRect.height;
			}
			if(h <= 0) return 0;
			this.nmeScaleY = inValue / h;
			this.nmeInvalidateMatrix(true);
			this._nmeRenderFlags |= 64;
			if(this.parent != null) this.parent._nmeRenderFlags |= 64;
		}
		return inValue;
	}
	,get_height: function() {
		if(this.get__boundsInvalid()) this.validateBounds();
		return this.nmeHeight;
	}
	,set_filters: function(filters) {
		var oldFilterCount = this.nmeFilters == null?0:this.nmeFilters.length;
		if(filters == null) {
			this.nmeFilters = null;
			if(oldFilterCount > 0) this.invalidateGraphics();
		} else {
			this.nmeFilters = new Array();
			var _g = 0;
			while(_g < filters.length) {
				var filter = filters[_g];
				++_g;
				this.nmeFilters.push(filter.clone());
			}
			this.invalidateGraphics();
		}
		return filters;
	}
	,get__boundsInvalid: function() {
		var gfx = this.nmeGetGraphics();
		if(gfx == null) return (this._nmeRenderFlags & 64) != 0; else return (this._nmeRenderFlags & 64) != 0 || gfx.boundsDirty;
	}
	,get_filters: function() {
		if(this.nmeFilters == null) return [];
		var result = new Array();
		var _g = 0, _g1 = this.nmeFilters;
		while(_g < _g1.length) {
			var filter = _g1[_g];
			++_g;
			result.push(filter.clone());
		}
		return result;
	}
	,get__bottommostSurface: function() {
		var gfx = this.nmeGetGraphics();
		if(gfx != null) return gfx.nmeSurface;
		return null;
	}
	,__contains: function(child) {
		return false;
	}
	,validateBounds: function() {
		if(this.get__boundsInvalid()) {
			var gfx = this.nmeGetGraphics();
			if(gfx == null) {
				this.nmeBoundsRect.x = this.get_x();
				this.nmeBoundsRect.y = this.get_y();
				this.nmeBoundsRect.width = 0;
				this.nmeBoundsRect.height = 0;
			} else {
				this.nmeBoundsRect = gfx.nmeExtent.clone();
				if(this.scale9Grid != null) {
					this.nmeBoundsRect.width *= this.nmeScaleX;
					this.nmeBoundsRect.height *= this.nmeScaleY;
					this.nmeWidth = this.nmeBoundsRect.width;
					this.nmeHeight = this.nmeBoundsRect.height;
				} else {
					this.nmeWidth = this.nmeBoundsRect.width * this.nmeScaleX;
					this.nmeHeight = this.nmeBoundsRect.height * this.nmeScaleY;
				}
				gfx.boundsDirty = false;
			}
			this._nmeRenderFlags &= -65;
		}
	}
	,toString: function() {
		return "[DisplayObject name=" + this.name + " id=" + this._nmeId + "]";
	}
	,setSurfaceVisible: function(inValue) {
		var gfx = this.nmeGetGraphics();
		if(gfx != null && gfx.nmeSurface != null) flash.Lib.nmeSetSurfaceVisible(gfx.nmeSurface,inValue);
	}
	,nmeValidateMatrix: function() {
		var parentMatrixInvalid = (this._nmeRenderFlags & 8) != 0 && this.parent != null;
		if((this._nmeRenderFlags & 4) != 0 || parentMatrixInvalid) {
			if(parentMatrixInvalid) this.parent.nmeValidateMatrix();
			var m = this.transform.get_matrix();
			if((this._nmeRenderFlags & 16) != 0) this._nmeRenderFlags &= -5;
			if((this._nmeRenderFlags & 4) != 0) {
				m.identity();
				m.scale(this.nmeScaleX,this.nmeScaleY);
				var rad = this.nmeRotation * flash.geom.Transform.DEG_TO_RAD;
				if(rad != 0.0) m.rotate(rad);
				m.translate(this.nmeX,this.nmeY);
				this.transform._matrix.copy(m);
				m;
			}
			var cm = this.transform.nmeGetFullMatrix(null);
			var fm = this.parent == null?m:this.parent.transform.nmeGetFullMatrix(m);
			this._fullScaleX = fm._sx;
			this._fullScaleY = fm._sy;
			if(cm.a != fm.a || cm.b != fm.b || cm.c != fm.c || cm.d != fm.d || cm.tx != fm.tx || cm.ty != fm.ty) {
				this.transform.nmeSetFullMatrix(fm);
				this._nmeRenderFlags |= 32;
			}
			this._nmeRenderFlags &= -29;
		}
	}
	,nmeUnifyChildrenWithDOM: function(lastMoveObj) {
		var gfx = this.nmeGetGraphics();
		if(gfx != null && lastMoveObj != null && this != lastMoveObj) {
			var ogfx = lastMoveObj.nmeGetGraphics();
			if(ogfx != null) flash.Lib.nmeSetSurfaceZIndexAfter(this.nmeScrollRect == null?gfx.nmeSurface:this._srWindow,lastMoveObj.nmeScrollRect == null?ogfx.nmeSurface:lastMoveObj == this.parent?ogfx.nmeSurface:lastMoveObj._srWindow);
		}
		if(gfx == null) return lastMoveObj; else return this;
	}
	,nmeTestFlag: function(mask) {
		return (this._nmeRenderFlags & mask) != 0;
	}
	,nmeSetMatrix: function(inValue) {
		this.transform._matrix.copy(inValue);
		return inValue;
	}
	,nmeSetFullMatrix: function(inValue) {
		return this.transform.nmeSetFullMatrix(inValue);
	}
	,nmeSetFlagToValue: function(mask,value) {
		if(value) this._nmeRenderFlags |= mask; else this._nmeRenderFlags &= ~mask;
	}
	,nmeSetFlag: function(mask) {
		this._nmeRenderFlags |= mask;
	}
	,nmeSetDimensions: function() {
		if(this.scale9Grid != null) {
			this.nmeBoundsRect.width *= this.nmeScaleX;
			this.nmeBoundsRect.height *= this.nmeScaleY;
			this.nmeWidth = this.nmeBoundsRect.width;
			this.nmeHeight = this.nmeBoundsRect.height;
		} else {
			this.nmeWidth = this.nmeBoundsRect.width * this.nmeScaleX;
			this.nmeHeight = this.nmeBoundsRect.height * this.nmeScaleY;
		}
	}
	,nmeRender: function(inMask,clipRect) {
		if(!this.nmeCombinedVisible) return;
		var gfx = this.nmeGetGraphics();
		if(gfx == null) return;
		if((this._nmeRenderFlags & 4) != 0 || (this._nmeRenderFlags & 8) != 0) this.nmeValidateMatrix();
		if(gfx.nmeRender(inMask,this.nmeFilters,1,1)) {
			this._nmeRenderFlags |= 64;
			if(this.parent != null) this.parent._nmeRenderFlags |= 64;
			this.nmeApplyFilters(gfx.nmeSurface);
			this._nmeRenderFlags |= 32;
		}
		var fullAlpha = (this.parent != null?this.parent.nmeCombinedAlpha:1) * this.alpha;
		if(inMask != null) {
			var m = this.getSurfaceTransform(gfx);
			flash.Lib.nmeDrawToSurface(gfx.nmeSurface,inMask,m,fullAlpha,clipRect);
		} else {
			if((this._nmeRenderFlags & 32) != 0) {
				var m = this.getSurfaceTransform(gfx);
				flash.Lib.nmeSetSurfaceTransform(gfx.nmeSurface,m);
				this._nmeRenderFlags &= -33;
				this.nmeSrUpdateDivs();
			}
			flash.Lib.nmeSetSurfaceOpacity(gfx.nmeSurface,fullAlpha);
		}
	}
	,nmeRemoveFromStage: function() {
		var gfx = this.nmeGetGraphics();
		if(gfx != null && flash.Lib.nmeIsOnStage(gfx.nmeSurface)) {
			flash.Lib.nmeRemoveSurface(gfx.nmeSurface);
			var evt = new flash.events.Event(flash.events.Event.REMOVED_FROM_STAGE,false,false);
			this.dispatchEvent(evt);
		}
	}
	,nmeMatrixOverridden: function() {
		this.nmeX = this.transform.get_matrix().tx;
		this.nmeY = this.transform.get_matrix().ty;
		this._nmeRenderFlags |= 16;
		this._nmeRenderFlags |= 4;
		this._nmeRenderFlags |= 64;
		if(this.parent != null) this.parent._nmeRenderFlags |= 64;
	}
	,nmeIsOnStage: function() {
		var gfx = this.nmeGetGraphics();
		if(gfx != null && flash.Lib.nmeIsOnStage(gfx.nmeSurface)) return true;
		return false;
	}
	,nmeInvalidateMatrix: function(local) {
		if(local == null) local = false;
		if(local) this._nmeRenderFlags |= 4; else this._nmeRenderFlags |= 8;
	}
	,nmeInvalidateBounds: function() {
		this._nmeRenderFlags |= 64;
		if(this.parent != null) this.parent._nmeRenderFlags |= 64;
	}
	,nmeGetSurface: function() {
		var gfx = this.nmeGetGraphics();
		var surface = null;
		if(gfx != null) surface = gfx.nmeSurface;
		return surface;
	}
	,nmeGetObjectUnderPoint: function(point) {
		if(!this.get_visible()) return null;
		var gfx = this.nmeGetGraphics();
		if(gfx != null) {
			gfx.nmeRender();
			var extX = gfx.nmeExtent.x;
			var extY = gfx.nmeExtent.y;
			var local = this.globalToLocal(point);
			if(local.x - extX <= 0 || local.y - extY <= 0 || (local.x - extX) * this.get_scaleX() > this.get_width() || (local.y - extY) * this.get_scaleY() > this.get_height()) return null;
			if(gfx.nmeHitTest(local.x,local.y)) return this;
		}
		return null;
	}
	,nmeGetMatrix: function() {
		return this.transform.get_matrix();
	}
	,nmeGetInteractiveObjectStack: function(outStack) {
		var io = this;
		if(io != null) outStack.push(io);
		if(this.parent != null) this.parent.nmeGetInteractiveObjectStack(outStack);
	}
	,nmeGetGraphics: function() {
		return null;
	}
	,nmeGetFullMatrix: function(localMatrix) {
		return this.transform.nmeGetFullMatrix(localMatrix);
	}
	,nmeFireEvent: function(event) {
		var stack = [];
		if(this.parent != null) this.parent.nmeGetInteractiveObjectStack(stack);
		var l = stack.length;
		if(l > 0) {
			event.nmeSetPhase(flash.events.EventPhase.CAPTURING_PHASE);
			stack.reverse();
			var _g = 0;
			while(_g < stack.length) {
				var obj = stack[_g];
				++_g;
				event.currentTarget = obj;
				obj.nmeDispatchEvent(event);
				if(event.nmeGetIsCancelled()) return;
			}
		}
		event.nmeSetPhase(flash.events.EventPhase.AT_TARGET);
		event.currentTarget = this;
		this.nmeDispatchEvent(event);
		if(event.nmeGetIsCancelled()) return;
		if(event.bubbles) {
			event.nmeSetPhase(flash.events.EventPhase.BUBBLING_PHASE);
			stack.reverse();
			var _g = 0;
			while(_g < stack.length) {
				var obj = stack[_g];
				++_g;
				event.currentTarget = obj;
				obj.nmeDispatchEvent(event);
				if(event.nmeGetIsCancelled()) return;
			}
		}
	}
	,nmeDispatchEvent: function(event) {
		if(event.target == null) event.target = this;
		event.currentTarget = this;
		return flash.events.EventDispatcher.prototype.dispatchEvent.call(this,event);
	}
	,nmeClearFlag: function(mask) {
		this._nmeRenderFlags &= ~mask;
	}
	,nmeBroadcast: function(event) {
		this.nmeDispatchEvent(event);
	}
	,nmeApplyFilters: function(surface) {
		if(this.nmeFilters != null) {
			var _g = 0, _g1 = this.nmeFilters;
			while(_g < _g1.length) {
				var filter = _g1[_g];
				++_g;
				filter.nmeApplyFilter(surface);
			}
		}
	}
	,nmeAddToStage: function(newParent,beforeSibling) {
		var gfx = this.nmeGetGraphics();
		if(gfx == null) return;
		if(newParent.nmeGetGraphics() != null) {
			flash.Lib.nmeSetSurfaceId(gfx.nmeSurface,this._nmeId);
			if(beforeSibling != null && beforeSibling.nmeGetGraphics() != null) flash.Lib.nmeAppendSurface(gfx.nmeSurface,beforeSibling.get__bottommostSurface()); else {
				var stageChildren = [];
				var _g = 0, _g1 = newParent.nmeChildren;
				while(_g < _g1.length) {
					var child = _g1[_g];
					++_g;
					if(child.get_stage() != null) stageChildren.push(child);
				}
				if(stageChildren.length < 1) flash.Lib.nmeAppendSurface(gfx.nmeSurface,null,newParent.get__topmostSurface()); else {
					var nextSibling = stageChildren[stageChildren.length - 1];
					var container;
					while(js.Boot.__instanceof(nextSibling,flash.display.DisplayObjectContainer)) {
						container = js.Boot.__cast(nextSibling , flash.display.DisplayObjectContainer);
						if(container.nmeChildren.length > 0) nextSibling = container.nmeChildren[container.nmeChildren.length - 1]; else break;
					}
					if(nextSibling.nmeGetGraphics() != gfx) flash.Lib.nmeAppendSurface(gfx.nmeSurface,null,nextSibling.get__topmostSurface()); else flash.Lib.nmeAppendSurface(gfx.nmeSurface);
				}
			}
			flash.Lib.nmeSetSurfaceTransform(gfx.nmeSurface,this.getSurfaceTransform(gfx));
		} else if(newParent.name == "Stage") flash.Lib.nmeAppendSurface(gfx.nmeSurface);
		if(this.nmeIsOnStage()) {
			this.nmeSrUpdateDivs();
			var evt = new flash.events.Event(flash.events.Event.ADDED_TO_STAGE,false,false);
			this.dispatchEvent(evt);
		}
	}
	,localToGlobal: function(point) {
		if((this._nmeRenderFlags & 4) != 0 || (this._nmeRenderFlags & 8) != 0) this.nmeValidateMatrix();
		return this.transform.nmeGetFullMatrix(null).transformPoint(point);
	}
	,invalidateGraphics: function() {
		var gfx = this.nmeGetGraphics();
		if(gfx != null) {
			gfx.nmeChanged = true;
			gfx.nmeClearNextCycle = true;
		}
	}
	,hitTestPoint: function(x,y,shapeFlag) {
		if(shapeFlag == null) shapeFlag = false;
		var boundingBox = shapeFlag == null?true:!shapeFlag;
		if(!boundingBox) return this.nmeGetObjectUnderPoint(new flash.geom.Point(x,y)) != null; else {
			var gfx = this.nmeGetGraphics();
			if(gfx != null) {
				var extX = gfx.nmeExtent.x;
				var extY = gfx.nmeExtent.y;
				var local = this.globalToLocal(new flash.geom.Point(x,y));
				if(local.x - extX < 0 || local.y - extY < 0 || (local.x - extX) * this.get_scaleX() > this.get_width() || (local.y - extY) * this.get_scaleY() > this.get_height()) return false; else return true;
			}
			return false;
		}
	}
	,hitTestObject: function(obj) {
		if(obj != null && obj.parent != null && this.parent != null) {
			var currentBounds = this.getBounds(this);
			var targetBounds = obj.getBounds(this);
			return currentBounds.intersects(targetBounds);
		}
		return false;
	}
	,handleGraphicsUpdated: function(gfx) {
		this._nmeRenderFlags |= 64;
		if(this.parent != null) this.parent._nmeRenderFlags |= 64;
		this.nmeApplyFilters(gfx.nmeSurface);
		this._nmeRenderFlags |= 32;
	}
	,globalToLocal: function(inPos) {
		if((this._nmeRenderFlags & 4) != 0 || (this._nmeRenderFlags & 8) != 0) this.nmeValidateMatrix();
		return this.transform.nmeGetFullMatrix(null).invert().transformPoint(inPos);
	}
	,getSurfaceTransform: function(gfx) {
		var extent = gfx.nmeExtentWithFilters;
		var fm = this.transform.nmeGetFullMatrix(null);
		fm.nmeTranslateTransformed(extent.get_topLeft());
		return fm;
	}
	,getScreenBounds: function() {
		if(this.get__boundsInvalid()) this.validateBounds();
		return this.nmeBoundsRect.clone();
	}
	,getRect: function(targetCoordinateSpace) {
		return this.getBounds(targetCoordinateSpace);
	}
	,getBounds: function(targetCoordinateSpace) {
		if((this._nmeRenderFlags & 4) != 0 || (this._nmeRenderFlags & 8) != 0) this.nmeValidateMatrix();
		if(this.get__boundsInvalid()) this.validateBounds();
		var m = this.transform.nmeGetFullMatrix(null);
		if(targetCoordinateSpace != null) m.concat(targetCoordinateSpace.transform.nmeGetFullMatrix(null).invert());
		var rect = this.nmeBoundsRect.transform(m);
		return rect;
	}
	,drawToSurface: function(inSurface,matrix,inColorTransform,blendMode,clipRect,smoothing) {
		var oldAlpha = this.alpha;
		this.alpha = 1;
		this.nmeRender(inSurface,clipRect);
		this.alpha = oldAlpha;
	}
	,dispatchEvent: function(event) {
		var result = this.nmeDispatchEvent(event);
		if(event.nmeGetIsCancelled()) return true;
		if(event.bubbles && this.parent != null) this.parent.dispatchEvent(event);
		return result;
	}
	,__class__: flash.display.DisplayObject
	,__properties__: {set_filters:"set_filters",get_filters:"get_filters",set_height:"set_height",get_height:"get_height",set_mask:"set_mask",get_mask:"get_mask",get_mouseX:"get_mouseX",get_mouseY:"get_mouseY",set_nmeCombinedVisible:"set_nmeCombinedVisible",set_parent:"set_parent",set_rotation:"set_rotation",get_rotation:"get_rotation",set_scaleX:"set_scaleX",get_scaleX:"get_scaleX",set_scaleY:"set_scaleY",get_scaleY:"get_scaleY",set_scrollRect:"set_scrollRect",get_scrollRect:"get_scrollRect",get_stage:"get_stage",set_transform:"set_transform",set_visible:"set_visible",get_visible:"get_visible",set_width:"set_width",get_width:"get_width",set_x:"set_x",get_x:"get_x",set_y:"set_y",get_y:"get_y",get__bottommostSurface:"get__bottommostSurface",get__boundsInvalid:"get__boundsInvalid",get__matrixChainInvalid:"get__matrixChainInvalid",get__matrixInvalid:"get__matrixInvalid",get__topmostSurface:"get__topmostSurface"}
});
flash.display.InteractiveObject = function() {
	flash.display.DisplayObject.call(this);
	this.tabEnabled = false;
	this.mouseEnabled = true;
	this.doubleClickEnabled = true;
	this.set_tabIndex(0);
};
$hxClasses["flash.display.InteractiveObject"] = flash.display.InteractiveObject;
flash.display.InteractiveObject.__name__ = ["flash","display","InteractiveObject"];
flash.display.InteractiveObject.__super__ = flash.display.DisplayObject;
flash.display.InteractiveObject.prototype = $extend(flash.display.DisplayObject.prototype,{
	set_tabIndex: function(inIndex) {
		return this.nmeTabIndex = inIndex;
	}
	,get_tabIndex: function() {
		return this.nmeTabIndex;
	}
	,toString: function() {
		return "[InteractiveObject name=" + this.name + " id=" + this._nmeId + "]";
	}
	,nmeGetObjectUnderPoint: function(point) {
		if(!this.mouseEnabled) return null; else return flash.display.DisplayObject.prototype.nmeGetObjectUnderPoint.call(this,point);
	}
	,__class__: flash.display.InteractiveObject
	,__properties__: $extend(flash.display.DisplayObject.prototype.__properties__,{set_tabIndex:"set_tabIndex",get_tabIndex:"get_tabIndex"})
});
flash.display.DisplayObjectContainer = function() {
	this.nmeChildren = new Array();
	this.mouseChildren = true;
	this.tabChildren = true;
	flash.display.InteractiveObject.call(this);
	this.nmeCombinedAlpha = this.alpha;
};
$hxClasses["flash.display.DisplayObjectContainer"] = flash.display.DisplayObjectContainer;
flash.display.DisplayObjectContainer.__name__ = ["flash","display","DisplayObjectContainer"];
flash.display.DisplayObjectContainer.__super__ = flash.display.InteractiveObject;
flash.display.DisplayObjectContainer.prototype = $extend(flash.display.InteractiveObject.prototype,{
	set_scrollRect: function(inValue) {
		inValue = flash.display.InteractiveObject.prototype.set_scrollRect.call(this,inValue);
		this.nmeUnifyChildrenWithDOM();
		return inValue;
	}
	,set_visible: function(inVal) {
		this.set_nmeCombinedVisible(this.parent != null?this.parent.nmeCombinedVisible && inVal:inVal);
		return flash.display.InteractiveObject.prototype.set_visible.call(this,inVal);
	}
	,get_numChildren: function() {
		return this.nmeChildren.length;
	}
	,set_nmeCombinedVisible: function(inVal) {
		if(inVal != this.nmeCombinedVisible) {
			var _g = 0, _g1 = this.nmeChildren;
			while(_g < _g1.length) {
				var child = _g1[_g];
				++_g;
				child.set_nmeCombinedVisible(child.get_visible() && inVal);
			}
		}
		return flash.display.InteractiveObject.prototype.set_nmeCombinedVisible.call(this,inVal);
	}
	,set_filters: function(filters) {
		flash.display.InteractiveObject.prototype.set_filters.call(this,filters);
		var _g = 0, _g1 = this.nmeChildren;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			child.set_filters(filters);
		}
		return filters;
	}
	,__contains: function(child) {
		if(child == null) return false;
		if(this == child) return true;
		var _g = 0, _g1 = this.nmeChildren;
		while(_g < _g1.length) {
			var c = _g1[_g];
			++_g;
			if(c == child || c.__contains(child)) return true;
		}
		return false;
	}
	,validateBounds: function() {
		if(this.get__boundsInvalid()) {
			flash.display.InteractiveObject.prototype.validateBounds.call(this);
			var _g = 0, _g1 = this.nmeChildren;
			while(_g < _g1.length) {
				var obj = _g1[_g];
				++_g;
				if(obj.get_visible()) {
					var r = obj.getBounds(this);
					if(r.width != 0 || r.height != 0) {
						if(this.nmeBoundsRect.width == 0 && this.nmeBoundsRect.height == 0) this.nmeBoundsRect = r.clone(); else this.nmeBoundsRect.extendBounds(r);
					}
				}
			}
			if(this.scale9Grid != null) {
				this.nmeBoundsRect.width *= this.nmeScaleX;
				this.nmeBoundsRect.height *= this.nmeScaleY;
				this.nmeWidth = this.nmeBoundsRect.width;
				this.nmeHeight = this.nmeBoundsRect.height;
			} else {
				this.nmeWidth = this.nmeBoundsRect.width * this.nmeScaleX;
				this.nmeHeight = this.nmeBoundsRect.height * this.nmeScaleY;
			}
		}
	}
	,toString: function() {
		return "[DisplayObjectContainer name=" + this.name + " id=" + this._nmeId + "]";
	}
	,swapChildrenAt: function(child1,child2) {
		var swap = this.nmeChildren[child1];
		this.nmeChildren[child1] = this.nmeChildren[child2];
		this.nmeChildren[child2] = swap;
		swap = null;
	}
	,swapChildren: function(child1,child2) {
		var c1 = -1;
		var c2 = -1;
		var swap;
		var _g1 = 0, _g = this.nmeChildren.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(this.nmeChildren[i] == child1) c1 = i; else if(this.nmeChildren[i] == child2) c2 = i;
		}
		if(c1 != -1 && c2 != -1) {
			swap = this.nmeChildren[c1];
			this.nmeChildren[c1] = this.nmeChildren[c2];
			this.nmeChildren[c2] = swap;
			swap = null;
			this.nmeSwapSurface(c1,c2);
			child1.nmeUnifyChildrenWithDOM();
			child2.nmeUnifyChildrenWithDOM();
		}
	}
	,setChildIndex: function(child,index) {
		if(index > this.nmeChildren.length) throw "Invalid index position " + index;
		var oldIndex = this.getChildIndex(child);
		if(oldIndex < 0) {
			var msg = "setChildIndex : object " + child.name + " not found.";
			if(child.parent == this) {
				var realindex = -1;
				var _g1 = 0, _g = this.nmeChildren.length;
				while(_g1 < _g) {
					var i = _g1++;
					if(this.nmeChildren[i] == child) {
						realindex = i;
						break;
					}
				}
				if(realindex != -1) msg += "Internal error: Real child index was " + Std.string(realindex); else msg += "Internal error: Child was not in nmeChildren array!";
			}
			throw msg;
		}
		if(index < oldIndex) {
			var i = oldIndex;
			while(i > index) {
				this.swapChildren(this.nmeChildren[i],this.nmeChildren[i - 1]);
				i--;
			}
		} else if(oldIndex < index) {
			var i = oldIndex;
			while(i < index) {
				this.swapChildren(this.nmeChildren[i],this.nmeChildren[i + 1]);
				i++;
			}
		}
	}
	,removeChildAt: function(index) {
		if(index >= 0 && index < this.nmeChildren.length) return this.nmeRemoveChild(this.nmeChildren[index]);
		throw "removeChildAt(" + index + ") : none found?";
	}
	,removeChild: function(inChild) {
		var _g = 0, _g1 = this.nmeChildren;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			if(child == inChild) return (function($this) {
				var $r;
				child.nmeRemoveFromStage();
				child.set_parent(null);
				$r = child;
				return $r;
			}(this));
		}
		throw "removeChild : none found?";
	}
	,nmeUnifyChildrenWithDOM: function(lastMoveObj) {
		var obj = flash.display.InteractiveObject.prototype.nmeUnifyChildrenWithDOM.call(this,lastMoveObj);
		var _g = 0, _g1 = this.nmeChildren;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			obj = child.nmeUnifyChildrenWithDOM(obj);
			if(child.get_scrollRect() != null) obj = child;
		}
		return obj;
	}
	,nmeSwapSurface: function(c1,c2) {
		if(this.nmeChildren[c1] == null) throw "Null element at index " + c1 + " length " + this.nmeChildren.length;
		if(this.nmeChildren[c2] == null) throw "Null element at index " + c2 + " length " + this.nmeChildren.length;
		var gfx1 = this.nmeChildren[c1].nmeGetGraphics();
		var gfx2 = this.nmeChildren[c2].nmeGetGraphics();
		if(gfx1 != null && gfx2 != null) {
			var surface1 = this.nmeChildren[c1].nmeScrollRect == null?gfx1.nmeSurface:this.nmeChildren[c1].nmeGetSrWindow();
			var surface2 = this.nmeChildren[c2].nmeScrollRect == null?gfx2.nmeSurface:this.nmeChildren[c2].nmeGetSrWindow();
			if(surface1 != null && surface2 != null) flash.Lib.nmeSwapSurface(surface1,surface2);
		}
	}
	,nmeRender: function(inMask,clipRect) {
		if(!this.nmeVisible) return;
		if(clipRect == null && this.nmeScrollRect != null) clipRect = this.nmeScrollRect;
		flash.display.InteractiveObject.prototype.nmeRender.call(this,inMask,clipRect);
		this.nmeCombinedAlpha = this.parent != null?this.parent.nmeCombinedAlpha * this.alpha:this.alpha;
		var _g = 0, _g1 = this.nmeChildren;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			if(child.nmeVisible) {
				if(clipRect != null) {
					if((child._nmeRenderFlags & 4) != 0 || (child._nmeRenderFlags & 8) != 0) child.nmeValidateMatrix();
				}
				child.nmeRender(inMask,clipRect);
			}
		}
		if(this.nmeAddedChildren) {
			this.nmeUnifyChildrenWithDOM();
			this.nmeAddedChildren = false;
		}
	}
	,nmeRemoveFromStage: function() {
		flash.display.InteractiveObject.prototype.nmeRemoveFromStage.call(this);
		var _g = 0, _g1 = this.nmeChildren;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			child.nmeRemoveFromStage();
		}
	}
	,nmeRemoveChild: function(child) {
		child.nmeRemoveFromStage();
		child.set_parent(null);
		return child;
	}
	,nmeInvalidateMatrix: function(local) {
		if(local == null) local = false;
		if(!((this._nmeRenderFlags & 8) != 0) && !((this._nmeRenderFlags & 4) != 0)) {
			var _g = 0, _g1 = this.nmeChildren;
			while(_g < _g1.length) {
				var child = _g1[_g];
				++_g;
				child.nmeInvalidateMatrix();
			}
		}
		flash.display.InteractiveObject.prototype.nmeInvalidateMatrix.call(this,local);
	}
	,nmeGetObjectsUnderPoint: function(point,stack) {
		var l = this.nmeChildren.length - 1;
		var _g1 = 0, _g = this.nmeChildren.length;
		while(_g1 < _g) {
			var i = _g1++;
			var result = this.nmeChildren[l - i].nmeGetObjectUnderPoint(point);
			if(result != null) stack.push(result);
		}
	}
	,nmeGetObjectUnderPoint: function(point) {
		if(!this.get_visible()) return null;
		var l = this.nmeChildren.length - 1;
		var _g1 = 0, _g = this.nmeChildren.length;
		while(_g1 < _g) {
			var i = _g1++;
			var result = null;
			if(this.mouseEnabled) result = this.nmeChildren[l - i].nmeGetObjectUnderPoint(point);
			if(result != null) return this.mouseChildren?result:this;
		}
		return flash.display.InteractiveObject.prototype.nmeGetObjectUnderPoint.call(this,point);
	}
	,nmeBroadcast: function(event) {
		var _g = 0, _g1 = this.nmeChildren;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			child.nmeBroadcast(event);
		}
		this.dispatchEvent(event);
	}
	,nmeAddToStage: function(newParent,beforeSibling) {
		flash.display.InteractiveObject.prototype.nmeAddToStage.call(this,newParent,beforeSibling);
		var _g = 0, _g1 = this.nmeChildren;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			if(child.nmeGetGraphics() == null || !child.nmeIsOnStage()) child.nmeAddToStage(this);
		}
	}
	,getObjectsUnderPoint: function(point) {
		var result = new Array();
		this.nmeGetObjectsUnderPoint(point,result);
		return result;
	}
	,getChildIndex: function(inChild) {
		var _g1 = 0, _g = this.nmeChildren.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(this.nmeChildren[i] == inChild) return i;
		}
		return -1;
	}
	,getChildByName: function(inName) {
		var _g = 0, _g1 = this.nmeChildren;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			if(child.name == inName) return child;
		}
		return null;
	}
	,getChildAt: function(index) {
		if(index >= 0 && index < this.nmeChildren.length) return this.nmeChildren[index];
		throw "getChildAt : index out of bounds " + index + "/" + this.nmeChildren.length;
		return null;
	}
	,contains: function(child) {
		return this.__contains(child);
	}
	,addChildAt: function(object,index) {
		if(index > this.nmeChildren.length || index < 0) throw "Invalid index position " + index;
		this.nmeAddedChildren = true;
		if(object.parent == this) {
			this.setChildIndex(object,index);
			return object;
		}
		if(index == this.nmeChildren.length) return this.addChild(object); else {
			if(this.nmeIsOnStage()) object.nmeAddToStage(this,this.nmeChildren[index]);
			this.nmeChildren.splice(index,0,object);
			object.set_parent(this);
		}
		return object;
	}
	,addChild: function(object) {
		if(object == null) throw "DisplayObjectContainer asked to add null child object";
		if(object == this) throw "Adding to self";
		this.nmeAddedChildren = true;
		if(object.parent == this) {
			this.setChildIndex(object,this.nmeChildren.length - 1);
			return object;
		}
		object.set_parent(this);
		if(this.nmeIsOnStage()) object.nmeAddToStage(this);
		if(this.nmeChildren == null) this.nmeChildren = new Array();
		this.nmeChildren.push(object);
		return object;
	}
	,__removeChild: function(child) {
		HxOverrides.remove(this.nmeChildren,child);
	}
	,__class__: flash.display.DisplayObjectContainer
	,__properties__: $extend(flash.display.InteractiveObject.prototype.__properties__,{get_numChildren:"get_numChildren"})
});
flash.display.Sprite = function() {
	flash.display.DisplayObjectContainer.call(this);
	this.nmeGraphics = new flash.display.Graphics();
	this.buttonMode = false;
};
$hxClasses["flash.display.Sprite"] = flash.display.Sprite;
flash.display.Sprite.__name__ = ["flash","display","Sprite"];
flash.display.Sprite.__super__ = flash.display.DisplayObjectContainer;
flash.display.Sprite.prototype = $extend(flash.display.DisplayObjectContainer.prototype,{
	set_useHandCursor: function(cursor) {
		if(cursor == this.useHandCursor) return cursor;
		if(this.nmeCursorCallbackOver != null) this.removeEventListener(flash.events.MouseEvent.ROLL_OVER,this.nmeCursorCallbackOver);
		if(this.nmeCursorCallbackOut != null) this.removeEventListener(flash.events.MouseEvent.ROLL_OUT,this.nmeCursorCallbackOut);
		if(!cursor) flash.Lib.nmeSetCursor(flash._Lib.CursorType.Default); else {
			this.nmeCursorCallbackOver = function(_) {
				flash.Lib.nmeSetCursor(flash._Lib.CursorType.Pointer);
			};
			this.nmeCursorCallbackOut = function(_) {
				flash.Lib.nmeSetCursor(flash._Lib.CursorType.Default);
			};
			this.addEventListener(flash.events.MouseEvent.ROLL_OVER,this.nmeCursorCallbackOver);
			this.addEventListener(flash.events.MouseEvent.ROLL_OUT,this.nmeCursorCallbackOut);
		}
		this.useHandCursor = cursor;
		return cursor;
	}
	,get_graphics: function() {
		return this.nmeGraphics;
	}
	,get_dropTarget: function() {
		return this.nmeDropTarget;
	}
	,toString: function() {
		return "[Sprite name=" + this.name + " id=" + this._nmeId + "]";
	}
	,stopDrag: function() {
		if(this.nmeIsOnStage()) {
			this.get_stage().nmeStopDrag(this);
			var l = this.parent.nmeChildren.length - 1;
			var obj = this.get_stage();
			var _g1 = 0, _g = this.parent.nmeChildren.length;
			while(_g1 < _g) {
				var i = _g1++;
				var result = this.parent.nmeChildren[l - i].nmeGetObjectUnderPoint(new flash.geom.Point(this.get_stage().get_mouseX(),this.get_stage().get_mouseY()));
				if(result != null) obj = result;
			}
			if(obj != this) this.nmeDropTarget = obj; else this.nmeDropTarget = this.get_stage();
		}
	}
	,startDrag: function(lockCenter,bounds) {
		if(lockCenter == null) lockCenter = false;
		if(this.nmeIsOnStage()) this.get_stage().nmeStartDrag(this,lockCenter,bounds);
	}
	,nmeGetGraphics: function() {
		return this.nmeGraphics;
	}
	,__class__: flash.display.Sprite
	,__properties__: $extend(flash.display.DisplayObjectContainer.prototype.__properties__,{get_dropTarget:"get_dropTarget",get_graphics:"get_graphics",set_useHandCursor:"set_useHandCursor"})
});
var Main = function() {
	flash.display.Sprite.call(this);
	if(this.get_stage() != null) this.init(); else this.addEventListener(flash.events.Event.ADDED_TO_STAGE,$bind(this,this.init));
};
$hxClasses["Main"] = Main;
Main.__name__ = ["Main"];
Main.main = function() {
	flash.Lib.get_current().addChild(new Main());
}
Main.__super__ = flash.display.Sprite;
Main.prototype = $extend(flash.display.Sprite.prototype,{
	initialize: function() {
		flash.Lib.get_current().get_stage().align = flash.display.StageAlign.TOP_LEFT;
		flash.Lib.get_current().get_stage().scaleMode = flash.display.StageScaleMode.NO_SCALE;
	}
	,init: function(e) {
		if(this.hasEventListener(flash.events.Event.ADDED_TO_STAGE)) this.removeEventListener(flash.events.Event.ADDED_TO_STAGE,$bind(this,this.init));
		this.initialize();
		var demo = new ProjectClass();
		this.addChild(demo);
	}
	,__class__: Main
});
var DocumentClass = function() {
	Main.call(this);
};
$hxClasses["DocumentClass"] = DocumentClass;
DocumentClass.__name__ = ["DocumentClass"];
DocumentClass.__super__ = Main;
DocumentClass.prototype = $extend(Main.prototype,{
	get_stage: function() {
		return flash.Lib.get_current().get_stage();
	}
	,__class__: DocumentClass
});
var org = {}
org.flixel = {}
org.flixel.FlxBasic = function() {
	this.ID = -1;
	this.exists = true;
	this.active = true;
	this.visible = true;
	this.alive = true;
	this.autoClear = true;
	this.ignoreDrawDebug = false;
};
$hxClasses["org.flixel.FlxBasic"] = org.flixel.FlxBasic;
org.flixel.FlxBasic.__name__ = ["org","flixel","FlxBasic"];
org.flixel.FlxBasic.prototype = {
	updateFrameData: function() {
	}
	,getAtlas: function() {
		return org.flixel.FlxG.get_state().getAtlasFor(this._bitmapDataKey);
	}
	,updateAtlasInfo: function(updateAtlas) {
		if(updateAtlas == null) updateAtlas = false;
		if(this._atlas == null) {
			this._atlas = this.getAtlas();
			this._node = this._atlas.getNodeByKey(this._bitmapDataKey);
		} else if(this._atlas.hasNodeWithName(this._bitmapDataKey)) {
			this._node = this._atlas.getNodeByKey(this._bitmapDataKey);
			if(updateAtlas) this._atlas.redrawNode(this._node);
		} else {
			var bm = org.flixel.FlxG._cache.get(this._bitmapDataKey);
			this._node = this._atlas.addNode(bm,this._bitmapDataKey);
			if(this._node == null) {
				this._atlas = this.getAtlas();
				this._node = this._atlas.getNodeByKey(this._bitmapDataKey);
			}
		}
		this.updateFrameData();
	}
	,get_bitmapDataKey: function() {
		return this._bitmapDataKey;
	}
	,set_atlas: function(value) {
		if(this._atlas != value) {
			if(value == null) {
				this._atlas = value;
				this._node = null;
				this._framesData = null;
			} else {
				if(this._bitmapDataKey != null) {
					if(!value.hasNodeWithName(this._bitmapDataKey)) {
						var bm = org.flixel.FlxG._cache.get(this._bitmapDataKey);
						if(bm == null) return null; else if(value.addNode(bm,this._bitmapDataKey) == null) return null;
					}
					this._atlas = value;
					this._node = value.getNodeByKey(this._bitmapDataKey);
				}
				this.updateFrameData();
			}
		}
		return value;
	}
	,get_atlas: function() {
		return this._atlas;
	}
	,get_hasTween: function() {
		return this._tween != null;
	}
	,updateTweens: function() {
		var t;
		var ft = this._tween;
		while(ft != null) {
			t = js.Boot.__cast(ft , org.flixel.tweens.FlxTween);
			if(t.active) {
				t.update();
				if(ft._finish) ft.finish();
			}
			ft = ft._next;
		}
	}
	,clearTweens: function(destroy) {
		if(destroy == null) destroy = false;
		var t;
		var ft = this._tween;
		var fn;
		while(ft != null) {
			fn = ft._next;
			this.removeTween(js.Boot.__cast(ft , org.flixel.tweens.FlxTween),destroy);
			ft = fn;
		}
	}
	,removeTween: function(t,destroy) {
		if(destroy == null) destroy = false;
		var ft = t;
		if(ft._parent != this) throw "Core object does not contain FlxTween.";
		if(ft._next != null) ft._next._prev = ft._prev;
		if(ft._prev != null) ft._prev._next = ft._next; else this._tween = ft._next == null?null:js.Boot.__cast(ft._next , org.flixel.tweens.FlxTween);
		ft._next = ft._prev = null;
		ft._parent = null;
		if(destroy) t.destroy();
		t.active = false;
		return t;
	}
	,addTween: function(t,start) {
		if(start == null) start = false;
		var ft = t;
		if(ft._parent != null) throw "Cannot add a FlxTween object more than once.";
		ft._parent = this;
		ft._next = this._tween;
		var friendTween = this._tween;
		if(this._tween != null) friendTween._prev = t;
		this._tween = t;
		if(start) this._tween.start();
		return t;
	}
	,toString: function() {
		return (function($this) {
			var $r;
			var s = Type.getClassName(Type.getClass($this));
			if(s != null) {
				s = StringTools.replace(s,"::",".");
				s = HxOverrides.substr(s,s.lastIndexOf(".") + 1,null);
			}
			$r = s;
			return $r;
		}(this));
	}
	,revive: function() {
		this.alive = true;
		this.exists = true;
	}
	,kill: function() {
		this.alive = false;
		this.exists = false;
	}
	,drawDebugOnCamera: function(Camera) {
	}
	,drawDebug: function() {
		if(!this.ignoreDrawDebug) {
			var i = 0;
			if(this.cameras == null) this.cameras = org.flixel.FlxG.cameras;
			var l = this.cameras.length;
			while(i < l) this.drawDebugOnCamera(this.cameras[i++]);
		}
	}
	,draw: function() {
		if(this.cameras == null) this.cameras = org.flixel.FlxG.cameras;
		var camera;
		var i = 0;
		var l = this.cameras.length;
		while(i < l) {
			camera = this.cameras[i++];
			org.flixel.FlxBasic._VISIBLECOUNT++;
		}
	}
	,update: function() {
		org.flixel.FlxBasic._ACTIVECOUNT++;
	}
	,destroy: function() {
		if(this.autoClear && this.get_hasTween()) {
			this.clearTweens(true);
			this._tween = null;
		}
		this._framesData = null;
		this._bitmapDataKey = null;
		this._atlas = null;
		this._node = null;
	}
	,__class__: org.flixel.FlxBasic
	,__properties__: {get_hasTween:"get_hasTween",set_atlas:"set_atlas",get_atlas:"get_atlas",get_bitmapDataKey:"get_bitmapDataKey"}
}
org.flixel.util = {}
org.flixel.util.FlxRect = function(X,Y,Width,Height) {
	if(Height == null) Height = 0;
	if(Width == null) Width = 0;
	if(Y == null) Y = 0;
	if(X == null) X = 0;
	this.x = X;
	this.y = Y;
	this.width = Width;
	this.height = Height;
};
$hxClasses["org.flixel.util.FlxRect"] = org.flixel.util.FlxRect;
org.flixel.util.FlxRect.__name__ = ["org","flixel","util","FlxRect"];
org.flixel.util.FlxRect.prototype = {
	overlaps: function(Rect) {
		return Rect.x + Rect.width > this.x && Rect.x < this.x + this.width && Rect.y + Rect.height > this.y && Rect.y < this.y + this.height;
	}
	,copyToFlash: function(FlashRect) {
		FlashRect.x = this.x;
		FlashRect.y = this.y;
		FlashRect.width = this.width;
		FlashRect.height = this.height;
		return FlashRect;
	}
	,copyFromFlash: function(FlashRect) {
		this.x = FlashRect.x;
		this.y = FlashRect.y;
		this.width = FlashRect.width;
		this.height = FlashRect.height;
		return this;
	}
	,copyTo: function(Rect) {
		Rect.x = this.x;
		Rect.y = this.y;
		Rect.width = this.width;
		Rect.height = this.height;
		return Rect;
	}
	,copyFrom: function(Rect) {
		this.x = Rect.x;
		this.y = Rect.y;
		this.width = Rect.width;
		this.height = Rect.height;
		return this;
	}
	,make: function(X,Y,Width,Height) {
		if(Height == null) Height = 0;
		if(Width == null) Width = 0;
		if(Y == null) Y = 0;
		if(X == null) X = 0;
		this.x = X;
		this.y = Y;
		this.width = Width;
		this.height = Height;
		return this;
	}
	,get_bottom: function() {
		return this.y + this.height;
	}
	,get_top: function() {
		return this.y;
	}
	,get_right: function() {
		return this.x + this.width;
	}
	,get_left: function() {
		return this.x;
	}
	,__class__: org.flixel.util.FlxRect
	,__properties__: {get_left:"get_left",get_right:"get_right",get_top:"get_top",get_bottom:"get_bottom"}
}
org.flixel.util.FlxPoint = function(X,Y) {
	if(Y == null) Y = 0;
	if(X == null) X = 0;
	this.x = X;
	this.y = Y;
};
$hxClasses["org.flixel.util.FlxPoint"] = org.flixel.util.FlxPoint;
org.flixel.util.FlxPoint.__name__ = ["org","flixel","util","FlxPoint"];
org.flixel.util.FlxPoint.prototype = {
	toString: function() {
		return (function($this) {
			var $r;
			var s = Type.getClassName(Type.getClass($this));
			if(s != null) {
				s = StringTools.replace(s,"::",".");
				s = HxOverrides.substr(s,s.lastIndexOf(".") + 1,null);
			}
			$r = s;
			return $r;
		}(this));
	}
	,copyToFlash: function(FlashPoint) {
		FlashPoint.x = this.x;
		FlashPoint.y = this.y;
		return FlashPoint;
	}
	,copyFromFlash: function(FlashPoint) {
		this.x = FlashPoint.x;
		this.y = FlashPoint.y;
		return this;
	}
	,copyTo: function(point) {
		point.x = this.x;
		point.y = this.y;
		return point;
	}
	,copyFrom: function(point) {
		this.x = point.x;
		this.y = point.y;
		return this;
	}
	,make: function(X,Y) {
		if(Y == null) Y = 0;
		if(X == null) X = 0;
		this.x = X;
		this.y = Y;
		return this;
	}
	,__class__: org.flixel.util.FlxPoint
}
org.flixel.FlxObject = function(X,Y,Width,Height) {
	if(Height == null) Height = 0;
	if(Width == null) Width = 0;
	if(Y == null) Y = 0;
	if(X == null) X = 0;
	this._boundingBoxColorOverritten = false;
	this.forceComplexRender = false;
	org.flixel.FlxBasic.call(this);
	this.x = X;
	this.y = Y;
	this.last = new org.flixel.util.FlxPoint(this.x,this.y);
	this.set_width(Width);
	this.set_height(Height);
	this.mass = 1.0;
	this.elasticity = 0.0;
	this.health = 1;
	this.immovable = false;
	this.moves = true;
	this.touching = 0;
	this.wasTouching = 0;
	this.allowCollisions = 4369;
	this.velocity = new org.flixel.util.FlxPoint();
	this.acceleration = new org.flixel.util.FlxPoint();
	this.drag = new org.flixel.util.FlxPoint();
	this.maxVelocity = new org.flixel.util.FlxPoint(10000,10000);
	this.angle = 0;
	this.angularVelocity = 0;
	this.angularAcceleration = 0;
	this.angularDrag = 0;
	this.maxAngular = 10000;
	this.scrollFactor = new org.flixel.util.FlxPoint(1.0,1.0);
	this._flicker = false;
	this._flickerTimer = 0;
	this._point = new org.flixel.util.FlxPoint();
	this.path = null;
	this.pathSpeed = 0;
	this.pathAngle = 0;
	this.pathAutoCenter = true;
};
$hxClasses["org.flixel.FlxObject"] = org.flixel.FlxObject;
org.flixel.FlxObject.__name__ = ["org","flixel","FlxObject"];
org.flixel.FlxObject.separate = function(Object1,Object2) {
	var separatedX = org.flixel.FlxObject.separateX(Object1,Object2);
	var separatedY = org.flixel.FlxObject.separateY(Object1,Object2);
	return separatedX || separatedY;
}
org.flixel.FlxObject.separateX = function(Object1,Object2) {
	var obj1immovable = Object1.immovable;
	var obj2immovable = Object2.immovable;
	if(obj1immovable && obj2immovable) return false;
	if(js.Boot.__instanceof(Object1,org.flixel.FlxTilemap)) return (js.Boot.__cast(Object1 , org.flixel.FlxTilemap)).overlapsWithCallback(Object2,org.flixel.FlxObject.separateX);
	if(js.Boot.__instanceof(Object2,org.flixel.FlxTilemap)) return (js.Boot.__cast(Object2 , org.flixel.FlxTilemap)).overlapsWithCallback(Object1,org.flixel.FlxObject.separateX,true);
	var overlap = 0;
	var obj1delta = Object1.x - Object1.last.x;
	var obj2delta = Object2.x - Object2.last.x;
	if(obj1delta != obj2delta) {
		var obj1deltaAbs = obj1delta > 0?obj1delta:-obj1delta;
		var obj2deltaAbs = obj2delta > 0?obj2delta:-obj2delta;
		var obj1rect = org.flixel.FlxObject._firstSeparateFlxRect.make(Object1.x - (obj1delta > 0?obj1delta:0),Object1.last.y,Object1.width + (obj1delta > 0?obj1delta:-obj1delta),Object1.height);
		var obj2rect = org.flixel.FlxObject._secondSeparateFlxRect.make(Object2.x - (obj2delta > 0?obj2delta:0),Object2.last.y,Object2.width + (obj2delta > 0?obj2delta:-obj2delta),Object2.height);
		if(obj1rect.x + obj1rect.width > obj2rect.x && obj1rect.x < obj2rect.x + obj2rect.width && obj1rect.y + obj1rect.height > obj2rect.y && obj1rect.y < obj2rect.y + obj2rect.height) {
			var maxOverlap = obj1deltaAbs + obj2deltaAbs + org.flixel.FlxObject.SEPARATE_BIAS;
			if(obj1delta > obj2delta) {
				overlap = Object1.x + Object1.width - Object2.x;
				if(overlap > maxOverlap || (Object1.allowCollisions & 16) == 0 || (Object2.allowCollisions & 1) == 0) overlap = 0; else {
					Object1.touching |= 16;
					Object2.touching |= 1;
				}
			} else if(obj1delta < obj2delta) {
				overlap = Object1.x - Object2.width - Object2.x;
				if(-overlap > maxOverlap || (Object1.allowCollisions & 1) == 0 || (Object2.allowCollisions & 16) == 0) overlap = 0; else {
					Object1.touching |= 1;
					Object2.touching |= 16;
				}
			}
		}
	}
	if(overlap != 0) {
		var obj1v = Object1.velocity.x;
		var obj2v = Object2.velocity.x;
		if(!obj1immovable && !obj2immovable) {
			overlap *= 0.5;
			Object1.x = Object1.x - overlap;
			Object2.x += overlap;
			var obj1velocity = Math.sqrt(obj2v * obj2v * Object2.mass / Object1.mass) * (obj2v > 0?1:-1);
			var obj2velocity = Math.sqrt(obj1v * obj1v * Object1.mass / Object2.mass) * (obj1v > 0?1:-1);
			var average = (obj1velocity + obj2velocity) * 0.5;
			obj1velocity -= average;
			obj2velocity -= average;
			Object1.velocity.x = average + obj1velocity * Object1.elasticity;
			Object2.velocity.x = average + obj2velocity * Object2.elasticity;
		} else if(!obj1immovable) {
			Object1.x = Object1.x - overlap;
			Object1.velocity.x = obj2v - obj1v * Object1.elasticity;
		} else if(!obj2immovable) {
			Object2.x += overlap;
			Object2.velocity.x = obj1v - obj2v * Object2.elasticity;
		}
		return true;
	} else return false;
}
org.flixel.FlxObject.separateY = function(Object1,Object2) {
	var obj1immovable = Object1.immovable;
	var obj2immovable = Object2.immovable;
	if(obj1immovable && obj2immovable) return false;
	if(js.Boot.__instanceof(Object1,org.flixel.FlxTilemap)) return (js.Boot.__cast(Object1 , org.flixel.FlxTilemap)).overlapsWithCallback(Object2,org.flixel.FlxObject.separateY);
	if(js.Boot.__instanceof(Object2,org.flixel.FlxTilemap)) return (js.Boot.__cast(Object2 , org.flixel.FlxTilemap)).overlapsWithCallback(Object1,org.flixel.FlxObject.separateY,true);
	var overlap = 0;
	var obj1delta = Object1.y - Object1.last.y;
	var obj2delta = Object2.y - Object2.last.y;
	if(obj1delta != obj2delta) {
		var obj1deltaAbs = obj1delta > 0?obj1delta:-obj1delta;
		var obj2deltaAbs = obj2delta > 0?obj2delta:-obj2delta;
		var obj1rect = org.flixel.FlxObject._firstSeparateFlxRect.make(Object1.x,Object1.y - (obj1delta > 0?obj1delta:0),Object1.width,Object1.height + obj1deltaAbs);
		var obj2rect = org.flixel.FlxObject._secondSeparateFlxRect.make(Object2.x,Object2.y - (obj2delta > 0?obj2delta:0),Object2.width,Object2.height + obj2deltaAbs);
		if(obj1rect.x + obj1rect.width > obj2rect.x && obj1rect.x < obj2rect.x + obj2rect.width && obj1rect.y + obj1rect.height > obj2rect.y && obj1rect.y < obj2rect.y + obj2rect.height) {
			var maxOverlap = obj1deltaAbs + obj2deltaAbs + org.flixel.FlxObject.SEPARATE_BIAS;
			if(obj1delta > obj2delta) {
				overlap = Object1.y + Object1.height - Object2.y;
				if(overlap > maxOverlap || (Object1.allowCollisions & 4096) == 0 || (Object2.allowCollisions & 256) == 0) overlap = 0; else {
					Object1.touching |= 4096;
					Object2.touching |= 256;
				}
			} else if(obj1delta < obj2delta) {
				overlap = Object1.y - Object2.height - Object2.y;
				if(-overlap > maxOverlap || (Object1.allowCollisions & 256) == 0 || (Object2.allowCollisions & 4096) == 0) overlap = 0; else {
					Object1.touching |= 256;
					Object2.touching |= 4096;
				}
			}
		}
	}
	if(overlap != 0) {
		var obj1v = Object1.velocity.y;
		var obj2v = Object2.velocity.y;
		if(!obj1immovable && !obj2immovable) {
			overlap *= 0.5;
			Object1.y = Object1.y - overlap;
			Object2.y += overlap;
			var obj1velocity = Math.sqrt(obj2v * obj2v * Object2.mass / Object1.mass) * (obj2v > 0?1:-1);
			var obj2velocity = Math.sqrt(obj1v * obj1v * Object1.mass / Object2.mass) * (obj1v > 0?1:-1);
			var average = (obj1velocity + obj2velocity) * 0.5;
			obj1velocity -= average;
			obj2velocity -= average;
			Object1.velocity.y = average + obj1velocity * Object1.elasticity;
			Object2.velocity.y = average + obj2velocity * Object2.elasticity;
		} else if(!obj1immovable) {
			Object1.y = Object1.y - overlap;
			Object1.velocity.y = obj2v - obj1v * Object1.elasticity;
			if(Object2.active && Object2.moves && obj1delta > obj2delta) Object1.x += Object2.x - Object2.last.x;
		} else if(!obj2immovable) {
			Object2.y += overlap;
			Object2.velocity.y = obj1v - obj2v * Object2.elasticity;
			if(Object1.active && Object1.moves && obj1delta < obj2delta) Object2.x += Object1.x - Object1.last.x;
		}
		return true;
	} else return false;
}
org.flixel.FlxObject.__super__ = org.flixel.FlxBasic;
org.flixel.FlxObject.prototype = $extend(org.flixel.FlxBasic.prototype,{
	set_forceComplexRender: function(value) {
		return this.forceComplexRender = value;
	}
	,move: function(x,y) {
		this.x = x;
		this.y = y;
	}
	,hurt: function(Damage) {
		this.health = this.health - Damage;
		if(this.health <= 0) this.kill();
	}
	,justTouched: function(Direction) {
		return (this.touching & Direction) > 0 && (this.wasTouching & Direction) <= 0;
	}
	,isTouching: function(Direction) {
		return (this.touching & Direction) > 0;
	}
	,reset: function(X,Y) {
		this.revive();
		this.touching = 0;
		this.wasTouching = 0;
		this.x = X;
		this.y = Y;
		this.last.x = this.x;
		this.last.y = this.y;
		this.velocity.x = 0;
		this.velocity.y = 0;
	}
	,getMidpoint: function(point) {
		if(point == null) point = new org.flixel.util.FlxPoint();
		point.x = this.x + this.width * 0.5;
		point.y = this.y + this.height * 0.5;
		return point;
	}
	,set_solid: function(Solid) {
		if(Solid) this.allowCollisions = 4369; else this.allowCollisions = 0;
		return Solid;
	}
	,get_solid: function() {
		return (this.allowCollisions & 4369) > 0;
	}
	,set_height: function(Height) {
		if(Height < 0) org.flixel.FlxG.warn("An object's height cannot be smaller than 0. Use offset for sprites to control the hitbox position!"); else this.height = Height;
		return Height;
	}
	,set_width: function(Width) {
		if(Width < 0) org.flixel.FlxG.warn("An object's width cannot be smaller than 0. Use offset for sprites to control the hitbox position!"); else this.width = Width;
		return Width;
	}
	,get_flickering: function() {
		return this._flickerTimer != 0;
	}
	,flicker: function(Duration) {
		if(Duration == null) Duration = 1;
		this._flickerTimer = Duration;
		if(this._flickerTimer == 0) this._flicker = false;
	}
	,getScreenXY: function(point,Camera) {
		if(point == null) point = new org.flixel.util.FlxPoint();
		if(Camera == null) Camera = org.flixel.FlxG.camera;
		point.x = this.x - Camera.scroll.x * this.scrollFactor.x;
		point.y = this.y - Camera.scroll.y * this.scrollFactor.y;
		return point;
	}
	,onScreenObject: function(Camera) {
		if(Camera == null) Camera = org.flixel.FlxG.camera;
		this.getScreenXY(this._point,Camera);
		return this._point.x + this.width > 0 && this._point.x < Camera.width && this._point.y + this.height > 0 && this._point.y < Camera.height;
	}
	,onScreen: function(Camera) {
		return this.onScreenObject(Camera);
	}
	,overlapsPoint: function(point,InScreenSpace,Camera) {
		if(InScreenSpace == null) InScreenSpace = false;
		if(!InScreenSpace) return point.x > this.x && point.x < this.x + this.width && point.y > this.y && point.y < this.y + this.height;
		if(Camera == null) Camera = org.flixel.FlxG.camera;
		var X = point.x - Camera.scroll.x;
		var Y = point.y - Camera.scroll.y;
		this.getScreenXY(this._point,Camera);
		return X > this._point.x && X < this._point.x + this.width && Y > this._point.y && Y < this._point.y + this.height;
	}
	,overlapsAt: function(X,Y,ObjectOrGroup,InScreenSpace,Camera) {
		if(InScreenSpace == null) InScreenSpace = false;
		if(js.Boot.__instanceof(ObjectOrGroup,org.flixel.FlxTypedGroup)) {
			var results = false;
			var basic;
			var i = 0;
			var grp = ObjectOrGroup;
			var members = grp.members;
			while(i < (grp.length | 0)) {
				basic = members[i++];
				if(basic != null && basic.exists && this.overlapsAt(X,Y,basic,InScreenSpace,Camera)) {
					results = true;
					break;
				}
			}
			return results;
		}
		if(js.Boot.__instanceof(ObjectOrGroup,org.flixel.FlxTilemap)) {
			var tilemap = js.Boot.__cast(ObjectOrGroup , org.flixel.FlxTilemap);
			return tilemap.overlapsAt(tilemap.x - (X - this.x),tilemap.y - (Y - this.y),this,InScreenSpace,Camera);
		}
		var object = js.Boot.__cast(ObjectOrGroup , org.flixel.FlxObject);
		if(!InScreenSpace) return object.x + object.width > X && object.x < X + this.width && object.y + object.height > Y && object.y < Y + this.height;
		if(Camera == null) Camera = org.flixel.FlxG.camera;
		var objectScreenPos = object.getScreenXY(null,Camera);
		this._point.x = X - Camera.scroll.x * this.scrollFactor.x;
		this._point.y = Y - Camera.scroll.y * this.scrollFactor.y;
		return objectScreenPos.x + object.width > this._point.x && objectScreenPos.x < this._point.x + this.width && objectScreenPos.y + object.height > this._point.y && objectScreenPos.y < this._point.y + this.height;
	}
	,overlaps: function(ObjectOrGroup,InScreenSpace,Camera) {
		if(InScreenSpace == null) InScreenSpace = false;
		if(js.Boot.__instanceof(ObjectOrGroup,org.flixel.FlxTypedGroup)) {
			var results = false;
			var i = 0;
			var basic;
			var grp = ObjectOrGroup;
			var members = grp.members;
			while(i < grp.length) {
				basic = members[i++];
				if(basic != null && basic.exists && this.overlaps(basic,InScreenSpace,Camera)) {
					results = true;
					break;
				}
			}
			return results;
		}
		if(js.Boot.__instanceof(ObjectOrGroup,org.flixel.FlxTilemap)) return (js.Boot.__cast(ObjectOrGroup , org.flixel.FlxTilemap)).overlaps(this,InScreenSpace,Camera);
		var object = js.Boot.__cast(ObjectOrGroup , org.flixel.FlxObject);
		if(!InScreenSpace) return object.x + object.width > this.x && object.x < this.x + this.width && object.y + object.height > this.y && object.y < this.y + this.height;
		if(Camera == null) Camera = org.flixel.FlxG.camera;
		var objectScreenPos = object.getScreenXY(null,Camera);
		this.getScreenXY(this._point,Camera);
		return objectScreenPos.x + object.width > this._point.x && objectScreenPos.x < this._point.x + this.width && objectScreenPos.y + object.height > this._point.y && objectScreenPos.y < this._point.y + this.height;
	}
	,updatePathMotion: function() {
		this._point.x = this.x;
		this._point.y = this.y;
		if(this.pathAutoCenter) {
			this._point.x += this.width * 0.5;
			this._point.y += this.height * 0.5;
		}
		var node = this.path.nodes[this._pathNodeIndex];
		var deltaX = node.x - this._point.x;
		var deltaY = node.y - this._point.y;
		var horizontalOnly = (this._pathMode & 65536) > 0;
		var verticalOnly = (this._pathMode & 1048576) > 0;
		if(horizontalOnly) {
			if((deltaX > 0?deltaX:-deltaX) < this.pathSpeed * org.flixel.FlxG.elapsed) node = this.advancePath();
		} else if(verticalOnly) {
			if((deltaY > 0?deltaY:-deltaY) < this.pathSpeed * org.flixel.FlxG.elapsed) node = this.advancePath();
		} else if(Math.sqrt(deltaX * deltaX + deltaY * deltaY) < this.pathSpeed * org.flixel.FlxG.elapsed) node = this.advancePath();
		if(this.pathSpeed != 0) {
			this._point.x = this.x;
			this._point.y = this.y;
			if(this.pathAutoCenter) {
				this._point.x += this.width * 0.5;
				this._point.y += this.height * 0.5;
			}
			if(horizontalOnly || this._point.y == node.y) {
				this.velocity.x = this._point.x < node.x?this.pathSpeed:-this.pathSpeed;
				if(this.velocity.x < 0) this.pathAngle = -90; else this.pathAngle = 90;
				if(!horizontalOnly) this.velocity.y = 0;
			} else if(verticalOnly || this._point.x == node.x) {
				this.velocity.y = this._point.y < node.y?this.pathSpeed:-this.pathSpeed;
				if(this.velocity.y < 0) this.pathAngle = 0; else this.pathAngle = 180;
				if(!verticalOnly) this.velocity.x = 0;
			} else {
				this.pathAngle = org.flixel.util.FlxAngle.getAngle(this._point,node);
				org.flixel.util.FlxAngle.rotatePoint(0,this.pathSpeed,0,0,this.pathAngle,this.velocity);
			}
			if(this._pathRotate) {
				this.angularVelocity = 0;
				this.angularAcceleration = 0;
				this.angle = this.pathAngle;
			}
		}
	}
	,advancePath: function(Snap) {
		if(Snap == null) Snap = true;
		if(Snap) {
			var oldNode = this.path.nodes[this._pathNodeIndex];
			if(oldNode != null) {
				if((this._pathMode & 1048576) == 0) {
					this.x = oldNode.x;
					if(this.pathAutoCenter) this.x -= this.width * 0.5;
				}
				if((this._pathMode & 65536) == 0) {
					this.y = oldNode.y;
					if(this.pathAutoCenter) this.y -= this.height * 0.5;
				}
			}
		}
		this._pathNodeIndex += this._pathInc;
		if((this._pathMode & 1) > 0) {
			if(this._pathNodeIndex < 0) {
				this._pathNodeIndex = 0;
				this.stopFollowingPath(false);
			}
		} else if((this._pathMode & 16) > 0) {
			if(this._pathNodeIndex >= this.path.nodes.length) this._pathNodeIndex = 0;
		} else if((this._pathMode & 256) > 0) {
			if(this._pathNodeIndex < 0) {
				this._pathNodeIndex = this.path.nodes.length - 1;
				if(this._pathNodeIndex < 0) this._pathNodeIndex = 0;
			}
		} else if((this._pathMode & 4096) > 0) {
			if(this._pathInc > 0) {
				if(this._pathNodeIndex >= this.path.nodes.length) {
					this._pathNodeIndex = this.path.nodes.length - 2;
					if(this._pathNodeIndex < 0) this._pathNodeIndex = 0;
					this._pathInc = -this._pathInc;
				}
			} else if(this._pathNodeIndex < 0) {
				this._pathNodeIndex = 1;
				if(this._pathNodeIndex >= this.path.nodes.length) this._pathNodeIndex = this.path.nodes.length - 1;
				if(this._pathNodeIndex < 0) this._pathNodeIndex = 0;
				this._pathInc = -this._pathInc;
			}
		} else if(this._pathNodeIndex >= this.path.nodes.length) {
			this._pathNodeIndex = this.path.nodes.length - 1;
			this.stopFollowingPath(false);
		}
		return this.path.nodes[this._pathNodeIndex];
	}
	,setPathNode: function(NodeIndex) {
		if(this.path == null) return;
		if(NodeIndex < 0) NodeIndex = 0; else if(NodeIndex > this.path.nodes.length - 1) NodeIndex = this.path.nodes.length - 1;
		this._pathNodeIndex = NodeIndex;
		this.advancePath();
	}
	,stopFollowingPath: function(DestroyPath) {
		if(DestroyPath == null) DestroyPath = false;
		this.pathSpeed = 0;
		this.velocity.x = 0;
		this.velocity.y = 0;
		if(DestroyPath && this.path != null) {
			this.path.destroy();
			this.path = null;
		}
	}
	,followPath: function(Path,Speed,Mode,AutoRotate) {
		if(AutoRotate == null) AutoRotate = false;
		if(Mode == null) Mode = 0;
		if(Speed == null) Speed = 100;
		if(Path.nodes.length <= 0) {
			org.flixel.FlxG.warn("Paths need at least one node in them to be followed.");
			return;
		}
		this.path = Path;
		this.pathSpeed = Math.abs(Speed);
		this._pathMode = Mode;
		this._pathRotate = AutoRotate;
		if(this._pathMode == 1 || this._pathMode == 256) {
			this._pathNodeIndex = this.path.nodes.length - 1;
			this._pathInc = -1;
		} else {
			this._pathNodeIndex = 0;
			this._pathInc = 1;
		}
	}
	,drawDebugOnCamera: function(Camera) {
		if(Camera == null) Camera = org.flixel.FlxG.camera;
		if(!this.onScreenObject(Camera) || !Camera.visible || !Camera.exists) return;
		var boundingBoxX = this.x - Camera.scroll.x * this.scrollFactor.x;
		var boundingBoxY = this.y - Camera.scroll.y * this.scrollFactor.y;
		if(this.allowCollisions != 0 && !this._boundingBoxColorOverritten) {
			if(this.allowCollisions != 4369) this.set_debugBoundingBoxColor(-16181);
			if(this.immovable) this.set_debugBoundingBoxColor(-16744448); else this.set_debugBoundingBoxColor(-65536);
		} else if(!this._boundingBoxColorOverritten) this.set_debugBoundingBoxColor(-16776961);
		var gfx = Camera._debugLayer.get_graphics();
		gfx.lineStyle(1,this.debugBoundingBoxColor,0.5);
		gfx.drawRect(boundingBoxX,boundingBoxY,this.width,this.height);
	}
	,draw: function() {
		if(this.cameras == null) this.cameras = org.flixel.FlxG.cameras;
		var camera;
		var i = 0;
		var l = this.cameras.length;
		while(i < l) {
			camera = this.cameras[i++];
			if(!this.onScreenObject(camera) || !camera.visible || !camera.exists) continue;
			org.flixel.FlxBasic._VISIBLECOUNT++;
		}
	}
	,updateMotion: function() {
		var delta;
		var velocityDelta;
		var dt = org.flixel.FlxG.elapsed;
		velocityDelta = 0.5 * (org.flixel.util.FlxMath.computeVelocity(this.angularVelocity,this.angularAcceleration,this.angularDrag,this.maxAngular) - this.angularVelocity);
		this.angularVelocity += velocityDelta;
		this.angle += this.angularVelocity * dt;
		this.angularVelocity += velocityDelta;
		velocityDelta = 0.5 * (org.flixel.util.FlxMath.computeVelocity(this.velocity.x,this.acceleration.x,this.drag.x,this.maxVelocity.x) - this.velocity.x);
		this.velocity.x += velocityDelta;
		delta = this.velocity.x * dt;
		this.velocity.x += velocityDelta;
		this.x += delta;
		velocityDelta = 0.5 * (org.flixel.util.FlxMath.computeVelocity(this.velocity.y,this.acceleration.y,this.drag.y,this.maxVelocity.y) - this.velocity.y);
		this.velocity.y += velocityDelta;
		delta = this.velocity.y * dt;
		this.velocity.y += velocityDelta;
		this.y += delta;
	}
	,update: function() {
		org.flixel.FlxBasic._ACTIVECOUNT++;
		if(this._flickerTimer > 0) {
			this._flickerTimer -= org.flixel.FlxG.elapsed;
			if(this._flickerTimer <= 0) {
				this._flickerTimer = 0;
				this._flicker = false;
			}
		}
		this.last.x = this.x;
		this.last.y = this.y;
		if(this.path != null && this.pathSpeed != 0 && this.path.nodes[this._pathNodeIndex] != null) this.updatePathMotion();
		if(this.moves) this.updateMotion();
		this.wasTouching = this.touching;
		this.touching = 0;
	}
	,destroy: function() {
		this.velocity = null;
		this.acceleration = null;
		this.drag = null;
		this.maxVelocity = null;
		this.scrollFactor = null;
		this._point = null;
		this.last = null;
		this.cameras = null;
		if(this.path != null) this.path.destroy();
		this.path = null;
		org.flixel.FlxBasic.prototype.destroy.call(this);
	}
	,set_debugBoundingBoxColor: function(val) {
		this._boundingBoxColorOverritten = true;
		this.debugBoundingBoxColor = val;
		return val;
	}
	,__class__: org.flixel.FlxObject
	,__properties__: $extend(org.flixel.FlxBasic.prototype.__properties__,{set_width:"set_width",set_height:"set_height",set_forceComplexRender:"set_forceComplexRender",set_debugBoundingBoxColor:"set_debugBoundingBoxColor",get_flickering:"get_flickering",set_solid:"set_solid",get_solid:"get_solid"})
});
org.flixel.FlxSprite = function(X,Y,SimpleGraphic) {
	if(Y == null) Y = 0;
	if(X == null) X = 0;
	this._blendInt = 0;
	org.flixel.FlxObject.call(this,X,Y);
	this._flashPoint = new flash.geom.Point();
	this._flashRect = new flash.geom.Rectangle();
	this._flashRect2 = new flash.geom.Rectangle();
	this._flashPointZero = new flash.geom.Point();
	this.offset = new org.flixel.util.FlxPoint();
	this.origin = new org.flixel.util.FlxPoint();
	this.scale = new org.flixel.util.FlxPoint(1.0,1.0);
	this._color = 16777215;
	this.set_alpha(1.0);
	this._blend = null;
	this.set_antialiasing(false);
	this.cameras = null;
	this.finished = false;
	this.paused = true;
	this.set_facing(16);
	this._animations = new haxe.ds.StringMap();
	this._flipped = 0;
	this._curAnim = null;
	this._curFrame = 0;
	this._curIndex = 0;
	this._frameTimer = 0;
	this._matrix = new flash.geom.Matrix();
	this._callback = null;
	this._red = 1.0;
	this._green = 1.0;
	this._blue = 1.0;
	this._flxFrame = null;
	if(SimpleGraphic == null) SimpleGraphic = org.flixel.FlxAssets.imgDefault;
	this.loadGraphic(SimpleGraphic);
};
$hxClasses["org.flixel.FlxSprite"] = org.flixel.FlxSprite;
org.flixel.FlxSprite.__name__ = ["org","flixel","FlxSprite"];
org.flixel.FlxSprite.frameSortFunction = function(frame1,frame2) {
	var name1 = frame1.name;
	var name2 = frame2.name;
	var num1 = Std.parseInt(name1.substring(org.flixel.FlxSprite.prefixLength,name1.length - org.flixel.FlxSprite.postfixLength));
	var num2 = Std.parseInt(name2.substring(org.flixel.FlxSprite.prefixLength,name2.length - org.flixel.FlxSprite.postfixLength));
	if(num1 > num2) return 1; else if(num2 > num1) return -1;
	return 0;
}
org.flixel.FlxSprite.__super__ = org.flixel.FlxObject;
org.flixel.FlxSprite.prototype = $extend(org.flixel.FlxObject.prototype,{
	resetFrameBitmapDatas: function() {
		this._atlas._tileSheetData.destroyFrameBitmapDatas();
	}
	,nullTextureData: function() {
		this._textureData = null;
		this._flxFrame = null;
		this._framesData = null;
		this._node = null;
		this._atlas = null;
	}
	,getFlxFrameBitmapData: function() {
		if(this._flxFrame != null) {
			if(this.facing == 1 && this.get_flipped() > 0) return this._flxFrame.getReversedBitmap(); else return this._flxFrame.getBitmap();
		}
		return null;
	}
	,updateFrameData: function() {
		if(this._textureData == null && this._node != null && this.frameWidth >= 1 && this.frameHeight >= 1) {
			if(this.frames > 1) this._framesData = this._node.getSpriteSheetFrames(this.frameWidth | 0,this.frameHeight | 0,null,0,0,0,0,1,1); else this._framesData = this._node.getSpriteSheetFrames(this.frameWidth | 0,this.frameHeight | 0);
			this._flxFrame = this._framesData.frames[this._curIndex];
			return;
		} else if(this._textureData != null && this._node != null) {
			this._framesData = this._node.getTexturePackerFrames(this._textureData);
			this._flxFrame = this._framesData.frames[0];
			this.resetFrameSize();
			this.resetSizeFromFrame();
		}
	}
	,overlapsPoint: function(point,InScreenSpace,Camera) {
		if(InScreenSpace == null) InScreenSpace = false;
		if(this.scale.x == 1 && this.scale.y == 1) return org.flixel.FlxObject.prototype.overlapsPoint.call(this,point,InScreenSpace,Camera);
		if(!InScreenSpace) return point.x > this.x - 0.5 * this.width * (this.scale.x - 1) && point.x < this.x + this.width + 0.5 * this.width * (this.scale.x - 1) && point.y > this.y - 0.5 * this.height * (this.scale.y - 1) && point.y < this.y + this.height + 0.5 * this.height * (this.scale.y - 1);
		if(Camera == null) Camera = org.flixel.FlxG.camera;
		var X = point.x - Camera.scroll.x;
		var Y = point.y - Camera.scroll.y;
		this.getScreenXY(this._point,Camera);
		return X > this._point.x - 0.5 * this.width * (this.scale.x - 1) && X < this._point.x + this.width + 0.5 * this.width * (this.scale.x - 1) && Y > this._point.y - 0.5 * this.height * (this.scale.y - 1) && Y < this._point.y + this.height + 0.5 * this.height * (this.scale.y - 1);
	}
	,set_blend: function(value) {
		if(value != null) {
			switch( (value)[1] ) {
			case 0:
				this._blendInt = 65536;
				break;
			default:
				this._blendInt = 0;
			}
		} else this._blendInt = 0;
		this._blend = value;
		return value;
	}
	,get_blend: function() {
		return this._blend;
	}
	,simpleRenderSprite: function() {
		var result = (this.angle == 0 || this.bakedRotation > 0) && this.scale.x == 1 && this.scale.y == 1;
		if(this._flxFrame != null) result = result && (this.angle == 0 && this._flxFrame.additionalAngle == 0 || this.bakedRotation > 0);
		return result;
	}
	,get_simpleRender: function() {
		return this.simpleRenderSprite();
	}
	,set_antialiasing: function(val) {
		this.antialiasing = val;
		return val;
	}
	,removeAllFilters: function() {
		if(this.filters == null) return;
		while(this.filters.length != 0) this.filters.pop();
		this.updateAtlasInfo(true);
		this.drawFrame(true);
		this.filters = null;
	}
	,removeFilter: function(filter) {
		if(this.filters == null || filter == null) return;
		HxOverrides.remove(this.filters,filter);
		this.drawFrame(true);
		if(this.filters.length == 0) this.filters = null;
	}
	,setClipping: function(width,height) {
		var tempSpr = new org.flixel.FlxSprite(0,0,this._pixels);
		var diffSize = new org.flixel.util.FlxPoint(width - this.frameWidth,height - this.frameHeight);
		this.makeGraphic(width,height,0,true);
		this.stamp(tempSpr,diffSize.x / 2 | 0,diffSize.y / 2 | 0);
		this.x -= diffSize.x * 0.5;
		this.y -= diffSize.y * 0.5;
		tempSpr.destroy();
	}
	,addFilter: function(filter,widthInc,heightInc) {
		if(heightInc == null) heightInc = 0;
		if(widthInc == null) widthInc = 0;
		this.setClipping(this.frameWidth + widthInc,this.frameHeight + heightInc);
		if(this.filters == null) this.filters = new Array();
		this.filters.push(filter);
		if(this._pixelsBackup == null) {
			this._pixelsBackup = new flash.display.BitmapData(this._pixels.rect.width | 0,this._pixels.rect.height | 0);
			this._pixelsBackup.copyPixels(this._pixels,this._pixels.rect,this._flashPointZero);
		}
		this.updateAtlasInfo(true);
		this.resetFrameBitmapDatas();
		this.drawFrame(true);
	}
	,calcFrame: function(AreYouSure) {
		if(AreYouSure == null) AreYouSure = false;
		if(AreYouSure) {
			if(this.framePixels == null || this.framePixels.get_width() != this.frameWidth || this.framePixels.get_height() != this.frameHeight) {
				if(this.framePixels != null) this.framePixels.dispose();
				this.framePixels = new flash.display.BitmapData(this._flxFrame.sourceSize.x | 0,this._flxFrame.sourceSize.y | 0);
			}
			this.framePixels.copyPixels(this.getFlxFrameBitmapData(),this._flashRect,this._flashPointZero);
		}
		if(AreYouSure) {
			if(this._useColorTransform) this.framePixels.colorTransform(this._flashRect,this._colorTransform);
		}
		if(this._callback != null) this._callback(this._curAnim != null?this._curAnim.name:null,this._curFrame,this._curIndex);
		this.dirty = false;
		if(this.filters != null) {
			this._pixels.copyPixels(this._pixelsBackup,this._pixels.rect,this._flashPointZero);
			var _g = 0, _g1 = this.filters;
			while(_g < _g1.length) {
				var filter = _g1[_g];
				++_g;
				this._pixels.applyFilter(this._pixels,this._flashRect,this._flashPointZero,filter);
			}
		}
	}
	,pixelsOverlapPoint: function(point,Mask,Camera) {
		if(Mask == null) Mask = 255;
		if(Camera == null) Camera = org.flixel.FlxG.camera;
		this.getScreenXY(this._point,Camera);
		this._point.x = this._point.x - this.offset.x;
		this._point.y = this._point.y - this.offset.y;
		this._flashPoint.x = point.x - Camera.scroll.x - this._point.x;
		this._flashPoint.y = point.y - Camera.scroll.y - this._point.y;
		if(this._flashPoint.x < 0 || this._flashPoint.x > this.frameWidth || this._flashPoint.y < 0 || this._flashPoint.y > this.frameHeight) return false; else {
			var frameData = this.getFlxFrameBitmapData();
			var pixelColor = frameData.getPixel32(this._flashPoint.x | 0,this._flashPoint.y | 0);
			var pixelAlpha = pixelColor >> 24 & 255;
			return pixelAlpha * this.alpha >= Mask;
		}
	}
	,onScreenSprite: function(Camera) {
		if(Camera == null) Camera = org.flixel.FlxG.camera;
		this.getScreenXY(this._point,Camera);
		this._point.x = this._point.x - this.offset.x;
		this._point.y = this._point.y - this.offset.y;
		var result = false;
		var notRotated = this.angle == 0.0;
		if(this._flxFrame != null) notRotated = notRotated && this._flxFrame.additionalAngle != 0.0;
		if((notRotated || this.bakedRotation > 0) && this.scale.x == 1 && this.scale.y == 1) result = this._point.x + this.frameWidth > 0 && this._point.x < Camera.width && this._point.y + this.frameHeight > 0 && this._point.y < Camera.height; else {
			var halfWidth = 0.5 * this.frameWidth;
			var halfHeight = 0.5 * this.frameHeight;
			var absScaleX = this.scale.x > 0?this.scale.x:-this.scale.x;
			var absScaleY = this.scale.y > 0?this.scale.y:-this.scale.y;
			var radius = (this.frameWidth >= this.frameHeight?this.frameWidth:this.frameHeight) * (absScaleX >= absScaleY?absScaleX:absScaleY);
			this._point.x += halfWidth * this.scale.x;
			this._point.y += halfHeight * this.scale.y;
			result = this._point.x + radius > 0 && this._point.x - radius < Camera.width && this._point.y + radius > 0 && this._point.y - radius < Camera.height;
		}
		return result;
	}
	,onScreen: function(Camera) {
		return this.onScreenSprite(Camera);
	}
	,set_curAnim: function(AnimName) {
		this.play(AnimName);
		return AnimName;
	}
	,get_curAnim: function() {
		if(this._curAnim != null && !this.finished) return this._curAnim.name;
		return null;
	}
	,getFrameIndex: function(Frame) {
		return org.flixel.util.FlxArray.indexOf(this._framesData.frames,Frame,null);
	}
	,set_frameName: function(value) {
		if(this._textureData != null && this._framesData != null && this._framesData.framesHash.exists(value)) {
			this._curAnim = null;
			if(this._framesData != null) {
				this._flxFrame = this._framesData.framesHash.get(value);
				this._curIndex = this.getFrameIndex(this._flxFrame);
				this.resetFrameSize();
			}
			this.paused = true;
			this.dirty = true;
		}
		return value;
	}
	,get_frameName: function() {
		if(this._flxFrame != null && this._textureData != null) return this._flxFrame.name;
		return null;
	}
	,set_frame: function(Frame) {
		this._curAnim = null;
		this._curIndex = Frame % this.frames;
		if(this._framesData != null) {
			this._flxFrame = this._framesData.frames[this._curIndex];
			this.resetFrameSize();
		}
		this.paused = true;
		this.dirty = true;
		return Frame;
	}
	,get_frame: function() {
		return this._curIndex;
	}
	,set_color: function(Color) {
		Color &= 16777215;
		if(this._color == Color) return this._color;
		this._color = Color;
		if(this.alpha != 1 || this._color != 16777215) {
			if(this._colorTransform == null) this._colorTransform = new flash.geom.ColorTransform((this._color >> 16) / 255,(this._color >> 8 & 255) / 255,(this._color & 255) / 255,this.alpha); else {
				this._colorTransform.redMultiplier = (this._color >> 16) / 255;
				this._colorTransform.greenMultiplier = (this._color >> 8 & 255) / 255;
				this._colorTransform.blueMultiplier = (this._color & 255) / 255;
				this._colorTransform.alphaMultiplier = this.alpha;
			}
			this._useColorTransform = true;
		} else {
			if(this._colorTransform != null) {
				this._colorTransform.redMultiplier = 1;
				this._colorTransform.greenMultiplier = 1;
				this._colorTransform.blueMultiplier = 1;
				this._colorTransform.alphaMultiplier = 1;
			}
			this._useColorTransform = false;
		}
		this.dirty = true;
		this._red = (this._color >> 16) / 255;
		this._green = (this._color >> 8 & 255) / 255;
		this._blue = (this._color & 255) / 255;
		return this._color;
	}
	,get_color: function() {
		return this._color;
	}
	,set_alpha: function(Alpha) {
		if(Alpha > 1) Alpha = 1;
		if(Alpha < 0) Alpha = 0;
		if(Alpha == this.alpha) return this.alpha;
		this.alpha = Alpha;
		return this.alpha;
	}
	,set_facing: function(Direction) {
		if(this.facing != Direction) this.dirty = true;
		this.facing = Direction;
		return Direction;
	}
	,set_pixels: function(Pixels) {
		this._pixels = Pixels;
		this.set_width(this.frameWidth = this._pixels.get_width());
		this.set_height(this.frameHeight = this._pixels.get_height());
		this.resetHelpers();
		this._bitmapDataKey = org.flixel.FlxG.getCacheKeyFor(this._pixels);
		if(this._bitmapDataKey == null) {
			this._bitmapDataKey = org.flixel.FlxG.getUniqueBitmapKey();
			org.flixel.FlxG.addBitmap(Pixels,false,false,this._bitmapDataKey);
		}
		this.updateAtlasInfo(true);
		return this._pixels;
	}
	,get_pixels: function() {
		return this._pixels;
	}
	,replaceColor: function(Color,NewColor,FetchPositions) {
		if(FetchPositions == null) FetchPositions = false;
		var positions = null;
		if(FetchPositions) positions = new Array();
		var row = 0;
		var column;
		var rows = this._pixels.get_height();
		var columns = this._pixels.get_width();
		while(row < rows) {
			column = 0;
			while(column < columns) {
				if(this._pixels.getPixel32(column,row) == Color) {
					this._pixels.setPixel32(column,row,NewColor);
					if(FetchPositions) positions.push(new org.flixel.util.FlxPoint(column,row));
					this.dirty = true;
				}
				column++;
			}
			row++;
		}
		this.resetFrameBitmapDatas();
		this.updateAtlasInfo(true);
		return positions;
	}
	,centerOffsets: function(AdjustPosition) {
		if(AdjustPosition == null) AdjustPosition = false;
		this.offset.x = (this.frameWidth - this.width) * 0.5;
		this.offset.y = (this.frameHeight - this.height) * 0.5;
		if(AdjustPosition) {
			this.x += this.offset.x;
			this.y += this.offset.y;
		}
	}
	,setOriginToCorner: function() {
		this.origin.x = this.origin.y = 0;
	}
	,randomFrame: function() {
		this._curAnim = null;
		this._curIndex = (function($this) {
			var $r;
			org.flixel.util.FlxRandom.globalSeed = 69621 * (org.flixel.util.FlxRandom.globalSeed * 2147483647 | 0) % 2147483647 / 2147483647;
			if(org.flixel.util.FlxRandom.globalSeed <= 0) org.flixel.util.FlxRandom.globalSeed += 1;
			$r = org.flixel.util.FlxRandom.globalSeed;
			return $r;
		}(this)) * this.frames | 0;
		if(this._framesData != null) {
			this._flxFrame = this._framesData.frames[this._curIndex];
			this.resetFrameSize();
		}
		this.paused = true;
		this.dirty = true;
	}
	,getAnimation: function(name) {
		return this._animations.get(name);
	}
	,resumeAnimation: function() {
		if(this._curAnim != null && !this.finished) this.paused = false;
	}
	,pauseAnimation: function() {
		this.paused = true;
	}
	,gotoAndStop: function(Frame) {
		if(Frame == null) Frame = 0;
		if(this._curAnim == null || this._curAnim.frames.length <= Frame) return;
		this._frameTimer = 0;
		if(this._curAnim.delay <= 0) this.finished = true; else this.finished = false;
		this._curFrame = Frame;
		this._curIndex = this._curAnim.frames[this._curFrame];
		if(this._framesData != null) this._flxFrame = this._framesData.frames[this._curIndex];
		this.dirty = true;
		this.paused = true;
		return;
	}
	,gotoAndPlay: function(Frame) {
		if(Frame == null) Frame = 0;
		if(this._curAnim == null || this._curAnim.frames.length <= Frame) return;
		this.play(this._curAnim.name,true,Frame);
	}
	,play: function(AnimName,Force,Frame) {
		if(Frame == null) Frame = 0;
		if(Force == null) Force = false;
		if(!Force && this._curAnim != null && AnimName == this._curAnim.name && (this._curAnim.looped || !this.finished)) {
			this.paused = false;
			return;
		}
		this._curFrame = 0;
		this._curIndex = 0;
		if(this._framesData != null) this._flxFrame = this._framesData.frames[this._curIndex];
		this._frameTimer = 0;
		if(this._animations.exists(AnimName)) {
			this._curAnim = this._animations.get(AnimName);
			if(this._curAnim.delay <= 0) this.finished = true; else this.finished = false;
			if(Frame < 0) this._curFrame = Math.random() * this._curAnim.frames.length | 0; else if(this._curAnim.frames.length > Frame) this._curFrame = Frame;
			this._curIndex = this._curAnim.frames[this._curFrame];
			if(this._framesData != null) this._flxFrame = this._framesData.frames[this._curIndex];
			this.dirty = true;
			this.paused = false;
			return;
		}
		org.flixel.FlxG.warn("No animation called \"" + AnimName + "\"");
	}
	,addAnimationCallback: function(AnimationCallback) {
		this._callback = AnimationCallback;
	}
	,addAnimationByPrefixFromTexture: function(Name,Prefix,FrameRate,Looped) {
		if(Looped == null) Looped = true;
		if(FrameRate == null) FrameRate = 30;
		if(this._atlas != null && this._textureData != null) {
			var animFrames = new Array();
			var l = this._framesData.frames.length;
			var _g = 0;
			while(_g < l) {
				var i = _g++;
				if(StringTools.startsWith(this._framesData.frames[i].name,Prefix)) animFrames.push(this._framesData.frames[i]);
			}
			if(animFrames.length > 0) {
				var name = animFrames[0].name;
				var postFix = name.substring(name.indexOf(".",Prefix.length),name.length);
				org.flixel.FlxSprite.prefixLength = Prefix.length;
				org.flixel.FlxSprite.postfixLength = postFix.length;
				animFrames.sort(org.flixel.FlxSprite.frameSortFunction);
				var frameIndices = new Array();
				l = animFrames.length;
				var _g = 0;
				while(_g < l) {
					var i = _g++;
					frameIndices.push(this.getFrameIndex(animFrames[i]));
				}
				this._animations.set(Name,new org.flixel.system.FlxAnim(Name,frameIndices,FrameRate,Looped));
			}
		}
	}
	,addAnimationByIndiciesFromTexture: function(Name,Prefix,Indicies,Postfix,FrameRate,Looped) {
		if(Looped == null) Looped = true;
		if(FrameRate == null) FrameRate = 30;
		if(this._atlas != null && this._textureData != null) {
			var frameIndices = new Array();
			var l = Indicies.length;
			var _g = 0;
			while(_g < l) {
				var i = _g++;
				var name = Prefix + Indicies[i] + Postfix;
				if(this._framesData.framesHash.exists(name)) {
					var frameToAdd = this._framesData.framesHash.get(name);
					frameIndices.push(this.getFrameIndex(frameToAdd));
				}
			}
			if(frameIndices.length > 0) this._animations.set(Name,new org.flixel.system.FlxAnim(Name,frameIndices,FrameRate,Looped));
		}
	}
	,addAnimationByNamesFromTexture: function(Name,FrameNames,FrameRate,Looped) {
		if(Looped == null) Looped = true;
		if(FrameRate == null) FrameRate = 30;
		if(this._atlas != null && this._textureData != null) {
			var indices = new Array();
			var l = FrameNames.length;
			var _g = 0;
			while(_g < l) {
				var i = _g++;
				var name = FrameNames[i];
				if(this._framesData.framesHash.exists(name)) {
					var frameToAdd = this._framesData.framesHash.get(name);
					indices.push(this.getFrameIndex(frameToAdd));
				}
			}
			if(indices.length > 0) this._animations.set(Name,new org.flixel.system.FlxAnim(Name,indices,FrameRate,Looped));
		}
	}
	,addAnimation: function(Name,Frames,FrameRate,Looped) {
		if(Looped == null) Looped = true;
		if(FrameRate == null) FrameRate = 30;
		var numFrames = Frames.length - 1;
		var i = numFrames;
		while(i >= 0) {
			if(Frames[i] >= this.frames) Frames.splice(i,1);
			i--;
		}
		this._animations.set(Name,new org.flixel.system.FlxAnim(Name,Frames,FrameRate,Looped));
	}
	,drawFrame: function(Force) {
		if(Force == null) Force = false;
		this.calcFrame(true);
	}
	,updateAnimation: function() {
		if(this.bakedRotation > 0) {
			var oldIndex = this._curIndex;
			var angleHelper = Math.floor(this.angle % 360);
			while(angleHelper < 0) angleHelper += 360;
			this._curIndex = Math.floor(angleHelper / this.bakedRotation + 0.5);
			this._curIndex = this._curIndex % this.frames | 0;
			if(this._framesData != null) this._flxFrame = this._framesData.frames[this._curIndex];
			if(oldIndex != this._curIndex) this.dirty = true;
		} else if(this._curAnim != null && this._curAnim.delay > 0 && (this._curAnim.looped || !this.finished) && !this.paused) {
			this._frameTimer += org.flixel.FlxG.elapsed;
			while(this._frameTimer > this._curAnim.delay) {
				this._frameTimer = this._frameTimer - this._curAnim.delay;
				if(this._curFrame == this._curAnim.frames.length - 1) {
					if(this._curAnim.looped) this._curFrame = 0;
					this.finished = true;
				} else this._curFrame++;
				this._curIndex = this._curAnim.frames[this._curFrame];
				if(this._framesData != null) {
					this._flxFrame = this._framesData.frames[this._curIndex];
					this.resetFrameSize();
				}
				this.dirty = true;
			}
		}
		if(this.dirty) this.calcFrame();
	}
	,fill: function(Color) {
		this._pixels.fillRect(this._flashRect2,Color);
		if(this._pixels != this.framePixels) this.dirty = true;
		this.resetFrameBitmapDatas();
		this.updateAtlasInfo(true);
	}
	,drawCircle: function(X,Y,Radius,Color) {
		var gfx = org.flixel.FlxG.flashGfx;
		gfx.clear();
		gfx.beginFill(Color,1);
		gfx.drawCircle(X,Y,Radius);
		gfx.endFill();
		this._pixels.draw(org.flixel.FlxG.flashGfxSprite);
		this.dirty = true;
		this.resetFrameBitmapDatas();
		this.updateAtlasInfo(true);
	}
	,drawLine: function(StartX,StartY,EndX,EndY,Color,Thickness) {
		if(Thickness == null) Thickness = 1;
		var gfx = org.flixel.FlxG.flashGfx;
		gfx.clear();
		gfx.moveTo(StartX,StartY);
		var alphaComponent = (Color >> 24 & 255) / 255;
		if(alphaComponent <= 0) alphaComponent = 1;
		gfx.lineStyle(Thickness,Color,alphaComponent);
		gfx.lineTo(EndX,EndY);
		this._pixels.draw(org.flixel.FlxG.flashGfxSprite);
		this.dirty = true;
		this.resetFrameBitmapDatas();
		this.updateAtlasInfo(true);
	}
	,stamp: function(Brush,X,Y) {
		if(Y == null) Y = 0;
		if(X == null) X = 0;
		Brush.drawFrame();
		var bitmapData = Brush.framePixels;
		if((Brush.angle == 0 || Brush.bakedRotation > 0) && Brush.scale.x == 1 && Brush.scale.y == 1 && Brush.get_blend() == null) {
			this._flashPoint.x = X;
			this._flashPoint.y = Y;
			this._flashRect2.width = bitmapData._nmeTextureBuffer != null?bitmapData._nmeTextureBuffer.width:0;
			this._flashRect2.height = bitmapData._nmeTextureBuffer != null?bitmapData._nmeTextureBuffer.height:0;
			this._pixels.copyPixels(bitmapData,this._flashRect2,this._flashPoint,null,null,true);
			this._flashRect2.width = this._pixels.get_width();
			this._flashRect2.height = this._pixels.get_height();
			this.resetFrameBitmapDatas();
			return;
		}
		this._matrix.identity();
		this._matrix.translate(-Brush.origin.x,-Brush.origin.y);
		this._matrix.scale(Brush.scale.x,Brush.scale.y);
		if(Brush.angle != 0) this._matrix.rotate(Brush.angle * org.flixel.util.FlxAngle.RAD);
		this._matrix.translate(X + Brush.origin.x,Y + Brush.origin.y);
		var brushBlend = Brush.get_blend();
		this._pixels.draw(bitmapData,this._matrix,null,brushBlend,null,Brush.antialiasing);
		this.resetFrameBitmapDatas();
		this.updateAtlasInfo(true);
	}
	,draw: function() {
		if(this._atlas == null) return;
		if(this._flickerTimer != 0) {
			this._flicker = !this._flicker;
			if(this._flicker) return;
		}
		if(this.dirty) this.calcFrame();
		if(this.cameras == null) this.cameras = org.flixel.FlxG.cameras;
		var camera;
		var i = 0;
		var l = this.cameras.length;
		var drawItem;
		var currDrawData;
		var currIndex;
		var useAlpha = this.alpha < 1;
		var radians;
		var cos;
		var sin;
		while(i < l) {
			camera = this.cameras[i++];
			if(!this.onScreenSprite(camera) || !camera.visible || !camera.exists) continue;
			drawItem = camera.getDrawStackItem(this._atlas,useAlpha);
			currDrawData = drawItem.drawData;
			currIndex = drawItem.position;
			this._point.x = this.x - camera.scroll.x * this.scrollFactor.x - this.offset.x;
			this._point.y = this.y - camera.scroll.y * this.scrollFactor.y - this.offset.y;
			this._point.x = this._point.x + this.origin.x;
			this._point.y = this._point.y + this.origin.y;
			this._point.x = Math.floor(this._point.x);
			this._point.y = Math.floor(this._point.y);
			var csx = 1;
			var ssy = 0;
			var ssx = 0;
			var csy = 1;
			var x1 = this.origin.x - this._flxFrame.center.x;
			var y1 = this.origin.y - this._flxFrame.center.y;
			var x2 = x1;
			var y2 = y1;
			var facingMult = this._flipped != 0 && this.facing == 1?-1:1;
			var a = csx;
			var b = ssy;
			var c = ssx;
			var d = csy;
			if(!this.simpleRenderSprite()) {
				radians = -(this.angle + this._flxFrame.additionalAngle) * org.flixel.util.FlxAngle.RAD;
				cos = Math.cos(radians);
				sin = Math.sin(radians);
				csx = cos * this.scale.x * facingMult;
				ssy = sin * this.scale.y;
				ssx = sin * this.scale.x * facingMult;
				csy = cos * this.scale.y;
				if(this._flxFrame.rotated) {
					x2 = x1 * ssx - y1 * csy;
					y2 = x1 * csx + y1 * ssy;
					a = csy;
					b = ssx;
					c = ssy;
					d = csx;
				} else {
					x2 = x1 * csx + y1 * ssy;
					y2 = -x1 * ssx + y1 * csy;
					a = csx;
					b = ssy;
					c = ssx;
					d = csy;
				}
			} else {
				csx *= facingMult;
				x2 = x1 * csx + y1 * ssy;
				y2 = -x1 * ssx + y1 * csy;
				a *= facingMult;
			}
			currDrawData[currIndex++] = this._point.x - x2;
			currDrawData[currIndex++] = this._point.y - y2;
			currDrawData[currIndex++] = this._flxFrame.tileID;
			currDrawData[currIndex++] = a;
			currDrawData[currIndex++] = -c;
			currDrawData[currIndex++] = b;
			currDrawData[currIndex++] = d;
			if(useAlpha) currDrawData[currIndex++] = this.alpha;
			drawItem.position = currIndex;
			org.flixel.FlxBasic._VISIBLECOUNT++;
		}
	}
	,isColored: function() {
		return this._color < 16777215;
	}
	,update: function() {
		org.flixel.FlxObject.prototype.update.call(this);
		this.updateAnimation();
	}
	,resetHelpers: function() {
		this.resetSize();
		this._flashRect2.x = 0;
		this._flashRect2.y = 0;
		this._flashRect2.width = this._pixels.get_width();
		this._flashRect2.height = this._pixels.get_height();
		this.setOriginToCenter();
		if(this._textureData == null) {
			this.frames = this._flashRect2.width / (this._flashRect.width + 1) * this._flashRect2.height / (this._flashRect.height + 1) | 0;
			if(this.frames == 0) this.frames = 1;
		} else this.frames = this._framesData.frames.length;
		if(this._flipped > 0) this.frames *= 2;
		this._curIndex = 0;
		if(this._framesData != null) this._flxFrame = this._framesData.frames[this._curIndex];
		this._halfWidth = this.frameWidth * 0.5;
		this._halfHeight = this.frameHeight * 0.5;
	}
	,setOriginToCenter: function() {
		this.origin.make(this.frameWidth * 0.5,this.frameHeight * 0.5);
	}
	,resetSizeFromFrame: function() {
		this.set_width(this.frameWidth);
		this.set_height(this.frameHeight);
	}
	,resetFrameSize: function() {
		this.frameWidth = this._flxFrame.sourceSize.x | 0;
		this.frameHeight = this._flxFrame.sourceSize.y | 0;
		this.resetSize();
	}
	,resetSize: function() {
		this._flashRect.x = 0;
		this._flashRect.y = 0;
		this._flashRect.width = this.frameWidth;
		this._flashRect.height = this.frameHeight;
	}
	,loadRotatedImageFromTexture: function(Data,Image,Rotations,AntiAliasing,AutoBuffer) {
		if(AutoBuffer == null) AutoBuffer = false;
		if(AntiAliasing == null) AntiAliasing = false;
		if(Rotations == null) Rotations = 16;
		this.loadImageFromTexture(Data);
		this.set_frameName(Image);
		this.set_antialiasing(AntiAliasing);
		return this;
	}
	,loadImageFromTexture: function(Data,Reverse,Unique,FrameName) {
		if(Unique == null) Unique = false;
		if(Reverse == null) Reverse = false;
		this.bakedRotation = 0;
		this._textureData = Data;
		this._pixels = org.flixel.FlxG.addBitmap(Data.assetName,false,Unique);
		this._bitmapDataKey = org.flixel.FlxG._lastBitmapDataKey;
		if(Reverse) this._flipped = this._pixels.get_width() >> 1; else this._flipped = 0;
		this.updateAtlasInfo();
		this.resetHelpers();
		if(FrameName != null) this.set_frameName(FrameName);
		return this;
	}
	,makeGraphic: function(Width,Height,Color,Unique,Key) {
		if(Unique == null) Unique = false;
		if(Color == null) Color = -1;
		this.bakedRotation = 0;
		this._pixels = org.flixel.FlxG.createBitmap(Width,Height,Color,Unique,Key);
		this._bitmapDataKey = org.flixel.FlxG._lastBitmapDataKey;
		this.set_width(this.frameWidth = this._pixels.get_width());
		this.set_height(this.frameHeight = this._pixels.get_height());
		this.resetHelpers();
		this.updateAtlasInfo();
		return this;
	}
	,loadRotatedGraphic: function(Graphic,Rotations,Frame,AntiAliasing,AutoBuffer,Key) {
		if(AutoBuffer == null) AutoBuffer = false;
		if(AntiAliasing == null) AntiAliasing = false;
		if(Frame == null) Frame = -1;
		if(Rotations == null) Rotations = 16;
		var rows = Math.sqrt(Rotations) | 0;
		var brush = org.flixel.FlxG.addBitmap(Graphic,false,false,Key);
		if(Frame >= 0) {
			var full = brush;
			brush = new flash.display.BitmapData(full._nmeTextureBuffer != null?full._nmeTextureBuffer.height:0,full._nmeTextureBuffer != null?full._nmeTextureBuffer.height:0);
			var rx = Frame * (brush._nmeTextureBuffer != null?brush._nmeTextureBuffer.width:0);
			var ry = 0;
			var fw = full._nmeTextureBuffer != null?full._nmeTextureBuffer.width:0;
			if(rx >= fw) {
				ry = (rx / fw | 0) * (brush._nmeTextureBuffer != null?brush._nmeTextureBuffer.height:0);
				rx %= fw;
			}
			this._flashRect.x = rx;
			this._flashRect.y = ry;
			this._flashRect.width = brush._nmeTextureBuffer != null?brush._nmeTextureBuffer.width:0;
			this._flashRect.height = brush._nmeTextureBuffer != null?brush._nmeTextureBuffer.height:0;
			brush.copyPixels(full,this._flashRect,this._flashPointZero);
		}
		var max = brush._nmeTextureBuffer != null?brush._nmeTextureBuffer.width:0;
		if((brush._nmeTextureBuffer != null?brush._nmeTextureBuffer.height:0) > max) max = brush._nmeTextureBuffer != null?brush._nmeTextureBuffer.height:0;
		if(AutoBuffer) max = max * 1.5 | 0;
		var columns = Math.ceil(Rotations / rows);
		this.set_width(max * columns);
		this.set_height(max * rows);
		var key = "";
		if(js.Boot.__instanceof(Graphic,String)) key = Graphic; else if(js.Boot.__instanceof(Graphic,Class)) key = Type.getClassName(Graphic); else if(js.Boot.__instanceof(Graphic,flash.display.BitmapData) && Key != null) key = Key; else return null;
		key += ":" + Frame + ":" + this.width + "x" + this.height + ":" + Rotations;
		var skipGen = org.flixel.FlxG.checkBitmapCache(key);
		this._pixels = org.flixel.FlxG.createBitmap((this.width | 0) + columns,(this.height | 0) + rows,0,true,key);
		this._bitmapDataKey = org.flixel.FlxG._lastBitmapDataKey;
		this.set_width(this.frameWidth = this._pixels.get_width());
		this.set_height(this.frameHeight = this._pixels.get_height());
		this.bakedRotation = 360 / Rotations;
		if(!skipGen) {
			var row = 0;
			var column;
			var bakedAngle = 0;
			var halfBrushWidth = (brush._nmeTextureBuffer != null?brush._nmeTextureBuffer.width:0) * 0.5 | 0;
			var halfBrushHeight = (brush._nmeTextureBuffer != null?brush._nmeTextureBuffer.height:0) * 0.5 | 0;
			var midpointX = max * 0.5 | 0;
			var midpointY = max * 0.5 | 0;
			while(row < rows) {
				column = 0;
				while(column < columns) {
					this._matrix.identity();
					this._matrix.translate(-halfBrushWidth,-halfBrushHeight);
					this._matrix.rotate(bakedAngle * org.flixel.util.FlxAngle.RAD);
					this._matrix.translate(max * column + midpointX + column,midpointY + row);
					bakedAngle += this.bakedRotation;
					this._pixels.draw(brush,this._matrix,null,null,null,AntiAliasing);
					column++;
				}
				midpointY += max;
				row++;
			}
		}
		this.frameWidth = this.frameHeight = max;
		this.set_width(this.set_height(max));
		this.resetHelpers();
		if(AutoBuffer) {
			this.set_width(brush._nmeTextureBuffer != null?brush._nmeTextureBuffer.width:0);
			this.set_height(brush._nmeTextureBuffer != null?brush._nmeTextureBuffer.height:0);
			this.centerOffsets();
		}
		this.set_antialiasing(AntiAliasing);
		this.updateAtlasInfo();
		return this;
	}
	,loadGraphic: function(Graphic,Animated,Reverse,Width,Height,Unique,Key) {
		if(Unique == null) Unique = false;
		if(Height == null) Height = 0;
		if(Width == null) Width = 0;
		if(Reverse == null) Reverse = false;
		if(Animated == null) Animated = false;
		this.bakedRotation = 0;
		this._pixels = org.flixel.FlxG.addBitmap(Graphic,false,Unique,Key);
		this._bitmapDataKey = org.flixel.FlxG._lastBitmapDataKey;
		if(Reverse) this._flipped = this._pixels.get_width() >> 1; else this._flipped = 0;
		if(Width == 0) {
			if(Animated) Width = this._pixels.get_height(); else if(this._flipped > 0) Width = this._pixels.get_width(); else Width = this._pixels.get_width();
		}
		this.set_width(this.frameWidth = Width);
		if(Height == 0) {
			if(Animated) Height = this.width | 0; else Height = this._pixels.get_height();
		}
		if(Key != null && (Width != 0 || Height != 0)) Key += "FrameSize:" + Width + "_" + Height;
		this._pixels = org.flixel.FlxG.addBitmap(Graphic,false,Unique,Key,Width,Height);
		this._bitmapDataKey = org.flixel.FlxG._lastBitmapDataKey;
		this.set_height(this.frameHeight = Height);
		this.resetHelpers();
		this.updateAtlasInfo();
		return this;
	}
	,loadFromSprite: function(Sprite) {
		this.nullTextureData();
		this._pixels = Sprite.get_pixels();
		this._flipped = Sprite.get_flipped();
		this.bakedRotation = Sprite.bakedRotation;
		this._bitmapDataKey = Sprite.get_bitmapDataKey();
		this._textureData = Sprite._textureData;
		this.set_width(this.frameWidth = Sprite.frameWidth);
		this.set_height(this.frameHeight = Sprite.frameHeight);
		if(this.bakedRotation > 0) {
			this.set_width(Sprite.width);
			this.set_height(Sprite.height);
			this.centerOffsets();
		}
		this.set_atlas(Sprite.get_atlas());
		this.resetHelpers();
		this.set_antialiasing(Sprite.antialiasing);
		this.set_frame(Sprite.get_frame());
		return this;
	}
	,destroy: function() {
		if(this._animations != null) {
			var $it0 = ((function(_e) {
				return function() {
					return _e.iterator();
				};
			})(this._animations))();
			while( $it0.hasNext() ) {
				var anim = $it0.next();
				if(anim != null) anim.destroy();
			}
			this._animations = null;
		}
		this._flashPoint = null;
		this._flashRect = null;
		this._flashRect2 = null;
		this._flashPointZero = null;
		this.offset = null;
		this.origin = null;
		this.scale = null;
		this._curAnim = null;
		this._matrix = null;
		this._callback = null;
		this._colorTransform = null;
		if(this.framePixels != null) this.framePixels.dispose();
		this.framePixels = null;
		this._blend = null;
		this._textureData = null;
		this._flxFrame = null;
		org.flixel.FlxObject.prototype.destroy.call(this);
	}
	,get_flipped: function() {
		return this._flipped;
	}
	,__class__: org.flixel.FlxSprite
	,__properties__: $extend(org.flixel.FlxObject.prototype.__properties__,{set_facing:"set_facing",set_color:"set_color",get_color:"get_color",set_frame:"set_frame",get_frame:"get_frame",get_flipped:"get_flipped",set_curAnim:"set_curAnim",get_curAnim:"get_curAnim",set_pixels:"set_pixels",get_pixels:"get_pixels",set_alpha:"set_alpha",set_frameName:"set_frameName",get_frameName:"get_frameName",set_antialiasing:"set_antialiasing",get_simpleRender:"get_simpleRender",set_blend:"set_blend",get_blend:"get_blend"})
});
var Banana = function(_x,_y) {
	org.flixel.FlxSprite.call(this,_x - 12,_y - 12);
	this.loadGraphic(openfl.Assets.getBitmapData("assets/images/banana.png"),true,false,24,24);
	this.addAnimation("wait",[0,0,0,1,1,2,2,2,2,1],30);
	this.play("wait");
	this.centerOffsets();
	this.set_solid(true);
	this.immovable = false;
	this.mass = 0.1;
	this.scaleSpd = 0.0;
};
$hxClasses["Banana"] = Banana;
Banana.__name__ = ["Banana"];
Banana.__super__ = org.flixel.FlxSprite;
Banana.prototype = $extend(org.flixel.FlxSprite.prototype,{
	deadStart: function() {
		if(!this.alive) return;
		this.velocity.x = 0;
		this.velocity.y = 0;
		this.alive = false;
		this.set_solid(false);
		this.scaleSpd = 3.0;
		this.set_alpha(0.7);
	}
	,update: function() {
		if(!this.alive) {
			this.scale.x += this.scaleSpd;
			this.scale.y += this.scaleSpd;
			this.scaleSpd -= this.scaleSpd / 5;
			var _g = this;
			_g.set_alpha(_g.alpha - 0.05);
			if(this.alpha <= 0) this.kill();
		} else if((this.touching & 4369) > 0) this.deadStart();
		org.flixel.FlxSprite.prototype.update.call(this);
	}
	,__class__: Banana
});
var EReg = function(r,opt) {
	opt = opt.split("u").join("");
	this.r = new RegExp(r,opt);
};
$hxClasses["EReg"] = EReg;
EReg.__name__ = ["EReg"];
EReg.prototype = {
	replace: function(s,by) {
		return s.replace(this.r,by);
	}
	,matchedPos: function() {
		if(this.r.m == null) throw "No string matched";
		return { pos : this.r.m.index, len : this.r.m[0].length};
	}
	,matchedRight: function() {
		if(this.r.m == null) throw "No string matched";
		var sz = this.r.m.index + this.r.m[0].length;
		return this.r.s.substr(sz,this.r.s.length - sz);
	}
	,matched: function(n) {
		return this.r.m != null && n >= 0 && n < this.r.m.length?this.r.m[n]:(function($this) {
			var $r;
			throw "EReg::matched";
			return $r;
		}(this));
	}
	,match: function(s) {
		if(this.r.global) this.r.lastIndex = 0;
		this.r.m = this.r.exec(s);
		this.r.s = s;
		return this.r.m != null;
	}
	,__class__: EReg
}
var HxOverrides = function() { }
$hxClasses["HxOverrides"] = HxOverrides;
HxOverrides.__name__ = ["HxOverrides"];
HxOverrides.dateStr = function(date) {
	var m = date.getMonth() + 1;
	var d = date.getDate();
	var h = date.getHours();
	var mi = date.getMinutes();
	var s = date.getSeconds();
	return date.getFullYear() + "-" + (m < 10?"0" + m:"" + m) + "-" + (d < 10?"0" + d:"" + d) + " " + (h < 10?"0" + h:"" + h) + ":" + (mi < 10?"0" + mi:"" + mi) + ":" + (s < 10?"0" + s:"" + s);
}
HxOverrides.strDate = function(s) {
	switch(s.length) {
	case 8:
		var k = s.split(":");
		var d = new Date();
		d.setTime(0);
		d.setUTCHours(k[0]);
		d.setUTCMinutes(k[1]);
		d.setUTCSeconds(k[2]);
		return d;
	case 10:
		var k = s.split("-");
		return new Date(k[0],k[1] - 1,k[2],0,0,0);
	case 19:
		var k = s.split(" ");
		var y = k[0].split("-");
		var t = k[1].split(":");
		return new Date(y[0],y[1] - 1,y[2],t[0],t[1],t[2]);
	default:
		throw "Invalid date format : " + s;
	}
}
HxOverrides.cca = function(s,index) {
	var x = s.charCodeAt(index);
	if(x != x) return undefined;
	return x;
}
HxOverrides.substr = function(s,pos,len) {
	if(pos != null && pos != 0 && len != null && len < 0) return "";
	if(len == null) len = s.length;
	if(pos < 0) {
		pos = s.length + pos;
		if(pos < 0) pos = 0;
	} else if(len < 0) len = s.length + len - pos;
	return s.substr(pos,len);
}
HxOverrides.remove = function(a,obj) {
	var i = 0;
	var l = a.length;
	while(i < l) {
		if(a[i] == obj) {
			a.splice(i,1);
			return true;
		}
		i++;
	}
	return false;
}
HxOverrides.iter = function(a) {
	return { cur : 0, arr : a, hasNext : function() {
		return this.cur < this.arr.length;
	}, next : function() {
		return this.arr[this.cur++];
	}};
}
var Lambda = function() { }
$hxClasses["Lambda"] = Lambda;
Lambda.__name__ = ["Lambda"];
Lambda.array = function(it) {
	var a = new Array();
	var $it0 = $iterator(it)();
	while( $it0.hasNext() ) {
		var i = $it0.next();
		a.push(i);
	}
	return a;
}
Lambda.indexOf = function(it,v) {
	var i = 0;
	var $it0 = $iterator(it)();
	while( $it0.hasNext() ) {
		var v2 = $it0.next();
		if(v == v2) return i;
		i++;
	}
	return -1;
}
var Laps = function() {
	Laps.initLaps();
};
$hxClasses["Laps"] = Laps;
Laps.__name__ = ["Laps"];
Laps.initLaps = function() {
	if(Laps.laps == null) {
		Laps.laps = new Array();
		var deftime = 900000;
		var _g = 0;
		while(_g < 5) {
			var i = _g++;
			Laps.laps.push(deftime);
			deftime += 60000;
		}
		Laps.nowLap = deftime;
		Laps.playCount = 0;
	}
}
Laps.setLapsTextsPos = function(_x,_y,nowDisp) {
	Laps.initLaps();
	var w = 132;
	var h = 120;
	if(Laps.lapsTexts != null) Laps.lapsTexts.destroy();
	Laps.lapsTexts = null;
	Laps.lapsTexts = new org.flixel.FlxGroup();
	Laps.lapsTextWidth = w;
	Laps.lapsTextHeight = h;
	var lineh = 16;
	var x = _x;
	var y = _y;
	var bx = _x;
	var by = _y;
	var bg = new org.flixel.FlxSprite(bx,by);
	bg.makeGraphic(w,h,1610612736);
	Laps.lapsTexts.add(bg);
	x += 4;
	y += 4;
	var t = new org.flixel.FlxText(x + 16,y,160,"RANKING");
	t.setFormat("PlayBold",14,-1,"left",2003199,true);
	Laps.lapsTexts.add(t);
	y += lineh + 4;
	var _g1 = 0, _g = Laps.laps.length;
	while(_g1 < _g) {
		var i = _g1++;
		var lap = Laps.laps[i];
		var str = StringTools.lpad("" + (i + 1)," ",2);
		str += "  " + Laps.getTimeString(lap);
		var col = -1;
		if(nowDisp && Laps.nowLap == lap) {
			str += " < You!";
			var l = new org.flixel.FlxSprite(bx,y);
			l.makeGraphic(w,lineh,-2130771968);
			Laps.lapsTexts.add(l);
			nowDisp = false;
		}
		var t2 = new org.flixel.FlxText(x,y,160,str);
		t2.setFormat("PlayBold",14,col,"left",2003199,true);
		Laps.lapsTexts.add(t2);
		y += lineh;
	}
	return Laps.lapsTexts;
}
Laps.setNowLap = function(n) {
	Laps.initLaps();
	Laps.nowLap = n;
	Laps.laps.push(Laps.nowLap);
	Laps.laps.sort(function(a,b) {
		if(a == b) return 0;
		if(a > b) return 1; else return -1;
	});
	Laps.laps.pop();
}
Laps.checkNewRecord = function() {
	Laps.initLaps();
	if(Laps.laps[0] == Laps.nowLap) return true;
	return false;
}
Laps.incPlayCount = function() {
	Laps.initLaps();
	Laps.playCount++;
}
Laps.getPlayCount = function() {
	Laps.initLaps();
	return Laps.playCount;
}
Laps.gettimeStringDiff = function(starttime,endtime) {
	var t = endtime - starttime;
	if(t < 0) t = 0;
	return Laps.getTimeString(t);
}
Laps.getTimeString = function(t) {
	if(t < 0) t = 0;
	var m = t % 1000;
	t = Math.floor((t - m) / 1000);
	var ss = t % 60;
	t = Math.floor((t - ss) / 60);
	var mm = t % 60;
	var hh = Math.floor((t - mm) / 60);
	var str = StringTools.lpad(Std.string(hh),"0",2);
	str += ":" + StringTools.lpad(Std.string(mm),"0",2);
	str += ":" + StringTools.lpad(Std.string(ss),"0",2);
	return str;
}
Laps.prototype = {
	__class__: Laps
}
var List = function() {
	this.length = 0;
};
$hxClasses["List"] = List;
List.__name__ = ["List"];
List.prototype = {
	iterator: function() {
		return { h : this.h, hasNext : function() {
			return this.h != null;
		}, next : function() {
			if(this.h == null) return null;
			var x = this.h[0];
			this.h = this.h[1];
			return x;
		}};
	}
	,isEmpty: function() {
		return this.h == null;
	}
	,pop: function() {
		if(this.h == null) return null;
		var x = this.h[0];
		this.h = this.h[1];
		if(this.h == null) this.q = null;
		this.length--;
		return x;
	}
	,first: function() {
		return this.h == null?null:this.h[0];
	}
	,push: function(item) {
		var x = [item,this.h];
		this.h = x;
		if(this.q == null) this.q = x;
		this.length++;
	}
	,add: function(item) {
		var x = [item];
		if(this.h == null) this.h = x; else this.q[1] = x;
		this.q = x;
		this.length++;
	}
	,__class__: List
}
org.flixel.FlxTypedGroup = function(MaxSize) {
	if(MaxSize == null) MaxSize = 0;
	org.flixel.FlxBasic.call(this);
	this.members = new Array();
	this.length = 0;
	this.set_maxSize(Math.abs(MaxSize) | 0);
	this._marker = 0;
	this._sortIndex = null;
	this.autoReviveMembers = false;
};
$hxClasses["org.flixel.FlxTypedGroup"] = org.flixel.FlxTypedGroup;
org.flixel.FlxTypedGroup.__name__ = ["org","flixel","FlxTypedGroup"];
org.flixel.FlxTypedGroup.__super__ = org.flixel.FlxBasic;
org.flixel.FlxTypedGroup.prototype = $extend(org.flixel.FlxBasic.prototype,{
	sortHandler: function(Obj1,Obj2) {
		var prop1 = Reflect.getProperty(Obj1,this._sortIndex);
		var prop2 = Reflect.getProperty(Obj2,this._sortIndex);
		if(prop1 < prop2) return this._sortOrder; else if(prop1 > prop2) return -this._sortOrder;
		return 0;
	}
	,revive: function() {
		org.flixel.FlxBasic.prototype.revive.call(this);
		if(this.autoReviveMembers) {
			var basic;
			var i = 0;
			while(i < this.length) {
				basic = this.members[i++];
				if(basic != null && !basic.exists) basic.revive();
			}
		}
	}
	,kill: function() {
		var basic;
		var i = 0;
		while(i < this.length) {
			basic = this.members[i++];
			if(basic != null && basic.exists) basic.kill();
		}
		org.flixel.FlxBasic.prototype.kill.call(this);
	}
	,clear: function() {
		this.length = 0;
		this.members.splice(0,this.members.length);
	}
	,getRandom: function(StartIndex,Length) {
		if(Length == null) Length = 0;
		if(StartIndex == null) StartIndex = 0;
		if(StartIndex < 0) StartIndex = 0;
		if(Length <= 0) Length = this.length;
		return org.flixel.util.FlxArray.getRandom(this.members,StartIndex,Length);
	}
	,countDead: function() {
		var count = -1;
		var basic;
		var i = 0;
		while(i < this.length) {
			basic = this.members[i++];
			if(basic != null) {
				if(count < 0) count = 0;
				if(!basic.alive) count++;
			}
		}
		return count;
	}
	,countLiving: function() {
		var count = -1;
		var basic;
		var i = 0;
		while(i < this.length) {
			basic = this.members[i++];
			if(basic != null) {
				if(count < 0) count = 0;
				if(basic.exists && basic.alive) count++;
			}
		}
		return count;
	}
	,getFirstDead: function() {
		var basic;
		var i = 0;
		while(i < this.length) {
			basic = this.members[i++];
			if(basic != null && !basic.alive) return basic;
		}
		return null;
	}
	,getFirstAlive: function() {
		var basic;
		var i = 0;
		while(i < this.length) {
			basic = this.members[i++];
			if(basic != null && basic.exists && basic.alive) return basic;
		}
		return null;
	}
	,getFirstExtant: function() {
		var basic;
		var i = 0;
		while(i < this.length) {
			basic = this.members[i++];
			if(basic != null && basic.exists) return basic;
		}
		return null;
	}
	,getFirstNull: function() {
		var basic;
		var i = 0;
		var l = this.members.length;
		while(i < l) if(this.members[i] == null) return i; else i++;
		return -1;
	}
	,getFirstAvailable: function(ObjectClass) {
		var basic;
		var i = 0;
		while(i < this.length) {
			basic = this.members[i++];
			if(basic != null && !basic.exists && (ObjectClass == null || js.Boot.__instanceof(basic,ObjectClass))) return basic;
		}
		return null;
	}
	,callAll: function(FunctionName,Recurse) {
		if(Recurse == null) Recurse = true;
		var basic;
		var i = 0;
		while(i < this.length) {
			basic = this.members[i++];
			if(basic != null) {
				if(Recurse && js.Boot.__instanceof(basic,org.flixel.FlxTypedGroup)) basic.callAll(FunctionName,Recurse); else Reflect.getProperty(basic,FunctionName).apply(basic,[]);
			}
		}
	}
	,setAll: function(VariableName,Value,Recurse) {
		if(Recurse == null) Recurse = true;
		var basic;
		var i = 0;
		while(i < this.length) {
			basic = this.members[i++];
			if(basic != null) {
				if(Recurse && js.Boot.__instanceof(basic,org.flixel.FlxTypedGroup)) basic.setAll(VariableName,Value,Recurse); else Reflect.setProperty(basic,VariableName,Value);
			}
		}
	}
	,sort: function(Index,Order) {
		if(Order == null) Order = -1;
		if(Index == null) Index = "y";
		this._sortIndex = Index;
		this._sortOrder = Order;
		this.members.sort($bind(this,this.sortHandler));
	}
	,replace: function(OldObject,NewObject) {
		var index = org.flixel.util.FlxArray.indexOf(this.members,OldObject,null);
		if(index < 0 || index >= this.members.length) return null;
		this.members[index] = NewObject;
		return NewObject;
	}
	,remove: function(Object,Splice) {
		if(Splice == null) Splice = false;
		if(this.members == null) return null;
		var index = org.flixel.util.FlxArray.indexOf(this.members,Object,null);
		if(index < 0 || index >= this.members.length) return null;
		if(Splice) this.members.splice(index,1); else this.members[index] = null;
		return Object;
	}
	,recycle: function(ObjectClass,ContructorArgs) {
		if(ContructorArgs == null) ContructorArgs = [];
		var basic;
		if(this.maxSize > 0) {
			if(this.length < this.maxSize) {
				if(ObjectClass == null) return null;
				return this.add(Type.createInstance(ObjectClass,ContructorArgs));
			} else {
				basic = this.members[this._marker++];
				if(this._marker >= this.maxSize) this._marker = 0;
				return basic;
			}
		} else {
			basic = this.getFirstAvailable(ObjectClass);
			if(basic != null) return basic;
			if(ObjectClass == null) return null;
			return this.add(Type.createInstance(ObjectClass,ContructorArgs));
		}
	}
	,set_atlas: function(value) {
		if(this._atlas != value) {
			if(value == null) {
				this._node = null;
				this._framesData = null;
			}
		}
		if(this._atlas != null) {
			var _g = 0, _g1 = this.members;
			while(_g < _g1.length) {
				var basic = _g1[_g];
				++_g;
				if(basic != null) this.setGroupAtlas(basic);
			}
		}
		this._atlas = value;
		return value;
	}
	,setGroupAtlas: function(Object) {
		if(this._atlas != null) Object.set_atlas(this._atlas);
	}
	,add: function(Object) {
		if(Object == null) {
			org.flixel.FlxG.warn("Cannot add a `null` object to a FlxGroup.");
			return null;
		}
		if(org.flixel.util.FlxArray.indexOf(this.members,Object,null) >= 0) return Object;
		var i = 0;
		var l = this.members.length;
		while(i < l) {
			if(this.members[i] == null) {
				this.members[i] = Object;
				if(i >= this.length) this.length = i + 1;
				this.setGroupAtlas(Object);
				return Object;
			}
			i++;
		}
		if(this.maxSize > 0) {
			if(this.members.length >= this.maxSize) return Object; else if(this.members.length * 2 <= this.maxSize) org.flixel.util.FlxArray.setLength(this.members,this.members.length * 2); else org.flixel.util.FlxArray.setLength(this.members,this.maxSize);
		} else org.flixel.util.FlxArray.setLength(this.members,this.members.length * 2);
		this.setGroupAtlas(Object);
		this.members[i] = Object;
		this.length = i + 1;
		return Object;
	}
	,set_maxSize: function(Size) {
		this.maxSize = Math.abs(Size) | 0;
		if(this._marker >= this.maxSize) this._marker = 0;
		if(this.maxSize == 0 || this.members == null || this.maxSize >= this.members.length) return this.maxSize;
		var basic;
		var i = this.maxSize;
		var l = this.members.length;
		while(i < l) {
			basic = this.members[i++];
			if(basic != null) basic.destroy();
		}
		this.length = this.maxSize;
		org.flixel.util.FlxArray.setLength(this.members,this.maxSize);
		return this.maxSize;
	}
	,drawDebug: function() {
		var basic;
		var i = 0;
		while(i < this.length) {
			basic = this.members[i++];
			if(basic != null && basic.exists && basic.visible) basic.drawDebug();
		}
	}
	,draw: function() {
		var basic;
		var i = 0;
		while(i < this.length) {
			basic = this.members[i++];
			if(basic != null && basic.exists && basic.visible) basic.draw();
		}
	}
	,update: function() {
		var basic;
		var i = 0;
		while(i < this.length) {
			basic = this.members[i++];
			if(basic != null && basic.exists && basic.active) {
				basic.update();
				if(basic.get_hasTween()) basic.updateTweens();
			}
		}
		if(this.get_hasTween()) this.updateTweens();
	}
	,destroy: function() {
		if(this.members != null) {
			var basic;
			var i = 0;
			while(i < this.length) {
				basic = this.members[i++];
				if(basic != null) basic.destroy();
			}
			this.members = null;
		}
		this._sortIndex = null;
		org.flixel.FlxBasic.prototype.destroy.call(this);
	}
	,__class__: org.flixel.FlxTypedGroup
	,__properties__: $extend(org.flixel.FlxBasic.prototype.__properties__,{set_maxSize:"set_maxSize"})
});
org.flixel.FlxGroup = function(MaxSize) {
	if(MaxSize == null) MaxSize = 0;
	org.flixel.FlxTypedGroup.call(this,MaxSize);
};
$hxClasses["org.flixel.FlxGroup"] = org.flixel.FlxGroup;
org.flixel.FlxGroup.__name__ = ["org","flixel","FlxGroup"];
org.flixel.FlxGroup.__super__ = org.flixel.FlxTypedGroup;
org.flixel.FlxGroup.prototype = $extend(org.flixel.FlxTypedGroup.prototype,{
	__class__: org.flixel.FlxGroup
});
var LogoStageClear = function() {
	org.flixel.FlxGroup.call(this);
	var img = openfl.Assets.getBitmapData("assets/images/stageclear.png");
	var tx = (org.flixel.FlxG.width - (img._nmeTextureBuffer != null?img._nmeTextureBuffer.width:0)) / 2;
	var ty = 120;
	this.logo = new org.flixel.FlxSprite(tx,ty);
	this.logo.loadGraphic(img,false,false,img._nmeTextureBuffer != null?img._nmeTextureBuffer.width:0,img._nmeTextureBuffer != null?img._nmeTextureBuffer.height:0);
	this.logo.scrollFactor = new org.flixel.util.FlxPoint();
	this.logo.set_solid(false);
	this.logo.exists = false;
	this.add(this.logo);
	img = openfl.Assets.getBitmapData("assets/images/itsanewrecord.png");
	tx = (org.flixel.FlxG.width - (img._nmeTextureBuffer != null?img._nmeTextureBuffer.width:0)) / 2;
	ty = 260;
	this.newrecord = new org.flixel.FlxSprite(tx,ty);
	this.newrecord.loadGraphic(img,false,false,img._nmeTextureBuffer != null?img._nmeTextureBuffer.width:0,img._nmeTextureBuffer != null?img._nmeTextureBuffer.height:0);
	this.newrecord.scrollFactor = new org.flixel.util.FlxPoint();
	this.newrecord.set_solid(false);
	this.newrecord.exists = false;
	this.add(this.newrecord);
	this.step = 0;
	this.myAlive = false;
};
$hxClasses["LogoStageClear"] = LogoStageClear;
LogoStageClear.__name__ = ["LogoStageClear"];
LogoStageClear.__super__ = org.flixel.FlxGroup;
LogoStageClear.prototype = $extend(org.flixel.FlxGroup.prototype,{
	update: function() {
		org.flixel.FlxGroup.prototype.update.call(this);
		if(!this.myAlive) return;
		var difftime = flash.Lib.getTimer() - this.startTime;
		var _g = this;
		switch(_g.step) {
		case 0:
			if(difftime >= 3000) {
				if(Laps.checkNewRecord()) this.newrecord.exists = true;
				this.step++;
			}
			break;
		case 1:
			if(difftime >= 5300) {
				var mvt2 = new org.flixel.tweens.misc.MultiVarTween(null,8);
				mvt2.tween(this.logo,{ alpha : 0},0.5);
				this.logo.addTween(mvt2);
				var mvt3 = new org.flixel.tweens.misc.MultiVarTween(null,8);
				mvt3.tween(this.newrecord,{ alpha : 0},0.5);
				this.newrecord.addTween(mvt3);
				this.startTime = flash.Lib.getTimer();
				this.step++;
			}
			break;
		case 2:
			if(this.logo.alpha <= 0) {
				this.step++;
				this.logo.set_alpha(1.0);
				this.logo.exists = false;
				this.newrecord.exists = false;
				this.myAlive = false;
			}
			break;
		}
	}
	,start: function() {
		this.step = 0;
		this.myAlive = true;
		this.logo.exists = true;
		this.logo.scale.x = 3.0;
		this.logo.scale.y = 3.0;
		this.startTime = flash.Lib.getTimer();
		var mvt1 = new org.flixel.tweens.misc.MultiVarTween(null,8);
		mvt1.tween(this.logo.scale,{ x : 1.0, y : 1.0},0.3,org.flixel.tweens.util.Ease.backOut);
		this.logo.addTween(mvt1);
	}
	,__class__: LogoStageClear
});
var IMap = function() { }
$hxClasses["IMap"] = IMap;
IMap.__name__ = ["IMap"];
org.flixel.FlxState = function() {
	this._useMouse = false;
	org.flixel.FlxGroup.call(this);
	this.persistantUpdate = false;
	this.persistantDraw = true;
	this.set_useMouse(org.flixel.FlxG.mouse._updateCursorContainer);
};
$hxClasses["org.flixel.FlxState"] = org.flixel.FlxState;
org.flixel.FlxState.__name__ = ["org","flixel","FlxState"];
org.flixel.FlxState.__super__ = org.flixel.FlxGroup;
org.flixel.FlxState.prototype = $extend(org.flixel.FlxGroup.prototype,{
	onFocus: function() {
	}
	,onFocusLost: function() {
	}
	,removeAtlas: function(atlas,destroy) {
		if(destroy == null) destroy = false;
		org.flixel.system.layer.Atlas.removeAtlas(atlas,destroy);
	}
	,createAtlas: function(atlasName,atlasWidth,atlasHeight) {
		var key = org.flixel.system.layer.Atlas.getUniqueKey(atlasName);
		return org.flixel.system.layer.Atlas.getAtlas(key,null,false,atlasWidth,atlasHeight);
	}
	,getAtlasFor: function(KeyInBitmapCache) {
		var bm = org.flixel.FlxG._cache.get(KeyInBitmapCache);
		if(bm != null) {
			var tempAtlas = org.flixel.system.layer.Atlas.getAtlas(KeyInBitmapCache,bm);
			return tempAtlas;
		} else throw "There isn't bitmapdata in cache with key: " + KeyInBitmapCache;
		return null;
	}
	,destroy: function() {
		if(this._subState != null) this.closeSubState();
		org.flixel.FlxGroup.prototype.destroy.call(this);
	}
	,subStateCloseHandler: function(destroy) {
		if(destroy == null) destroy = true;
		if(this._subState.closeCallback != null) this._subState.closeCallback();
		if(destroy) this._subState.destroy();
		this._subState = null;
		this.updateMouseVisibility();
	}
	,setSubState: function(requestedState,closeCallback,destroyPrevious) {
		if(destroyPrevious == null) destroyPrevious = true;
		if(this._subState == requestedState) return;
		if(this._subState != null) this._subState.close(destroyPrevious);
		this._subState = requestedState;
		if(this._subState != null) {
			this._subState._parentState = this;
			this._subState.closeCallback = closeCallback;
			if(!this.persistantUpdate) org.flixel.FlxG.resetInput();
			if(!this._subState.get_initialized()) {
				this._subState.initialize();
				this._subState.create();
			}
		}
	}
	,closeSubState: function(destroy) {
		if(destroy == null) destroy = true;
		this.setSubState(null,null,destroy);
	}
	,tryUpdate: function() {
		if(this.persistantUpdate || this._subState == null) this.update();
		if(this._subState != null) this._subState.tryUpdate();
	}
	,drawDebug: function() {
		if(this.persistantDraw || this._subState == null) org.flixel.FlxGroup.prototype.drawDebug.call(this);
		if(this._subState != null) this._subState.drawDebug();
	}
	,draw: function() {
		if(this.persistantDraw || this._subState == null) org.flixel.FlxGroup.prototype.draw.call(this);
		if(this._subState != null) this._subState.draw();
	}
	,create: function() {
	}
	,updateMouseVisibility: function() {
		if(this._useMouse) org.flixel.FlxG.mouse.show(); else org.flixel.FlxG.mouse.hide();
	}
	,set_useMouse: function(value) {
		this._useMouse = value;
		this.updateMouseVisibility();
		return value;
	}
	,get_useMouse: function() {
		return this._useMouse;
	}
	,set_bgColor: function(value) {
		return org.flixel.FlxG.set_bgColor(value);
	}
	,get_bgColor: function() {
		return org.flixel.FlxG.get_bgColor();
	}
	,get_subState: function() {
		return this._subState;
	}
	,__class__: org.flixel.FlxState
	,__properties__: $extend(org.flixel.FlxGroup.prototype.__properties__,{get_subState:"get_subState",set_bgColor:"set_bgColor",get_bgColor:"get_bgColor",set_useMouse:"set_useMouse",get_useMouse:"get_useMouse"})
});
var MenuState = function() {
	org.flixel.FlxState.call(this);
};
$hxClasses["MenuState"] = MenuState;
MenuState.__name__ = ["MenuState"];
MenuState.__super__ = org.flixel.FlxState;
MenuState.prototype = $extend(org.flixel.FlxState.prototype,{
	update: function() {
		org.flixel.FlxState.prototype.update.call(this);
		if(org.flixel.FlxG.keys.justPressed("Z")) org.flixel.FlxG.switchState(new Stage1());
	}
	,destroy: function() {
		org.flixel.FlxState.prototype.destroy.call(this);
	}
	,create: function() {
		org.flixel.FlxG.set_bgColor(-15524837);
		var spr = new org.flixel.FlxSprite(0,0);
		spr.loadGraphic(openfl.Assets.getBitmapData("assets/images/title_image.png"));
		this.add(spr);
		var t = Laps.setLapsTextsPos(480,310,false);
		this.add(t);
		this.spr2 = new org.flixel.FlxSprite(16,439);
		this.spr2.loadGraphic(openfl.Assets.getBitmapData("assets/images/press_z_to_start.png"));
		this.add(this.spr2);
		var mvt = new org.flixel.tweens.misc.MultiVarTween(null,4);
		mvt.tween(this.spr2,{ alpha : 0.0},0.5);
		this.spr2.addTween(mvt);
		org.flixel.FlxState.prototype.create.call(this);
	}
	,__class__: MenuState
});
var NMEPreloader = function() {
	flash.display.Sprite.call(this);
	var backgroundColor = this.getBackgroundColor();
	var r = backgroundColor >> 16 & 255;
	var g = backgroundColor >> 8 & 255;
	var b = backgroundColor & 255;
	var perceivedLuminosity = 0.299 * r + 0.587 * g + 0.114 * b;
	var color = 0;
	if(perceivedLuminosity < 70) color = 16777215;
	var x = 30;
	var height = 9;
	var y = this.getHeight() / 2 - height / 2;
	var width = this.getWidth() - x * 2;
	var padding = 3;
	this.outline = new flash.display.Sprite();
	this.outline.get_graphics().lineStyle(1,color,0.15,true);
	this.outline.get_graphics().drawRoundRect(0,0,width,height,padding * 2,padding * 2);
	this.outline.set_x(x);
	this.outline.set_y(y);
	this.addChild(this.outline);
	this.progress = new flash.display.Sprite();
	this.progress.get_graphics().beginFill(color,0.35);
	this.progress.get_graphics().drawRect(0,0,width - padding * 2,height - padding * 2);
	this.progress.set_x(x + padding);
	this.progress.set_y(y + padding);
	this.progress.set_scaleX(0);
	this.addChild(this.progress);
};
$hxClasses["NMEPreloader"] = NMEPreloader;
NMEPreloader.__name__ = ["NMEPreloader"];
NMEPreloader.__super__ = flash.display.Sprite;
NMEPreloader.prototype = $extend(flash.display.Sprite.prototype,{
	onUpdate: function(bytesLoaded,bytesTotal) {
		var percentLoaded = bytesLoaded / bytesTotal;
		if(percentLoaded > 1) percentLoaded == 1;
		this.progress.set_scaleX(percentLoaded);
	}
	,onLoaded: function() {
		this.dispatchEvent(new flash.events.Event(flash.events.Event.COMPLETE));
	}
	,onInit: function() {
	}
	,getWidth: function() {
		var width = 640;
		if(width > 0) return width; else return flash.Lib.get_current().get_stage().get_stageWidth();
	}
	,getHeight: function() {
		var height = 480;
		if(height > 0) return height; else return flash.Lib.get_current().get_stage().get_stageHeight();
	}
	,getBackgroundColor: function() {
		return 16777215;
	}
	,__class__: NMEPreloader
});
var Player = function(_x,_y) {
	org.flixel.FlxSprite.call(this,_x - 32,_y - 32);
	this.loadGraphic(openfl.Assets.getBitmapData("assets/images/player.png"),true,true,64,64);
	this.addAnimation("wait",[0,1,2,3,2,1],10);
	this.addAnimation("right_walk",[7,8,9,10,11,12,13,14,15,16,17],15);
	this.addAnimation("right_run",[18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37],30);
	this.addAnimation("jump",[4]);
	this.addAnimation("jump_m",[5]);
	this.addAnimation("jump_down",[6]);
	this.play("wait");
	this.jump = 0;
	this.offset.x = 48;
	this.set_width(64 - this.offset.x);
	this.centerOffsets();
	this.offset.y = 24;
	this.set_height(64 - this.offset.y);
};
$hxClasses["Player"] = Player;
Player.__name__ = ["Player"];
Player.__super__ = org.flixel.FlxSprite;
Player.prototype = $extend(org.flixel.FlxSprite.prototype,{
	update: function() {
		var ax = 400;
		this.maxVelocity.x = 200;
		this.acceleration.y = 1000;
		if(org.flixel.FlxG.keys.pressed("LEFT") || org.flixel.FlxG.keys.pressed("A")) {
			this.acceleration.x = -ax;
			this.set_facing(1);
		} else if(org.flixel.FlxG.keys.pressed("RIGHT") || org.flixel.FlxG.keys.pressed("D")) {
			this.acceleration.x = ax;
			this.set_facing(16);
		} else if(this.velocity.x == 0) {
			this.velocity.x = 0;
			this.acceleration.x = 0;
			this.drag.x = 0;
		} else {
			this.acceleration.x = 0;
			this.drag.x = ax;
			if(this.velocity.x == 0) this.drag.x = 0;
		}
		var _g = this;
		switch(_g.jump) {
		case 0:
			if(this.velocity.y > 0) {
				this.jump = 2;
				this.stopSeRun();
				this.play("jump_down");
			} else if(org.flixel.FlxG.keys.justPressed("Z") || org.flixel.FlxG.keys.justPressed("J")) {
				this.velocity.y = -460;
				this.jump = 1;
				this.play("jump");
				this.stopSeRun();
				this.playSe("jump");
			}
			break;
		case 1:
			if(this.velocity.y == 0) this.jump = 0; else if(this.velocity.y > 0) this.jump = 2;
			break;
		case 2:
			if(this.velocity.y == 0) {
				this.jump = 0;
				this.stopSeRun();
				this.playSe("stand");
			}
			break;
		}
		var _g1 = this;
		switch(_g1.jump) {
		case 0:
			if(this.velocity.x == 0) {
				if(this._curAnim.name == "right_run") this.stopSeRun();
				this.play("wait");
			} else if(Math.abs(this.velocity.x) > 150) {
				if(this._curAnim.name != "right_run") this.playSe("run");
				this.play("right_run");
			} else {
				if(this._curAnim.name == "right_run") this.stopSeRun();
				this.play("right_walk");
			}
			break;
		case 1:case 2:
			if(Math.abs(this.velocity.y) < 50) this.play("jump_m"); else if(this.velocity.y < 0) this.play("jump"); else this.play("jump_down");
			break;
		}
		org.flixel.FlxSprite.prototype.update.call(this);
	}
	,stopSeRun: function() {
	}
	,playSe: function(kindstr) {
	}
	,__class__: Player
});
org.flixel.FlxGame = function(GameSizeX,GameSizeY,InitialState,Zoom,GameFramerate,FlashFramerate) {
	if(FlashFramerate == null) FlashFramerate = 30;
	if(GameFramerate == null) GameFramerate = 60;
	if(Zoom == null) Zoom = 1;
	flash.display.Sprite.call(this);
	this._lostFocus = false;
	this._focus = new flash.display.Sprite();
	this._focus.set_visible(false);
	this._soundTray = new flash.display.Sprite();
	this._inputContainer = new flash.display.Sprite();
	org.flixel.FlxG.init(this,GameSizeX,GameSizeY,Zoom);
	org.flixel.FlxG.set_framerate(GameFramerate);
	org.flixel.FlxG.set_flashFramerate(FlashFramerate);
	this._accumulator = this._step;
	this._total = 0;
	org.flixel.FlxGame._mark = 0;
	this._state = null;
	this.tempDisableSoundHotKeys = false;
	this._prefsSave = new org.flixel.FlxSave();
	this._prefsSave.bind("flixel");
	org.flixel.FlxG.debug = true;
	this._debuggerUp = false;
	this._replay = new org.flixel.system.FlxReplay();
	this._replayRequested = false;
	this._recordingRequested = false;
	this._replaying = false;
	this._recording = false;
	this._iState = InitialState;
	this._requestedState = null;
	this._requestedReset = true;
	this.addEventListener(flash.events.Event.ADDED_TO_STAGE,$bind(this,this.create));
};
$hxClasses["org.flixel.FlxGame"] = org.flixel.FlxGame;
org.flixel.FlxGame.__name__ = ["org","flixel","FlxGame"];
org.flixel.FlxGame.__super__ = flash.display.Sprite;
org.flixel.FlxGame.prototype = $extend(flash.display.Sprite.prototype,{
	get_debugger: function() {
		return this._debugger;
	}
	,createFocusScreen: function() {
		var gfx = this._focus.get_graphics();
		var screenWidth = org.flixel.FlxG.width * org.flixel.FlxCamera.defaultZoom | 0;
		var screenHeight = org.flixel.FlxG.height * org.flixel.FlxCamera.defaultZoom | 0;
		gfx.moveTo(0,0);
		gfx.beginFill(0,0.5);
		gfx.lineTo(screenWidth,0);
		gfx.lineTo(screenWidth,screenHeight);
		gfx.lineTo(0,screenHeight);
		gfx.lineTo(0,0);
		gfx.endFill();
		var halfWidth = screenWidth / 2 | 0;
		var halfHeight = screenHeight / 2 | 0;
		var helper = Math.min(halfWidth,halfHeight) / 3 | 0;
		gfx.moveTo(halfWidth - helper,halfHeight - helper);
		gfx.beginFill(16777215,0.65);
		gfx.lineTo(halfWidth + helper,halfHeight);
		gfx.lineTo(halfWidth - helper,halfHeight + helper);
		gfx.lineTo(halfWidth - helper,halfHeight - helper);
		gfx.endFill();
		var logo = new flash.display.Sprite();
		org.flixel.FlxAssets.drawLogo(logo.get_graphics());
		logo.set_scaleX(helper / 1000);
		if(logo.get_scaleX() < 0.2) logo.set_scaleX(0.2);
		logo.set_scaleY(logo.get_scaleX());
		logo.set_x(logo.set_y(5));
		logo.alpha = 0.35;
		this._focus.addChild(logo);
		this.addChild(this._focus);
	}
	,loadSoundPrefs: function() {
		if(this._prefsSave.data.volume != null) org.flixel.FlxG.set_volume(this._prefsSave.data.volume); else org.flixel.FlxG.set_volume(0.5);
		if(this._prefsSave.data.mute != null) org.flixel.FlxG.mute = this._prefsSave.data.mute; else org.flixel.FlxG.mute = false;
	}
	,createSoundTray: function() {
		this._soundTray.set_visible(false);
		this._soundTray.set_scaleX(2);
		this._soundTray.set_scaleY(2);
		var tmp = new flash.display.Bitmap(new flash.display.BitmapData(80,30,true,2130706432));
		this._soundTray.set_x(org.flixel.FlxG.width / 2 * org.flixel.FlxCamera.defaultZoom - tmp.get_width() / 2 * this._soundTray.get_scaleX());
		this._soundTray.addChild(tmp);
		var text = new flash.text.TextField();
		text.set_width(tmp.get_width());
		text.set_height(tmp.get_height());
		text.multiline = true;
		text.set_wordWrap(true);
		text.selectable = false;
		var dtf = new flash.text.TextFormat(openfl.Assets.getFont(org.flixel.FlxAssets.defaultFont).fontName,8,16777215);
		dtf.align = flash.text.TextFormatAlign.CENTER;
		text.set_defaultTextFormat(dtf);
		this._soundTray.addChild(text);
		text.set_text("VOLUME");
		text.set_y(16);
		var bx = 10;
		var by = 14;
		this._soundTrayBars = new Array();
		var i = 0;
		while(i < 10) {
			tmp = new flash.display.Bitmap(new flash.display.BitmapData(4,++i,false,-1));
			tmp.set_x(bx);
			tmp.set_y(by);
			this._soundTray.addChild(tmp);
			this._soundTrayBars.push(tmp);
			bx += 6;
			by--;
		}
		this._soundTray.set_y(-this._soundTray.get_height());
		this._soundTray.set_visible(false);
		this.addChild(this._soundTray);
	}
	,create: function(FlashEvent) {
		if(this.get_stage() == null) return;
		this.removeEventListener(flash.events.Event.ADDED_TO_STAGE,$bind(this,this.create));
		this._total = flash.Lib.getTimer();
		this.get_stage().scaleMode = flash.display.StageScaleMode.NO_SCALE;
		this.get_stage().align = flash.display.StageAlign.TOP_LEFT;
		this.get_stage().set_frameRate(this._flashFramerate);
		this.addChild(this._inputContainer);
		org.flixel.FlxG.keyDebugger = [192,220];
		org.flixel.FlxG.keyVolumeUp = [107,187];
		org.flixel.FlxG.keyVolumeDown = [109,189];
		org.flixel.FlxG.keyMute = [48,96];
		org.flixel.system.input.FlxInputs.init();
		org.flixel.FlxG.autoPause = true;
		if(!org.flixel.FlxG.mobile) {
			if(org.flixel.FlxG.debug) {
				this._debugger = new org.flixel.system.FlxDebugger(org.flixel.FlxG.width * org.flixel.FlxCamera.defaultZoom,org.flixel.FlxG.height * org.flixel.FlxCamera.defaultZoom);
				flash.Lib.get_current().get_stage().addChild(this._debugger);
			}
			this.createSoundTray();
			this.loadSoundPrefs();
			this.get_stage().addEventListener(flash.events.Event.DEACTIVATE,$bind(this,this.onFocusLost));
			this.get_stage().addEventListener(flash.events.Event.ACTIVATE,$bind(this,this.onFocus));
			this.createFocusScreen();
		}
		if(this._requestedReset) {
			this._requestedState = Type.createInstance(this._iState,[]);
			if(js.Boot.__instanceof(this._requestedState,org.flixel.FlxSubState)) throw "You can't set FlxSubState class instance as the state for you game";
			this._replayTimer = 0;
			this._replayCancelKeys = null;
			org.flixel.FlxG.reset();
			this.switchState();
			this._requestedReset = false;
		}
		flash.Lib.get_current().get_stage().addEventListener(flash.events.Event.ENTER_FRAME,$bind(this,this.onEnterFrame));
	}
	,draw: function() {
		if(this._debuggerUp) org.flixel.FlxGame._mark = flash.Lib.getTimer();
		org.flixel.system.layer.TileSheetExt._DRAWCALLS = 0;
		org.flixel.FlxG.lockCameras();
		this._state.draw();
		if(org.flixel.FlxG.visualDebug) this._state.drawDebug();
		org.flixel.FlxG.renderCameras();
		if(this._debuggerUp) this._debugger.perf.drawCalls(org.flixel.system.layer.TileSheetExt._DRAWCALLS);
		org.flixel.FlxG.drawPlugins();
		if(org.flixel.FlxG.visualDebug) org.flixel.FlxG.drawDebugPlugins();
		org.flixel.FlxG.unlockCameras();
		if(this._debuggerUp) this._debugger.perf.flixelDraw(flash.Lib.getTimer() - org.flixel.FlxGame._mark);
	}
	,updateInput: function() {
		if(this._replaying) {
			this._replay.playNextFrame();
			if(this._replayTimer > 0) {
				this._replayTimer -= this._step;
				if(this._replayTimer <= 0) {
					if(this._replayCallback != null) {
						this._replayCallback();
						this._replayCallback = null;
					} else org.flixel.FlxG.stopReplay();
				}
			}
			if(this._replaying && this._replay.finished) {
				org.flixel.FlxG.stopReplay();
				if(this._replayCallback != null) {
					this._replayCallback();
					this._replayCallback = null;
				}
			}
			this._debugger.vcr.updateRuntime(this._step);
		} else org.flixel.system.input.FlxInputs.updateInputs();
		if(this._recording) {
			this._replay.recordFrame();
			this._debugger.vcr.updateRuntime(this._step);
		}
		org.flixel.FlxG.mouse.wheel = 0;
	}
	,updateState: function() {
		this._state.tryUpdate();
	}
	,update: function() {
		if(this._state != this._requestedState) this.switchState();
		if(this._debuggerUp) org.flixel.FlxGame._mark = flash.Lib.getTimer();
		org.flixel.FlxG.elapsed = org.flixel.FlxG.timeScale * this._stepSeconds;
		org.flixel.FlxG.updateSounds();
		org.flixel.FlxG.updatePlugins();
		this.updateInput();
		this.updateState();
		if(org.flixel.FlxG.tweener.active && org.flixel.FlxG.tweener.get_hasTween()) org.flixel.FlxG.tweener.updateTweens();
		org.flixel.FlxG.updateCameras();
		if(this._debuggerUp) this._debugger.perf.flixelUpdate(flash.Lib.getTimer() - org.flixel.FlxGame._mark);
	}
	,updateSoundTray: function(MS) {
		if(this._soundTrayTimer > 0) this._soundTrayTimer -= MS / 1000; else if(this._soundTray.get_y() > -this._soundTray.get_height()) {
			var _g = this._soundTray;
			_g.set_y(_g.get_y() - MS / 1000 * org.flixel.FlxG.height * 2);
			if(this._soundTray.get_y() <= -this._soundTray.get_height()) {
				this._soundTray.set_visible(false);
				this._updateSoundTray = false;
				this._prefsSave.data.mute = org.flixel.FlxG.mute;
				this._prefsSave.data.volume = org.flixel.FlxG.volume;
				this._prefsSave.flush();
			}
		}
	}
	,step: function() {
		if(this._requestedReset) {
			this._requestedState = Type.createInstance(this._iState,[]);
			if(js.Boot.__instanceof(this._requestedState,org.flixel.FlxSubState)) throw "You can't set FlxSubState class instance as the state for you game";
			this._replayTimer = 0;
			this._replayCancelKeys = null;
			org.flixel.FlxG.reset();
			this._requestedReset = false;
		}
		if(this._recordingRequested) {
			this._recordingRequested = false;
			this._replay.create(org.flixel.util.FlxRandom.globalSeed);
			this._recording = true;
			this._debugger.vcr.recording();
			org.flixel.FlxG.notice("Starting new flixel gameplay record.");
		} else if(this._replayRequested) {
			this._replayRequested = false;
			this._replay.rewind();
			org.flixel.util.FlxRandom.globalSeed = this._replay.seed;
			this._debugger.vcr.playing();
			this._replaying = true;
		}
		org.flixel.FlxBasic._ACTIVECOUNT = 0;
		this.update();
		if(this._debuggerUp) this._debugger.perf.activeObjects(org.flixel.FlxBasic._ACTIVECOUNT);
	}
	,switchState: function() {
		org.flixel.plugin.pxText.PxBitmapFont.clearStorage();
		org.flixel.system.layer.Atlas.clearAtlasCache();
		org.flixel.system.layer.TileSheetData.clear();
		org.flixel.FlxG.clearBitmapCache();
		org.flixel.FlxG.resetCameras();
		org.flixel.FlxG.resetInput();
		org.flixel.FlxG.destroySounds();
		if(this._debugger != null) this._debugger.watch.removeAll();
		var timerManager = org.flixel.util.FlxTimer.get_manager();
		if(timerManager != null) timerManager.clear();
		var mouseVisibility = org.flixel.FlxG.mouse._updateCursorContainer || (this._state != null?this._state.get_useMouse():false);
		if(this._state != null) this._state.destroy();
		this._state = this._requestedState;
		this._state.set_useMouse(mouseVisibility);
		this._state.create();
	}
	,requestNewState: function(newState) {
		this._requestedState = newState;
	}
	,resetGame: function() {
		this._requestedState = Type.createInstance(this._iState,[]);
		if(js.Boot.__instanceof(this._requestedState,org.flixel.FlxSubState)) throw "You can't set FlxSubState class instance as the state for you game";
		this._replayTimer = 0;
		this._replayCancelKeys = null;
		org.flixel.FlxG.reset();
	}
	,onEnterFrame: function(FlashEvent) {
		org.flixel.FlxGame._mark = flash.Lib.getTimer();
		this._elapsedMS = org.flixel.FlxGame._mark - this._total;
		this._total = org.flixel.FlxGame._mark;
		if(this._updateSoundTray) this.updateSoundTray(this._elapsedMS);
		if(!this._lostFocus) {
			if(this._debugger != null && this._debugger.vcr.paused) {
				if(this._debugger.vcr.stepRequested) {
					this._debugger.vcr.stepRequested = false;
					this.step();
				}
			} else {
				this._accumulator += this._elapsedMS;
				if(this._accumulator > this._maxAccumulation) this._accumulator = this._maxAccumulation;
				while(this._accumulator >= this._step) {
					this.step();
					this._accumulator = this._accumulator - this._step;
				}
			}
			org.flixel.FlxBasic._VISIBLECOUNT = 0;
			this.draw();
			if(this._debuggerUp) {
				this._debugger.perf.flash(this._elapsedMS);
				this._debugger.perf.visibleObjects(org.flixel.FlxBasic._VISIBLECOUNT);
				this._debugger.perf.update();
				this._debugger.watch.update();
			}
		}
	}
	,onFocusLost: function(FlashEvent) {
		if(!org.flixel.FlxG.autoPause) {
			this._state.onFocusLost();
			return;
		}
		this._lostFocus = true;
		this._focus.set_visible(true);
		this.get_stage().set_frameRate(10);
		org.flixel.FlxG.pauseSounds();
		org.flixel.system.input.FlxInputs.onFocusLost();
	}
	,onFocus: function(FlashEvent) {
		if(!org.flixel.FlxG.autoPause) {
			this._state.onFocus();
			return;
		}
		this._lostFocus = false;
		this._focus.set_visible(false);
		this.get_stage().set_frameRate(this._flashFramerate);
		org.flixel.FlxG.resumeSounds();
		org.flixel.system.input.FlxInputs.onFocus();
	}
	,showSoundTray: function(Silent) {
		if(Silent == null) Silent = false;
		if(!Silent) org.flixel.FlxG.play(org.flixel.FlxAssets.sndBeep);
		this._soundTrayTimer = 1;
		this._soundTray.set_y(0);
		this._soundTray.set_visible(true);
		this._updateSoundTray = true;
		var globalVolume = Math.round(org.flixel.FlxG.volume * 10);
		if(org.flixel.FlxG.mute) globalVolume = 0;
		var _g1 = 0, _g = this._soundTrayBars.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(i < globalVolume) this._soundTrayBars[i].alpha = 1; else this._soundTrayBars[i].alpha = 0.5;
		}
	}
	,__class__: org.flixel.FlxGame
	,__properties__: $extend(flash.display.Sprite.prototype.__properties__,{get_debugger:"get_debugger"})
});
var ProjectClass = function() {
	var stageWidth = flash.Lib.get_current().get_stage().get_stageWidth();
	var stageHeight = flash.Lib.get_current().get_stage().get_stageHeight();
	var ratioX = stageWidth / 640;
	var ratioY = stageHeight / 480;
	var ratio = Math.min(ratioX,ratioY);
	org.flixel.FlxGame.call(this,Math.ceil(stageWidth / ratio),Math.ceil(stageHeight / ratio),MenuState,ratio,30,30);
};
$hxClasses["ProjectClass"] = ProjectClass;
ProjectClass.__name__ = ["ProjectClass"];
ProjectClass.__super__ = org.flixel.FlxGame;
ProjectClass.prototype = $extend(org.flixel.FlxGame.prototype,{
	__class__: ProjectClass
});
var Reflect = function() { }
$hxClasses["Reflect"] = Reflect;
Reflect.__name__ = ["Reflect"];
Reflect.hasField = function(o,field) {
	return Object.prototype.hasOwnProperty.call(o,field);
}
Reflect.field = function(o,field) {
	var v = null;
	try {
		v = o[field];
	} catch( e ) {
	}
	return v;
}
Reflect.getProperty = function(o,field) {
	var tmp;
	return o == null?null:o.__properties__ && (tmp = o.__properties__["get_" + field])?o[tmp]():o[field];
}
Reflect.setProperty = function(o,field,value) {
	var tmp;
	if(o.__properties__ && (tmp = o.__properties__["set_" + field])) o[tmp](value); else o[field] = value;
}
Reflect.fields = function(o) {
	var a = [];
	if(o != null) {
		var hasOwnProperty = Object.prototype.hasOwnProperty;
		for( var f in o ) {
		if(f != "__id__" && f != "hx__closures__" && hasOwnProperty.call(o,f)) a.push(f);
		}
	}
	return a;
}
Reflect.isFunction = function(f) {
	return typeof(f) == "function" && !(f.__name__ || f.__ename__);
}
Reflect.compareMethods = function(f1,f2) {
	if(f1 == f2) return true;
	if(!Reflect.isFunction(f1) || !Reflect.isFunction(f2)) return false;
	return f1.scope == f2.scope && f1.method == f2.method && f1.method != null;
}
Reflect.isObject = function(v) {
	if(v == null) return false;
	var t = typeof(v);
	return t == "string" || t == "object" && v.__enum__ == null || t == "function" && (v.__name__ || v.__ename__) != null;
}
Reflect.deleteField = function(o,field) {
	if(!Reflect.hasField(o,field)) return false;
	delete(o[field]);
	return true;
}
Reflect.makeVarArgs = function(f) {
	return function() {
		var a = Array.prototype.slice.call(arguments);
		return f(a);
	};
}
var Ruby = function(_x,_y) {
	org.flixel.FlxSprite.call(this,_x - 12,_y - 12);
	this.loadGraphic(openfl.Assets.getBitmapData("assets/images/ruby2.png"),true,false,24,24);
	var framelist = new Array();
	var cnt = Std.random(7);
	var _g = 0;
	while(_g < 7) {
		var i = _g++;
		framelist.push(cnt);
		cnt = (cnt + 1) % 7;
	}
	this.addAnimation("wait",framelist,15);
	this.addAnimation("dead",[0,1,2,3,4,5,6],5);
	this.play("wait");
	this.centerOffsets();
	this.set_solid(true);
	this.immovable = false;
	this.mass = 0.1;
};
$hxClasses["Ruby"] = Ruby;
Ruby.__name__ = ["Ruby"];
Ruby.__super__ = org.flixel.FlxSprite;
Ruby.prototype = $extend(org.flixel.FlxSprite.prototype,{
	update: function() {
		if((this.touching & 4369) > 0) this.kill();
		org.flixel.FlxSprite.prototype.update.call(this);
	}
	,__class__: Ruby
});
var Stage1 = function() {
	org.flixel.FlxState.call(this);
};
$hxClasses["Stage1"] = Stage1;
Stage1.__name__ = ["Stage1"];
Stage1.__super__ = org.flixel.FlxState;
Stage1.prototype = $extend(org.flixel.FlxState.prototype,{
	playSe: function(kind) {
	}
	,handlerHitDoor: function(obj1,obj2) {
		if(this.stageClearReq) {
			this.door.hitPlayer();
			this.stageClear = true;
			this.stageClearReq = false;
			this.clearTime = flash.Lib.getTimer();
			this.logoStageClear.start();
			Laps.setNowLap(this.clearTime - this.startTime);
		}
	}
	,handlerGetBanana: function(obj1,obj2) {
		this.playSe("banana");
	}
	,openDoor: function() {
		this.door.openTheSesame();
		this.stageClearReq = true;
	}
	,handlerGetRuby: function(obj1,obj2) {
		var _g = this;
		this.emitter.set_x(obj2.x - 16);
		this.emitter.set_y(obj2.y - 16);
		this.emitter.set_width(32);
		this.emitter.set_height(32);
		this.emitter.setXSpeed(-800,800);
		this.emitter.setYSpeed(-800,800);
		this.emitter.start(true,1.5,0.1,150);
		this.getRubyCount++;
		this.rubyText.set_text("" + this.getRubyCount + " / " + this.rubys.length);
		this.playSe("ruby");
		var dbg = false;
		if(this.getRubyCount >= this.rubys.length || dbg) {
			org.flixel.FlxG.shake(0.02,1.0,function() {
				org.flixel.FlxG.shake(0.005,1.5,$bind(_g,_g.openDoor));
			});
			this.playSe("shake");
		}
	}
	,createEmitter: function() {
		var particles = 300;
		this.emitter = new org.flixel.FlxEmitter(320,240,particles);
		var starAnime = [[0,1,2,3,2,1],[1,2,3,2,1,0],[2,3,2,1,0,1],[3,2,1,0,1,2]];
		var particle;
		var _g = 0;
		while(_g < particles) {
			var i = _g++;
			particle = new org.flixel.FlxParticle();
			particle.loadGraphic("assets/images/part_star.png",true,false,16,16);
			particle.addAnimation("flash",starAnime[Std.random(starAnime.length)],15);
			particle.play("flash");
			particle.exists = false;
			this.emitter.add(particle);
		}
		this.emitter.setRotation(10,80);
	}
	,createObjSprite: function(dt) {
		this.rubys = new org.flixel.FlxGroup();
		this.bananas = new org.flixel.FlxGroup();
		this.getRubyCount = 0;
		this.getBananaCount = 0;
		var px = 192;
		var py = 128;
		var doorx = 0;
		var doory = 0;
		var odt = dt.getObjLayer("objlayer");
		if(odt == null) console.log("Not Found objectgroup data."); else {
			var _g1 = 0, _g = odt.length;
			while(_g1 < _g) {
				var i = _g1++;
				var x = odt[i].x + 16;
				var y = odt[i].y - 16;
				var _g2 = odt[i];
				switch(_g2.name) {
				case "ruby":
					var ruby = new Ruby(x,y);
					this.rubys.add(ruby);
					break;
				case "banana":
					var banana = new Banana(x,y);
					this.bananas.add(banana);
					break;
				case "playerborn":
					px = x;
					py = y;
					break;
				case "door":
					doorx = x;
					doory = y;
					break;
				}
			}
		}
		this.player = new Player(px,py);
		this.door = new Stage1Door(doorx,doory);
	}
	,createText: function() {
		this.rubyIcon = new org.flixel.FlxSprite(4,10);
		this.rubyIcon.loadGraphic(openfl.Assets.getBitmapData("assets/images/rubyicon.png"));
		this.rubyIcon.scrollFactor = new org.flixel.util.FlxPoint();
		this.rubyIcon.set_solid(false);
		this.rubyText = new org.flixel.FlxText(28,2,160,"");
		this.rubyText.setFormat("PlayBold",24,-1,"left",2003199,true);
		this.rubyText.scrollFactor = new org.flixel.util.FlxPoint();
		this.timeText = new org.flixel.FlxText(256,2,640,"");
		this.timeText.setFormat("PlayBold",24,-1,"left",2003199,true);
		this.timeText.scrollFactor = new org.flixel.util.FlxPoint();
	}
	,createBgBack: function() {
		if(this.useBgExt) {
			var mapdt = openfl.Assets.getText("assets/maps/mylevel1_b.json.txt");
			var dt = new TmxJson(mapdt);
			var bgimg = openfl.Assets.getBitmapData("assets/maps/mylevel1_b_tiles.png");
			this.bg_c = new org.flixel.FlxTilemap();
			this.bg_c.loadMap(dt.getLayer("layer_innermost"),bgimg,dt.tileWidth,dt.tileHeight,0);
			this.bg_c.set_solid(false);
			this.bg_c.scrollFactor.x = 0.125;
			this.bg_c.scrollFactor.y = 0.0;
		}
		this.bg_extra = new org.flixel.FlxSprite();
		this.bg_extra.loadGraphic(openfl.Assets.getBitmapData("assets/images/bg_extra.png"));
		this.bg_extra.scrollFactor = new org.flixel.util.FlxPoint();
		this.bg_extra.set_solid(false);
	}
	,createBg: function(dt) {
		var bgimg = openfl.Assets.getBitmapData("assets/maps/mylevel1_tiles.png");
		if(!this.useBgExt) {
			this.bg_c = new org.flixel.FlxTilemap();
			this.bg_c.loadMap(dt.getLayer("layer4"),bgimg,dt.tileWidth,dt.tileHeight,0);
			this.bg_c.set_solid(false);
			this.bg_c.scrollFactor.x = 0.20;
			this.bg_c.scrollFactor.y = 0.20;
		}
		this.bg_b = new org.flixel.FlxTilemap();
		this.bg_b.loadMap(dt.getLayer("layer3"),bgimg,dt.tileWidth,dt.tileHeight,0);
		this.bg_b.set_solid(false);
		this.bg_b.scrollFactor.x = 0.5;
		this.bg_b.scrollFactor.y = 0.5;
		this.bg_a = new org.flixel.FlxTilemap();
		this.bg_a.loadMap(dt.getLayer("layer2"),bgimg,dt.tileWidth,dt.tileHeight,0);
		this.bg_a.set_solid(false);
		this.bg_hit = new org.flixel.FlxTilemap();
		this.bg_hit.loadMap(dt.getLayer("layer1"),bgimg,dt.tileWidth,dt.tileHeight,0,0,250);
		this.bg_hit.immovable = true;
	}
	,update: function() {
		org.flixel.FlxState.prototype.update.call(this);
		if(org.flixel.FlxG.keys.justPressed("B")) org.flixel.FlxG.visualDebug = !org.flixel.FlxG.visualDebug;
		org.flixel.FlxG.overlap(this.player,this.bg_hit,null,org.flixel.FlxObject.separate);
		org.flixel.FlxG.overlap(this.player,this.rubys,$bind(this,this.handlerGetRuby),org.flixel.FlxObject.separate);
		org.flixel.FlxG.overlap(this.player,this.bananas,$bind(this,this.handlerGetBanana),org.flixel.FlxObject.separate);
		if(this.stageClearReq) org.flixel.FlxG.overlap(this.player,this.door,$bind(this,this.handlerHitDoor),null);
		var ntime = this.stageClear?this.clearTime:flash.Lib.getTimer();
		this.timeText.set_text(Laps.gettimeStringDiff(this.startTime,ntime));
		if(this.stageClear && !this.logoStageClear.myAlive) org.flixel.FlxG.switchState(new StageClearAll());
	}
	,create: function() {
		this.set_bgColor(-5456681);
		this.useBgExt = true;
		var mapdt = openfl.Assets.getText("assets/maps/mylevel1.json.txt");
		var dt = new TmxJson(mapdt);
		this.createBg(dt);
		this.createBgBack();
		this.createText();
		this.createObjSprite(dt);
		this.createEmitter();
		this.logoStageClear = new LogoStageClear();
		this.add(this.bg_c);
		if(!this.useBgExt) this.add(this.bg_extra);
		this.add(this.bg_b);
		this.add(this.bg_a);
		this.add(this.bg_hit);
		this.add(this.door);
		this.add(this.timeText);
		this.add(this.rubyText);
		this.add(this.rubyIcon);
		this.add(this.player);
		this.add(this.rubys);
		this.add(this.bananas);
		this.add(this.emitter);
		this.add(this.logoStageClear);
		org.flixel.FlxG.camera.follow(this.player,2);
		this.bg_hit.follow();
		this.stageClearReq = false;
		this.stageClear = false;
		this.startTime = this.clearTime = flash.Lib.getTimer();
		this.rubyText.set_text("" + this.getRubyCount + " / " + this.rubys.length);
		org.flixel.FlxState.prototype.create.call(this);
	}
	,__class__: Stage1
});
var Stage1Door = function(_x,_y) {
	org.flixel.FlxSprite.call(this,_x - 16,_y - 80);
	this.loadGraphic(openfl.Assets.getBitmapData("assets/images/mulevel1_door.png"),true,false,64,96);
	this.addAnimation("notopen",[0]);
	this.addAnimation("open",[1]);
	this.play("notopen");
	this.set_solid(false);
	this.immovable = true;
};
$hxClasses["Stage1Door"] = Stage1Door;
Stage1Door.__name__ = ["Stage1Door"];
Stage1Door.__super__ = org.flixel.FlxSprite;
Stage1Door.prototype = $extend(org.flixel.FlxSprite.prototype,{
	hitPlayer: function() {
		this.set_solid(false);
	}
	,openTheSesame: function() {
		this.set_solid(true);
		this.play("open");
	}
	,__class__: Stage1Door
});
var StageClearAll = function() {
	org.flixel.FlxState.call(this);
};
$hxClasses["StageClearAll"] = StageClearAll;
StageClearAll.__name__ = ["StageClearAll"];
StageClearAll.__super__ = org.flixel.FlxState;
StageClearAll.prototype = $extend(org.flixel.FlxState.prototype,{
	update: function() {
		org.flixel.FlxState.prototype.update.call(this);
		var _g = this;
		switch(_g.step) {
		case 0:
			if(org.flixel.FlxG.keys.justPressed("Z")) {
				org.flixel.FlxG.fade(0,1.0);
				this.startTime = flash.Lib.getTimer();
				this.pressz.exists = false;
				this.step++;
			}
			break;
		case 1:
			if(flash.Lib.getTimer() - this.startTime >= 1500) {
				Laps.incPlayCount();
				org.flixel.FlxG.switchState(new MenuState());
			}
			break;
		}
	}
	,create: function() {
		this.bgspr = new org.flixel.FlxSprite();
		var img = openfl.Assets.getBitmapData("assets/images/thankyouforplaying.png");
		this.bgspr.loadGraphic(img);
		this.add(this.bgspr);
		var fnameList = ["present1.png","present2.png","present3.png"];
		var idx = Laps.getPlayCount() % fnameList.length;
		this.photo = new org.flixel.FlxSprite(60,60);
		this.photo.loadGraphic(openfl.Assets.getBitmapData("assets/images/" + fnameList[idx]));
		this.add(this.photo);
		var t = Laps.setLapsTextsPos(420,80,true);
		this.add(t);
		img = openfl.Assets.getBitmapData("assets/images/pressz.png");
		var x = 8;
		var y = org.flixel.FlxG.height - (img._nmeTextureBuffer != null?img._nmeTextureBuffer.height:0) - 8;
		this.pressz = new org.flixel.FlxSprite(x,y);
		this.pressz.loadGraphic(img);
		this.add(this.pressz);
		var mvt = new org.flixel.tweens.misc.MultiVarTween(null,4);
		mvt.tween(this.pressz,{ alpha : 0.0},0.5);
		this.pressz.addTween(mvt);
		org.flixel.FlxG.flash(-1,0.5);
		this.step = 0;
		org.flixel.FlxState.prototype.create.call(this);
	}
	,__class__: StageClearAll
});
var Std = function() { }
$hxClasses["Std"] = Std;
Std.__name__ = ["Std"];
Std.string = function(s) {
	return js.Boot.__string_rec(s,"");
}
Std.parseInt = function(x) {
	var v = parseInt(x,10);
	if(v == 0 && (HxOverrides.cca(x,1) == 120 || HxOverrides.cca(x,1) == 88)) v = parseInt(x);
	if(isNaN(v)) return null;
	return v;
}
Std.parseFloat = function(x) {
	return parseFloat(x);
}
Std.random = function(x) {
	return x <= 0?0:Math.floor(Math.random() * x);
}
var StringBuf = function() {
	this.b = "";
};
$hxClasses["StringBuf"] = StringBuf;
StringBuf.__name__ = ["StringBuf"];
StringBuf.prototype = {
	addSub: function(s,pos,len) {
		this.b += len == null?HxOverrides.substr(s,pos,null):HxOverrides.substr(s,pos,len);
	}
	,__class__: StringBuf
}
var StringTools = function() { }
$hxClasses["StringTools"] = StringTools;
StringTools.__name__ = ["StringTools"];
StringTools.urlEncode = function(s) {
	return encodeURIComponent(s);
}
StringTools.urlDecode = function(s) {
	return decodeURIComponent(s.split("+").join(" "));
}
StringTools.startsWith = function(s,start) {
	return s.length >= start.length && HxOverrides.substr(s,0,start.length) == start;
}
StringTools.isSpace = function(s,pos) {
	var c = HxOverrides.cca(s,pos);
	return c > 8 && c < 14 || c == 32;
}
StringTools.rtrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,l - r - 1)) r++;
	if(r > 0) return HxOverrides.substr(s,0,l - r); else return s;
}
StringTools.lpad = function(s,c,l) {
	if(c.length <= 0) return s;
	while(s.length < l) s = c + s;
	return s;
}
StringTools.replace = function(s,sub,by) {
	return s.split(sub).join(by);
}
StringTools.hex = function(n,digits) {
	var s = "";
	var hexChars = "0123456789ABCDEF";
	do {
		s = hexChars.charAt(n & 15) + s;
		n >>>= 4;
	} while(n > 0);
	if(digits != null) while(s.length < digits) s = "0" + s;
	return s;
}
var TmxJson = function(jsondata) {
	var jsonData = haxe.Json.parse(jsondata);
	var d = jsonData;
	this.width = d.width;
	this.height = d.height;
	this.tileWidth = d.tilewidth;
	this.tileHeight = d.tileheight;
	this.layerTileData = new haxe.ds.StringMap();
	this.layerWidth = new haxe.ds.StringMap();
	this.layerHeight = new haxe.ds.StringMap();
	this.objectLayer = new haxe.ds.StringMap();
	var layernum = d.layers.length;
	var _g = 0;
	while(_g < layernum) {
		var i = _g++;
		var name = d.layers[i].name;
		var layerkind = d.layers[i].type;
		switch(layerkind) {
		case "tilelayer":
			var w = d.layers[i].width;
			var h = d.layers[i].height;
			this.layerWidth.set(name,w);
			this.layerHeight.set(name,w);
			var tiledata = d.layers[i].data;
			var count = 0;
			var layer = "";
			var _g1 = 0;
			while(_g1 < h) {
				var y = _g1++;
				var row = new Array();
				var _g2 = 0;
				while(_g2 < w) {
					var x = _g2++;
					var c = tiledata[count];
					if(c > 0) c -= 1;
					row.push(c);
					count++;
				}
				layer += row.join(",") + "\n";
			}
			this.layerTileData.set(name,layer);
			break;
		case "objectgroup":
			var objdata = d.layers[i].objects;
			var objarray = new Array();
			var num = objdata.length;
			var _g1 = 0;
			while(_g1 < num) {
				var i1 = _g1++;
				var gid = objdata[i1].gid;
				var objname = objdata[i1].name;
				var x = objdata[i1].x;
				var y = objdata[i1].y;
				objarray.push(new TmxObjGroup(objname,gid,x,y));
			}
			this.objectLayer.set(name,objarray);
			break;
		}
	}
};
$hxClasses["TmxJson"] = TmxJson;
TmxJson.__name__ = ["TmxJson"];
TmxJson.prototype = {
	getObjLayer: function(layerName) {
		if(this.objectLayer.exists(layerName)) return this.objectLayer.get(layerName); else return null;
	}
	,getLayer: function(layerName) {
		if(this.layerTileData.exists(layerName)) return this.layerTileData.get(layerName); else {
			console.log("" + layerName + " layer is None");
			return "0";
		}
	}
	,__class__: TmxJson
}
var TmxObjGroup = function(oname,ogid,ox,oy) {
	this.name = oname;
	this.gid = ogid;
	this.x = ox;
	this.y = oy;
};
$hxClasses["TmxObjGroup"] = TmxObjGroup;
TmxObjGroup.__name__ = ["TmxObjGroup"];
TmxObjGroup.prototype = {
	__class__: TmxObjGroup
}
var ValueType = $hxClasses["ValueType"] = { __ename__ : ["ValueType"], __constructs__ : ["TNull","TInt","TFloat","TBool","TObject","TFunction","TClass","TEnum","TUnknown"] }
ValueType.TNull = ["TNull",0];
ValueType.TNull.toString = $estr;
ValueType.TNull.__enum__ = ValueType;
ValueType.TInt = ["TInt",1];
ValueType.TInt.toString = $estr;
ValueType.TInt.__enum__ = ValueType;
ValueType.TFloat = ["TFloat",2];
ValueType.TFloat.toString = $estr;
ValueType.TFloat.__enum__ = ValueType;
ValueType.TBool = ["TBool",3];
ValueType.TBool.toString = $estr;
ValueType.TBool.__enum__ = ValueType;
ValueType.TObject = ["TObject",4];
ValueType.TObject.toString = $estr;
ValueType.TObject.__enum__ = ValueType;
ValueType.TFunction = ["TFunction",5];
ValueType.TFunction.toString = $estr;
ValueType.TFunction.__enum__ = ValueType;
ValueType.TClass = function(c) { var $x = ["TClass",6,c]; $x.__enum__ = ValueType; $x.toString = $estr; return $x; }
ValueType.TEnum = function(e) { var $x = ["TEnum",7,e]; $x.__enum__ = ValueType; $x.toString = $estr; return $x; }
ValueType.TUnknown = ["TUnknown",8];
ValueType.TUnknown.toString = $estr;
ValueType.TUnknown.__enum__ = ValueType;
var Type = function() { }
$hxClasses["Type"] = Type;
Type.__name__ = ["Type"];
Type.getClass = function(o) {
	if(o == null) return null;
	return o.__class__;
}
Type.getClassName = function(c) {
	var a = c.__name__;
	return a.join(".");
}
Type.getEnumName = function(e) {
	var a = e.__ename__;
	return a.join(".");
}
Type.resolveClass = function(name) {
	var cl = $hxClasses[name];
	if(cl == null || !cl.__name__) return null;
	return cl;
}
Type.resolveEnum = function(name) {
	var e = $hxClasses[name];
	if(e == null || !e.__ename__) return null;
	return e;
}
Type.createInstance = function(cl,args) {
	switch(args.length) {
	case 0:
		return new cl();
	case 1:
		return new cl(args[0]);
	case 2:
		return new cl(args[0],args[1]);
	case 3:
		return new cl(args[0],args[1],args[2]);
	case 4:
		return new cl(args[0],args[1],args[2],args[3]);
	case 5:
		return new cl(args[0],args[1],args[2],args[3],args[4]);
	case 6:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5]);
	case 7:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6]);
	case 8:
		return new cl(args[0],args[1],args[2],args[3],args[4],args[5],args[6],args[7]);
	default:
		throw "Too many arguments";
	}
	return null;
}
Type.createEmptyInstance = function(cl) {
	function empty() {}; empty.prototype = cl.prototype;
	return new empty();
}
Type.createEnum = function(e,constr,params) {
	var f = Reflect.field(e,constr);
	if(f == null) throw "No such constructor " + constr;
	if(Reflect.isFunction(f)) {
		if(params == null) throw "Constructor " + constr + " need parameters";
		return f.apply(e,params);
	}
	if(params != null && params.length != 0) throw "Constructor " + constr + " does not need parameters";
	return f;
}
Type.getEnumConstructs = function(e) {
	var a = e.__constructs__;
	return a.slice();
}
Type["typeof"] = function(v) {
	var _g = typeof(v);
	switch(_g) {
	case "boolean":
		return ValueType.TBool;
	case "string":
		return ValueType.TClass(String);
	case "number":
		if(Math.ceil(v) == v % 2147483648.0) return ValueType.TInt;
		return ValueType.TFloat;
	case "object":
		if(v == null) return ValueType.TNull;
		var e = v.__enum__;
		if(e != null) return ValueType.TEnum(e);
		var c = v.__class__;
		if(c != null) return ValueType.TClass(c);
		return ValueType.TObject;
	case "function":
		if(v.__name__ || v.__ename__) return ValueType.TObject;
		return ValueType.TFunction;
	case "undefined":
		return ValueType.TNull;
	default:
		return ValueType.TUnknown;
	}
}
var XmlType = $hxClasses["XmlType"] = { __ename__ : ["XmlType"], __constructs__ : [] }
var Xml = function() { }
$hxClasses["Xml"] = Xml;
Xml.__name__ = ["Xml"];
Xml.prototype = {
	elements: function() {
		if(this._children == null) throw "bad nodetype";
		return { cur : 0, x : this._children, hasNext : function() {
			var k = this.cur;
			var l = this.x.length;
			while(k < l) {
				if(this.x[k].nodeType == Xml.Element) break;
				k += 1;
			}
			this.cur = k;
			return k < l;
		}, next : function() {
			var k = this.cur;
			var l = this.x.length;
			while(k < l) {
				var n = this.x[k];
				k += 1;
				if(n.nodeType == Xml.Element) {
					this.cur = k;
					return n;
				}
			}
			return null;
		}};
	}
	,get: function(att) {
		if(this.nodeType != Xml.Element) throw "bad nodeType";
		return this._attributes.get(att);
	}
	,get_nodeName: function() {
		if(this.nodeType != Xml.Element) throw "bad nodeType";
		return this._nodeName;
	}
	,__class__: Xml
}
var haxe = {}
haxe.Timer = function() { }
$hxClasses["haxe.Timer"] = haxe.Timer;
haxe.Timer.__name__ = ["haxe","Timer"];
haxe.Timer.stamp = function() {
	return new Date().getTime() / 1000;
}
flash.Lib = function(rootElement,width,height) {
	this.mKilled = false;
	this.__scr = rootElement;
	if(this.__scr == null) throw "Root element not found";
	this.__scr.style.setProperty("overflow","hidden","");
	this.__scr.style.setProperty("position","absolute","");
	if(this.__scr.style.getPropertyValue("width") != "100%") this.__scr.style.width = width + "px";
	if(this.__scr.style.getPropertyValue("height") != "100%") this.__scr.style.height = height + "px";
};
$hxClasses["flash.Lib"] = flash.Lib;
flash.Lib.__name__ = ["flash","Lib"];
flash.Lib.__properties__ = {get_current:"get_current"}
flash.Lib["as"] = function(v,c) {
	return js.Boot.__instanceof(v,c)?v:null;
}
flash.Lib.attach = function(name) {
	return new flash.display.MovieClip();
}
flash.Lib.getTimer = function() {
	return (haxe.Timer.stamp() - flash.Lib.starttime) * 1000 | 0;
}
flash.Lib.getURL = function(request,target) {
	window.open(request.url);
}
flash.Lib.nmeAppendSurface = function(surface,before,after) {
	if(flash.Lib.mMe.__scr != null) {
		surface.style.setProperty("position","absolute","");
		surface.style.setProperty("left","0px","");
		surface.style.setProperty("top","0px","");
		surface.style.setProperty("transform-origin","0 0","");
		surface.style.setProperty("-moz-transform-origin","0 0","");
		surface.style.setProperty("-webkit-transform-origin","0 0","");
		surface.style.setProperty("-o-transform-origin","0 0","");
		surface.style.setProperty("-ms-transform-origin","0 0","");
		try {
			if(surface.localName == "canvas") surface.onmouseover = surface.onselectstart = function() {
				return false;
			};
		} catch( e ) {
		}
		if(before != null) before.parentNode.insertBefore(surface,before); else if(after != null && after.nextSibling != null) after.parentNode.insertBefore(surface,after.nextSibling); else flash.Lib.mMe.__scr.appendChild(surface);
	}
}
flash.Lib.nmeAppendText = function(surface,container,text,wrap,isHtml) {
	var _g1 = 0, _g = surface.childNodes.length;
	while(_g1 < _g) {
		var i = _g1++;
		surface.removeChild(surface.childNodes[i]);
	}
	if(isHtml) container.innerHTML = text; else container.appendChild(js.Browser.document.createTextNode(text));
	container.style.setProperty("position","relative","");
	container.style.setProperty("cursor","default","");
	if(!wrap) container.style.setProperty("white-space","nowrap","");
	surface.appendChild(container);
}
flash.Lib.nmeBootstrap = function() {
	if(flash.Lib.mMe == null) {
		var target = js.Browser.document.getElementById("haxe:jeash");
		if(target == null) target = js.Browser.document.createElement("div");
		var agent = navigator.userAgent;
		if(agent.indexOf("BlackBerry") > -1 && target.style.height == "100%") target.style.height = screen.height + "px";
		if(agent.indexOf("Android") > -1) {
			var version = Std.parseFloat(HxOverrides.substr(agent,agent.indexOf("Android") + 8,3));
			if(version <= 2.3) flash.Lib.mForce2DTransform = true;
		}
		flash.Lib.Run(target,flash.Lib.nmeGetWidth(),flash.Lib.nmeGetHeight());
	}
}
flash.Lib.nmeCopyStyle = function(src,tgt) {
	tgt.id = src.id;
	var _g = 0, _g1 = ["left","top","transform","transform-origin","-moz-transform","-moz-transform-origin","-webkit-transform","-webkit-transform-origin","-o-transform","-o-transform-origin","opacity","display"];
	while(_g < _g1.length) {
		var prop = _g1[_g];
		++_g;
		tgt.style.setProperty(prop,src.style.getPropertyValue(prop),"");
	}
}
flash.Lib.nmeCreateSurfaceAnimationCSS = function(surface,data,template,templateFunc,fps,discrete,infinite) {
	if(infinite == null) infinite = false;
	if(discrete == null) discrete = false;
	if(fps == null) fps = 25;
	if(surface.id == null || surface.id == "") {
		flash.Lib.trace("Failed to create a CSS Style tag for a surface without an id attribute");
		return null;
	}
	var style = null;
	if(surface.getAttribute("data-nme-anim") != null) style = js.Browser.document.getElementById(surface.getAttribute("data-nme-anim")); else {
		style = flash.Lib.mMe.__scr.appendChild(js.Browser.document.createElement("style"));
		style.sheet.id = "__nme_anim_" + surface.id + "__";
		surface.setAttribute("data-nme-anim",style.sheet.id);
	}
	var keyframeStylesheetRule = "";
	var _g1 = 0, _g = data.length;
	while(_g1 < _g) {
		var i = _g1++;
		var perc = i / (data.length - 1) * 100;
		var frame = data[i];
		keyframeStylesheetRule += perc + "% { " + template.execute(templateFunc(frame)) + " } ";
	}
	var animationDiscreteRule = discrete?"steps(::steps::, end)":"";
	var animationInfiniteRule = infinite?"infinite":"";
	var animationTpl = "";
	var _g = 0, _g1 = ["animation","-moz-animation","-webkit-animation","-o-animation","-ms-animation"];
	while(_g < _g1.length) {
		var prefix = _g1[_g];
		++_g;
		animationTpl += prefix + ": ::id:: ::duration::s " + animationDiscreteRule + " " + animationInfiniteRule + "; ";
	}
	var animationStylesheetRule = new haxe.Template(animationTpl).execute({ id : surface.id, duration : data.length / fps, steps : 1});
	var rules = style.sheet.rules != null?style.sheet.rules:style.sheet.cssRules;
	var _g = 0, _g1 = ["","-moz-","-webkit-","-o-","-ms-"];
	while(_g < _g1.length) {
		var variant = _g1[_g];
		++_g;
		try {
			style.sheet.insertRule("@" + variant + "keyframes " + surface.id + " {" + keyframeStylesheetRule + "}",rules.length);
		} catch( e ) {
		}
	}
	style.sheet.insertRule("#" + surface.id + " { " + animationStylesheetRule + " } ",rules.length);
	return style;
}
flash.Lib.nmeDesignMode = function(mode) {
	js.Browser.document.designMode = mode?"on":"off";
}
flash.Lib.nmeDisableFullScreen = function() {
}
flash.Lib.nmeDisableRightClick = function() {
	if(flash.Lib.mMe != null) try {
		flash.Lib.mMe.__scr.oncontextmenu = function() {
			return false;
		};
	} catch( e ) {
		flash.Lib.trace("Disable right click not supported in this browser.");
	}
}
flash.Lib.nmeDrawClippedImage = function(surface,tgtCtx,clipRect) {
	if(clipRect != null) {
		if(clipRect.x < 0) {
			clipRect.width += clipRect.x;
			clipRect.x = 0;
		}
		if(clipRect.y < 0) {
			clipRect.height += clipRect.y;
			clipRect.y = 0;
		}
		if(clipRect.width > surface.width - clipRect.x) clipRect.width = surface.width - clipRect.x;
		if(clipRect.height > surface.height - clipRect.y) clipRect.height = surface.height - clipRect.y;
		tgtCtx.drawImage(surface,clipRect.x,clipRect.y,clipRect.width,clipRect.height,clipRect.x,clipRect.y,clipRect.width,clipRect.height);
	} else tgtCtx.drawImage(surface,0,0);
}
flash.Lib.nmeDrawSurfaceRect = function(surface,tgt,x,y,rect) {
	var tgtCtx = tgt.getContext("2d");
	tgt.width = rect.width;
	tgt.height = rect.height;
	tgtCtx.drawImage(surface,rect.x,rect.y,rect.width,rect.height,0,0,rect.width,rect.height);
	tgt.style.left = x + "px";
	tgt.style.top = y + "px";
}
flash.Lib.nmeDrawToSurface = function(surface,tgt,matrix,alpha,clipRect,smoothing) {
	if(smoothing == null) smoothing = true;
	if(alpha == null) alpha = 1.0;
	var srcCtx = surface.getContext("2d");
	var tgtCtx = tgt.getContext("2d");
	tgtCtx.globalAlpha = alpha;
	flash.Lib.nmeSetImageSmoothing(tgtCtx,smoothing);
	if(surface.width > 0 && surface.height > 0) {
		if(matrix != null) {
			tgtCtx.save();
			if(matrix.a == 1 && matrix.b == 0 && matrix.c == 0 && matrix.d == 1) tgtCtx.translate(matrix.tx,matrix.ty); else tgtCtx.setTransform(matrix.a,matrix.b,matrix.c,matrix.d,matrix.tx,matrix.ty);
			flash.Lib.nmeDrawClippedImage(surface,tgtCtx,clipRect);
			tgtCtx.restore();
		} else flash.Lib.nmeDrawClippedImage(surface,tgtCtx,clipRect);
	}
}
flash.Lib.nmeEnableFullScreen = function() {
	if(flash.Lib.mMe != null) {
		var origWidth = flash.Lib.mMe.__scr.style.getPropertyValue("width");
		var origHeight = flash.Lib.mMe.__scr.style.getPropertyValue("height");
		flash.Lib.mMe.__scr.style.setProperty("width","100%","");
		flash.Lib.mMe.__scr.style.setProperty("height","100%","");
		flash.Lib.nmeDisableFullScreen = function() {
			flash.Lib.mMe.__scr.style.setProperty("width",origWidth,"");
			flash.Lib.mMe.__scr.style.setProperty("height",origHeight,"");
		};
	}
}
flash.Lib.nmeEnableRightClick = function() {
	if(flash.Lib.mMe != null) try {
		flash.Lib.mMe.__scr.oncontextmenu = null;
	} catch( e ) {
		flash.Lib.trace("Enable right click not supported in this browser.");
	}
}
flash.Lib.nmeFullScreenHeight = function() {
	return js.Browser.window.innerHeight;
}
flash.Lib.nmeFullScreenWidth = function() {
	return js.Browser.window.innerWidth;
}
flash.Lib.nmeGetHeight = function() {
	var tgt = flash.Lib.mMe != null?flash.Lib.mMe.__scr:js.Browser.document.getElementById("haxe:jeash");
	return tgt != null && tgt.clientHeight > 0?tgt.clientHeight:500;
}
flash.Lib.nmeGetStage = function() {
	if(flash.Lib.mStage == null) {
		var width = flash.Lib.nmeGetWidth();
		var height = flash.Lib.nmeGetHeight();
		flash.Lib.mStage = new flash.display.Stage(width,height);
	}
	return flash.Lib.mStage;
}
flash.Lib.nmeGetWidth = function() {
	var tgt = flash.Lib.mMe != null?flash.Lib.mMe.__scr:js.Browser.document.getElementById("haxe:jeash");
	return tgt != null && tgt.clientWidth > 0?tgt.clientWidth:500;
}
flash.Lib.nmeIsOnStage = function(surface) {
	var p = surface;
	while(p != null && p != flash.Lib.mMe.__scr) p = p.parentNode;
	return p == flash.Lib.mMe.__scr;
}
flash.Lib.nmeParseColor = function(str,cb) {
	var re = new EReg("rgb\\(([0-9]*), ?([0-9]*), ?([0-9]*)\\)","");
	var hex = new EReg("#([0-9a-zA-Z][0-9a-zA-Z])([0-9a-zA-Z][0-9a-zA-Z])([0-9a-zA-Z][0-9a-zA-Z])","");
	if(re.match(str)) {
		var col = 0;
		var _g = 1;
		while(_g < 4) {
			var pos = _g++;
			var v = Std.parseInt(re.matched(pos));
			col = cb(col,pos - 1,v);
		}
		return col;
	} else if(hex.match(str)) {
		var col = 0;
		var _g = 1;
		while(_g < 4) {
			var pos = _g++;
			var v = "0x" + hex.matched(pos) & 255;
			v = cb(col,pos - 1,v);
		}
		return col;
	} else throw "Cannot parse color '" + str + "'.";
}
flash.Lib.nmeRemoveSurface = function(surface) {
	if(flash.Lib.mMe.__scr != null) {
		var anim = surface.getAttribute("data-nme-anim");
		if(anim != null) {
			var style = js.Browser.document.getElementById(anim);
			if(style != null) flash.Lib.mMe.__scr.removeChild(style);
		}
		if(surface.parentNode != null) surface.parentNode.removeChild(surface);
	}
	return surface;
}
flash.Lib.nmeSetSurfaceBorder = function(surface,color,size) {
	surface.style.setProperty("border-color","#" + StringTools.hex(color),"");
	surface.style.setProperty("border-style","solid","");
	surface.style.setProperty("border-width",size + "px","");
	surface.style.setProperty("border-collapse","collapse","");
}
flash.Lib.nmeSetSurfaceClipping = function(surface,rect) {
}
flash.Lib.nmeSetSurfaceFont = function(surface,font,bold,size,color,align,lineHeight) {
	surface.style.setProperty("font-family",font,"");
	surface.style.setProperty("font-weight",Std.string(bold),"");
	surface.style.setProperty("color","#" + StringTools.hex(color),"");
	surface.style.setProperty("font-size",size + "px","");
	surface.style.setProperty("text-align",align,"");
	surface.style.setProperty("line-height",lineHeight + "px","");
}
flash.Lib.nmeSetSurfaceOpacity = function(surface,alpha) {
	surface.style.setProperty("opacity",Std.string(alpha),"");
}
flash.Lib.nmeSetSurfacePadding = function(surface,padding,margin,display) {
	surface.style.setProperty("padding",padding + "px","");
	surface.style.setProperty("margin",margin + "px","");
	surface.style.setProperty("top",padding + 2 + "px","");
	surface.style.setProperty("right",padding + 1 + "px","");
	surface.style.setProperty("left",padding + 1 + "px","");
	surface.style.setProperty("bottom",padding + 1 + "px","");
	surface.style.setProperty("display",display?"inline":"block","");
}
flash.Lib.nmeSetSurfaceTransform = function(surface,matrix) {
	if(matrix.a == 1 && matrix.b == 0 && matrix.c == 0 && matrix.d == 1 && surface.getAttribute("data-nme-anim") == null) {
		surface.style.left = matrix.tx + "px";
		surface.style.top = matrix.ty + "px";
		surface.style.setProperty("transform","","");
		surface.style.setProperty("-moz-transform","","");
		surface.style.setProperty("-webkit-transform","","");
		surface.style.setProperty("-o-transform","","");
		surface.style.setProperty("-ms-transform","","");
	} else {
		surface.style.left = "0px";
		surface.style.top = "0px";
		surface.style.setProperty("transform","matrix(" + matrix.a + ", " + matrix.b + ", " + matrix.c + ", " + matrix.d + ", " + matrix.tx + ", " + matrix.ty + ")","");
		surface.style.setProperty("-moz-transform","matrix(" + matrix.a + ", " + matrix.b + ", " + matrix.c + ", " + matrix.d + ", " + matrix.tx + "px, " + matrix.ty + "px)","");
		if(!flash.Lib.mForce2DTransform) surface.style.setProperty("-webkit-transform","matrix3d(" + matrix.a + ", " + matrix.b + ", " + "0, 0, " + matrix.c + ", " + matrix.d + ", " + "0, 0, 0, 0, 1, 0, " + matrix.tx + ", " + matrix.ty + ", " + "0, 1" + ")",""); else surface.style.setProperty("-webkit-transform","matrix(" + matrix.a + ", " + matrix.b + ", " + matrix.c + ", " + matrix.d + ", " + matrix.tx + ", " + matrix.ty + ")","");
		surface.style.setProperty("-o-transform","matrix(" + matrix.a + ", " + matrix.b + ", " + matrix.c + ", " + matrix.d + ", " + matrix.tx + ", " + matrix.ty + ")","");
		surface.style.setProperty("-ms-transform","matrix(" + matrix.a + ", " + matrix.b + ", " + matrix.c + ", " + matrix.d + ", " + matrix.tx + ", " + matrix.ty + ")","");
	}
}
flash.Lib.nmeSetSurfaceZIndexAfter = function(surface1,surface2) {
	if(surface1 != null && surface2 != null) {
		if(surface1.parentNode != surface2.parentNode && surface2.parentNode != null) surface2.parentNode.appendChild(surface1);
		if(surface2.parentNode != null) {
			var nextSibling = surface2.nextSibling;
			if(surface1.previousSibling != surface2) {
				var swap = flash.Lib.nmeRemoveSurface(surface1);
				if(nextSibling == null) surface2.parentNode.appendChild(swap); else surface2.parentNode.insertBefore(swap,nextSibling);
			}
		}
	}
}
flash.Lib.nmeSwapSurface = function(surface1,surface2) {
	var parent1 = surface1.parentNode;
	var parent2 = surface2.parentNode;
	if(parent1 != null && parent2 != null) {
		if(parent1 == parent2) {
			var next1 = surface1.nextSibling;
			var next2 = surface2.nextSibling;
			if(next1 == surface2) parent1.insertBefore(surface2,surface1); else if(next2 == surface1) parent1.insertBefore(surface1,surface2); else {
				parent1.replaceChild(surface2,surface1);
				if(next2 != null) parent1.insertBefore(surface1,next2); else parent1.appendChild(surface1);
			}
		} else {
			var next2 = surface2.nextSibling;
			parent1.replaceChild(surface2,surface1);
			if(next2 != null) parent2.insertBefore(surface1,next2); else parent2.appendChild(surface1);
		}
	}
}
flash.Lib.nmeSetContentEditable = function(surface,contentEditable) {
	if(contentEditable == null) contentEditable = true;
	surface.setAttribute("contentEditable",contentEditable?"true":"false");
}
flash.Lib.nmeSetCursor = function(type) {
	if(flash.Lib.mMe != null) flash.Lib.mMe.__scr.style.cursor = (function($this) {
		var $r;
		switch( (type)[1] ) {
		case 0:
			$r = "pointer";
			break;
		case 1:
			$r = "text";
			break;
		default:
			$r = "default";
		}
		return $r;
	}(this));
}
flash.Lib.nmeSetImageSmoothing = function(context,enabled) {
	var _g = 0, _g1 = ["imageSmoothingEnabled","mozImageSmoothingEnabled","webkitImageSmoothingEnabled"];
	while(_g < _g1.length) {
		var variant = _g1[_g];
		++_g;
		context[variant] = enabled;
	}
}
flash.Lib.nmeSetSurfaceAlign = function(surface,align) {
	surface.style.setProperty("text-align",align,"");
}
flash.Lib.nmeSetSurfaceId = function(surface,name) {
	var regex = new EReg("[^a-zA-Z0-9\\-]","g");
	surface.id = regex.replace(name,"_");
}
flash.Lib.nmeSetSurfaceRotation = function(surface,rotate) {
	surface.style.setProperty("transform","rotate(" + rotate + "deg)","");
	surface.style.setProperty("-moz-transform","rotate(" + rotate + "deg)","");
	surface.style.setProperty("-webkit-transform","rotate(" + rotate + "deg)","");
	surface.style.setProperty("-o-transform","rotate(" + rotate + "deg)","");
	surface.style.setProperty("-ms-transform","rotate(" + rotate + "deg)","");
}
flash.Lib.nmeSetSurfaceScale = function(surface,scale) {
	surface.style.setProperty("transform","scale(" + scale + ")","");
	surface.style.setProperty("-moz-transform","scale(" + scale + ")","");
	surface.style.setProperty("-webkit-transform","scale(" + scale + ")","");
	surface.style.setProperty("-o-transform","scale(" + scale + ")","");
	surface.style.setProperty("-ms-transform","scale(" + scale + ")","");
}
flash.Lib.nmeSetSurfaceSpritesheetAnimation = function(surface,spec,fps) {
	if(spec.length == 0) return surface;
	var div = js.Browser.document.createElement("div");
	div.style.backgroundImage = "url(" + surface.toDataURL("image/png") + ")";
	div.id = surface.id;
	var keyframeTpl = new haxe.Template("background-position: ::left::px ::top::px; width: ::width::px; height: ::height::px; ");
	var templateFunc = function(frame) {
		return { left : -frame.x, top : -frame.y, width : frame.width, height : frame.height};
	};
	flash.Lib.nmeCreateSurfaceAnimationCSS(div,spec,keyframeTpl,templateFunc,fps,true,true);
	if(flash.Lib.nmeIsOnStage(surface)) {
		flash.Lib.nmeAppendSurface(div);
		flash.Lib.nmeCopyStyle(surface,div);
		flash.Lib.nmeSwapSurface(surface,div);
		flash.Lib.nmeRemoveSurface(surface);
	} else flash.Lib.nmeCopyStyle(surface,div);
	return div;
}
flash.Lib.nmeSetSurfaceVisible = function(surface,visible) {
	if(visible) surface.style.setProperty("display","block",""); else surface.style.setProperty("display","none","");
}
flash.Lib.nmeSetTextDimensions = function(surface,width,height,align) {
	surface.style.setProperty("width",width + "px","");
	surface.style.setProperty("height",height + "px","");
	surface.style.setProperty("overflow","hidden","");
	surface.style.setProperty("text-align",align,"");
}
flash.Lib.nmeSurfaceHitTest = function(surface,x,y) {
	var _g1 = 0, _g = surface.childNodes.length;
	while(_g1 < _g) {
		var i = _g1++;
		var node = surface.childNodes[i];
		if(x >= node.offsetLeft && x <= node.offsetLeft + node.offsetWidth && y >= node.offsetTop && y <= node.offsetTop + node.offsetHeight) return true;
	}
	return false;
}
flash.Lib.preventDefaultTouchMove = function() {
	js.Browser.document.addEventListener("touchmove",function(evt) {
		evt.preventDefault();
	},false);
}
flash.Lib.Run = function(tgt,width,height) {
	flash.Lib.mMe = new flash.Lib(tgt,width,height);
	var _g1 = 0, _g = tgt.attributes.length;
	while(_g1 < _g) {
		var i = _g1++;
		var attr = tgt.attributes.item(i);
		if(StringTools.startsWith(attr.name,"data-")) {
			if(attr.name == "data-" + "framerate") flash.Lib.nmeGetStage().set_frameRate(Std.parseFloat(attr.value));
		}
	}
	var _g = 0, _g1 = flash.Lib.HTML_TOUCH_EVENT_TYPES;
	while(_g < _g1.length) {
		var type = _g1[_g];
		++_g;
		tgt.addEventListener(type,($_=flash.Lib.nmeGetStage(),$bind($_,$_.nmeQueueStageEvent)),true);
	}
	var _g = 0, _g1 = flash.Lib.HTML_TOUCH_ALT_EVENT_TYPES;
	while(_g < _g1.length) {
		var type = _g1[_g];
		++_g;
		tgt.addEventListener(type,($_=flash.Lib.nmeGetStage(),$bind($_,$_.nmeQueueStageEvent)),true);
	}
	var _g = 0, _g1 = flash.Lib.HTML_DIV_EVENT_TYPES;
	while(_g < _g1.length) {
		var type = _g1[_g];
		++_g;
		tgt.addEventListener(type,($_=flash.Lib.nmeGetStage(),$bind($_,$_.nmeQueueStageEvent)),true);
	}
	if(Reflect.hasField(js.Browser.window,"on" + "devicemotion")) js.Browser.window.addEventListener("devicemotion",($_=flash.Lib.nmeGetStage(),$bind($_,$_.nmeQueueStageEvent)),true);
	if(Reflect.hasField(js.Browser.window,"on" + "orientationchange")) js.Browser.window.addEventListener("orientationchange",($_=flash.Lib.nmeGetStage(),$bind($_,$_.nmeQueueStageEvent)),true);
	var _g = 0, _g1 = flash.Lib.HTML_WINDOW_EVENT_TYPES;
	while(_g < _g1.length) {
		var type = _g1[_g];
		++_g;
		js.Browser.window.addEventListener(type,($_=flash.Lib.nmeGetStage(),$bind($_,$_.nmeQueueStageEvent)),false);
	}
	if(tgt.style.backgroundColor != null && tgt.style.backgroundColor != "") flash.Lib.nmeGetStage().set_backgroundColor(flash.Lib.nmeParseColor(tgt.style.backgroundColor,function(res,pos,cur) {
		return pos == 0?res | cur << 16:pos == 1?res | cur << 8:pos == 2?res | cur:(function($this) {
			var $r;
			throw "pos should be 0-2";
			return $r;
		}(this));
	})); else flash.Lib.nmeGetStage().set_backgroundColor(16777215);
	flash.Lib.get_current().get_graphics().beginFill(flash.Lib.nmeGetStage().get_backgroundColor());
	flash.Lib.get_current().get_graphics().drawRect(0,0,width,height);
	flash.Lib.nmeSetSurfaceId(flash.Lib.get_current().get_graphics().nmeSurface,"Root MovieClip");
	flash.Lib.nmeGetStage().nmeUpdateNextWake();
	return flash.Lib.mMe;
}
flash.Lib.setUserScalable = function(isScalable) {
	if(isScalable == null) isScalable = true;
	var meta = js.Browser.document.createElement("meta");
	meta.name = "viewport";
	meta.content = "user-scalable=" + (isScalable?"yes":"no");
}
flash.Lib.trace = function(arg) {
	if(window.console != null) window.console.log(arg);
}
flash.Lib.addCallback = function(functionName,closure) {
	flash.Lib.mMe.__scr[functionName] = closure;
}
flash.Lib.get_current = function() {
	if(flash.Lib.mMainClassRoot == null) {
		flash.Lib.mMainClassRoot = new flash.display.MovieClip();
		flash.Lib.mCurrent = flash.Lib.mMainClassRoot;
		flash.Lib.nmeGetStage().addChild(flash.Lib.mCurrent);
	}
	return flash.Lib.mMainClassRoot;
}
flash.Lib.prototype = {
	__class__: flash.Lib
}
flash._Lib = {}
flash._Lib.CursorType = $hxClasses["flash._Lib.CursorType"] = { __ename__ : ["flash","_Lib","CursorType"], __constructs__ : ["Pointer","Text","Default"] }
flash._Lib.CursorType.Pointer = ["Pointer",0];
flash._Lib.CursorType.Pointer.toString = $estr;
flash._Lib.CursorType.Pointer.__enum__ = flash._Lib.CursorType;
flash._Lib.CursorType.Text = ["Text",1];
flash._Lib.CursorType.Text.toString = $estr;
flash._Lib.CursorType.Text.__enum__ = flash._Lib.CursorType;
flash._Lib.CursorType.Default = ["Default",2];
flash._Lib.CursorType.Default.toString = $estr;
flash._Lib.CursorType.Default.__enum__ = flash._Lib.CursorType;
flash._Vector = {}
flash._Vector.Vector_Impl_ = function() { }
$hxClasses["flash._Vector.Vector_Impl_"] = flash._Vector.Vector_Impl_;
flash._Vector.Vector_Impl_.__name__ = ["flash","_Vector","Vector_Impl_"];
flash._Vector.Vector_Impl_.__properties__ = {set_fixed:"set_fixed",get_fixed:"get_fixed",set_length:"set_length",get_length:"get_length"}
flash._Vector.Vector_Impl_._new = function(length,fixed) {
	return new Array();
}
flash._Vector.Vector_Impl_.concat = function(this1,a) {
	return this1.concat(a);
}
flash._Vector.Vector_Impl_.copy = function(this1) {
	return this1.slice();
}
flash._Vector.Vector_Impl_.iterator = function(this1) {
	return HxOverrides.iter(this1);
}
flash._Vector.Vector_Impl_.join = function(this1,sep) {
	return this1.join(sep);
}
flash._Vector.Vector_Impl_.pop = function(this1) {
	return this1.pop();
}
flash._Vector.Vector_Impl_.push = function(this1,x) {
	return this1.push(x);
}
flash._Vector.Vector_Impl_.reverse = function(this1) {
	this1.reverse();
}
flash._Vector.Vector_Impl_.shift = function(this1) {
	return this1.shift();
}
flash._Vector.Vector_Impl_.unshift = function(this1,x) {
	this1.unshift(x);
}
flash._Vector.Vector_Impl_.slice = function(this1,pos,end) {
	return this1.slice(pos,end);
}
flash._Vector.Vector_Impl_.sort = function(this1,f) {
	this1.sort(f);
}
flash._Vector.Vector_Impl_.splice = function(this1,pos,len) {
	return this1.splice(pos,len);
}
flash._Vector.Vector_Impl_.toString = function(this1) {
	return this1.toString();
}
flash._Vector.Vector_Impl_.indexOf = function(this1,x,from) {
	if(from == null) from = 0;
	var _g1 = from, _g = this1.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(this1[i] == x) return i;
	}
	return -1;
}
flash._Vector.Vector_Impl_.lastIndexOf = function(this1,x,from) {
	if(from == null) from = 0;
	var i = this1.length - 1;
	while(i >= from) {
		if(this1[i] == x) return i;
		i--;
	}
	return -1;
}
flash._Vector.Vector_Impl_.ofArray = function(a) {
	return flash._Vector.Vector_Impl_.concat(flash._Vector.Vector_Impl_._new(),a);
}
flash._Vector.Vector_Impl_.convert = function(v) {
	return v;
}
flash._Vector.Vector_Impl_.fromArray = function(a) {
	return a;
}
flash._Vector.Vector_Impl_.toArray = function(this1) {
	return this1;
}
flash._Vector.Vector_Impl_.get_length = function(this1) {
	return this1.length;
}
flash._Vector.Vector_Impl_.set_length = function(this1,value) {
	if(value < this1.length) this1 = this1.slice(0,value);
	while(value > this1.length) this1.push(null);
	return value;
}
flash._Vector.Vector_Impl_.get_fixed = function(this1) {
	return false;
}
flash._Vector.Vector_Impl_.set_fixed = function(this1,value) {
	return value;
}
flash.accessibility = {}
flash.accessibility.AccessibilityProperties = function() {
	this.description = "";
	this.forceSimple = false;
	this.name = "";
	this.noAutoLabeling = false;
	this.shortcut = "";
	this.silent = false;
};
$hxClasses["flash.accessibility.AccessibilityProperties"] = flash.accessibility.AccessibilityProperties;
flash.accessibility.AccessibilityProperties.__name__ = ["flash","accessibility","AccessibilityProperties"];
flash.accessibility.AccessibilityProperties.prototype = {
	__class__: flash.accessibility.AccessibilityProperties
}
flash.display.Bitmap = function(inBitmapData,inPixelSnapping,inSmoothing) {
	if(inSmoothing == null) inSmoothing = false;
	flash.display.DisplayObject.call(this);
	this.pixelSnapping = inPixelSnapping;
	this.smoothing = inSmoothing;
	if(inBitmapData != null) {
		this.set_bitmapData(inBitmapData);
		this.bitmapData.nmeReferenceCount++;
		if(this.bitmapData.nmeReferenceCount == 1) this.nmeGraphics = new flash.display.Graphics(this.bitmapData._nmeTextureBuffer);
	}
	if(this.pixelSnapping == null) this.pixelSnapping = flash.display.PixelSnapping.AUTO;
	if(this.nmeGraphics == null) this.nmeGraphics = new flash.display.Graphics();
	if(this.bitmapData != null) this.nmeRender();
};
$hxClasses["flash.display.Bitmap"] = flash.display.Bitmap;
flash.display.Bitmap.__name__ = ["flash","display","Bitmap"];
flash.display.Bitmap.__super__ = flash.display.DisplayObject;
flash.display.Bitmap.prototype = $extend(flash.display.DisplayObject.prototype,{
	set_bitmapData: function(inBitmapData) {
		if(inBitmapData != this.bitmapData) {
			if(this.bitmapData != null) {
				this.bitmapData.nmeReferenceCount--;
				if(this.nmeGraphics.nmeSurface == this.bitmapData._nmeTextureBuffer) flash.Lib.nmeSetSurfaceOpacity(this.bitmapData._nmeTextureBuffer,0);
			}
			if(inBitmapData != null) inBitmapData.nmeReferenceCount++;
		}
		this._nmeRenderFlags |= 64;
		if(this.parent != null) this.parent._nmeRenderFlags |= 64;
		this.bitmapData = inBitmapData;
		return inBitmapData;
	}
	,validateBounds: function() {
		if(this.get__boundsInvalid()) {
			flash.display.DisplayObject.prototype.validateBounds.call(this);
			if(this.bitmapData != null) {
				var r = new flash.geom.Rectangle(0,0,this.bitmapData.get_width(),this.bitmapData.get_height());
				if(r.width != 0 || r.height != 0) {
					if(this.nmeBoundsRect.width == 0 && this.nmeBoundsRect.height == 0) this.nmeBoundsRect = r.clone(); else this.nmeBoundsRect.extendBounds(r);
				}
			}
			if(this.scale9Grid != null) {
				this.nmeBoundsRect.width *= this.nmeScaleX;
				this.nmeBoundsRect.height *= this.nmeScaleY;
				this.nmeWidth = this.nmeBoundsRect.width;
				this.nmeHeight = this.nmeBoundsRect.height;
			} else {
				this.nmeWidth = this.nmeBoundsRect.width * this.nmeScaleX;
				this.nmeHeight = this.nmeBoundsRect.height * this.nmeScaleY;
			}
		}
	}
	,toString: function() {
		return "[Bitmap name=" + this.name + " id=" + this._nmeId + "]";
	}
	,nmeRender: function(inMask,clipRect) {
		if(!this.nmeCombinedVisible) return;
		if(this.bitmapData == null) return;
		if((this._nmeRenderFlags & 4) != 0 || (this._nmeRenderFlags & 8) != 0) this.nmeValidateMatrix();
		if(this.bitmapData._nmeTextureBuffer != this.nmeGraphics.nmeSurface) {
			var imageDataLease = this.bitmapData.nmeLease;
			if(imageDataLease != null && (this.nmeCurrentLease == null || imageDataLease.seed != this.nmeCurrentLease.seed || imageDataLease.time != this.nmeCurrentLease.time)) {
				var srcCanvas = this.bitmapData._nmeTextureBuffer;
				this.nmeGraphics.nmeSurface.width = srcCanvas.width;
				this.nmeGraphics.nmeSurface.height = srcCanvas.height;
				this.nmeGraphics.clear();
				flash.Lib.nmeDrawToSurface(srcCanvas,this.nmeGraphics.nmeSurface);
				this.nmeCurrentLease = imageDataLease.clone();
				this._nmeRenderFlags |= 64;
				if(this.parent != null) this.parent._nmeRenderFlags |= 64;
				this.nmeApplyFilters(this.nmeGraphics.nmeSurface);
				this._nmeRenderFlags |= 32;
			}
		}
		if(inMask != null) {
			this.nmeApplyFilters(this.nmeGraphics.nmeSurface);
			var m = this.getBitmapSurfaceTransform(this.nmeGraphics);
			flash.Lib.nmeDrawToSurface(this.nmeGraphics.nmeSurface,inMask,m,(this.parent != null?this.parent.nmeCombinedAlpha:1) * this.alpha,clipRect,this.smoothing);
		} else {
			if((this._nmeRenderFlags & 32) != 0) {
				var m = this.getBitmapSurfaceTransform(this.nmeGraphics);
				flash.Lib.nmeSetSurfaceTransform(this.nmeGraphics.nmeSurface,m);
				this._nmeRenderFlags &= -33;
			}
			if(!this.nmeInit) {
				flash.Lib.nmeSetSurfaceOpacity(this.nmeGraphics.nmeSurface,0);
				this.nmeInit = true;
			} else flash.Lib.nmeSetSurfaceOpacity(this.nmeGraphics.nmeSurface,(this.parent != null?this.parent.nmeCombinedAlpha:1) * this.alpha);
		}
	}
	,nmeGetObjectUnderPoint: function(point) {
		if(!this.get_visible()) return null; else if(this.bitmapData != null) {
			var local = this.globalToLocal(point);
			if(local.x < 0 || local.y < 0 || local.x > this.get_width() || local.y > this.get_height()) return null; else return this;
		} else return flash.display.DisplayObject.prototype.nmeGetObjectUnderPoint.call(this,point);
	}
	,nmeGetGraphics: function() {
		return this.nmeGraphics;
	}
	,getBitmapSurfaceTransform: function(gfx) {
		var extent = gfx.nmeExtentWithFilters;
		var fm = this.transform.nmeGetFullMatrix(null);
		fm.nmeTranslateTransformed(extent.get_topLeft());
		return fm;
	}
	,__class__: flash.display.Bitmap
	,__properties__: $extend(flash.display.DisplayObject.prototype.__properties__,{set_bitmapData:"set_bitmapData"})
});
flash.display.BitmapData = function(width,height,transparent,inFillColor) {
	if(inFillColor == null) inFillColor = -1;
	if(transparent == null) transparent = true;
	this.nmeLocked = false;
	this.nmeReferenceCount = 0;
	this.nmeLeaseNum = 0;
	this.nmeLease = new flash.display.ImageDataLease();
	this.nmeLease.set(this.nmeLeaseNum++,new Date().getTime());
	this._nmeTextureBuffer = js.Browser.document.createElement("canvas");
	this._nmeTextureBuffer.width = width;
	this._nmeTextureBuffer.height = height;
	this._nmeId = flash.utils.Uuid.uuid();
	flash.Lib.nmeSetSurfaceId(this._nmeTextureBuffer,this._nmeId);
	this.nmeTransparent = transparent;
	this.rect = new flash.geom.Rectangle(0,0,width,height);
	if(this.nmeTransparent) {
		this.nmeTransparentFiller = js.Browser.document.createElement("canvas");
		this.nmeTransparentFiller.width = width;
		this.nmeTransparentFiller.height = height;
		var ctx = this.nmeTransparentFiller.getContext("2d");
		ctx.fillStyle = "rgba(0,0,0,0);";
		ctx.fill();
	}
	if(inFillColor != null && width > 0 && height > 0) {
		if(!this.nmeTransparent) inFillColor |= -16777216;
		this.nmeInitColor = inFillColor;
		this.nmeFillRect(this.rect,inFillColor);
	}
};
$hxClasses["flash.display.BitmapData"] = flash.display.BitmapData;
flash.display.BitmapData.__name__ = ["flash","display","BitmapData"];
flash.display.BitmapData.__interfaces__ = [flash.display.IBitmapDrawable];
flash.display.BitmapData.getRGBAPixels = function(bitmapData) {
	var p = bitmapData.getPixels(new flash.geom.Rectangle(0,0,bitmapData._nmeTextureBuffer != null?bitmapData._nmeTextureBuffer.width:0,bitmapData._nmeTextureBuffer != null?bitmapData._nmeTextureBuffer.height:0));
	var num = (bitmapData._nmeTextureBuffer != null?bitmapData._nmeTextureBuffer.width:0) * (bitmapData._nmeTextureBuffer != null?bitmapData._nmeTextureBuffer.height:0);
	p.position = 0;
	var _g = 0;
	while(_g < num) {
		var i = _g++;
		var pos = p.position;
		var alpha = p.readByte();
		var red = p.readByte();
		var green = p.readByte();
		var blue = p.readByte();
		p.position = pos;
		p.writeByte(red);
		p.writeByte(green);
		p.writeByte(blue);
		p.writeByte(alpha);
	}
	return p;
}
flash.display.BitmapData.loadFromBytes = function(bytes,inRawAlpha,onload) {
	var bitmapData = new flash.display.BitmapData(0,0);
	bitmapData.nmeLoadFromBytes(bytes,inRawAlpha,onload);
	return bitmapData;
}
flash.display.BitmapData.nmeBase64Encode = function(bytes) {
	var blob = "";
	var codex = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
	bytes.position = 0;
	while(bytes.position < bytes.length) {
		var by1 = 0, by2 = 0, by3 = 0;
		by1 = bytes.readByte();
		if(bytes.position < bytes.length) by2 = bytes.readByte();
		if(bytes.position < bytes.length) by3 = bytes.readByte();
		var by4 = 0, by5 = 0, by6 = 0, by7 = 0;
		by4 = by1 >> 2;
		by5 = (by1 & 3) << 4 | by2 >> 4;
		by6 = (by2 & 15) << 2 | by3 >> 6;
		by7 = by3 & 63;
		blob += codex.charAt(by4);
		blob += codex.charAt(by5);
		if(bytes.position < bytes.length) blob += codex.charAt(by6); else blob += "=";
		if(bytes.position < bytes.length) blob += codex.charAt(by7); else blob += "=";
	}
	return blob;
}
flash.display.BitmapData.nmeCreateFromHandle = function(inHandle) {
	var result = new flash.display.BitmapData(0,0);
	result._nmeTextureBuffer = inHandle;
	return result;
}
flash.display.BitmapData.nmeIsJPG = function(bytes) {
	bytes.position = 0;
	return bytes.readByte() == 255 && bytes.readByte() == 216;
}
flash.display.BitmapData.nmeIsPNG = function(bytes) {
	bytes.position = 0;
	return bytes.readByte() == 137 && bytes.readByte() == 80 && bytes.readByte() == 78 && bytes.readByte() == 71 && bytes.readByte() == 13 && bytes.readByte() == 10 && bytes.readByte() == 26 && bytes.readByte() == 10;
}
flash.display.BitmapData.prototype = {
	get_width: function() {
		if(this._nmeTextureBuffer != null) return this._nmeTextureBuffer.width; else return 0;
	}
	,get_transparent: function() {
		return this.nmeTransparent;
	}
	,get_height: function() {
		if(this._nmeTextureBuffer != null) return this._nmeTextureBuffer.height; else return 0;
	}
	,nmeOnLoad: function(data,e) {
		var canvas = data.texture;
		var width = data.image.width;
		var height = data.image.height;
		canvas.width = width;
		canvas.height = height;
		var ctx = canvas.getContext("2d");
		ctx.drawImage(data.image,0,0,width,height);
		data.bitmapData.width = width;
		data.bitmapData.height = height;
		data.bitmapData.rect = new flash.geom.Rectangle(0,0,width,height);
		data.bitmapData.nmeBuildLease();
		if(data.inLoader != null) {
			var e1 = new flash.events.Event(flash.events.Event.COMPLETE);
			e1.target = data.inLoader;
			data.inLoader.dispatchEvent(e1);
		}
	}
	,unlock: function(changeRect) {
		this.nmeLocked = false;
		var ctx = this._nmeTextureBuffer.getContext("2d");
		if(this.nmeImageDataChanged) {
			if(changeRect != null) ctx.putImageData(this.nmeImageData,0,0,changeRect.x,changeRect.y,changeRect.width,changeRect.height); else ctx.putImageData(this.nmeImageData,0,0);
		}
		var _g = 0, _g1 = this.nmeCopyPixelList;
		while(_g < _g1.length) {
			var copyCache = _g1[_g];
			++_g;
			if(this.nmeTransparent && copyCache.transparentFiller != null) {
				var trpCtx = copyCache.transparentFiller.getContext("2d");
				var trpData = trpCtx.getImageData(copyCache.sourceX,copyCache.sourceY,copyCache.sourceWidth,copyCache.sourceHeight);
				ctx.putImageData(trpData,copyCache.destX,copyCache.destY);
			}
			ctx.drawImage(copyCache.handle,copyCache.sourceX,copyCache.sourceY,copyCache.sourceWidth,copyCache.sourceHeight,copyCache.destX,copyCache.destY,copyCache.sourceWidth,copyCache.sourceHeight);
		}
		this.nmeLease.set(this.nmeLeaseNum++,new Date().getTime());
	}
	,threshold: function(sourceBitmapData,sourceRect,destPoint,operation,threshold,color,mask,copySource) {
		if(copySource == null) copySource = false;
		if(mask == null) mask = -1;
		if(color == null) color = 0;
		console.log("BitmapData.threshold not implemented");
		return 0;
	}
	,setPixels: function(rect,byteArray) {
		rect = this.clipRect(rect);
		if(rect == null) return;
		var len = Math.round(4 * rect.width * rect.height);
		if(!this.nmeLocked) {
			var ctx = this._nmeTextureBuffer.getContext("2d");
			var imageData = ctx.createImageData(rect.width,rect.height);
			var _g = 0;
			while(_g < len) {
				var i = _g++;
				imageData.data[i] = byteArray.readByte();
			}
			ctx.putImageData(imageData,rect.x,rect.y);
		} else {
			var offset = Math.round(4 * this.nmeImageData.width * rect.y + rect.x * 4);
			var pos = offset;
			var boundR = Math.round(4 * (rect.x + rect.width));
			var _g = 0;
			while(_g < len) {
				var i = _g++;
				if(pos % (this.nmeImageData.width * 4) > boundR - 1) pos += this.nmeImageData.width * 4 - boundR;
				this.nmeImageData.data[pos] = byteArray.readByte();
				pos++;
			}
			this.nmeImageDataChanged = true;
		}
	}
	,setPixel32: function(x,y,color) {
		if(x < 0 || y < 0 || x >= (this._nmeTextureBuffer != null?this._nmeTextureBuffer.width:0) || y >= (this._nmeTextureBuffer != null?this._nmeTextureBuffer.height:0)) return;
		if(!this.nmeLocked) {
			this.nmeLease.set(this.nmeLeaseNum++,new Date().getTime());
			var ctx = this._nmeTextureBuffer.getContext("2d");
			var imageData = ctx.createImageData(1,1);
			imageData.data[0] = (color & 16711680) >>> 16;
			imageData.data[1] = (color & 65280) >>> 8;
			imageData.data[2] = color & 255;
			if(this.nmeTransparent) imageData.data[3] = (color & -16777216) >>> 24; else imageData.data[3] = 255;
			ctx.putImageData(imageData,x,y);
		} else {
			var offset = 4 * y * this.nmeImageData.width + x * 4;
			this.nmeImageData.data[offset] = (color & 16711680) >>> 16;
			this.nmeImageData.data[offset + 1] = (color & 65280) >>> 8;
			this.nmeImageData.data[offset + 2] = color & 255;
			if(this.nmeTransparent) this.nmeImageData.data[offset + 3] = (color & -16777216) >>> 24; else this.nmeImageData.data[offset + 3] = 255;
			this.nmeImageDataChanged = true;
		}
	}
	,setPixel: function(x,y,color) {
		if(x < 0 || y < 0 || x >= (this._nmeTextureBuffer != null?this._nmeTextureBuffer.width:0) || y >= (this._nmeTextureBuffer != null?this._nmeTextureBuffer.height:0)) return;
		if(!this.nmeLocked) {
			this.nmeLease.set(this.nmeLeaseNum++,new Date().getTime());
			var ctx = this._nmeTextureBuffer.getContext("2d");
			var imageData = ctx.createImageData(1,1);
			imageData.data[0] = (color & 16711680) >>> 16;
			imageData.data[1] = (color & 65280) >>> 8;
			imageData.data[2] = color & 255;
			if(this.nmeTransparent) imageData.data[3] = 255;
			ctx.putImageData(imageData,x,y);
		} else {
			var offset = 4 * y * this.nmeImageData.width + x * 4;
			this.nmeImageData.data[offset] = (color & 16711680) >>> 16;
			this.nmeImageData.data[offset + 1] = (color & 65280) >>> 8;
			this.nmeImageData.data[offset + 2] = color & 255;
			if(this.nmeTransparent) this.nmeImageData.data[offset + 3] = 255;
			this.nmeImageDataChanged = true;
		}
	}
	,scroll: function(x,y) {
		throw "bitmapData.scroll is currently not supported for HTML5";
	}
	,noise: function(randomSeed,low,high,channelOptions,grayScale) {
		if(grayScale == null) grayScale = false;
		if(channelOptions == null) channelOptions = 7;
		if(high == null) high = 255;
		if(low == null) low = 0;
		var generator = new flash.display._BitmapData.MinstdGenerator(randomSeed);
		var ctx = this._nmeTextureBuffer.getContext("2d");
		var imageData = null;
		if(this.nmeLocked) imageData = this.nmeImageData; else imageData = ctx.createImageData(this._nmeTextureBuffer.width,this._nmeTextureBuffer.height);
		var _g1 = 0, _g = this._nmeTextureBuffer.width * this._nmeTextureBuffer.height;
		while(_g1 < _g) {
			var i = _g1++;
			if(grayScale) imageData.data[i * 4] = imageData.data[i * 4 + 1] = imageData.data[i * 4 + 2] = low + generator.nextValue() % (high - low + 1); else {
				imageData.data[i * 4] = (channelOptions & 1) == 0?0:low + generator.nextValue() % (high - low + 1);
				imageData.data[i * 4 + 1] = (channelOptions & 2) == 0?0:low + generator.nextValue() % (high - low + 1);
				imageData.data[i * 4 + 2] = (channelOptions & 4) == 0?0:low + generator.nextValue() % (high - low + 1);
			}
			imageData.data[i * 4 + 3] = (channelOptions & 8) == 0?255:low + generator.nextValue() % (high - low + 1);
		}
		if(this.nmeLocked) this.nmeImageDataChanged = true; else ctx.putImageData(imageData,0,0);
	}
	,nmeLoadFromFile: function(inFilename,inLoader) {
		var _g = this;
		var image = js.Browser.document.createElement("img");
		if(inLoader != null) {
			var data = { image : image, texture : this._nmeTextureBuffer, inLoader : inLoader, bitmapData : this};
			image.addEventListener("load",(function(f,a1) {
				return function(e) {
					return f(a1,e);
				};
			})($bind(this,this.nmeOnLoad),data),false);
			image.addEventListener("error",function(e) {
				if(!image.complete) _g.nmeOnLoad(data,e);
			},false);
		}
		image.src = inFilename;
		if(image.complete) {
		}
	}
	,nmeIncrNumRefBitmaps: function() {
		this.nmeAssignedBitmaps++;
	}
	,nmeGetNumRefBitmaps: function() {
		return this.nmeAssignedBitmaps;
	}
	,nmeLoadFromBytes: function(bytes,inRawAlpha,onload) {
		var _g = this;
		var type = "";
		if(flash.display.BitmapData.nmeIsPNG(bytes)) type = "image/png"; else if(flash.display.BitmapData.nmeIsJPG(bytes)) type = "image/jpeg"; else throw new flash.errors.IOError("BitmapData tried to read a PNG/JPG ByteArray, but found an invalid header.");
		var img = js.Browser.document.createElement("img");
		var canvas = this._nmeTextureBuffer;
		var drawImage = function(_) {
			canvas.width = img.width;
			canvas.height = img.height;
			var ctx = canvas.getContext("2d");
			ctx.drawImage(img,0,0);
			if(inRawAlpha != null) {
				var pixels = ctx.getImageData(0,0,img.width,img.height);
				var _g1 = 0, _g2 = inRawAlpha.length;
				while(_g1 < _g2) {
					var i = _g1++;
					pixels.data[i * 4 + 3] = inRawAlpha.readUnsignedByte();
				}
				ctx.putImageData(pixels,0,0);
			}
			_g.rect = new flash.geom.Rectangle(0,0,canvas.width,canvas.height);
			if(onload != null) onload(_g);
		};
		img.addEventListener("load",drawImage,false);
		img.src = "data:" + type + ";base64," + flash.display.BitmapData.nmeBase64Encode(bytes);
	}
	,nmeGetLease: function() {
		return this.nmeLease;
	}
	,nmeFillRect: function(rect,color) {
		this.nmeLease.set(this.nmeLeaseNum++,new Date().getTime());
		var ctx = this._nmeTextureBuffer.getContext("2d");
		var r = (color & 16711680) >>> 16;
		var g = (color & 65280) >>> 8;
		var b = color & 255;
		var a = this.nmeTransparent?color >>> 24:255;
		if(!this.nmeLocked) {
			var style = "rgba(" + r + ", " + g + ", " + b + ", " + a / 255 + ")";
			ctx.fillStyle = style;
			ctx.fillRect(rect.x,rect.y,rect.width,rect.height);
		} else {
			var s = 4 * (Math.round(rect.x) + Math.round(rect.y) * this.nmeImageData.width);
			var offsetY;
			var offsetX;
			var _g1 = 0, _g = Math.round(rect.height);
			while(_g1 < _g) {
				var i = _g1++;
				offsetY = i * this.nmeImageData.width;
				var _g3 = 0, _g2 = Math.round(rect.width);
				while(_g3 < _g2) {
					var j = _g3++;
					offsetX = 4 * (j + offsetY);
					this.nmeImageData.data[s + offsetX] = r;
					this.nmeImageData.data[s + offsetX + 1] = g;
					this.nmeImageData.data[s + offsetX + 2] = b;
					this.nmeImageData.data[s + offsetX + 3] = a;
				}
			}
			this.nmeImageDataChanged = true;
		}
	}
	,nmeDecrNumRefBitmaps: function() {
		this.nmeAssignedBitmaps--;
	}
	,nmeClearCanvas: function() {
		var ctx = this._nmeTextureBuffer.getContext("2d");
		ctx.clearRect(0,0,this._nmeTextureBuffer.width,this._nmeTextureBuffer.height);
	}
	,nmeBuildLease: function() {
		this.nmeLease.set(this.nmeLeaseNum++,new Date().getTime());
	}
	,lock: function() {
		this.nmeLocked = true;
		var ctx = this._nmeTextureBuffer.getContext("2d");
		this.nmeImageData = ctx.getImageData(0,0,this._nmeTextureBuffer != null?this._nmeTextureBuffer.width:0,this._nmeTextureBuffer != null?this._nmeTextureBuffer.height:0);
		this.nmeImageDataChanged = false;
		this.nmeCopyPixelList = [];
	}
	,hitTest: function(firstPoint,firstAlphaThreshold,secondObject,secondBitmapDataPoint,secondAlphaThreshold) {
		if(secondAlphaThreshold == null) secondAlphaThreshold = 1;
		var type = Type.getClassName(Type.getClass(secondObject));
		firstAlphaThreshold = firstAlphaThreshold & -1;
		var me = this;
		var doHitTest = function(imageData) {
			if(secondObject.__proto__ == null || secondObject.__proto__.__class__ == null || secondObject.__proto__.__class__.__name__ == null) return false;
			var _g = secondObject.__proto__.__class__.__name__[2];
			switch(_g) {
			case "Rectangle":
				var rect = secondObject;
				rect.x -= firstPoint.x;
				rect.y -= firstPoint.y;
				rect = me.clipRect(me.rect);
				if(me.rect == null) return false;
				var boundingBox = new flash.geom.Rectangle(0,0,me._nmeTextureBuffer != null?me._nmeTextureBuffer.width:0,me._nmeTextureBuffer != null?me._nmeTextureBuffer.height:0);
				if(!rect.intersects(boundingBox)) return false;
				var diff = rect.intersection(boundingBox);
				var offset = 4 * (Math.round(diff.x) + Math.round(diff.y) * imageData.width) + 3;
				var pos = offset;
				var boundR = Math.round(4 * (diff.x + diff.width));
				while(pos < offset + Math.round(4 * (diff.width + imageData.width * diff.height))) {
					if(pos % (imageData.width * 4) > boundR - 1) pos += imageData.width * 4 - boundR;
					if(imageData.data[pos] - firstAlphaThreshold >= 0) return true;
					pos += 4;
				}
				return false;
			case "Point":
				var point = secondObject;
				var x = point.x - firstPoint.x;
				var y = point.y - firstPoint.y;
				if(x < 0 || y < 0 || x >= (me._nmeTextureBuffer != null?me._nmeTextureBuffer.width:0) || y >= (me._nmeTextureBuffer != null?me._nmeTextureBuffer.height:0)) return false;
				if(imageData.data[Math.round(4 * (y * (me._nmeTextureBuffer != null?me._nmeTextureBuffer.width:0) + x)) + 3] - firstAlphaThreshold > 0) return true;
				return false;
			case "Bitmap":
				throw "bitmapData.hitTest with a second object of type Bitmap is currently not supported for HTML5";
				return false;
			case "BitmapData":
				throw "bitmapData.hitTest with a second object of type BitmapData is currently not supported for HTML5";
				return false;
			default:
				throw "BitmapData::hitTest secondObject argument must be either a Rectangle, a Point, a Bitmap or a BitmapData object.";
				return false;
			}
		};
		if(!this.nmeLocked) {
			this.nmeLease.set(this.nmeLeaseNum++,new Date().getTime());
			var ctx = this._nmeTextureBuffer.getContext("2d");
			var imageData = ctx.getImageData(0,0,this._nmeTextureBuffer != null?this._nmeTextureBuffer.width:0,this._nmeTextureBuffer != null?this._nmeTextureBuffer.height:0);
			return doHitTest(imageData);
		} else return doHitTest(this.nmeImageData);
	}
	,handle: function() {
		return this._nmeTextureBuffer;
	}
	,getPixels: function(rect) {
		var len = Math.round(4 * rect.width * rect.height);
		var byteArray = new flash.utils.ByteArray();
		if(byteArray.allocated < len) byteArray._nmeResizeBuffer(byteArray.allocated = Math.max(len,byteArray.allocated * 2) | 0); else if(byteArray.allocated > len) byteArray._nmeResizeBuffer(byteArray.allocated = len);
		byteArray.length = len;
		len;
		rect = this.clipRect(rect);
		if(rect == null) return byteArray;
		if(!this.nmeLocked) {
			var ctx = this._nmeTextureBuffer.getContext("2d");
			var imagedata = ctx.getImageData(rect.x,rect.y,rect.width,rect.height);
			var _g = 0;
			while(_g < len) {
				var i = _g++;
				byteArray.writeByte(imagedata.data[i]);
			}
		} else {
			var offset = Math.round(4 * this.nmeImageData.width * rect.y + rect.x * 4);
			var pos = offset;
			var boundR = Math.round(4 * (rect.x + rect.width));
			var _g = 0;
			while(_g < len) {
				var i = _g++;
				if(pos % (this.nmeImageData.width * 4) > boundR - 1) pos += this.nmeImageData.width * 4 - boundR;
				byteArray.writeByte(this.nmeImageData.data[pos]);
				pos++;
			}
		}
		byteArray.position = 0;
		return byteArray;
	}
	,getPixel32: function(x,y) {
		if(x < 0 || y < 0 || x >= (this._nmeTextureBuffer != null?this._nmeTextureBuffer.width:0) || y >= (this._nmeTextureBuffer != null?this._nmeTextureBuffer.height:0)) return 0;
		if(!this.nmeLocked) {
			var ctx = this._nmeTextureBuffer.getContext("2d");
			return this.getInt32(0,ctx.getImageData(x,y,1,1).data);
		} else return this.getInt32(4 * y * this._nmeTextureBuffer.width + x * 4,this.nmeImageData.data);
	}
	,getPixel: function(x,y) {
		if(x < 0 || y < 0 || x >= (this._nmeTextureBuffer != null?this._nmeTextureBuffer.width:0) || y >= (this._nmeTextureBuffer != null?this._nmeTextureBuffer.height:0)) return 0;
		if(!this.nmeLocked) {
			var ctx = this._nmeTextureBuffer.getContext("2d");
			var imagedata = ctx.getImageData(x,y,1,1);
			return imagedata.data[0] << 16 | imagedata.data[1] << 8 | imagedata.data[2];
		} else {
			var offset = 4 * y * (this._nmeTextureBuffer != null?this._nmeTextureBuffer.width:0) + x * 4;
			return this.nmeImageData.data[offset] << 16 | this.nmeImageData.data[offset + 1] << 8 | this.nmeImageData.data[offset + 2];
		}
	}
	,getInt32: function(offset,data) {
		return (this.nmeTransparent?data[offset + 3]:255) << 24 | data[offset] << 16 | data[offset + 1] << 8 | data[offset + 2];
	}
	,getColorBoundsRect: function(mask,color,findColor) {
		if(findColor == null) findColor = true;
		var me = this;
		var doGetColorBoundsRect = function(data) {
			var minX = me._nmeTextureBuffer != null?me._nmeTextureBuffer.width:0, maxX = 0, minY = me._nmeTextureBuffer != null?me._nmeTextureBuffer.height:0, maxY = 0, i = 0;
			while(i < data.length) {
				var value = me.getInt32(i,data);
				if(findColor) {
					if((value & mask) == color) {
						var x = Math.round(i % ((me._nmeTextureBuffer != null?me._nmeTextureBuffer.width:0) * 4) / 4);
						var y = Math.round(i / ((me._nmeTextureBuffer != null?me._nmeTextureBuffer.width:0) * 4));
						if(x < minX) minX = x;
						if(x > maxX) maxX = x;
						if(y < minY) minY = y;
						if(y > maxY) maxY = y;
					}
				} else if((value & mask) != color) {
					var x = Math.round(i % ((me._nmeTextureBuffer != null?me._nmeTextureBuffer.width:0) * 4) / 4);
					var y = Math.round(i / ((me._nmeTextureBuffer != null?me._nmeTextureBuffer.width:0) * 4));
					if(x < minX) minX = x;
					if(x > maxX) maxX = x;
					if(y < minY) minY = y;
					if(y > maxY) maxY = y;
				}
				i += 4;
			}
			if(minX < maxX && minY < maxY) return new flash.geom.Rectangle(minX,minY,maxX - minX + 1,maxY - minY); else return new flash.geom.Rectangle(0,0,me._nmeTextureBuffer != null?me._nmeTextureBuffer.width:0,me._nmeTextureBuffer != null?me._nmeTextureBuffer.height:0);
		};
		if(!this.nmeLocked) {
			var ctx = this._nmeTextureBuffer.getContext("2d");
			var imageData = ctx.getImageData(0,0,this._nmeTextureBuffer != null?this._nmeTextureBuffer.width:0,this._nmeTextureBuffer != null?this._nmeTextureBuffer.height:0);
			return doGetColorBoundsRect(imageData.data);
		} else return doGetColorBoundsRect(this.nmeImageData.data);
	}
	,floodFill: function(x,y,color) {
		var wasLocked = this.nmeLocked;
		if(!this.nmeLocked) this.lock();
		var queue = new Array();
		queue.push(new flash.geom.Point(x,y));
		var old = this.getPixel32(x,y);
		var iterations = 0;
		var search = new Array();
		var _g1 = 0, _g = (this._nmeTextureBuffer != null?this._nmeTextureBuffer.width:0) + 1;
		while(_g1 < _g) {
			var i = _g1++;
			var column = new Array();
			var _g3 = 0, _g2 = (this._nmeTextureBuffer != null?this._nmeTextureBuffer.height:0) + 1;
			while(_g3 < _g2) {
				var i1 = _g3++;
				column.push(false);
			}
			search.push(column);
		}
		var currPoint, newPoint;
		while(queue.length > 0) {
			currPoint = queue.shift();
			++iterations;
			var x1 = currPoint.x | 0;
			var y1 = currPoint.y | 0;
			if(x1 < 0 || x1 >= (this._nmeTextureBuffer != null?this._nmeTextureBuffer.width:0)) continue;
			if(y1 < 0 || y1 >= (this._nmeTextureBuffer != null?this._nmeTextureBuffer.height:0)) continue;
			search[x1][y1] = true;
			if(this.getPixel32(x1,y1) == old) {
				this.setPixel32(x1,y1,color);
				if(!search[x1 + 1][y1]) queue.push(new flash.geom.Point(x1 + 1,y1));
				if(!search[x1][y1 + 1]) queue.push(new flash.geom.Point(x1,y1 + 1));
				if(x1 > 0 && !search[x1 - 1][y1]) queue.push(new flash.geom.Point(x1 - 1,y1));
				if(y1 > 0 && !search[x1][y1 - 1]) queue.push(new flash.geom.Point(x1,y1 - 1));
			}
		}
		if(!wasLocked) this.unlock();
	}
	,fillRect: function(rect,color) {
		if(rect == null) return;
		if(rect.width <= 0 || rect.height <= 0) return;
		if(rect.x == 0 && rect.y == 0 && rect.width == this._nmeTextureBuffer.width && rect.height == this._nmeTextureBuffer.height) {
			if(this.nmeTransparent) {
				if(color >>> 24 == 0 || color == this.nmeInitColor) return this.nmeClearCanvas();
			} else if((color | -16777216) == (this.nmeInitColor | -16777216)) return this.nmeClearCanvas();
		}
		return this.nmeFillRect(rect,color);
	}
	,drawToSurface: function(inSurface,matrix,inColorTransform,blendMode,clipRect,smoothing) {
		this.nmeLease.set(this.nmeLeaseNum++,new Date().getTime());
		var ctx = inSurface.getContext("2d");
		if(matrix != null) {
			ctx.save();
			if(matrix.a == 1 && matrix.b == 0 && matrix.c == 0 && matrix.d == 1) ctx.translate(matrix.tx,matrix.ty); else {
				flash.Lib.nmeSetImageSmoothing(ctx,smoothing);
				ctx.setTransform(matrix.a,matrix.b,matrix.c,matrix.d,matrix.tx,matrix.ty);
			}
			ctx.drawImage(this._nmeTextureBuffer,0,0);
			ctx.restore();
		} else ctx.drawImage(this._nmeTextureBuffer,0,0);
		if(inColorTransform != null) this.colorTransform(new flash.geom.Rectangle(0,0,this._nmeTextureBuffer.width,this._nmeTextureBuffer.height),inColorTransform);
	}
	,draw: function(source,matrix,inColorTransform,blendMode,clipRect,smoothing) {
		if(smoothing == null) smoothing = false;
		this.nmeLease.set(this.nmeLeaseNum++,new Date().getTime());
		source.drawToSurface(this._nmeTextureBuffer,matrix,inColorTransform,blendMode,clipRect,smoothing);
		if(inColorTransform != null) {
			var rect = new flash.geom.Rectangle();
			var object = source;
			rect.x = matrix != null?matrix.tx:0;
			rect.y = matrix != null?matrix.ty:0;
			try {
				rect.width = Reflect.getProperty(source,"width");
				rect.height = Reflect.getProperty(source,"height");
			} catch( e ) {
				rect.width = this._nmeTextureBuffer.width;
				rect.height = this._nmeTextureBuffer.height;
			}
			this.colorTransform(rect,inColorTransform);
		}
	}
	,dispose: function() {
		this.nmeClearCanvas();
		this._nmeTextureBuffer = null;
		this.nmeLeaseNum = 0;
		this.nmeLease = null;
		this.nmeImageData = null;
	}
	,destroy: function() {
		this._nmeTextureBuffer = null;
	}
	,copyPixels: function(sourceBitmapData,sourceRect,destPoint,alphaBitmapData,alphaPoint,mergeAlpha) {
		if(mergeAlpha == null) mergeAlpha = false;
		if(sourceBitmapData._nmeTextureBuffer == null || this._nmeTextureBuffer == null || sourceBitmapData._nmeTextureBuffer.width == 0 || sourceBitmapData._nmeTextureBuffer.height == 0 || sourceRect.width <= 0 || sourceRect.height <= 0) return;
		if(sourceRect.x + sourceRect.width > sourceBitmapData._nmeTextureBuffer.width) sourceRect.width = sourceBitmapData._nmeTextureBuffer.width - sourceRect.x;
		if(sourceRect.y + sourceRect.height > sourceBitmapData._nmeTextureBuffer.height) sourceRect.height = sourceBitmapData._nmeTextureBuffer.height - sourceRect.y;
		if(alphaBitmapData != null && alphaBitmapData.nmeTransparent) {
			if(alphaPoint == null) alphaPoint = new flash.geom.Point();
			var bitmapData = new flash.display.BitmapData(sourceBitmapData._nmeTextureBuffer != null?sourceBitmapData._nmeTextureBuffer.width:0,sourceBitmapData._nmeTextureBuffer != null?sourceBitmapData._nmeTextureBuffer.height:0,true);
			bitmapData.copyPixels(sourceBitmapData,sourceRect,new flash.geom.Point(sourceRect.x,sourceRect.y));
			bitmapData.copyChannel(alphaBitmapData,new flash.geom.Rectangle(alphaPoint.x,alphaPoint.y,sourceRect.width,sourceRect.height),new flash.geom.Point(sourceRect.x,sourceRect.y),8,8);
			sourceBitmapData = bitmapData;
		}
		if(!this.nmeLocked) {
			this.nmeLease.set(this.nmeLeaseNum++,new Date().getTime());
			var ctx = this._nmeTextureBuffer.getContext("2d");
			if(!mergeAlpha) {
				if(this.nmeTransparent && sourceBitmapData.nmeTransparent) {
					var trpCtx = sourceBitmapData.nmeTransparentFiller.getContext("2d");
					var trpData = trpCtx.getImageData(sourceRect.x,sourceRect.y,sourceRect.width,sourceRect.height);
					ctx.putImageData(trpData,destPoint.x,destPoint.y);
				}
			}
			ctx.drawImage(sourceBitmapData._nmeTextureBuffer,sourceRect.x,sourceRect.y,sourceRect.width,sourceRect.height,destPoint.x,destPoint.y,sourceRect.width,sourceRect.height);
		} else this.nmeCopyPixelList[this.nmeCopyPixelList.length] = { handle : sourceBitmapData._nmeTextureBuffer, transparentFiller : mergeAlpha?null:sourceBitmapData.nmeTransparentFiller, sourceX : sourceRect.x, sourceY : sourceRect.y, sourceWidth : sourceRect.width, sourceHeight : sourceRect.height, destX : destPoint.x, destY : destPoint.y};
	}
	,copyChannel: function(sourceBitmapData,sourceRect,destPoint,sourceChannel,destChannel) {
		this.rect = this.clipRect(this.rect);
		if(this.rect == null) return;
		if(destChannel == 8 && !this.nmeTransparent) return;
		if(sourceBitmapData._nmeTextureBuffer == null || this._nmeTextureBuffer == null || sourceRect.width <= 0 || sourceRect.height <= 0) return;
		if(sourceRect.x + sourceRect.width > sourceBitmapData._nmeTextureBuffer.width) sourceRect.width = sourceBitmapData._nmeTextureBuffer.width - sourceRect.x;
		if(sourceRect.y + sourceRect.height > sourceBitmapData._nmeTextureBuffer.height) sourceRect.height = sourceBitmapData._nmeTextureBuffer.height - sourceRect.y;
		var doChannelCopy = function(imageData) {
			var srcCtx = sourceBitmapData._nmeTextureBuffer.getContext("2d");
			var srcImageData = srcCtx.getImageData(sourceRect.x,sourceRect.y,sourceRect.width,sourceRect.height);
			var destIdx = -1;
			if(destChannel == 8) destIdx = 3; else if(destChannel == 4) destIdx = 2; else if(destChannel == 2) destIdx = 1; else if(destChannel == 1) destIdx = 0; else throw "Invalid destination BitmapDataChannel passed to BitmapData::copyChannel.";
			var pos = 4 * (Math.round(destPoint.x) + Math.round(destPoint.y) * imageData.width) + destIdx;
			var boundR = Math.round(4 * (destPoint.x + sourceRect.width));
			var setPos = function(val) {
				if(pos % (imageData.width * 4) > boundR - 1) pos += imageData.width * 4 - boundR;
				imageData.data[pos] = val;
				pos += 4;
			};
			var srcIdx = -1;
			if(sourceChannel == 8) srcIdx = 3; else if(sourceChannel == 4) srcIdx = 2; else if(sourceChannel == 2) srcIdx = 1; else if(sourceChannel == 1) srcIdx = 0; else throw "Invalid source BitmapDataChannel passed to BitmapData::copyChannel.";
			while(srcIdx < srcImageData.data.length) {
				setPos(srcImageData.data[srcIdx]);
				srcIdx += 4;
			}
		};
		if(!this.nmeLocked) {
			this.nmeLease.set(this.nmeLeaseNum++,new Date().getTime());
			var ctx = this._nmeTextureBuffer.getContext("2d");
			var imageData = ctx.getImageData(0,0,this._nmeTextureBuffer != null?this._nmeTextureBuffer.width:0,this._nmeTextureBuffer != null?this._nmeTextureBuffer.height:0);
			doChannelCopy(imageData);
			ctx.putImageData(imageData,0,0);
		} else {
			doChannelCopy(this.nmeImageData);
			this.nmeImageDataChanged = true;
		}
	}
	,compare: function(inBitmapTexture) {
		throw "bitmapData.compare is currently not supported for HTML5";
		return 0;
	}
	,colorTransform: function(rect,colorTransform) {
		if(rect == null) return;
		rect = this.clipRect(rect);
		if(!this.nmeLocked) {
			this.nmeLease.set(this.nmeLeaseNum++,new Date().getTime());
			var ctx = this._nmeTextureBuffer.getContext("2d");
			var imagedata = ctx.getImageData(rect.x,rect.y,rect.width,rect.height);
			var offsetX;
			var _g1 = 0, _g = imagedata.data.length >> 2;
			while(_g1 < _g) {
				var i = _g1++;
				offsetX = i * 4;
				imagedata.data[offsetX] = imagedata.data[offsetX] * colorTransform.redMultiplier + colorTransform.redOffset | 0;
				imagedata.data[offsetX + 1] = imagedata.data[offsetX + 1] * colorTransform.greenMultiplier + colorTransform.greenOffset | 0;
				imagedata.data[offsetX + 2] = imagedata.data[offsetX + 2] * colorTransform.blueMultiplier + colorTransform.blueOffset | 0;
				imagedata.data[offsetX + 3] = imagedata.data[offsetX + 3] * colorTransform.alphaMultiplier + colorTransform.alphaOffset | 0;
			}
			ctx.putImageData(imagedata,rect.x,rect.y);
		} else {
			var s = 4 * (Math.round(rect.x) + Math.round(rect.y) * this.nmeImageData.width);
			var offsetY;
			var offsetX;
			var _g1 = 0, _g = Math.round(rect.height);
			while(_g1 < _g) {
				var i = _g1++;
				offsetY = i * this.nmeImageData.width;
				var _g3 = 0, _g2 = Math.round(rect.width);
				while(_g3 < _g2) {
					var j = _g3++;
					offsetX = 4 * (j + offsetY);
					this.nmeImageData.data[s + offsetX] = this.nmeImageData.data[s + offsetX] * colorTransform.redMultiplier + colorTransform.redOffset | 0;
					this.nmeImageData.data[s + offsetX + 1] = this.nmeImageData.data[s + offsetX + 1] * colorTransform.greenMultiplier + colorTransform.greenOffset | 0;
					this.nmeImageData.data[s + offsetX + 2] = this.nmeImageData.data[s + offsetX + 2] * colorTransform.blueMultiplier + colorTransform.blueOffset | 0;
					this.nmeImageData.data[s + offsetX + 3] = this.nmeImageData.data[s + offsetX + 3] * colorTransform.alphaMultiplier + colorTransform.alphaOffset | 0;
				}
			}
			this.nmeImageDataChanged = true;
		}
	}
	,clone: function() {
		var bitmapData = new flash.display.BitmapData(this._nmeTextureBuffer != null?this._nmeTextureBuffer.width:0,this._nmeTextureBuffer != null?this._nmeTextureBuffer.height:0,this.nmeTransparent);
		var rect = new flash.geom.Rectangle(0,0,this._nmeTextureBuffer != null?this._nmeTextureBuffer.width:0,this._nmeTextureBuffer != null?this._nmeTextureBuffer.height:0);
		bitmapData.setPixels(rect,this.getPixels(rect));
		bitmapData.nmeLease.set(bitmapData.nmeLeaseNum++,new Date().getTime());
		return bitmapData;
	}
	,clipRect: function(r) {
		if(r.x < 0) {
			r.width -= -r.x;
			r.x = 0;
			if(r.x + r.width <= 0) return null;
		}
		if(r.y < 0) {
			r.height -= -r.y;
			r.y = 0;
			if(r.y + r.height <= 0) return null;
		}
		if(r.x + r.width >= (this._nmeTextureBuffer != null?this._nmeTextureBuffer.width:0)) {
			r.width -= r.x + r.width - (this._nmeTextureBuffer != null?this._nmeTextureBuffer.width:0);
			if(r.width <= 0) return null;
		}
		if(r.y + r.height >= (this._nmeTextureBuffer != null?this._nmeTextureBuffer.height:0)) {
			r.height -= r.y + r.height - (this._nmeTextureBuffer != null?this._nmeTextureBuffer.height:0);
			if(r.height <= 0) return null;
		}
		return r;
	}
	,clear: function(color) {
		this.fillRect(this.rect,color);
	}
	,applyFilter: function(sourceBitmapData,sourceRect,destPoint,filter) {
		if(sourceBitmapData == this && sourceRect.x == destPoint.x && sourceRect.y == destPoint.y) filter.nmeApplyFilter(this._nmeTextureBuffer,sourceRect); else {
			var bitmapData = new flash.display.BitmapData(sourceRect.width | 0,sourceRect.height | 0);
			bitmapData.copyPixels(sourceBitmapData,sourceRect,new flash.geom.Point());
			filter.nmeApplyFilter(bitmapData._nmeTextureBuffer);
			this.copyPixels(bitmapData,bitmapData.rect,destPoint);
		}
	}
	,__class__: flash.display.BitmapData
	,__properties__: {get_height:"get_height",get_transparent:"get_transparent",get_width:"get_width"}
}
flash.display.ImageDataLease = function() {
};
$hxClasses["flash.display.ImageDataLease"] = flash.display.ImageDataLease;
flash.display.ImageDataLease.__name__ = ["flash","display","ImageDataLease"];
flash.display.ImageDataLease.prototype = {
	set: function(s,t) {
		this.seed = s;
		this.time = t;
	}
	,clone: function() {
		var leaseClone = new flash.display.ImageDataLease();
		leaseClone.seed = this.seed;
		leaseClone.time = this.time;
		return leaseClone;
	}
	,__class__: flash.display.ImageDataLease
}
flash.display._BitmapData = {}
flash.display._BitmapData.MinstdGenerator = function(seed) {
	if(seed == 0) this.value = 1; else this.value = seed;
};
$hxClasses["flash.display._BitmapData.MinstdGenerator"] = flash.display._BitmapData.MinstdGenerator;
flash.display._BitmapData.MinstdGenerator.__name__ = ["flash","display","_BitmapData","MinstdGenerator"];
flash.display._BitmapData.MinstdGenerator.prototype = {
	nextValue: function() {
		var lo = 16807 * (this.value & 65535);
		var hi = 16807 * (this.value >>> 16);
		lo += (hi & 32767) << 16;
		if(lo < 0 || lo > -2147483648 - 1) {
			lo &= -2147483648 - 1;
			++lo;
		}
		lo += hi >>> 15;
		if(lo < 0 || lo > -2147483648 - 1) {
			lo &= -2147483648 - 1;
			++lo;
		}
		return this.value = lo;
	}
	,__class__: flash.display._BitmapData.MinstdGenerator
}
flash.display.BitmapDataChannel = function() { }
$hxClasses["flash.display.BitmapDataChannel"] = flash.display.BitmapDataChannel;
flash.display.BitmapDataChannel.__name__ = ["flash","display","BitmapDataChannel"];
flash.display.BlendMode = $hxClasses["flash.display.BlendMode"] = { __ename__ : ["flash","display","BlendMode"], __constructs__ : ["ADD","ALPHA","DARKEN","DIFFERENCE","ERASE","HARDLIGHT","INVERT","LAYER","LIGHTEN","MULTIPLY","NORMAL","OVERLAY","SCREEN","SUBTRACT"] }
flash.display.BlendMode.ADD = ["ADD",0];
flash.display.BlendMode.ADD.toString = $estr;
flash.display.BlendMode.ADD.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.ALPHA = ["ALPHA",1];
flash.display.BlendMode.ALPHA.toString = $estr;
flash.display.BlendMode.ALPHA.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.DARKEN = ["DARKEN",2];
flash.display.BlendMode.DARKEN.toString = $estr;
flash.display.BlendMode.DARKEN.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.DIFFERENCE = ["DIFFERENCE",3];
flash.display.BlendMode.DIFFERENCE.toString = $estr;
flash.display.BlendMode.DIFFERENCE.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.ERASE = ["ERASE",4];
flash.display.BlendMode.ERASE.toString = $estr;
flash.display.BlendMode.ERASE.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.HARDLIGHT = ["HARDLIGHT",5];
flash.display.BlendMode.HARDLIGHT.toString = $estr;
flash.display.BlendMode.HARDLIGHT.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.INVERT = ["INVERT",6];
flash.display.BlendMode.INVERT.toString = $estr;
flash.display.BlendMode.INVERT.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.LAYER = ["LAYER",7];
flash.display.BlendMode.LAYER.toString = $estr;
flash.display.BlendMode.LAYER.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.LIGHTEN = ["LIGHTEN",8];
flash.display.BlendMode.LIGHTEN.toString = $estr;
flash.display.BlendMode.LIGHTEN.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.MULTIPLY = ["MULTIPLY",9];
flash.display.BlendMode.MULTIPLY.toString = $estr;
flash.display.BlendMode.MULTIPLY.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.NORMAL = ["NORMAL",10];
flash.display.BlendMode.NORMAL.toString = $estr;
flash.display.BlendMode.NORMAL.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.OVERLAY = ["OVERLAY",11];
flash.display.BlendMode.OVERLAY.toString = $estr;
flash.display.BlendMode.OVERLAY.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.SCREEN = ["SCREEN",12];
flash.display.BlendMode.SCREEN.toString = $estr;
flash.display.BlendMode.SCREEN.__enum__ = flash.display.BlendMode;
flash.display.BlendMode.SUBTRACT = ["SUBTRACT",13];
flash.display.BlendMode.SUBTRACT.toString = $estr;
flash.display.BlendMode.SUBTRACT.__enum__ = flash.display.BlendMode;
flash.display.CapsStyle = $hxClasses["flash.display.CapsStyle"] = { __ename__ : ["flash","display","CapsStyle"], __constructs__ : ["NONE","ROUND","SQUARE"] }
flash.display.CapsStyle.NONE = ["NONE",0];
flash.display.CapsStyle.NONE.toString = $estr;
flash.display.CapsStyle.NONE.__enum__ = flash.display.CapsStyle;
flash.display.CapsStyle.ROUND = ["ROUND",1];
flash.display.CapsStyle.ROUND.toString = $estr;
flash.display.CapsStyle.ROUND.__enum__ = flash.display.CapsStyle;
flash.display.CapsStyle.SQUARE = ["SQUARE",2];
flash.display.CapsStyle.SQUARE.toString = $estr;
flash.display.CapsStyle.SQUARE.__enum__ = flash.display.CapsStyle;
flash.display.GradientType = $hxClasses["flash.display.GradientType"] = { __ename__ : ["flash","display","GradientType"], __constructs__ : ["RADIAL","LINEAR"] }
flash.display.GradientType.RADIAL = ["RADIAL",0];
flash.display.GradientType.RADIAL.toString = $estr;
flash.display.GradientType.RADIAL.__enum__ = flash.display.GradientType;
flash.display.GradientType.LINEAR = ["LINEAR",1];
flash.display.GradientType.LINEAR.toString = $estr;
flash.display.GradientType.LINEAR.__enum__ = flash.display.GradientType;
flash.display.Graphics = function(inSurface) {
	flash.Lib.nmeBootstrap();
	if(inSurface == null) {
		this.nmeSurface = js.Browser.document.createElement("canvas");
		this.nmeSurface.width = 0;
		this.nmeSurface.height = 0;
	} else this.nmeSurface = inSurface;
	this.mLastMoveID = 0;
	this.mPenX = 0.0;
	this.mPenY = 0.0;
	this.mDrawList = new Array();
	this.mPoints = [];
	this.mSolidGradient = null;
	this.mBitmap = null;
	this.mFilling = false;
	this.mFillColour = 0;
	this.mFillAlpha = 0.0;
	this.mLastMoveID = 0;
	this.boundsDirty = true;
	this.nmeClearLine();
	this.mLineJobs = [];
	this.nmeChanged = true;
	this.nextDrawIndex = 0;
	this.nmeExtent = new flash.geom.Rectangle();
	this.nmeExtentWithFilters = new flash.geom.Rectangle();
	this._padding = 0.0;
	this.nmeClearNextCycle = true;
};
$hxClasses["flash.display.Graphics"] = flash.display.Graphics;
flash.display.Graphics.__name__ = ["flash","display","Graphics"];
flash.display.Graphics.nmeDetectIsPointInPathMode = function() {
	var canvas = js.Browser.document.createElement("canvas");
	var ctx = canvas.getContext("2d");
	if(ctx.isPointInPath == null) return flash.display.PointInPathMode.USER_SPACE;
	ctx.save();
	ctx.translate(1,0);
	ctx.beginPath();
	ctx.rect(0,0,1,1);
	var rv = ctx.isPointInPath(0.3,0.3)?flash.display.PointInPathMode.USER_SPACE:flash.display.PointInPathMode.DEVICE_SPACE;
	ctx.restore();
	return rv;
}
flash.display.Graphics.prototype = {
	nmeRender: function(maskHandle,filters,sx,sy,clip0,clip1,clip2,clip3) {
		if(sy == null) sy = 1.0;
		if(sx == null) sx = 1.0;
		if(!this.nmeChanged) return false;
		this.closePolygon(true);
		var padding = this._padding;
		if(filters != null) {
			var _g = 0;
			while(_g < filters.length) {
				var filter = filters[_g];
				++_g;
				if(Reflect.hasField(filter,"blurX")) padding += Math.max(Reflect.field(filter,"blurX"),Reflect.field(filter,"blurY")) * 4;
			}
		}
		this.nmeExpandFilteredExtent(-(padding * sx) / 2,-(padding * sy) / 2);
		if(this.nmeClearNextCycle) {
			this.nextDrawIndex = 0;
			this.nmeClearCanvas();
			this.nmeClearNextCycle = false;
		}
		if(this.nmeExtentWithFilters.width - this.nmeExtentWithFilters.x > this.nmeSurface.width || this.nmeExtentWithFilters.height - this.nmeExtentWithFilters.y > this.nmeSurface.height) this.nmeAdjustSurface(sx,sy);
		var ctx = (function($this) {
			var $r;
			try {
				$r = $this.nmeSurface.getContext("2d");
			} catch( e ) {
				$r = null;
			}
			return $r;
		}(this));
		if(ctx == null) return false;
		if(clip0 != null) {
			ctx.beginPath();
			ctx.moveTo(clip0.x * sx,clip0.y * sy);
			ctx.lineTo(clip1.x * sx,clip1.y * sy);
			ctx.lineTo(clip2.x * sx,clip2.y * sy);
			ctx.lineTo(clip3.x * sx,clip3.y * sy);
			ctx.closePath();
			ctx.clip();
		}
		if(filters != null) {
			var _g = 0;
			while(_g < filters.length) {
				var filter = filters[_g];
				++_g;
				if(js.Boot.__instanceof(filter,flash.filters.DropShadowFilter)) filter.nmeApplyFilter(this.nmeSurface,null,true);
			}
		}
		var len = this.mDrawList.length;
		ctx.save();
		if(this.nmeExtentWithFilters.x != 0 || this.nmeExtentWithFilters.y != 0) ctx.translate(-this.nmeExtentWithFilters.x * sx,-this.nmeExtentWithFilters.y * sy);
		if(sx != 1 || sy != 0) ctx.scale(sx,sy);
		var doStroke = false;
		var _g = this.nextDrawIndex;
		while(_g < len) {
			var i = _g++;
			var d = this.mDrawList[len - 1 - i];
			if(d.tileJob != null) this.nmeDrawTiles(d.tileJob.sheet,d.tileJob.drawList,d.tileJob.flags); else {
				if(d.lineJobs.length > 0) {
					var _g1 = 0, _g2 = d.lineJobs;
					while(_g1 < _g2.length) {
						var lj = _g2[_g1];
						++_g1;
						ctx.lineWidth = lj.thickness;
						switch(lj.joints) {
						case 0:
							ctx.lineJoin = "round";
							break;
						case 4096:
							ctx.lineJoin = "miter";
							break;
						case 8192:
							ctx.lineJoin = "bevel";
							break;
						}
						switch(lj.caps) {
						case 256:
							ctx.lineCap = "round";
							break;
						case 512:
							ctx.lineCap = "square";
							break;
						case 0:
							ctx.lineCap = "butt";
							break;
						}
						ctx.miterLimit = lj.miter_limit;
						if(lj.grad != null) ctx.strokeStyle = this.createCanvasGradient(ctx,lj.grad); else ctx.strokeStyle = this.createCanvasColor(lj.colour,lj.alpha);
						ctx.beginPath();
						var _g4 = lj.point_idx0, _g3 = lj.point_idx1 + 1;
						while(_g4 < _g3) {
							var i1 = _g4++;
							var p = d.points[i1];
							switch(p.type) {
							case 0:
								ctx.moveTo(p.x,p.y);
								break;
							case 2:
								ctx.quadraticCurveTo(p.cx,p.cy,p.x,p.y);
								break;
							default:
								ctx.lineTo(p.x,p.y);
							}
						}
						ctx.closePath();
						doStroke = true;
					}
				} else {
					ctx.beginPath();
					var _g1 = 0, _g2 = d.points;
					while(_g1 < _g2.length) {
						var p = _g2[_g1];
						++_g1;
						switch(p.type) {
						case 0:
							ctx.moveTo(p.x,p.y);
							break;
						case 2:
							ctx.quadraticCurveTo(p.cx,p.cy,p.x,p.y);
							break;
						default:
							ctx.lineTo(p.x,p.y);
						}
					}
					ctx.closePath();
				}
				var fillColour = d.fillColour;
				var fillAlpha = d.fillAlpha;
				var g = d.solidGradient;
				var bitmap = d.bitmap;
				if(g != null) ctx.fillStyle = this.createCanvasGradient(ctx,g); else if(bitmap != null && (bitmap.flags & 16) > 0) {
					var m = bitmap.matrix;
					if(m != null) ctx.transform(m.a,m.b,m.c,m.d,m.tx,m.ty);
					if((bitmap.flags & 65536) == 0) {
						ctx.mozImageSmoothingEnabled = false;
						ctx.webkitImageSmoothingEnabled = false;
					}
					ctx.fillStyle = ctx.createPattern(bitmap.texture_buffer,"repeat");
				} else ctx.fillStyle = this.createCanvasColor(fillColour,Math.min(1.0,Math.max(0.0,fillAlpha)));
				ctx.fill();
				if(doStroke) ctx.stroke();
				ctx.save();
				if(bitmap != null && (bitmap.flags & 16) == 0) {
					ctx.clip();
					var img = bitmap.texture_buffer;
					var m = bitmap.matrix;
					if(m != null) ctx.transform(m.a,m.b,m.c,m.d,m.tx,m.ty);
					ctx.drawImage(img,0,0);
				}
				ctx.restore();
			}
		}
		ctx.restore();
		this.nmeChanged = false;
		this.nextDrawIndex = len > 0?len - 1:0;
		this.mDrawList = [];
		return true;
	}
	,nmeMediaSurface: function(surface) {
		this.nmeSurface = surface;
	}
	,nmeInvalidate: function() {
		this.nmeChanged = true;
		this.nmeClearNextCycle = true;
	}
	,nmeHitTest: function(inX,inY) {
		var ctx = (function($this) {
			var $r;
			try {
				$r = $this.nmeSurface.getContext("2d");
			} catch( e ) {
				$r = null;
			}
			return $r;
		}(this));
		if(ctx == null) return false;
		if(ctx.isPointInPath(inX,inY)) return true; else if(this.mDrawList.length == 0 && this.nmeExtent.width > 0 && this.nmeExtent.height > 0) return true;
		return false;
	}
	,nmeExpandStandardExtent: function(x,y,thickness) {
		if(thickness == null) thickness = 0;
		if(this._padding > 0) {
			this.nmeExtent.width -= this._padding;
			this.nmeExtent.height -= this._padding;
		}
		if(thickness != null && thickness > this._padding) this._padding = thickness;
		var maxX, minX, maxY, minY;
		minX = this.nmeExtent.x;
		minY = this.nmeExtent.y;
		maxX = this.nmeExtent.width + minX;
		maxY = this.nmeExtent.height + minY;
		maxX = x > maxX?x:maxX;
		minX = x < minX?x:minX;
		maxY = y > maxY?y:maxY;
		minY = y < minY?y:minY;
		this.nmeExtent.x = minX;
		this.nmeExtent.y = minY;
		this.nmeExtent.width = maxX - minX + this._padding;
		this.nmeExtent.height = maxY - minY + this._padding;
		this.boundsDirty = true;
	}
	,nmeExpandFilteredExtent: function(x,y) {
		var maxX, minX, maxY, minY;
		minX = this.nmeExtent.x;
		minY = this.nmeExtent.y;
		maxX = this.nmeExtent.width + minX;
		maxY = this.nmeExtent.height + minY;
		maxX = x > maxX?x:maxX;
		minX = x < minX?x:minX;
		maxY = y > maxY?y:maxY;
		minY = y < minY?y:minY;
		this.nmeExtentWithFilters.x = minX;
		this.nmeExtentWithFilters.y = minY;
		this.nmeExtentWithFilters.width = maxX - minX;
		this.nmeExtentWithFilters.height = maxY - minY;
	}
	,nmeDrawTiles: function(sheet,tileData,flags) {
		if(flags == null) flags = 0;
		var useScale = (flags & 1) > 0;
		var useRotation = (flags & 2) > 0;
		var useTransform = (flags & 16) > 0;
		var useRGB = (flags & 4) > 0;
		var useAlpha = (flags & 8) > 0;
		if(useTransform) {
			useScale = false;
			useRotation = false;
		}
		var scaleIndex = 0;
		var rotationIndex = 0;
		var rgbIndex = 0;
		var alphaIndex = 0;
		var transformIndex = 0;
		var numValues = 3;
		if(useScale) {
			scaleIndex = numValues;
			numValues++;
		}
		if(useRotation) {
			rotationIndex = numValues;
			numValues++;
		}
		if(useTransform) {
			transformIndex = numValues;
			numValues += 4;
		}
		if(useRGB) {
			rgbIndex = numValues;
			numValues += 3;
		}
		if(useAlpha) {
			alphaIndex = numValues;
			numValues++;
		}
		var totalCount = tileData.length;
		var itemCount = totalCount / numValues | 0;
		var index = 0;
		var rect = null;
		var center = null;
		var previousTileID = -1;
		var surface = sheet.nmeBitmap._nmeTextureBuffer;
		var ctx = (function($this) {
			var $r;
			try {
				$r = $this.nmeSurface.getContext("2d");
			} catch( e ) {
				$r = null;
			}
			return $r;
		}(this));
		if(ctx != null) while(index < totalCount) {
			var tileID = tileData[index + 2] | 0;
			if(tileID != previousTileID) {
				rect = sheet.nmeTileRects[tileID];
				center = sheet.nmeCenterPoints[tileID];
				previousTileID = tileID;
			}
			if(rect != null && center != null) {
				ctx.save();
				ctx.translate(tileData[index],tileData[index + 1]);
				if(useRotation) ctx.rotate(tileData[index + rotationIndex]);
				var scale = 1.0;
				if(useScale) scale = tileData[index + scaleIndex];
				if(useTransform) ctx.transform(tileData[index + transformIndex],tileData[index + transformIndex + 1],tileData[index + transformIndex + 2],tileData[index + transformIndex + 3],0,0);
				if(useAlpha) ctx.globalAlpha = tileData[index + alphaIndex];
				ctx.drawImage(surface,rect.x,rect.y,rect.width,rect.height,-center.x * scale,-center.y * scale,rect.width * scale,rect.height * scale);
				ctx.restore();
			}
			index += numValues;
		}
	}
	,nmeDrawEllipse: function(x,y,rx,ry) {
		this.moveTo(x + rx,y);
		this.curveTo(rx + x,-0.4142 * ry + y,0.7071 * rx + x,-0.7071 * ry + y);
		this.curveTo(0.4142 * rx + x,-ry + y,x,-ry + y);
		this.curveTo(-0.4142 * rx + x,-ry + y,-0.7071 * rx + x,-0.7071 * ry + y);
		this.curveTo(-rx + x,-0.4142 * ry + y,-rx + x,y);
		this.curveTo(-rx + x,0.4142 * ry + y,-0.7071 * rx + x,0.7071 * ry + y);
		this.curveTo(-0.4142 * rx + x,ry + y,x,ry + y);
		this.curveTo(0.4142 * rx + x,ry + y,0.7071 * rx + x,0.7071 * ry + y);
		this.curveTo(rx + x,0.4142 * ry + y,rx + x,y);
	}
	,nmeClearLine: function() {
		this.mCurrentLine = new flash.display.LineJob(null,-1,-1,0.0,0.0,0,1,0,256,3,3.0);
	}
	,nmeClearCanvas: function() {
		if(this.nmeSurface != null) {
			var ctx = (function($this) {
				var $r;
				try {
					$r = $this.nmeSurface.getContext("2d");
				} catch( e ) {
					$r = null;
				}
				return $r;
			}(this));
			if(ctx != null) ctx.clearRect(0,0,this.nmeSurface.width,this.nmeSurface.height);
		}
	}
	,nmeAdjustSurface: function(sx,sy) {
		if(sy == null) sy = 1.0;
		if(sx == null) sx = 1.0;
		if(Reflect.field(this.nmeSurface,"getContext") != null) {
			var width = Math.ceil((this.nmeExtentWithFilters.width - this.nmeExtentWithFilters.x) * sx);
			var height = Math.ceil((this.nmeExtentWithFilters.height - this.nmeExtentWithFilters.y) * sy);
			if(width <= 5000 && height <= 5000) {
				var dstCanvas = js.Browser.document.createElement("canvas");
				dstCanvas.width = width;
				dstCanvas.height = height;
				flash.Lib.nmeDrawToSurface(this.nmeSurface,dstCanvas);
				if(flash.Lib.nmeIsOnStage(this.nmeSurface)) {
					flash.Lib.nmeAppendSurface(dstCanvas);
					flash.Lib.nmeCopyStyle(this.nmeSurface,dstCanvas);
					flash.Lib.nmeSwapSurface(this.nmeSurface,dstCanvas);
					flash.Lib.nmeRemoveSurface(this.nmeSurface);
					if(this.nmeSurface.id != null) flash.Lib.nmeSetSurfaceId(dstCanvas,this.nmeSurface.id);
				}
				this.nmeSurface = dstCanvas;
			}
		}
	}
	,moveTo: function(inX,inY) {
		this.mPenX = inX;
		this.mPenY = inY;
		this.nmeExpandStandardExtent(inX,inY);
		if(!this.mFilling) this.closePolygon(false); else {
			this.addLineSegment();
			this.mLastMoveID = this.mPoints.length;
			this.mPoints.push(new flash.display.GfxPoint(this.mPenX,this.mPenY,0.0,0.0,0));
		}
	}
	,lineTo: function(inX,inY) {
		var pid = this.mPoints.length;
		if(pid == 0) {
			this.mPoints.push(new flash.display.GfxPoint(this.mPenX,this.mPenY,0.0,0.0,0));
			pid++;
		}
		this.mPenX = inX;
		this.mPenY = inY;
		this.nmeExpandStandardExtent(inX,inY,this.mCurrentLine.thickness);
		this.mPoints.push(new flash.display.GfxPoint(this.mPenX,this.mPenY,0.0,0.0,1));
		if(this.mCurrentLine.grad != null || this.mCurrentLine.alpha > 0) {
			if(this.mCurrentLine.point_idx0 < 0) this.mCurrentLine.point_idx0 = pid - 1;
			this.mCurrentLine.point_idx1 = pid;
		}
		if(!this.mFilling) this.closePolygon(false);
	}
	,lineStyle: function(thickness,color,alpha,pixelHinting,scaleMode,caps,joints,miterLimit) {
		this.addLineSegment();
		if(thickness == null) {
			this.nmeClearLine();
			return;
		} else {
			this.mCurrentLine.grad = null;
			this.mCurrentLine.thickness = thickness;
			this.mCurrentLine.colour = color == null?0:color;
			this.mCurrentLine.alpha = alpha == null?1.0:alpha;
			this.mCurrentLine.miter_limit = miterLimit == null?3.0:miterLimit;
			this.mCurrentLine.pixel_hinting = pixelHinting == null || !pixelHinting?0:16384;
		}
		if(caps != null) {
			switch( (caps)[1] ) {
			case 1:
				this.mCurrentLine.caps = 256;
				break;
			case 2:
				this.mCurrentLine.caps = 512;
				break;
			case 0:
				this.mCurrentLine.caps = 0;
				break;
			}
		}
		this.mCurrentLine.scale_mode = 3;
		if(scaleMode != null) {
			switch( (scaleMode)[1] ) {
			case 2:
				this.mCurrentLine.scale_mode = 3;
				break;
			case 3:
				this.mCurrentLine.scale_mode = 1;
				break;
			case 0:
				this.mCurrentLine.scale_mode = 2;
				break;
			case 1:
				this.mCurrentLine.scale_mode = 0;
				break;
			}
		}
		this.mCurrentLine.joints = 0;
		if(joints != null) {
			switch( (joints)[1] ) {
			case 1:
				this.mCurrentLine.joints = 0;
				break;
			case 0:
				this.mCurrentLine.joints = 4096;
				break;
			case 2:
				this.mCurrentLine.joints = 8192;
				break;
			}
		}
	}
	,lineGradientStyle: function(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio) {
		this.mCurrentLine.grad = this.createGradient(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio);
	}
	,getContext: function() {
		try {
			return this.nmeSurface.getContext("2d");
		} catch( e ) {
			return null;
		}
	}
	,flush: function() {
		this.closePolygon(true);
	}
	,endFill: function() {
		this.closePolygon(true);
	}
	,drawTiles: function(sheet,tileData,smooth,flags) {
		if(flags == null) flags = 0;
		if(smooth == null) smooth = false;
		this.nmeExpandStandardExtent(flash.Lib.get_current().get_stage().get_stageWidth(),flash.Lib.get_current().get_stage().get_stageHeight());
		this.addDrawable(new flash.display.Drawable(null,null,null,null,null,null,new flash.display.TileJob(sheet,tileData,flags)));
		this.nmeChanged = true;
	}
	,drawRoundRect: function(x,y,width,height,rx,ry) {
		if(ry == null) ry = -1;
		if(ry == -1) ry = rx;
		rx *= 0.5;
		ry *= 0.5;
		var w = width * 0.5;
		x += w;
		if(rx > w) rx = w;
		var lw = w - rx;
		var w_ = lw + rx * Math.sin(Math.PI / 4);
		var cw_ = lw + rx * Math.tan(Math.PI / 8);
		var h = height * 0.5;
		y += h;
		if(ry > h) ry = h;
		var lh = h - ry;
		var h_ = lh + ry * Math.sin(Math.PI / 4);
		var ch_ = lh + ry * Math.tan(Math.PI / 8);
		this.closePolygon(false);
		this.moveTo(x + w,y + lh);
		this.curveTo(x + w,y + ch_,x + w_,y + h_);
		this.curveTo(x + cw_,y + h,x + lw,y + h);
		this.lineTo(x - lw,y + h);
		this.curveTo(x - cw_,y + h,x - w_,y + h_);
		this.curveTo(x - w,y + ch_,x - w,y + lh);
		this.lineTo(x - w,y - lh);
		this.curveTo(x - w,y - ch_,x - w_,y - h_);
		this.curveTo(x - cw_,y - h,x - lw,y - h);
		this.lineTo(x + lw,y - h);
		this.curveTo(x + cw_,y - h,x + w_,y - h_);
		this.curveTo(x + w,y - ch_,x + w,y - lh);
		this.lineTo(x + w,y + lh);
		this.closePolygon(false);
	}
	,drawRect: function(x,y,width,height) {
		this.closePolygon(false);
		this.moveTo(x,y);
		this.lineTo(x + width,y);
		this.lineTo(x + width,y + height);
		this.lineTo(x,y + height);
		this.lineTo(x,y);
		this.closePolygon(false);
	}
	,drawGraphicsData: function(points) {
		var $it0 = ((function(_e) {
			return function() {
				return $iterator(flash._Vector.Vector_Impl_)(_e);
			};
		})(points))();
		while( $it0.hasNext() ) {
			var data = $it0.next();
			if(data == null) this.mFilling = true; else switch(data.nmeGraphicsDataType) {
			case flash.display.GraphicsDataType.STROKE:
				var stroke = data;
				if(stroke.fill == null) this.lineStyle(stroke.thickness,0,1.,stroke.pixelHinting,stroke.scaleMode,stroke.caps,stroke.joints,stroke.miterLimit); else switch(stroke.fill.nmeGraphicsFillType) {
				case flash.display.GraphicsFillType.SOLID_FILL:
					var fill = stroke.fill;
					this.lineStyle(stroke.thickness,fill.color,fill.alpha,stroke.pixelHinting,stroke.scaleMode,stroke.caps,stroke.joints,stroke.miterLimit);
					break;
				case flash.display.GraphicsFillType.GRADIENT_FILL:
					var fill = stroke.fill;
					this.lineGradientStyle(fill.type,fill.colors,fill.alphas,fill.ratios,fill.matrix,fill.spreadMethod,fill.interpolationMethod,fill.focalPointRatio);
					break;
				}
				break;
			case flash.display.GraphicsDataType.PATH:
				var path = data;
				var j = 0;
				var _g1 = 0, _g = flash._Vector.Vector_Impl_.get_length(path.commands);
				while(_g1 < _g) {
					var i = _g1++;
					var command = path.commands[i];
					switch(command) {
					case 1:
						this.moveTo(path.data[j],path.data[j + 1]);
						j = j + 2;
						break;
					case 2:
						this.lineTo(path.data[j],path.data[j + 1]);
						j = j + 2;
						break;
					case 3:
						this.curveTo(path.data[j],path.data[j + 1],path.data[j + 2],path.data[j + 3]);
						j = j + 4;
						break;
					}
				}
				break;
			case flash.display.GraphicsDataType.SOLID:
				var fill = data;
				this.beginFill(fill.color,fill.alpha);
				break;
			case flash.display.GraphicsDataType.GRADIENT:
				var fill = data;
				this.beginGradientFill(fill.type,fill.colors,fill.alphas,fill.ratios,fill.matrix,fill.spreadMethod,fill.interpolationMethod,fill.focalPointRatio);
				break;
			}
		}
	}
	,drawEllipse: function(x,y,rx,ry) {
		this.closePolygon(false);
		rx /= 2;
		ry /= 2;
		this.nmeDrawEllipse(x + rx,y + ry,rx,ry);
		this.closePolygon(false);
	}
	,drawCircle: function(x,y,rad) {
		this.closePolygon(false);
		this.nmeDrawEllipse(x,y,rad,rad);
		this.closePolygon(false);
	}
	,curveTo: function(inCX,inCY,inX,inY) {
		var pid = this.mPoints.length;
		if(pid == 0) {
			this.mPoints.push(new flash.display.GfxPoint(this.mPenX,this.mPenY,0.0,0.0,0));
			pid++;
		}
		this.mPenX = inX;
		this.mPenY = inY;
		this.nmeExpandStandardExtent(inX,inY,this.mCurrentLine.thickness);
		this.mPoints.push(new flash.display.GfxPoint(inX,inY,inCX,inCY,2));
		if(this.mCurrentLine.grad != null || this.mCurrentLine.alpha > 0) {
			if(this.mCurrentLine.point_idx0 < 0) this.mCurrentLine.point_idx0 = pid - 1;
			this.mCurrentLine.point_idx1 = pid;
		}
	}
	,createGradient: function(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio) {
		var points = new Array();
		var _g1 = 0, _g = colors.length;
		while(_g1 < _g) {
			var i = _g1++;
			points.push(new flash.display.GradPoint(colors[i],alphas[i],ratios[i]));
		}
		var flags = 0;
		if(type == flash.display.GradientType.RADIAL) flags |= 1;
		if(spreadMethod == flash.display.SpreadMethod.REPEAT) flags |= 2; else if(spreadMethod == flash.display.SpreadMethod.REFLECT) flags |= 4;
		if(matrix == null) {
			matrix = new flash.geom.Matrix();
			matrix.createGradientBox(25,25);
		} else matrix = matrix.clone();
		var focal = focalPointRatio == null?0:focalPointRatio;
		return new flash.display.Grad(points,matrix,flags,focal);
	}
	,createCanvasGradient: function(ctx,g) {
		var gradient;
		var matrix = g.matrix;
		if((g.flags & 1) == 0) {
			var p1 = matrix.transformPoint(new flash.geom.Point(-819.2,0));
			var p2 = matrix.transformPoint(new flash.geom.Point(819.2,0));
			gradient = ctx.createLinearGradient(p1.x,p1.y,p2.x,p2.y);
		} else {
			var p1 = matrix.transformPoint(new flash.geom.Point(g.focal * 819.2,0));
			var p2 = matrix.transformPoint(new flash.geom.Point(0,819.2));
			gradient = ctx.createRadialGradient(p1.x,p1.y,0,p2.x,p1.y,p2.y);
		}
		var _g = 0, _g1 = g.points;
		while(_g < _g1.length) {
			var point = _g1[_g];
			++_g;
			var color = this.createCanvasColor(point.col,point.alpha);
			var pos = point.ratio / 255;
			gradient.addColorStop(pos,color);
		}
		return gradient;
	}
	,createCanvasColor: function(color,alpha) {
		var r = (16711680 & color) >> 16;
		var g = (65280 & color) >> 8;
		var b = 255 & color;
		return "rgba" + "(" + r + "," + g + "," + b + "," + alpha + ")";
	}
	,closePolygon: function(inCancelFill) {
		var l = this.mPoints.length;
		if(l > 0) {
			if(l > 1) {
				if(this.mFilling && l > 2) {
					if(this.mPoints[this.mLastMoveID].x != this.mPoints[l - 1].x || this.mPoints[this.mLastMoveID].y != this.mPoints[l - 1].y) this.lineTo(this.mPoints[this.mLastMoveID].x,this.mPoints[this.mLastMoveID].y);
				}
				this.addLineSegment();
				var drawable = new flash.display.Drawable(this.mPoints,this.mFillColour,this.mFillAlpha,this.mSolidGradient,this.mBitmap,this.mLineJobs,null);
				this.addDrawable(drawable);
			}
			this.mLineJobs = [];
			this.mPoints = [];
		}
		if(inCancelFill) {
			this.mFillAlpha = 0;
			this.mSolidGradient = null;
			this.mBitmap = null;
			this.mFilling = false;
		}
		this.nmeChanged = true;
	}
	,clear: function() {
		this.nmeClearLine();
		this.mPenX = 0.0;
		this.mPenY = 0.0;
		this.mDrawList = new Array();
		this.nextDrawIndex = 0;
		this.mPoints = [];
		this.mSolidGradient = null;
		this.mFilling = false;
		this.mFillColour = 0;
		this.mFillAlpha = 0.0;
		this.mLastMoveID = 0;
		this.nmeClearNextCycle = true;
		this.boundsDirty = true;
		this.nmeExtent.x = 0.0;
		this.nmeExtent.y = 0.0;
		this.nmeExtent.width = 0.0;
		this.nmeExtent.height = 0.0;
		this._padding = 0.0;
		this.mLineJobs = [];
	}
	,blit: function(inTexture) {
		this.closePolygon(true);
		var ctx = (function($this) {
			var $r;
			try {
				$r = $this.nmeSurface.getContext("2d");
			} catch( e ) {
				$r = null;
			}
			return $r;
		}(this));
		if(ctx != null) ctx.drawImage(inTexture._nmeTextureBuffer,this.mPenX,this.mPenY);
	}
	,beginGradientFill: function(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio) {
		this.closePolygon(true);
		this.mFilling = true;
		this.mBitmap = null;
		this.mSolidGradient = this.createGradient(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio);
	}
	,beginFill: function(color,alpha) {
		this.closePolygon(true);
		this.mFillColour = color;
		this.mFillAlpha = alpha == null?1.0:alpha;
		this.mFilling = true;
		this.mSolidGradient = null;
		this.mBitmap = null;
	}
	,beginBitmapFill: function(bitmap,matrix,in_repeat,in_smooth) {
		if(in_smooth == null) in_smooth = false;
		if(in_repeat == null) in_repeat = true;
		this.closePolygon(true);
		var repeat = in_repeat == null?true:in_repeat;
		var smooth = in_smooth == null?false:in_smooth;
		this.mFilling = true;
		this.mSolidGradient = null;
		this.nmeExpandStandardExtent(bitmap._nmeTextureBuffer != null?bitmap._nmeTextureBuffer.width:0,bitmap._nmeTextureBuffer != null?bitmap._nmeTextureBuffer.height:0);
		this.mBitmap = { texture_buffer : bitmap._nmeTextureBuffer, matrix : matrix == null?matrix:matrix.clone(), flags : (repeat?16:0) | (smooth?65536:0)};
	}
	,addLineSegment: function() {
		if(this.mCurrentLine.point_idx1 > 0) this.mLineJobs.push(new flash.display.LineJob(this.mCurrentLine.grad,this.mCurrentLine.point_idx0,this.mCurrentLine.point_idx1,this.mCurrentLine.thickness,this.mCurrentLine.alpha,this.mCurrentLine.colour,this.mCurrentLine.pixel_hinting,this.mCurrentLine.joints,this.mCurrentLine.caps,this.mCurrentLine.scale_mode,this.mCurrentLine.miter_limit));
		this.mCurrentLine.point_idx0 = this.mCurrentLine.point_idx1 = -1;
	}
	,addDrawable: function(inDrawable) {
		if(inDrawable == null) return;
		this.mDrawList.unshift(inDrawable);
	}
	,__class__: flash.display.Graphics
}
flash.display.Drawable = function(inPoints,inFillColour,inFillAlpha,inSolidGradient,inBitmap,inLineJobs,inTileJob) {
	this.points = inPoints;
	this.fillColour = inFillColour;
	this.fillAlpha = inFillAlpha;
	this.solidGradient = inSolidGradient;
	this.bitmap = inBitmap;
	this.lineJobs = inLineJobs;
	this.tileJob = inTileJob;
};
$hxClasses["flash.display.Drawable"] = flash.display.Drawable;
flash.display.Drawable.__name__ = ["flash","display","Drawable"];
flash.display.Drawable.prototype = {
	__class__: flash.display.Drawable
}
flash.display.GfxPoint = function(inX,inY,inCX,inCY,inType) {
	this.x = inX;
	this.y = inY;
	this.cx = inCX;
	this.cy = inCY;
	this.type = inType;
};
$hxClasses["flash.display.GfxPoint"] = flash.display.GfxPoint;
flash.display.GfxPoint.__name__ = ["flash","display","GfxPoint"];
flash.display.GfxPoint.prototype = {
	__class__: flash.display.GfxPoint
}
flash.display.Grad = function(inPoints,inMatrix,inFlags,inFocal) {
	this.points = inPoints;
	this.matrix = inMatrix;
	this.flags = inFlags;
	this.focal = inFocal;
};
$hxClasses["flash.display.Grad"] = flash.display.Grad;
flash.display.Grad.__name__ = ["flash","display","Grad"];
flash.display.Grad.prototype = {
	__class__: flash.display.Grad
}
flash.display.GradPoint = function(inCol,inAlpha,inRatio) {
	this.col = inCol;
	this.alpha = inAlpha;
	this.ratio = inRatio;
};
$hxClasses["flash.display.GradPoint"] = flash.display.GradPoint;
flash.display.GradPoint.__name__ = ["flash","display","GradPoint"];
flash.display.GradPoint.prototype = {
	__class__: flash.display.GradPoint
}
flash.display.LineJob = function(inGrad,inPoint_idx0,inPoint_idx1,inThickness,inAlpha,inColour,inPixel_hinting,inJoints,inCaps,inScale_mode,inMiter_limit) {
	this.grad = inGrad;
	this.point_idx0 = inPoint_idx0;
	this.point_idx1 = inPoint_idx1;
	this.thickness = inThickness;
	this.alpha = inAlpha;
	this.colour = inColour;
	this.pixel_hinting = inPixel_hinting;
	this.joints = inJoints;
	this.caps = inCaps;
	this.scale_mode = inScale_mode;
	this.miter_limit = inMiter_limit;
};
$hxClasses["flash.display.LineJob"] = flash.display.LineJob;
flash.display.LineJob.__name__ = ["flash","display","LineJob"];
flash.display.LineJob.prototype = {
	__class__: flash.display.LineJob
}
flash.display.PointInPathMode = $hxClasses["flash.display.PointInPathMode"] = { __ename__ : ["flash","display","PointInPathMode"], __constructs__ : ["USER_SPACE","DEVICE_SPACE"] }
flash.display.PointInPathMode.USER_SPACE = ["USER_SPACE",0];
flash.display.PointInPathMode.USER_SPACE.toString = $estr;
flash.display.PointInPathMode.USER_SPACE.__enum__ = flash.display.PointInPathMode;
flash.display.PointInPathMode.DEVICE_SPACE = ["DEVICE_SPACE",1];
flash.display.PointInPathMode.DEVICE_SPACE.toString = $estr;
flash.display.PointInPathMode.DEVICE_SPACE.__enum__ = flash.display.PointInPathMode;
flash.display.TileJob = function(sheet,drawList,flags) {
	this.sheet = sheet;
	this.drawList = drawList;
	this.flags = flags;
};
$hxClasses["flash.display.TileJob"] = flash.display.TileJob;
flash.display.TileJob.__name__ = ["flash","display","TileJob"];
flash.display.TileJob.prototype = {
	__class__: flash.display.TileJob
}
flash.display.IGraphicsFill = function() { }
$hxClasses["flash.display.IGraphicsFill"] = flash.display.IGraphicsFill;
flash.display.IGraphicsFill.__name__ = ["flash","display","IGraphicsFill"];
flash.display.IGraphicsFill.prototype = {
	__class__: flash.display.IGraphicsFill
}
flash.display.IGraphicsData = function() { }
$hxClasses["flash.display.IGraphicsData"] = flash.display.IGraphicsData;
flash.display.IGraphicsData.__name__ = ["flash","display","IGraphicsData"];
flash.display.IGraphicsData.prototype = {
	__class__: flash.display.IGraphicsData
}
flash.display.GraphicsGradientFill = function(type,colors,alphas,ratios,matrix,spreadMethod,interpolationMethod,focalPointRatio) {
	if(focalPointRatio == null) focalPointRatio = 0;
	this.type = type;
	this.colors = colors;
	this.alphas = alphas;
	this.ratios = ratios;
	this.matrix = matrix;
	this.spreadMethod = spreadMethod;
	this.interpolationMethod = interpolationMethod;
	this.focalPointRatio = focalPointRatio;
	this.nmeGraphicsDataType = flash.display.GraphicsDataType.GRADIENT;
	this.nmeGraphicsFillType = flash.display.GraphicsFillType.GRADIENT_FILL;
};
$hxClasses["flash.display.GraphicsGradientFill"] = flash.display.GraphicsGradientFill;
flash.display.GraphicsGradientFill.__name__ = ["flash","display","GraphicsGradientFill"];
flash.display.GraphicsGradientFill.__interfaces__ = [flash.display.IGraphicsFill,flash.display.IGraphicsData];
flash.display.GraphicsGradientFill.prototype = {
	__class__: flash.display.GraphicsGradientFill
}
flash.display.IGraphicsPath = function() { }
$hxClasses["flash.display.IGraphicsPath"] = flash.display.IGraphicsPath;
flash.display.IGraphicsPath.__name__ = ["flash","display","IGraphicsPath"];
flash.display.GraphicsPath = function(commands,data,winding) {
	this.commands = commands;
	this.data = data;
	this.winding = winding;
	this.nmeGraphicsDataType = flash.display.GraphicsDataType.PATH;
};
$hxClasses["flash.display.GraphicsPath"] = flash.display.GraphicsPath;
flash.display.GraphicsPath.__name__ = ["flash","display","GraphicsPath"];
flash.display.GraphicsPath.__interfaces__ = [flash.display.IGraphicsPath,flash.display.IGraphicsData];
flash.display.GraphicsPath.prototype = {
	moveTo: function(x,y) {
		if(this.commands != null && this.data != null) {
			flash._Vector.Vector_Impl_.push(this.commands,1);
			flash._Vector.Vector_Impl_.push(this.data,x);
			flash._Vector.Vector_Impl_.push(this.data,y);
		}
	}
	,lineTo: function(x,y) {
		if(this.commands != null && this.data != null) {
			flash._Vector.Vector_Impl_.push(this.commands,2);
			flash._Vector.Vector_Impl_.push(this.data,x);
			flash._Vector.Vector_Impl_.push(this.data,y);
		}
	}
	,curveTo: function(controlX,controlY,anchorX,anchorY) {
		if(this.commands != null && this.data != null) {
			flash._Vector.Vector_Impl_.push(this.commands,3);
			flash._Vector.Vector_Impl_.push(this.data,anchorX);
			flash._Vector.Vector_Impl_.push(this.data,anchorY);
			flash._Vector.Vector_Impl_.push(this.data,controlX);
			flash._Vector.Vector_Impl_.push(this.data,controlY);
		}
	}
	,__class__: flash.display.GraphicsPath
}
flash.display.GraphicsPathCommand = function() { }
$hxClasses["flash.display.GraphicsPathCommand"] = flash.display.GraphicsPathCommand;
flash.display.GraphicsPathCommand.__name__ = ["flash","display","GraphicsPathCommand"];
flash.display.GraphicsPathWinding = $hxClasses["flash.display.GraphicsPathWinding"] = { __ename__ : ["flash","display","GraphicsPathWinding"], __constructs__ : ["EVEN_ODD","NON_ZERO"] }
flash.display.GraphicsPathWinding.EVEN_ODD = ["EVEN_ODD",0];
flash.display.GraphicsPathWinding.EVEN_ODD.toString = $estr;
flash.display.GraphicsPathWinding.EVEN_ODD.__enum__ = flash.display.GraphicsPathWinding;
flash.display.GraphicsPathWinding.NON_ZERO = ["NON_ZERO",1];
flash.display.GraphicsPathWinding.NON_ZERO.toString = $estr;
flash.display.GraphicsPathWinding.NON_ZERO.__enum__ = flash.display.GraphicsPathWinding;
flash.display.GraphicsSolidFill = function(color,alpha) {
	if(alpha == null) alpha = 1;
	if(color == null) color = 0;
	this.alpha = alpha;
	this.color = color;
	this.nmeGraphicsDataType = flash.display.GraphicsDataType.SOLID;
	this.nmeGraphicsFillType = flash.display.GraphicsFillType.SOLID_FILL;
};
$hxClasses["flash.display.GraphicsSolidFill"] = flash.display.GraphicsSolidFill;
flash.display.GraphicsSolidFill.__name__ = ["flash","display","GraphicsSolidFill"];
flash.display.GraphicsSolidFill.__interfaces__ = [flash.display.IGraphicsFill,flash.display.IGraphicsData];
flash.display.GraphicsSolidFill.prototype = {
	__class__: flash.display.GraphicsSolidFill
}
flash.display.IGraphicsStroke = function() { }
$hxClasses["flash.display.IGraphicsStroke"] = flash.display.IGraphicsStroke;
flash.display.IGraphicsStroke.__name__ = ["flash","display","IGraphicsStroke"];
flash.display.GraphicsStroke = function(thickness,pixelHinting,scaleMode,caps,joints,miterLimit,fill) {
	if(miterLimit == null) miterLimit = 3;
	if(pixelHinting == null) pixelHinting = false;
	if(thickness == null) thickness = 0.0;
	this.caps = caps != null?caps:null;
	this.fill = fill;
	this.joints = joints != null?joints:null;
	this.miterLimit = miterLimit;
	this.pixelHinting = pixelHinting;
	this.scaleMode = scaleMode != null?scaleMode:null;
	this.thickness = thickness;
	this.nmeGraphicsDataType = flash.display.GraphicsDataType.STROKE;
};
$hxClasses["flash.display.GraphicsStroke"] = flash.display.GraphicsStroke;
flash.display.GraphicsStroke.__name__ = ["flash","display","GraphicsStroke"];
flash.display.GraphicsStroke.__interfaces__ = [flash.display.IGraphicsStroke,flash.display.IGraphicsData];
flash.display.GraphicsStroke.prototype = {
	__class__: flash.display.GraphicsStroke
}
flash.display.GraphicsDataType = $hxClasses["flash.display.GraphicsDataType"] = { __ename__ : ["flash","display","GraphicsDataType"], __constructs__ : ["STROKE","SOLID","GRADIENT","PATH"] }
flash.display.GraphicsDataType.STROKE = ["STROKE",0];
flash.display.GraphicsDataType.STROKE.toString = $estr;
flash.display.GraphicsDataType.STROKE.__enum__ = flash.display.GraphicsDataType;
flash.display.GraphicsDataType.SOLID = ["SOLID",1];
flash.display.GraphicsDataType.SOLID.toString = $estr;
flash.display.GraphicsDataType.SOLID.__enum__ = flash.display.GraphicsDataType;
flash.display.GraphicsDataType.GRADIENT = ["GRADIENT",2];
flash.display.GraphicsDataType.GRADIENT.toString = $estr;
flash.display.GraphicsDataType.GRADIENT.__enum__ = flash.display.GraphicsDataType;
flash.display.GraphicsDataType.PATH = ["PATH",3];
flash.display.GraphicsDataType.PATH.toString = $estr;
flash.display.GraphicsDataType.PATH.__enum__ = flash.display.GraphicsDataType;
flash.display.GraphicsFillType = $hxClasses["flash.display.GraphicsFillType"] = { __ename__ : ["flash","display","GraphicsFillType"], __constructs__ : ["SOLID_FILL","GRADIENT_FILL"] }
flash.display.GraphicsFillType.SOLID_FILL = ["SOLID_FILL",0];
flash.display.GraphicsFillType.SOLID_FILL.toString = $estr;
flash.display.GraphicsFillType.SOLID_FILL.__enum__ = flash.display.GraphicsFillType;
flash.display.GraphicsFillType.GRADIENT_FILL = ["GRADIENT_FILL",1];
flash.display.GraphicsFillType.GRADIENT_FILL.toString = $estr;
flash.display.GraphicsFillType.GRADIENT_FILL.__enum__ = flash.display.GraphicsFillType;
flash.display.InterpolationMethod = $hxClasses["flash.display.InterpolationMethod"] = { __ename__ : ["flash","display","InterpolationMethod"], __constructs__ : ["RGB","LINEAR_RGB"] }
flash.display.InterpolationMethod.RGB = ["RGB",0];
flash.display.InterpolationMethod.RGB.toString = $estr;
flash.display.InterpolationMethod.RGB.__enum__ = flash.display.InterpolationMethod;
flash.display.InterpolationMethod.LINEAR_RGB = ["LINEAR_RGB",1];
flash.display.InterpolationMethod.LINEAR_RGB.toString = $estr;
flash.display.InterpolationMethod.LINEAR_RGB.__enum__ = flash.display.InterpolationMethod;
flash.display.JointStyle = $hxClasses["flash.display.JointStyle"] = { __ename__ : ["flash","display","JointStyle"], __constructs__ : ["MITER","ROUND","BEVEL"] }
flash.display.JointStyle.MITER = ["MITER",0];
flash.display.JointStyle.MITER.toString = $estr;
flash.display.JointStyle.MITER.__enum__ = flash.display.JointStyle;
flash.display.JointStyle.ROUND = ["ROUND",1];
flash.display.JointStyle.ROUND.toString = $estr;
flash.display.JointStyle.ROUND.__enum__ = flash.display.JointStyle;
flash.display.JointStyle.BEVEL = ["BEVEL",2];
flash.display.JointStyle.BEVEL.toString = $estr;
flash.display.JointStyle.BEVEL.__enum__ = flash.display.JointStyle;
flash.display.LineScaleMode = $hxClasses["flash.display.LineScaleMode"] = { __ename__ : ["flash","display","LineScaleMode"], __constructs__ : ["HORIZONTAL","NONE","NORMAL","VERTICAL"] }
flash.display.LineScaleMode.HORIZONTAL = ["HORIZONTAL",0];
flash.display.LineScaleMode.HORIZONTAL.toString = $estr;
flash.display.LineScaleMode.HORIZONTAL.__enum__ = flash.display.LineScaleMode;
flash.display.LineScaleMode.NONE = ["NONE",1];
flash.display.LineScaleMode.NONE.toString = $estr;
flash.display.LineScaleMode.NONE.__enum__ = flash.display.LineScaleMode;
flash.display.LineScaleMode.NORMAL = ["NORMAL",2];
flash.display.LineScaleMode.NORMAL.toString = $estr;
flash.display.LineScaleMode.NORMAL.__enum__ = flash.display.LineScaleMode;
flash.display.LineScaleMode.VERTICAL = ["VERTICAL",3];
flash.display.LineScaleMode.VERTICAL.toString = $estr;
flash.display.LineScaleMode.VERTICAL.__enum__ = flash.display.LineScaleMode;
flash.display.Loader = function() {
	flash.display.Sprite.call(this);
	this.contentLoaderInfo = flash.display.LoaderInfo.create(this);
};
$hxClasses["flash.display.Loader"] = flash.display.Loader;
flash.display.Loader.__name__ = ["flash","display","Loader"];
flash.display.Loader.__super__ = flash.display.Sprite;
flash.display.Loader.prototype = $extend(flash.display.Sprite.prototype,{
	handleLoad: function(e) {
		e.currentTarget = this;
		this.content.nmeInvalidateBounds();
		this.content.nmeRender(null,null);
		this.contentLoaderInfo.removeEventListener(flash.events.Event.COMPLETE,$bind(this,this.handleLoad));
	}
	,validateBounds: function() {
		if(this.get__boundsInvalid()) {
			flash.display.Sprite.prototype.validateBounds.call(this);
			if(this.mImage != null) {
				var r = new flash.geom.Rectangle(0,0,this.mImage.get_width(),this.mImage.get_height());
				if(r.width != 0 || r.height != 0) {
					if(this.nmeBoundsRect.width == 0 && this.nmeBoundsRect.height == 0) this.nmeBoundsRect = r.clone(); else this.nmeBoundsRect.extendBounds(r);
				}
			}
			if(this.scale9Grid != null) {
				this.nmeBoundsRect.width *= this.nmeScaleX;
				this.nmeBoundsRect.height *= this.nmeScaleY;
				this.nmeWidth = this.nmeBoundsRect.width;
				this.nmeHeight = this.nmeBoundsRect.height;
			} else {
				this.nmeWidth = this.nmeBoundsRect.width * this.nmeScaleX;
				this.nmeHeight = this.nmeBoundsRect.height * this.nmeScaleY;
			}
		}
	}
	,toString: function() {
		return "[Loader name=" + this.name + " id=" + this._nmeId + "]";
	}
	,loadBytes: function(buffer) {
		var _g = this;
		try {
			this.contentLoaderInfo.addEventListener(flash.events.Event.COMPLETE,$bind(this,this.handleLoad),false,2147483647);
			flash.display.BitmapData.loadFromBytes(buffer,null,function(bmd) {
				_g.content = new flash.display.Bitmap(bmd);
				_g.contentLoaderInfo.content = _g.content;
				_g.addChild(_g.content);
				var evt = new flash.events.Event(flash.events.Event.COMPLETE);
				evt.currentTarget = _g;
				_g.contentLoaderInfo.dispatchEvent(evt);
			});
		} catch( e ) {
			console.log("Error " + Std.string(e));
			var evt = new flash.events.IOErrorEvent(flash.events.IOErrorEvent.IO_ERROR);
			evt.currentTarget = this;
			this.contentLoaderInfo.dispatchEvent(evt);
		}
	}
	,load: function(request,context) {
		var extension = "";
		var parts = request.url.split(".");
		if(parts.length > 0) extension = parts[parts.length - 1].toLowerCase();
		var transparent = true;
		this.contentLoaderInfo.url = request.url;
		this.contentLoaderInfo.contentType = (function($this) {
			var $r;
			switch(extension) {
			case "swf":
				$r = "application/x-shockwave-flash";
				break;
			case "jpg":case "jpeg":
				$r = (function($this) {
					var $r;
					transparent = false;
					$r = "image/jpeg";
					return $r;
				}($this));
				break;
			case "png":
				$r = "image/png";
				break;
			case "gif":
				$r = "image/gif";
				break;
			default:
				$r = (function($this) {
					var $r;
					throw "Unrecognized file " + request.url;
					return $r;
				}($this));
			}
			return $r;
		}(this));
		this.mImage = new flash.display.BitmapData(0,0,transparent);
		try {
			this.contentLoaderInfo.addEventListener(flash.events.Event.COMPLETE,$bind(this,this.handleLoad),false,2147483647);
			this.mImage.nmeLoadFromFile(request.url,this.contentLoaderInfo);
			this.content = new flash.display.Bitmap(this.mImage);
			this.contentLoaderInfo.content = this.content;
			this.addChild(this.content);
		} catch( e ) {
			console.log("Error " + Std.string(e));
			var evt = new flash.events.IOErrorEvent(flash.events.IOErrorEvent.IO_ERROR);
			evt.currentTarget = this;
			this.contentLoaderInfo.dispatchEvent(evt);
			return;
		}
		if(this.mShape == null) {
			this.mShape = new flash.display.Shape();
			this.addChild(this.mShape);
		}
	}
	,__class__: flash.display.Loader
});
flash.display.LoaderInfo = function() {
	flash.events.EventDispatcher.call(this);
	this.applicationDomain = flash.system.ApplicationDomain.currentDomain;
	this.bytesLoaded = 0;
	this.bytesTotal = 0;
	this.childAllowsParent = true;
	this.parameters = { };
};
$hxClasses["flash.display.LoaderInfo"] = flash.display.LoaderInfo;
flash.display.LoaderInfo.__name__ = ["flash","display","LoaderInfo"];
flash.display.LoaderInfo.create = function(ldr) {
	var li = new flash.display.LoaderInfo();
	if(ldr != null) li.loader = ldr; else li.url = "";
	return li;
}
flash.display.LoaderInfo.__super__ = flash.events.EventDispatcher;
flash.display.LoaderInfo.prototype = $extend(flash.events.EventDispatcher.prototype,{
	__class__: flash.display.LoaderInfo
});
flash.display.MovieClip = function() {
	flash.display.Sprite.call(this);
	this.enabled = true;
	this.__currentFrame = 0;
	this.__totalFrames = 0;
	this.loaderInfo = flash.display.LoaderInfo.create(null);
};
$hxClasses["flash.display.MovieClip"] = flash.display.MovieClip;
flash.display.MovieClip.__name__ = ["flash","display","MovieClip"];
flash.display.MovieClip.__super__ = flash.display.Sprite;
flash.display.MovieClip.prototype = $extend(flash.display.Sprite.prototype,{
	get_totalFrames: function() {
		return this.__totalFrames;
	}
	,get_framesLoaded: function() {
		return this.__totalFrames;
	}
	,get_currentFrame: function() {
		return this.__currentFrame;
	}
	,toString: function() {
		return "[MovieClip name=" + this.name + " id=" + this._nmeId + "]";
	}
	,stop: function() {
	}
	,prevFrame: function() {
	}
	,play: function() {
	}
	,nextFrame: function() {
	}
	,gotoAndStop: function(frame,scene) {
		if(scene == null) scene = "";
	}
	,gotoAndPlay: function(frame,scene) {
		if(scene == null) scene = "";
	}
	,__class__: flash.display.MovieClip
	,__properties__: $extend(flash.display.Sprite.prototype.__properties__,{get_currentFrame:"get_currentFrame",get_framesLoaded:"get_framesLoaded",get_totalFrames:"get_totalFrames"})
});
flash.display.PixelSnapping = $hxClasses["flash.display.PixelSnapping"] = { __ename__ : ["flash","display","PixelSnapping"], __constructs__ : ["NEVER","AUTO","ALWAYS"] }
flash.display.PixelSnapping.NEVER = ["NEVER",0];
flash.display.PixelSnapping.NEVER.toString = $estr;
flash.display.PixelSnapping.NEVER.__enum__ = flash.display.PixelSnapping;
flash.display.PixelSnapping.AUTO = ["AUTO",1];
flash.display.PixelSnapping.AUTO.toString = $estr;
flash.display.PixelSnapping.AUTO.__enum__ = flash.display.PixelSnapping;
flash.display.PixelSnapping.ALWAYS = ["ALWAYS",2];
flash.display.PixelSnapping.ALWAYS.toString = $estr;
flash.display.PixelSnapping.ALWAYS.__enum__ = flash.display.PixelSnapping;
flash.display.Shape = function() {
	flash.display.DisplayObject.call(this);
	this.nmeGraphics = new flash.display.Graphics();
};
$hxClasses["flash.display.Shape"] = flash.display.Shape;
flash.display.Shape.__name__ = ["flash","display","Shape"];
flash.display.Shape.__super__ = flash.display.DisplayObject;
flash.display.Shape.prototype = $extend(flash.display.DisplayObject.prototype,{
	get_graphics: function() {
		return this.nmeGraphics;
	}
	,toString: function() {
		return "[Shape name=" + this.name + " id=" + this._nmeId + "]";
	}
	,nmeGetObjectUnderPoint: function(point) {
		if(this.parent == null) return null;
		if(this.parent.mouseEnabled && flash.display.DisplayObject.prototype.nmeGetObjectUnderPoint.call(this,point) == this) return this.parent; else return null;
	}
	,nmeGetGraphics: function() {
		return this.nmeGraphics;
	}
	,__class__: flash.display.Shape
	,__properties__: $extend(flash.display.DisplayObject.prototype.__properties__,{get_graphics:"get_graphics"})
});
flash.display.SpreadMethod = $hxClasses["flash.display.SpreadMethod"] = { __ename__ : ["flash","display","SpreadMethod"], __constructs__ : ["REPEAT","REFLECT","PAD"] }
flash.display.SpreadMethod.REPEAT = ["REPEAT",0];
flash.display.SpreadMethod.REPEAT.toString = $estr;
flash.display.SpreadMethod.REPEAT.__enum__ = flash.display.SpreadMethod;
flash.display.SpreadMethod.REFLECT = ["REFLECT",1];
flash.display.SpreadMethod.REFLECT.toString = $estr;
flash.display.SpreadMethod.REFLECT.__enum__ = flash.display.SpreadMethod;
flash.display.SpreadMethod.PAD = ["PAD",2];
flash.display.SpreadMethod.PAD.toString = $estr;
flash.display.SpreadMethod.PAD.__enum__ = flash.display.SpreadMethod;
flash.events.Event = function(inType,inBubbles,inCancelable) {
	if(inCancelable == null) inCancelable = false;
	if(inBubbles == null) inBubbles = false;
	this.type = inType;
	this.bubbles = inBubbles;
	this.cancelable = inCancelable;
	this.nmeIsCancelled = false;
	this.nmeIsCancelledNow = false;
	this.target = null;
	this.currentTarget = null;
	this.eventPhase = flash.events.EventPhase.AT_TARGET;
};
$hxClasses["flash.events.Event"] = flash.events.Event;
flash.events.Event.__name__ = ["flash","events","Event"];
flash.events.Event.prototype = {
	toString: function() {
		return "[Event type=" + this.type + " bubbles=" + Std.string(this.bubbles) + " cancelable=" + Std.string(this.cancelable) + "]";
	}
	,stopPropagation: function() {
		this.nmeIsCancelled = true;
	}
	,stopImmediatePropagation: function() {
		this.nmeIsCancelled = true;
		this.nmeIsCancelledNow = true;
	}
	,nmeSetPhase: function(phase) {
		this.eventPhase = phase;
	}
	,nmeGetIsCancelledNow: function() {
		return this.nmeIsCancelledNow;
	}
	,nmeGetIsCancelled: function() {
		return this.nmeIsCancelled;
	}
	,nmeCreateSimilar: function(type,related,targ) {
		var result = new flash.events.Event(type,this.bubbles,this.cancelable);
		if(targ != null) result.target = targ;
		return result;
	}
	,clone: function() {
		return new flash.events.Event(this.type,this.bubbles,this.cancelable);
	}
	,__class__: flash.events.Event
}
flash.events.MouseEvent = function(type,bubbles,cancelable,localX,localY,relatedObject,ctrlKey,altKey,shiftKey,buttonDown,delta,commandKey,clickCount) {
	if(clickCount == null) clickCount = 0;
	if(commandKey == null) commandKey = false;
	if(delta == null) delta = 0;
	if(buttonDown == null) buttonDown = false;
	if(shiftKey == null) shiftKey = false;
	if(altKey == null) altKey = false;
	if(ctrlKey == null) ctrlKey = false;
	if(localY == null) localY = 0;
	if(localX == null) localX = 0;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = true;
	flash.events.Event.call(this,type,bubbles,cancelable);
	this.shiftKey = shiftKey;
	this.altKey = altKey;
	this.ctrlKey = ctrlKey;
	this.bubbles = bubbles;
	this.relatedObject = relatedObject;
	this.delta = delta;
	this.localX = localX;
	this.localY = localY;
	this.buttonDown = buttonDown;
	this.commandKey = commandKey;
	this.clickCount = clickCount;
};
$hxClasses["flash.events.MouseEvent"] = flash.events.MouseEvent;
flash.events.MouseEvent.__name__ = ["flash","events","MouseEvent"];
flash.events.MouseEvent.nmeCreate = function(type,event,local,target) {
	var nmeMouseDown = false;
	var delta = 2;
	if(type == flash.events.MouseEvent.MOUSE_WHEEL) {
		var mouseEvent = event;
		if(mouseEvent.wheelDelta) delta = mouseEvent.wheelDelta / 120 | 0; else if(mouseEvent.detail) -mouseEvent.detail | 0;
	}
	if(type == flash.events.MouseEvent.MOUSE_DOWN) nmeMouseDown = event.which != null?event.which == 1:event.button != null?event.button == 0:false; else if(type == flash.events.MouseEvent.MOUSE_UP) {
		if(event.which != null) {
			if(event.which == 1) nmeMouseDown = false; else if(event.button != null) {
				if(event.button == 0) nmeMouseDown = false; else nmeMouseDown = false;
			}
		}
	}
	var pseudoEvent = new flash.events.MouseEvent(type,true,false,local.x,local.y,null,event.ctrlKey,event.altKey,event.shiftKey,nmeMouseDown,delta);
	pseudoEvent.stageX = flash.Lib.get_current().get_stage().get_mouseX();
	pseudoEvent.stageY = flash.Lib.get_current().get_stage().get_mouseY();
	pseudoEvent.target = target;
	return pseudoEvent;
}
flash.events.MouseEvent.__super__ = flash.events.Event;
flash.events.MouseEvent.prototype = $extend(flash.events.Event.prototype,{
	updateAfterEvent: function() {
	}
	,nmeCreateSimilar: function(type,related,targ) {
		var result = new flash.events.MouseEvent(type,this.bubbles,this.cancelable,this.localX,this.localY,related == null?this.relatedObject:related,this.ctrlKey,this.altKey,this.shiftKey,this.buttonDown,this.delta,this.commandKey,this.clickCount);
		if(targ != null) result.target = targ;
		return result;
	}
	,__class__: flash.events.MouseEvent
});
flash.display.Stage = function(width,height) {
	flash.display.DisplayObjectContainer.call(this);
	this.nmeFocusObject = null;
	this.nmeFocusObjectActivated = false;
	this.nmeWindowWidth = width;
	this.nmeWindowHeight = height;
	this.stageFocusRect = false;
	this.scaleMode = flash.display.StageScaleMode.SHOW_ALL;
	this.nmeStageMatrix = new flash.geom.Matrix();
	this.tabEnabled = true;
	this.set_frameRate(0.0);
	this.set_backgroundColor(16777215);
	this.name = "Stage";
	this.loaderInfo = flash.display.LoaderInfo.create(null);
	this.loaderInfo.parameters.width = Std.string(this.nmeWindowWidth);
	this.loaderInfo.parameters.height = Std.string(this.nmeWindowHeight);
	this.nmePointInPathMode = flash.display.Graphics.nmeDetectIsPointInPathMode();
	this.nmeMouseOverObjects = [];
	this.set_showDefaultContextMenu(true);
	this.nmeTouchInfo = [];
	this.nmeUIEventsQueue = new Array(1000);
	this.nmeUIEventsQueueIndex = 0;
};
$hxClasses["flash.display.Stage"] = flash.display.Stage;
flash.display.Stage.__name__ = ["flash","display","Stage"];
flash.display.Stage.getOrientation = function() {
	var rotation = window.orientation;
	var orientation = flash.display.Stage.OrientationPortrait;
	switch(rotation) {
	case -90:
		orientation = flash.display.Stage.OrientationLandscapeLeft;
		break;
	case 180:
		orientation = flash.display.Stage.OrientationPortraitUpsideDown;
		break;
	case 90:
		orientation = flash.display.Stage.OrientationLandscapeRight;
		break;
	default:
		orientation = flash.display.Stage.OrientationPortrait;
	}
	return orientation;
}
flash.display.Stage.__super__ = flash.display.DisplayObjectContainer;
flash.display.Stage.prototype = $extend(flash.display.DisplayObjectContainer.prototype,{
	get_stageWidth: function() {
		return this.nmeWindowWidth;
	}
	,get_stageHeight: function() {
		return this.nmeWindowHeight;
	}
	,get_stage: function() {
		return flash.Lib.nmeGetStage();
	}
	,set_showDefaultContextMenu: function(showDefaultContextMenu) {
		if(showDefaultContextMenu != this.nmeShowDefaultContextMenu && this.nmeShowDefaultContextMenu != null) {
			if(!showDefaultContextMenu) flash.Lib.nmeDisableRightClick(); else flash.Lib.nmeEnableRightClick();
		}
		this.nmeShowDefaultContextMenu = showDefaultContextMenu;
		return showDefaultContextMenu;
	}
	,get_showDefaultContextMenu: function() {
		return this.nmeShowDefaultContextMenu;
	}
	,set_quality: function(inQuality) {
		return this.quality = inQuality;
	}
	,get_quality: function() {
		return this.quality != null?this.quality:flash.display.StageQuality.BEST;
	}
	,get_mouseY: function() {
		return this._mouseY;
	}
	,get_mouseX: function() {
		return this._mouseX;
	}
	,get_fullScreenHeight: function() {
		return js.Browser.window.innerHeight;
	}
	,get_fullScreenWidth: function() {
		return js.Browser.window.innerWidth;
	}
	,set_frameRate: function(speed) {
		if(speed == 0) {
			var window = js.Browser.window;
			var nmeRequestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame;
			if(nmeRequestAnimationFrame == null) speed = 60;
		}
		if(speed != 0) this.nmeInterval = 1000.0 / speed | 0;
		this.nmeFrameRate = speed;
		this.nmeUpdateNextWake();
		return speed;
	}
	,get_frameRate: function() {
		return this.nmeFrameRate;
	}
	,set_focus: function(inObj) {
		this.nmeOnFocus(inObj);
		return this.nmeFocusObject;
	}
	,get_focus: function() {
		return this.nmeFocusObject;
	}
	,set_displayState: function(displayState) {
		if(displayState != this.displayState && this.displayState != null) {
			switch( (displayState)[1] ) {
			case 0:
				flash.Lib.nmeDisableFullScreen();
				break;
			case 1:
			case 2:
				flash.Lib.nmeEnableFullScreen();
				break;
			}
		}
		this.displayState = displayState;
		return displayState;
	}
	,get_displayState: function() {
		return this.displayState;
	}
	,set_backgroundColor: function(col) {
		return this.nmeBackgroundColour = col;
	}
	,get_backgroundColor: function() {
		return this.nmeBackgroundColour;
	}
	,nmeOnTouch: function(event,touch,type,touchInfo,isPrimaryTouchPoint) {
		var rect = flash.Lib.mMe.__scr.getBoundingClientRect();
		var point = new flash.geom.Point(touch.pageX - rect.left,touch.pageY - rect.top);
		var obj = this.nmeGetObjectUnderPoint(point);
		this._mouseX = point.x;
		this._mouseY = point.y;
		var stack = new Array();
		if(obj != null) obj.nmeGetInteractiveObjectStack(stack);
		if(stack.length > 0) {
			stack.reverse();
			var local = obj.globalToLocal(point);
			var evt = flash.events.TouchEvent.nmeCreate(type,event,touch,local,obj);
			evt.touchPointID = touch.identifier;
			evt.isPrimaryTouchPoint = isPrimaryTouchPoint;
			this.nmeCheckInOuts(evt,stack,touchInfo);
			obj.nmeFireEvent(evt);
			var mouseType = (function($this) {
				var $r;
				switch(type) {
				case "touchBegin":
					$r = flash.events.MouseEvent.MOUSE_DOWN;
					break;
				case "touchEnd":
					$r = flash.events.MouseEvent.MOUSE_UP;
					break;
				default:
					$r = (function($this) {
						var $r;
						if($this.nmeDragObject != null) $this.nmeDrag(point);
						$r = flash.events.MouseEvent.MOUSE_MOVE;
						return $r;
					}($this));
				}
				return $r;
			}(this));
			obj.nmeFireEvent(flash.events.MouseEvent.nmeCreate(mouseType,evt,local,obj));
		} else {
			var evt = flash.events.TouchEvent.nmeCreate(type,event,touch,point,null);
			evt.touchPointID = touch.identifier;
			evt.isPrimaryTouchPoint = isPrimaryTouchPoint;
			this.nmeCheckInOuts(evt,stack,touchInfo);
		}
	}
	,nmeOnResize: function(inW,inH) {
		this.nmeWindowWidth = inW;
		this.nmeWindowHeight = inH;
		var event = new flash.events.Event(flash.events.Event.RESIZE);
		event.target = this;
		this.nmeBroadcast(event);
	}
	,nmeOnMouse: function(event,type) {
		var rect = flash.Lib.mMe.__scr.getBoundingClientRect();
		var point = new flash.geom.Point(event.clientX - rect.left,event.clientY - rect.top);
		if(this.nmeDragObject != null) this.nmeDrag(point);
		var obj = this.nmeGetObjectUnderPoint(point);
		this._mouseX = point.x;
		this._mouseY = point.y;
		var stack = new Array();
		if(obj != null) obj.nmeGetInteractiveObjectStack(stack);
		if(stack.length > 0) {
			stack.reverse();
			var local = obj.globalToLocal(point);
			var evt = flash.events.MouseEvent.nmeCreate(type,event,local,obj);
			this.nmeCheckInOuts(evt,stack);
			if(type == flash.events.MouseEvent.MOUSE_DOWN) this.nmeOnFocus(stack[stack.length - 1]);
			obj.nmeFireEvent(evt);
		} else {
			var evt = flash.events.MouseEvent.nmeCreate(type,event,point,null);
			this.nmeCheckInOuts(evt,stack);
		}
	}
	,nmeOnFocus: function(target) {
		if(target != this.nmeFocusObject) {
			if(this.nmeFocusObject != null) this.nmeFocusObject.nmeFireEvent(new flash.events.FocusEvent(flash.events.FocusEvent.FOCUS_OUT,true,false,this.nmeFocusObject,false,0));
			target.nmeFireEvent(new flash.events.FocusEvent(flash.events.FocusEvent.FOCUS_IN,true,false,target,false,0));
			this.nmeFocusObject = target;
		}
	}
	,nmeOnKey: function(code,pressed,inChar,ctrl,alt,shift,keyLocation) {
		var stack = new Array();
		if(this.nmeFocusObject == null) this.nmeGetInteractiveObjectStack(stack); else this.nmeFocusObject.nmeGetInteractiveObjectStack(stack);
		if(stack.length > 0) {
			var obj = stack[0];
			var evt = new flash.events.KeyboardEvent(pressed?flash.events.KeyboardEvent.KEY_DOWN:flash.events.KeyboardEvent.KEY_UP,true,false,inChar,code,keyLocation,ctrl,alt,shift);
			obj.nmeFireEvent(evt);
		}
	}
	,nmeHandleOrientationChange: function() {
	}
	,nmeHandleAccelerometer: function(evt) {
		flash.display.Stage.nmeAcceleration.x = evt.accelerationIncludingGravity.x;
		flash.display.Stage.nmeAcceleration.y = evt.accelerationIncludingGravity.y;
		flash.display.Stage.nmeAcceleration.z = evt.accelerationIncludingGravity.z;
	}
	,toString: function() {
		return "[Stage id=" + this._nmeId + "]";
	}
	,nmeUpdateNextWake: function() {
		if(this.nmeFrameRate == 0) {
			var nmeRequestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame;
			nmeRequestAnimationFrame($bind(this,this.nmeUpdateNextWake));
			this.nmeStageRender();
		} else {
			js.Browser.window.clearInterval(this.nmeTimer);
			this.nmeTimer = js.Browser.window.setInterval($bind(this,this.nmeStageRender),this.nmeInterval);
		}
	}
	,nmeStopDrag: function(sprite) {
		this.nmeDragBounds = null;
		this.nmeDragObject = null;
	}
	,nmeStartDrag: function(sprite,lockCenter,bounds) {
		if(lockCenter == null) lockCenter = false;
		this.nmeDragBounds = bounds == null?null:bounds.clone();
		this.nmeDragObject = sprite;
		if(this.nmeDragObject != null) {
			var mouse = new flash.geom.Point(this._mouseX,this._mouseY);
			var p = this.nmeDragObject.parent;
			if(p != null) mouse = p.globalToLocal(mouse);
			if(lockCenter) {
				var bounds1 = sprite.getBounds(this);
				this.nmeDragOffsetX = this.nmeDragObject.get_x() - (bounds1.width / 2 + bounds1.x);
				this.nmeDragOffsetY = this.nmeDragObject.get_y() - (bounds1.height / 2 + bounds1.y);
			} else {
				this.nmeDragOffsetX = this.nmeDragObject.get_x() - mouse.x;
				this.nmeDragOffsetY = this.nmeDragObject.get_y() - mouse.y;
			}
		}
	}
	,nmeStageRender: function(_) {
		if(!this.nmeStageActive) {
			this.nmeOnResize(this.nmeWindowWidth,this.nmeWindowHeight);
			var event = new flash.events.Event(flash.events.Event.ACTIVATE);
			event.target = this;
			this.nmeBroadcast(event);
			this.nmeStageActive = true;
		}
		var _g1 = 0, _g = this.nmeUIEventsQueueIndex;
		while(_g1 < _g) {
			var i = _g1++;
			if(this.nmeUIEventsQueue[i] != null) this.nmeProcessStageEvent(this.nmeUIEventsQueue[i]);
		}
		this.nmeUIEventsQueueIndex = 0;
		var event = new flash.events.Event(flash.events.Event.ENTER_FRAME);
		this.nmeBroadcast(event);
		if(this.nmeInvalid) {
			var event1 = new flash.events.Event(flash.events.Event.RENDER);
			this.nmeBroadcast(event1);
		}
		this.nmeRenderAll();
	}
	,nmeRenderToCanvas: function(canvas) {
		canvas.width = canvas.width;
		this.nmeRender(canvas);
	}
	,nmeRenderAll: function() {
		this.nmeRender(null,null);
	}
	,nmeQueueStageEvent: function(evt) {
		this.nmeUIEventsQueue[this.nmeUIEventsQueueIndex++] = evt;
	}
	,nmeProcessStageEvent: function(evt) {
		evt.stopPropagation();
		switch(evt.type) {
		case "resize":
			this.nmeOnResize(flash.Lib.nmeGetWidth(),flash.Lib.nmeGetHeight());
			break;
		case "focus":
			this.nmeOnFocus(this);
			if(!this.nmeFocusObjectActivated) {
				this.nmeFocusObjectActivated = true;
				this.dispatchEvent(new flash.events.Event(flash.events.Event.ACTIVATE));
			}
			break;
		case "blur":
			if(this.nmeFocusObjectActivated) {
				this.nmeFocusObjectActivated = false;
				this.dispatchEvent(new flash.events.Event(flash.events.Event.DEACTIVATE));
			}
			break;
		case "mousemove":
			this.nmeOnMouse(evt,flash.events.MouseEvent.MOUSE_MOVE);
			break;
		case "mousedown":
			this.nmeOnMouse(evt,flash.events.MouseEvent.MOUSE_DOWN);
			break;
		case "mouseup":
			this.nmeOnMouse(evt,flash.events.MouseEvent.MOUSE_UP);
			break;
		case "click":
			this.nmeOnMouse(evt,flash.events.MouseEvent.CLICK);
			break;
		case "mousewheel":
			this.nmeOnMouse(evt,flash.events.MouseEvent.MOUSE_WHEEL);
			break;
		case "dblclick":
			this.nmeOnMouse(evt,flash.events.MouseEvent.DOUBLE_CLICK);
			break;
		case "keydown":
			var evt1 = evt;
			var keyCode = evt1.keyCode != null?evt1.keyCode:evt1.which;
			keyCode = flash.ui.Keyboard.nmeConvertMozillaCode(keyCode);
			this.nmeOnKey(keyCode,true,evt1.charCode,evt1.ctrlKey,evt1.altKey,evt1.shiftKey,evt1.keyLocation);
			break;
		case "keyup":
			var evt1 = evt;
			var keyCode = evt1.keyCode != null?evt1.keyCode:evt1.which;
			keyCode = flash.ui.Keyboard.nmeConvertMozillaCode(keyCode);
			this.nmeOnKey(keyCode,false,evt1.charCode,evt1.ctrlKey,evt1.altKey,evt1.shiftKey,evt1.keyLocation);
			break;
		case "touchstart":
			var evt1 = evt;
			evt1.preventDefault();
			var touchInfo = new flash.display._Stage.TouchInfo();
			this.nmeTouchInfo[evt1.changedTouches[0].identifier] = touchInfo;
			this.nmeOnTouch(evt1,evt1.changedTouches[0],"touchBegin",touchInfo,false);
			break;
		case "touchmove":
			var evt1 = evt;
			evt1.preventDefault();
			var touchInfo = this.nmeTouchInfo[evt1.changedTouches[0].identifier];
			this.nmeOnTouch(evt1,evt1.changedTouches[0],"touchMove",touchInfo,true);
			break;
		case "touchend":
			var evt1 = evt;
			evt1.preventDefault();
			var touchInfo = this.nmeTouchInfo[evt1.changedTouches[0].identifier];
			this.nmeOnTouch(evt1,evt1.changedTouches[0],"touchEnd",touchInfo,true);
			this.nmeTouchInfo[evt1.changedTouches[0].identifier] = null;
			break;
		case "devicemotion":
			var evt1 = evt;
			this.nmeHandleAccelerometer(evt1);
			break;
		case "orientationchange":
			this.nmeHandleOrientationChange();
			break;
		default:
		}
	}
	,nmeIsOnStage: function() {
		return true;
	}
	,nmeDrag: function(point) {
		var p = this.nmeDragObject.parent;
		if(p != null) point = p.globalToLocal(point);
		var x = point.x + this.nmeDragOffsetX;
		var y = point.y + this.nmeDragOffsetY;
		if(this.nmeDragBounds != null) {
			if(x < this.nmeDragBounds.x) x = this.nmeDragBounds.x; else if(x > this.nmeDragBounds.get_right()) x = this.nmeDragBounds.get_right();
			if(y < this.nmeDragBounds.y) y = this.nmeDragBounds.y; else if(y > this.nmeDragBounds.get_bottom()) y = this.nmeDragBounds.get_bottom();
		}
		this.nmeDragObject.set_x(x);
		this.nmeDragObject.set_y(y);
	}
	,nmeCheckInOuts: function(event,stack,touchInfo) {
		var prev = touchInfo == null?this.nmeMouseOverObjects:touchInfo.touchOverObjects;
		var changeEvents = touchInfo == null?flash.display.Stage.nmeMouseChanges:flash.display.Stage.nmeTouchChanges;
		var new_n = stack.length;
		var new_obj = new_n > 0?stack[new_n - 1]:null;
		var old_n = prev.length;
		var old_obj = old_n > 0?prev[old_n - 1]:null;
		if(new_obj != old_obj) {
			if(old_obj != null) old_obj.nmeFireEvent(event.nmeCreateSimilar(changeEvents[0],new_obj,old_obj));
			if(new_obj != null) new_obj.nmeFireEvent(event.nmeCreateSimilar(changeEvents[1],old_obj,new_obj));
			var common = 0;
			while(common < new_n && common < old_n && stack[common] == prev[common]) common++;
			var rollOut = event.nmeCreateSimilar(changeEvents[2],new_obj,old_obj);
			var i = old_n - 1;
			while(i >= common) {
				prev[i].dispatchEvent(rollOut);
				i--;
			}
			var rollOver = event.nmeCreateSimilar(changeEvents[3],old_obj);
			var i1 = new_n - 1;
			while(i1 >= common) {
				stack[i1].dispatchEvent(rollOver);
				i1--;
			}
			if(touchInfo == null) this.nmeMouseOverObjects = stack; else touchInfo.touchOverObjects = stack;
		}
	}
	,invalidate: function() {
		this.nmeInvalid = true;
	}
	,__class__: flash.display.Stage
	,__properties__: $extend(flash.display.DisplayObjectContainer.prototype.__properties__,{set_backgroundColor:"set_backgroundColor",get_backgroundColor:"get_backgroundColor",set_displayState:"set_displayState",get_displayState:"get_displayState",set_focus:"set_focus",get_focus:"get_focus",set_frameRate:"set_frameRate",get_frameRate:"get_frameRate",get_fullScreenHeight:"get_fullScreenHeight",get_fullScreenWidth:"get_fullScreenWidth",set_quality:"set_quality",get_quality:"get_quality",set_showDefaultContextMenu:"set_showDefaultContextMenu",get_showDefaultContextMenu:"get_showDefaultContextMenu",get_stageHeight:"get_stageHeight",get_stageWidth:"get_stageWidth"})
});
flash.display._Stage = {}
flash.display._Stage.TouchInfo = function() {
	this.touchOverObjects = [];
};
$hxClasses["flash.display._Stage.TouchInfo"] = flash.display._Stage.TouchInfo;
flash.display._Stage.TouchInfo.__name__ = ["flash","display","_Stage","TouchInfo"];
flash.display._Stage.TouchInfo.prototype = {
	__class__: flash.display._Stage.TouchInfo
}
flash.display.StageAlign = $hxClasses["flash.display.StageAlign"] = { __ename__ : ["flash","display","StageAlign"], __constructs__ : ["TOP_RIGHT","TOP_LEFT","TOP","RIGHT","LEFT","BOTTOM_RIGHT","BOTTOM_LEFT","BOTTOM"] }
flash.display.StageAlign.TOP_RIGHT = ["TOP_RIGHT",0];
flash.display.StageAlign.TOP_RIGHT.toString = $estr;
flash.display.StageAlign.TOP_RIGHT.__enum__ = flash.display.StageAlign;
flash.display.StageAlign.TOP_LEFT = ["TOP_LEFT",1];
flash.display.StageAlign.TOP_LEFT.toString = $estr;
flash.display.StageAlign.TOP_LEFT.__enum__ = flash.display.StageAlign;
flash.display.StageAlign.TOP = ["TOP",2];
flash.display.StageAlign.TOP.toString = $estr;
flash.display.StageAlign.TOP.__enum__ = flash.display.StageAlign;
flash.display.StageAlign.RIGHT = ["RIGHT",3];
flash.display.StageAlign.RIGHT.toString = $estr;
flash.display.StageAlign.RIGHT.__enum__ = flash.display.StageAlign;
flash.display.StageAlign.LEFT = ["LEFT",4];
flash.display.StageAlign.LEFT.toString = $estr;
flash.display.StageAlign.LEFT.__enum__ = flash.display.StageAlign;
flash.display.StageAlign.BOTTOM_RIGHT = ["BOTTOM_RIGHT",5];
flash.display.StageAlign.BOTTOM_RIGHT.toString = $estr;
flash.display.StageAlign.BOTTOM_RIGHT.__enum__ = flash.display.StageAlign;
flash.display.StageAlign.BOTTOM_LEFT = ["BOTTOM_LEFT",6];
flash.display.StageAlign.BOTTOM_LEFT.toString = $estr;
flash.display.StageAlign.BOTTOM_LEFT.__enum__ = flash.display.StageAlign;
flash.display.StageAlign.BOTTOM = ["BOTTOM",7];
flash.display.StageAlign.BOTTOM.toString = $estr;
flash.display.StageAlign.BOTTOM.__enum__ = flash.display.StageAlign;
flash.display.StageDisplayState = $hxClasses["flash.display.StageDisplayState"] = { __ename__ : ["flash","display","StageDisplayState"], __constructs__ : ["NORMAL","FULL_SCREEN","FULL_SCREEN_INTERACTIVE"] }
flash.display.StageDisplayState.NORMAL = ["NORMAL",0];
flash.display.StageDisplayState.NORMAL.toString = $estr;
flash.display.StageDisplayState.NORMAL.__enum__ = flash.display.StageDisplayState;
flash.display.StageDisplayState.FULL_SCREEN = ["FULL_SCREEN",1];
flash.display.StageDisplayState.FULL_SCREEN.toString = $estr;
flash.display.StageDisplayState.FULL_SCREEN.__enum__ = flash.display.StageDisplayState;
flash.display.StageDisplayState.FULL_SCREEN_INTERACTIVE = ["FULL_SCREEN_INTERACTIVE",2];
flash.display.StageDisplayState.FULL_SCREEN_INTERACTIVE.toString = $estr;
flash.display.StageDisplayState.FULL_SCREEN_INTERACTIVE.__enum__ = flash.display.StageDisplayState;
flash.display.StageQuality = function() { }
$hxClasses["flash.display.StageQuality"] = flash.display.StageQuality;
flash.display.StageQuality.__name__ = ["flash","display","StageQuality"];
flash.display.StageScaleMode = $hxClasses["flash.display.StageScaleMode"] = { __ename__ : ["flash","display","StageScaleMode"], __constructs__ : ["SHOW_ALL","NO_SCALE","NO_BORDER","EXACT_FIT"] }
flash.display.StageScaleMode.SHOW_ALL = ["SHOW_ALL",0];
flash.display.StageScaleMode.SHOW_ALL.toString = $estr;
flash.display.StageScaleMode.SHOW_ALL.__enum__ = flash.display.StageScaleMode;
flash.display.StageScaleMode.NO_SCALE = ["NO_SCALE",1];
flash.display.StageScaleMode.NO_SCALE.toString = $estr;
flash.display.StageScaleMode.NO_SCALE.__enum__ = flash.display.StageScaleMode;
flash.display.StageScaleMode.NO_BORDER = ["NO_BORDER",2];
flash.display.StageScaleMode.NO_BORDER.toString = $estr;
flash.display.StageScaleMode.NO_BORDER.__enum__ = flash.display.StageScaleMode;
flash.display.StageScaleMode.EXACT_FIT = ["EXACT_FIT",3];
flash.display.StageScaleMode.EXACT_FIT.toString = $estr;
flash.display.StageScaleMode.EXACT_FIT.__enum__ = flash.display.StageScaleMode;
flash.errors = {}
flash.errors.Error = function(message,id) {
	if(id == null) id = 0;
	if(message == null) message = "";
	this.message = message;
	this.errorID = id;
};
$hxClasses["flash.errors.Error"] = flash.errors.Error;
flash.errors.Error.__name__ = ["flash","errors","Error"];
flash.errors.Error.prototype = {
	toString: function() {
		if(this.message != null) return this.message; else return "Error";
	}
	,getStackTrace: function() {
		return haxe.CallStack.toString(haxe.CallStack.exceptionStack());
	}
	,__class__: flash.errors.Error
}
flash.errors.ArgumentError = function(inMessage) {
	if(inMessage == null) inMessage = "";
	flash.errors.Error.call(this,inMessage);
};
$hxClasses["flash.errors.ArgumentError"] = flash.errors.ArgumentError;
flash.errors.ArgumentError.__name__ = ["flash","errors","ArgumentError"];
flash.errors.ArgumentError.__super__ = flash.errors.Error;
flash.errors.ArgumentError.prototype = $extend(flash.errors.Error.prototype,{
	__class__: flash.errors.ArgumentError
});
flash.errors.IOError = function(message) {
	if(message == null) message = "";
	flash.errors.Error.call(this,message);
};
$hxClasses["flash.errors.IOError"] = flash.errors.IOError;
flash.errors.IOError.__name__ = ["flash","errors","IOError"];
flash.errors.IOError.__super__ = flash.errors.Error;
flash.errors.IOError.prototype = $extend(flash.errors.Error.prototype,{
	__class__: flash.errors.IOError
});
flash.events.TextEvent = function(type,bubbles,cancelable,text) {
	if(text == null) text = "";
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	flash.events.Event.call(this,type,bubbles,cancelable);
	this.text = text;
};
$hxClasses["flash.events.TextEvent"] = flash.events.TextEvent;
flash.events.TextEvent.__name__ = ["flash","events","TextEvent"];
flash.events.TextEvent.__super__ = flash.events.Event;
flash.events.TextEvent.prototype = $extend(flash.events.Event.prototype,{
	__class__: flash.events.TextEvent
});
flash.events.ErrorEvent = function(type,bubbles,cancelable,text) {
	flash.events.TextEvent.call(this,type,bubbles,cancelable);
	this.text = text;
};
$hxClasses["flash.events.ErrorEvent"] = flash.events.ErrorEvent;
flash.events.ErrorEvent.__name__ = ["flash","events","ErrorEvent"];
flash.events.ErrorEvent.__super__ = flash.events.TextEvent;
flash.events.ErrorEvent.prototype = $extend(flash.events.TextEvent.prototype,{
	__class__: flash.events.ErrorEvent
});
flash.events.Listener = function(inListener,inUseCapture,inPriority) {
	this.mListner = inListener;
	this.mUseCapture = inUseCapture;
	this.mPriority = inPriority;
	this.mID = flash.events.Listener.sIDs++;
};
$hxClasses["flash.events.Listener"] = flash.events.Listener;
flash.events.Listener.__name__ = ["flash","events","Listener"];
flash.events.Listener.prototype = {
	Is: function(inListener,inCapture) {
		return Reflect.compareMethods(this.mListner,inListener) && this.mUseCapture == inCapture;
	}
	,dispatchEvent: function(event) {
		this.mListner(event);
	}
	,__class__: flash.events.Listener
}
flash.events.EventPhase = function() { }
$hxClasses["flash.events.EventPhase"] = flash.events.EventPhase;
flash.events.EventPhase.__name__ = ["flash","events","EventPhase"];
flash.events.FocusEvent = function(type,bubbles,cancelable,inObject,inShiftKey,inKeyCode) {
	if(inKeyCode == null) inKeyCode = 0;
	if(inShiftKey == null) inShiftKey = false;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	flash.events.Event.call(this,type,bubbles,cancelable);
	this.keyCode = inKeyCode;
	this.shiftKey = inShiftKey == null?false:inShiftKey;
	this.target = inObject;
};
$hxClasses["flash.events.FocusEvent"] = flash.events.FocusEvent;
flash.events.FocusEvent.__name__ = ["flash","events","FocusEvent"];
flash.events.FocusEvent.__super__ = flash.events.Event;
flash.events.FocusEvent.prototype = $extend(flash.events.Event.prototype,{
	__class__: flash.events.FocusEvent
});
flash.events.HTTPStatusEvent = function(type,bubbles,cancelable,status) {
	if(status == null) status = 0;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	this.status = status;
	flash.events.Event.call(this,type,bubbles,cancelable);
};
$hxClasses["flash.events.HTTPStatusEvent"] = flash.events.HTTPStatusEvent;
flash.events.HTTPStatusEvent.__name__ = ["flash","events","HTTPStatusEvent"];
flash.events.HTTPStatusEvent.__super__ = flash.events.Event;
flash.events.HTTPStatusEvent.prototype = $extend(flash.events.Event.prototype,{
	__class__: flash.events.HTTPStatusEvent
});
flash.events.IOErrorEvent = function(type,bubbles,cancelable,inText) {
	if(inText == null) inText = "";
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	flash.events.Event.call(this,type,bubbles,cancelable);
	this.text = inText;
};
$hxClasses["flash.events.IOErrorEvent"] = flash.events.IOErrorEvent;
flash.events.IOErrorEvent.__name__ = ["flash","events","IOErrorEvent"];
flash.events.IOErrorEvent.__super__ = flash.events.Event;
flash.events.IOErrorEvent.prototype = $extend(flash.events.Event.prototype,{
	__class__: flash.events.IOErrorEvent
});
flash.events.KeyboardEvent = function(type,bubbles,cancelable,inCharCode,inKeyCode,inKeyLocation,inCtrlKey,inAltKey,inShiftKey,controlKeyValue,commandKeyValue) {
	if(commandKeyValue == null) commandKeyValue = false;
	if(controlKeyValue == null) controlKeyValue = false;
	if(inShiftKey == null) inShiftKey = false;
	if(inAltKey == null) inAltKey = false;
	if(inCtrlKey == null) inCtrlKey = false;
	if(inKeyLocation == null) inKeyLocation = 0;
	if(inKeyCode == null) inKeyCode = 0;
	if(inCharCode == null) inCharCode = 0;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	flash.events.Event.call(this,type,bubbles,cancelable);
	this.altKey = inAltKey == null?false:inAltKey;
	this.charCode = inCharCode == null?0:inCharCode;
	this.ctrlKey = inCtrlKey == null?false:inCtrlKey;
	this.commandKey = commandKeyValue;
	this.controlKey = controlKeyValue;
	this.keyCode = inKeyCode;
	this.keyLocation = inKeyLocation == null?0:inKeyLocation;
	this.shiftKey = inShiftKey == null?false:inShiftKey;
};
$hxClasses["flash.events.KeyboardEvent"] = flash.events.KeyboardEvent;
flash.events.KeyboardEvent.__name__ = ["flash","events","KeyboardEvent"];
flash.events.KeyboardEvent.__super__ = flash.events.Event;
flash.events.KeyboardEvent.prototype = $extend(flash.events.Event.prototype,{
	__class__: flash.events.KeyboardEvent
});
flash.events.ProgressEvent = function(type,bubbles,cancelable,bytesLoaded,bytesTotal) {
	if(bytesTotal == null) bytesTotal = 0;
	if(bytesLoaded == null) bytesLoaded = 0;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	flash.events.Event.call(this,type,bubbles,cancelable);
	this.bytesLoaded = bytesLoaded;
	this.bytesTotal = bytesTotal;
};
$hxClasses["flash.events.ProgressEvent"] = flash.events.ProgressEvent;
flash.events.ProgressEvent.__name__ = ["flash","events","ProgressEvent"];
flash.events.ProgressEvent.__super__ = flash.events.Event;
flash.events.ProgressEvent.prototype = $extend(flash.events.Event.prototype,{
	__class__: flash.events.ProgressEvent
});
flash.events.SecurityErrorEvent = function(type,bubbles,cancelable,text) {
	if(text == null) text = "";
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = false;
	flash.events.ErrorEvent.call(this,type,bubbles,cancelable);
	this.text = text;
};
$hxClasses["flash.events.SecurityErrorEvent"] = flash.events.SecurityErrorEvent;
flash.events.SecurityErrorEvent.__name__ = ["flash","events","SecurityErrorEvent"];
flash.events.SecurityErrorEvent.__super__ = flash.events.ErrorEvent;
flash.events.SecurityErrorEvent.prototype = $extend(flash.events.ErrorEvent.prototype,{
	__class__: flash.events.SecurityErrorEvent
});
flash.events.TouchEvent = function(type,bubbles,cancelable,localX,localY,relatedObject,ctrlKey,altKey,shiftKey,buttonDown,delta,commandKey,clickCount) {
	if(clickCount == null) clickCount = 0;
	if(commandKey == null) commandKey = false;
	if(delta == null) delta = 0;
	if(buttonDown == null) buttonDown = false;
	if(shiftKey == null) shiftKey = false;
	if(altKey == null) altKey = false;
	if(ctrlKey == null) ctrlKey = false;
	if(localY == null) localY = 0;
	if(localX == null) localX = 0;
	if(cancelable == null) cancelable = false;
	if(bubbles == null) bubbles = true;
	flash.events.Event.call(this,type,bubbles,cancelable);
	this.shiftKey = shiftKey;
	this.altKey = altKey;
	this.ctrlKey = ctrlKey;
	this.bubbles = bubbles;
	this.relatedObject = relatedObject;
	this.delta = delta;
	this.localX = localX;
	this.localY = localY;
	this.buttonDown = buttonDown;
	this.commandKey = commandKey;
	this.touchPointID = 0;
	this.isPrimaryTouchPoint = true;
};
$hxClasses["flash.events.TouchEvent"] = flash.events.TouchEvent;
flash.events.TouchEvent.__name__ = ["flash","events","TouchEvent"];
flash.events.TouchEvent.nmeCreate = function(type,event,touch,local,target) {
	var evt = new flash.events.TouchEvent(type,true,false,local.x,local.y,null,event.ctrlKey,event.altKey,event.shiftKey,false,0,null,0);
	evt.stageX = flash.Lib.get_current().get_stage().get_mouseX();
	evt.stageY = flash.Lib.get_current().get_stage().get_mouseY();
	evt.target = target;
	return evt;
}
flash.events.TouchEvent.__super__ = flash.events.Event;
flash.events.TouchEvent.prototype = $extend(flash.events.Event.prototype,{
	nmeCreateSimilar: function(type,related,targ) {
		var result = new flash.events.TouchEvent(type,this.bubbles,this.cancelable,this.localX,this.localY,related == null?this.relatedObject:related,this.ctrlKey,this.altKey,this.shiftKey,this.buttonDown,this.delta,this.commandKey);
		result.touchPointID = this.touchPointID;
		result.isPrimaryTouchPoint = this.isPrimaryTouchPoint;
		if(targ != null) result.target = targ;
		return result;
	}
	,__class__: flash.events.TouchEvent
});
flash.filters = {}
flash.filters.BitmapFilter = function(inType) {
	this._mType = inType;
};
$hxClasses["flash.filters.BitmapFilter"] = flash.filters.BitmapFilter;
flash.filters.BitmapFilter.__name__ = ["flash","filters","BitmapFilter"];
flash.filters.BitmapFilter.prototype = {
	nmeApplyFilter: function(surface,rect,refreshCache) {
		if(refreshCache == null) refreshCache = false;
	}
	,nmePreFilter: function(surface) {
	}
	,clone: function() {
		throw "Implement in subclass. BitmapFilter::clone";
		return null;
	}
	,__class__: flash.filters.BitmapFilter
}
flash.filters.DropShadowFilter = function(in_distance,in_angle,in_color,in_alpha,in_blurX,in_blurY,in_strength,in_quality,in_inner,in_knockout,in_hideObject) {
	if(in_hideObject == null) in_hideObject = false;
	if(in_knockout == null) in_knockout = false;
	if(in_inner == null) in_inner = false;
	if(in_quality == null) in_quality = 1;
	if(in_strength == null) in_strength = 1.0;
	if(in_blurY == null) in_blurY = 4.0;
	if(in_blurX == null) in_blurX = 4.0;
	if(in_alpha == null) in_alpha = 1.0;
	if(in_color == null) in_color = 0;
	if(in_angle == null) in_angle = 45.0;
	if(in_distance == null) in_distance = 4.0;
	flash.filters.BitmapFilter.call(this,"DropShadowFilter");
	this.distance = in_distance;
	this.angle = in_angle;
	this.color = in_color;
	this.alpha = in_alpha;
	this.blurX = in_blurX;
	this.blurY = in_blurX;
	this.strength = in_strength;
	this.quality = in_quality;
	this.inner = in_inner;
	this.knockout = in_knockout;
	this.hideObject = in_hideObject;
	this._nmeCached = false;
};
$hxClasses["flash.filters.DropShadowFilter"] = flash.filters.DropShadowFilter;
flash.filters.DropShadowFilter.__name__ = ["flash","filters","DropShadowFilter"];
flash.filters.DropShadowFilter.__super__ = flash.filters.BitmapFilter;
flash.filters.DropShadowFilter.prototype = $extend(flash.filters.BitmapFilter.prototype,{
	nmeApplyFilter: function(surface,rect,refreshCache) {
		if(refreshCache == null) refreshCache = false;
		if(!this._nmeCached || refreshCache) {
			var distanceX = this.distance * Math.sin(2 * Math.PI * this.angle / 360.0);
			var distanceY = this.distance * Math.cos(2 * Math.PI * this.angle / 360.0);
			var blurRadius = Math.max(this.blurX,this.blurY);
			var context = surface.getContext("2d");
			context.shadowOffsetX = distanceX;
			context.shadowOffsetY = distanceY;
			context.shadowBlur = blurRadius;
			context.shadowColor = "rgba(" + (this.color >> 16 & 255) + "," + (this.color >> 8 & 255) + "," + (this.color & 255) + "," + this.alpha + ")";
			this._nmeCached = true;
		}
	}
	,clone: function() {
		return new flash.filters.DropShadowFilter(this.distance,this.angle,this.color,this.alpha,this.blurX,this.blurY,this.strength,this.quality,this.inner,this.knockout,this.hideObject);
	}
	,__class__: flash.filters.DropShadowFilter
});
flash.geom = {}
flash.geom.ColorTransform = function(inRedMultiplier,inGreenMultiplier,inBlueMultiplier,inAlphaMultiplier,inRedOffset,inGreenOffset,inBlueOffset,inAlphaOffset) {
	if(inAlphaOffset == null) inAlphaOffset = 0;
	if(inBlueOffset == null) inBlueOffset = 0;
	if(inGreenOffset == null) inGreenOffset = 0;
	if(inRedOffset == null) inRedOffset = 0;
	if(inAlphaMultiplier == null) inAlphaMultiplier = 1;
	if(inBlueMultiplier == null) inBlueMultiplier = 1;
	if(inGreenMultiplier == null) inGreenMultiplier = 1;
	if(inRedMultiplier == null) inRedMultiplier = 1;
	this.redMultiplier = inRedMultiplier == null?1.0:inRedMultiplier;
	this.greenMultiplier = inGreenMultiplier == null?1.0:inGreenMultiplier;
	this.blueMultiplier = inBlueMultiplier == null?1.0:inBlueMultiplier;
	this.alphaMultiplier = inAlphaMultiplier == null?1.0:inAlphaMultiplier;
	this.redOffset = inRedOffset == null?0.0:inRedOffset;
	this.greenOffset = inGreenOffset == null?0.0:inGreenOffset;
	this.blueOffset = inBlueOffset == null?0.0:inBlueOffset;
	this.alphaOffset = inAlphaOffset == null?0.0:inAlphaOffset;
};
$hxClasses["flash.geom.ColorTransform"] = flash.geom.ColorTransform;
flash.geom.ColorTransform.__name__ = ["flash","geom","ColorTransform"];
flash.geom.ColorTransform.prototype = {
	set_color: function(value) {
		this.redOffset = value >> 16 & 255;
		this.greenOffset = value >> 8 & 255;
		this.blueOffset = value & 255;
		this.redMultiplier = 0;
		this.greenMultiplier = 0;
		this.blueMultiplier = 0;
		return this.get_color();
	}
	,get_color: function() {
		return (this.redOffset | 0) << 16 | (this.greenOffset | 0) << 8 | (this.blueOffset | 0);
	}
	,concat: function(second) {
		this.redMultiplier += second.redMultiplier;
		this.greenMultiplier += second.greenMultiplier;
		this.blueMultiplier += second.blueMultiplier;
		this.alphaMultiplier += second.alphaMultiplier;
	}
	,__class__: flash.geom.ColorTransform
	,__properties__: {set_color:"set_color",get_color:"get_color"}
}
flash.geom.Matrix = function(in_a,in_b,in_c,in_d,in_tx,in_ty) {
	if(in_ty == null) in_ty = 0;
	if(in_tx == null) in_tx = 0;
	if(in_d == null) in_d = 1;
	if(in_c == null) in_c = 0;
	if(in_b == null) in_b = 0;
	if(in_a == null) in_a = 1;
	this.a = in_a;
	this.b = in_b;
	this.c = in_c;
	this.d = in_d;
	this.set_tx(in_tx);
	this.set_ty(in_ty);
	this._sx = 1.0;
	this._sy = 1.0;
};
$hxClasses["flash.geom.Matrix"] = flash.geom.Matrix;
flash.geom.Matrix.__name__ = ["flash","geom","Matrix"];
flash.geom.Matrix.prototype = {
	set_ty: function(inValue) {
		this.ty = inValue;
		return this.ty;
	}
	,set_tx: function(inValue) {
		this.tx = inValue;
		return this.tx;
	}
	,translate: function(inDX,inDY) {
		var m = new flash.geom.Matrix();
		m.set_tx(inDX);
		m.set_ty(inDY);
		this.concat(m);
	}
	,transformPoint: function(inPos) {
		return new flash.geom.Point(inPos.x * this.a + inPos.y * this.c + this.tx,inPos.x * this.b + inPos.y * this.d + this.ty);
	}
	,toString: function() {
		return "matrix(" + this.a + ", " + this.b + ", " + this.c + ", " + this.d + ", " + this.tx + ", " + this.ty + ")";
	}
	,toMozString: function() {
		return "matrix(" + this.a + ", " + this.b + ", " + this.c + ", " + this.d + ", " + this.tx + "px, " + this.ty + "px)";
	}
	,to3DString: function() {
		return "matrix3d(" + this.a + ", " + this.b + ", " + "0, 0, " + this.c + ", " + this.d + ", " + "0, 0, 0, 0, 1, 0, " + this.tx + ", " + this.ty + ", " + "0, 1" + ")";
	}
	,setRotation: function(inTheta,inScale) {
		if(inScale == null) inScale = 1;
		var scale = inScale;
		this.a = Math.cos(inTheta) * scale;
		this.c = Math.sin(inTheta) * scale;
		this.b = -this.c;
		this.d = this.a;
		this.a = Math.round(this.a * 1000) / 1000;
		this.b = Math.round(this.b * 1000) / 1000;
		this.c = Math.round(this.c * 1000) / 1000;
		this.d = Math.round(this.d * 1000) / 1000;
		this.set_tx(Math.round(this.tx * 10) / 10);
		this.set_ty(Math.round(this.ty * 10) / 10);
	}
	,scale: function(inSX,inSY) {
		this._sx = inSX;
		this._sy = inSY;
		this.a *= inSX;
		this.b *= inSY;
		this.c *= inSX;
		this.d *= inSY;
		var _g = this;
		_g.set_tx(_g.tx * inSX);
		var _g = this;
		_g.set_ty(_g.ty * inSY);
		this.a = Math.round(this.a * 1000) / 1000;
		this.b = Math.round(this.b * 1000) / 1000;
		this.c = Math.round(this.c * 1000) / 1000;
		this.d = Math.round(this.d * 1000) / 1000;
		this.set_tx(Math.round(this.tx * 10) / 10);
		this.set_ty(Math.round(this.ty * 10) / 10);
	}
	,rotate: function(inTheta) {
		var cos = Math.cos(inTheta);
		var sin = Math.sin(inTheta);
		var a1 = this.a * cos - this.b * sin;
		this.b = this.a * sin + this.b * cos;
		this.a = a1;
		var c1 = this.c * cos - this.d * sin;
		this.d = this.c * sin + this.d * cos;
		this.c = c1;
		var tx1 = this.tx * cos - this.ty * sin;
		this.set_ty(this.tx * sin + this.ty * cos);
		this.set_tx(tx1);
		this.a = Math.round(this.a * 1000) / 1000;
		this.b = Math.round(this.b * 1000) / 1000;
		this.c = Math.round(this.c * 1000) / 1000;
		this.d = Math.round(this.d * 1000) / 1000;
		this.set_tx(Math.round(this.tx * 10) / 10);
		this.set_ty(Math.round(this.ty * 10) / 10);
	}
	,nmeTranslateTransformed: function(inPos) {
		this.set_tx(inPos.x * this.a + inPos.y * this.c + this.tx);
		this.set_ty(inPos.x * this.b + inPos.y * this.d + this.ty);
		this.a = Math.round(this.a * 1000) / 1000;
		this.b = Math.round(this.b * 1000) / 1000;
		this.c = Math.round(this.c * 1000) / 1000;
		this.d = Math.round(this.d * 1000) / 1000;
		this.set_tx(Math.round(this.tx * 10) / 10);
		this.set_ty(Math.round(this.ty * 10) / 10);
	}
	,nmeTransformY: function(inPos) {
		return inPos.x * this.b + inPos.y * this.d + this.ty;
	}
	,nmeTransformX: function(inPos) {
		return inPos.x * this.a + inPos.y * this.c + this.tx;
	}
	,mult: function(m) {
		var result = this.clone();
		result.concat(m);
		return result;
	}
	,invert: function() {
		var norm = this.a * this.d - this.b * this.c;
		if(norm == 0) {
			this.a = this.b = this.c = this.d = 0;
			this.set_tx(-this.tx);
			this.set_ty(-this.ty);
		} else {
			norm = 1.0 / norm;
			var a1 = this.d * norm;
			this.d = this.a * norm;
			this.a = a1;
			this.b *= -norm;
			this.c *= -norm;
			var tx1 = -this.a * this.tx - this.c * this.ty;
			this.set_ty(-this.b * this.tx - this.d * this.ty);
			this.set_tx(tx1);
		}
		this._sx /= this._sx;
		this._sy /= this._sy;
		this.a = Math.round(this.a * 1000) / 1000;
		this.b = Math.round(this.b * 1000) / 1000;
		this.c = Math.round(this.c * 1000) / 1000;
		this.d = Math.round(this.d * 1000) / 1000;
		this.set_tx(Math.round(this.tx * 10) / 10);
		this.set_ty(Math.round(this.ty * 10) / 10);
		return this;
	}
	,identity: function() {
		this.a = 1;
		this.b = 0;
		this.c = 0;
		this.d = 1;
		this.set_tx(0);
		this.set_ty(0);
		this._sx = 1.0;
		this._sy = 1.0;
	}
	,createGradientBox: function(in_width,in_height,rotation,in_tx,in_ty) {
		if(in_ty == null) in_ty = 0;
		if(in_tx == null) in_tx = 0;
		if(rotation == null) rotation = 0;
		this.a = in_width / 1638.4;
		this.d = in_height / 1638.4;
		if(rotation != null && rotation != 0.0) {
			var cos = Math.cos(rotation);
			var sin = Math.sin(rotation);
			this.b = sin * this.d;
			this.c = -sin * this.a;
			this.a *= cos;
			this.d *= cos;
		} else {
			this.b = 0;
			this.c = 0;
		}
		this.set_tx(in_tx != null?in_tx + in_width / 2:in_width / 2);
		this.set_ty(in_ty != null?in_ty + in_height / 2:in_height / 2);
	}
	,copy: function(m) {
		this.a = m.a;
		this.b = m.b;
		this.c = m.c;
		this.d = m.d;
		this.set_tx(m.tx);
		this.set_ty(m.ty);
		this._sx = m._sx;
		this._sy = m._sy;
	}
	,concat: function(m) {
		var a1 = this.a * m.a + this.b * m.c;
		this.b = this.a * m.b + this.b * m.d;
		this.a = a1;
		var c1 = this.c * m.a + this.d * m.c;
		this.d = this.c * m.b + this.d * m.d;
		this.c = c1;
		var tx1 = this.tx * m.a + this.ty * m.c + m.tx;
		this.set_ty(this.tx * m.b + this.ty * m.d + m.ty);
		this.set_tx(tx1);
		this._sx *= m._sx;
		this._sy *= m._sy;
		this.a = Math.round(this.a * 1000) / 1000;
		this.b = Math.round(this.b * 1000) / 1000;
		this.c = Math.round(this.c * 1000) / 1000;
		this.d = Math.round(this.d * 1000) / 1000;
		this.set_tx(Math.round(this.tx * 10) / 10);
		this.set_ty(Math.round(this.ty * 10) / 10);
	}
	,clone: function() {
		var m = new flash.geom.Matrix(this.a,this.b,this.c,this.d,this.tx,this.ty);
		m._sx = this._sx;
		m._sy = this._sy;
		return m;
	}
	,cleanValues: function() {
		this.a = Math.round(this.a * 1000) / 1000;
		this.b = Math.round(this.b * 1000) / 1000;
		this.c = Math.round(this.c * 1000) / 1000;
		this.d = Math.round(this.d * 1000) / 1000;
		this.set_tx(Math.round(this.tx * 10) / 10);
		this.set_ty(Math.round(this.ty * 10) / 10);
	}
	,__class__: flash.geom.Matrix
	,__properties__: {set_tx:"set_tx",set_ty:"set_ty"}
}
flash.geom.Point = function(inX,inY) {
	if(inY == null) inY = 0;
	if(inX == null) inX = 0;
	this.x = inX;
	this.y = inY;
};
$hxClasses["flash.geom.Point"] = flash.geom.Point;
flash.geom.Point.__name__ = ["flash","geom","Point"];
flash.geom.Point.distance = function(pt1,pt2) {
	var dx = pt1.x - pt2.x;
	var dy = pt1.y - pt2.y;
	return Math.sqrt(dx * dx + dy * dy);
}
flash.geom.Point.interpolate = function(pt1,pt2,f) {
	return new flash.geom.Point(pt2.x + f * (pt1.x - pt2.x),pt2.y + f * (pt1.y - pt2.y));
}
flash.geom.Point.polar = function(len,angle) {
	return new flash.geom.Point(len * Math.cos(angle),len * Math.sin(angle));
}
flash.geom.Point.prototype = {
	get_length: function() {
		return Math.sqrt(this.x * this.x + this.y * this.y);
	}
	,subtract: function(v) {
		return new flash.geom.Point(this.x - v.x,this.y - v.y);
	}
	,offset: function(dx,dy) {
		this.x += dx;
		this.y += dy;
	}
	,normalize: function(thickness) {
		if(this.x == 0 && this.y == 0) return; else {
			var norm = thickness / Math.sqrt(this.x * this.x + this.y * this.y);
			this.x *= norm;
			this.y *= norm;
		}
	}
	,equals: function(toCompare) {
		return toCompare.x == this.x && toCompare.y == this.y;
	}
	,clone: function() {
		return new flash.geom.Point(this.x,this.y);
	}
	,add: function(v) {
		return new flash.geom.Point(v.x + this.x,v.y + this.y);
	}
	,__class__: flash.geom.Point
	,__properties__: {get_length:"get_length"}
}
flash.geom.Rectangle = function(inX,inY,inWidth,inHeight) {
	if(inHeight == null) inHeight = 0;
	if(inWidth == null) inWidth = 0;
	if(inY == null) inY = 0;
	if(inX == null) inX = 0;
	this.x = inX;
	this.y = inY;
	this.width = inWidth;
	this.height = inHeight;
};
$hxClasses["flash.geom.Rectangle"] = flash.geom.Rectangle;
flash.geom.Rectangle.__name__ = ["flash","geom","Rectangle"];
flash.geom.Rectangle.prototype = {
	set_topLeft: function(p) {
		this.x = p.x;
		this.y = p.y;
		return p.clone();
	}
	,get_topLeft: function() {
		return new flash.geom.Point(this.x,this.y);
	}
	,set_top: function(t) {
		this.height -= t - this.y;
		this.y = t;
		return t;
	}
	,get_top: function() {
		return this.y;
	}
	,set_size: function(p) {
		this.width = p.x;
		this.height = p.y;
		return p.clone();
	}
	,get_size: function() {
		return new flash.geom.Point(this.width,this.height);
	}
	,set_right: function(r) {
		this.width = r - this.x;
		return r;
	}
	,get_right: function() {
		return this.x + this.width;
	}
	,set_left: function(l) {
		this.width -= l - this.x;
		this.x = l;
		return l;
	}
	,get_left: function() {
		return this.x;
	}
	,set_bottomRight: function(p) {
		this.width = p.x - this.x;
		this.height = p.y - this.y;
		return p.clone();
	}
	,get_bottomRight: function() {
		return new flash.geom.Point(this.x + this.width,this.y + this.height);
	}
	,set_bottom: function(b) {
		this.height = b - this.y;
		return b;
	}
	,get_bottom: function() {
		return this.y + this.height;
	}
	,union: function(toUnion) {
		var x0 = this.x > toUnion.x?toUnion.x:this.x;
		var x1 = this.get_right() < toUnion.get_right()?toUnion.get_right():this.get_right();
		var y0 = this.y > toUnion.y?toUnion.y:this.y;
		var y1 = this.get_bottom() < toUnion.get_bottom()?toUnion.get_bottom():this.get_bottom();
		return new flash.geom.Rectangle(x0,y0,x1 - x0,y1 - y0);
	}
	,transform: function(m) {
		var tx0 = m.a * this.x + m.c * this.y;
		var tx1 = tx0;
		var ty0 = m.b * this.x + m.d * this.y;
		var ty1 = tx0;
		var tx = m.a * (this.x + this.width) + m.c * this.y;
		var ty = m.b * (this.x + this.width) + m.d * this.y;
		if(tx < tx0) tx0 = tx;
		if(ty < ty0) ty0 = ty;
		if(tx > tx1) tx1 = tx;
		if(ty > ty1) ty1 = ty;
		tx = m.a * (this.x + this.width) + m.c * (this.y + this.height);
		ty = m.b * (this.x + this.width) + m.d * (this.y + this.height);
		if(tx < tx0) tx0 = tx;
		if(ty < ty0) ty0 = ty;
		if(tx > tx1) tx1 = tx;
		if(ty > ty1) ty1 = ty;
		tx = m.a * this.x + m.c * (this.y + this.height);
		ty = m.b * this.x + m.d * (this.y + this.height);
		if(tx < tx0) tx0 = tx;
		if(ty < ty0) ty0 = ty;
		if(tx > tx1) tx1 = tx;
		if(ty > ty1) ty1 = ty;
		return new flash.geom.Rectangle(tx0 + m.tx,ty0 + m.ty,tx1 - tx0,ty1 - ty0);
	}
	,setEmpty: function() {
		this.x = this.y = this.width = this.height = 0;
	}
	,offsetPoint: function(point) {
		this.x += point.x;
		this.y += point.y;
	}
	,offset: function(dx,dy) {
		this.x += dx;
		this.y += dy;
	}
	,isEmpty: function() {
		return this.width <= 0 || this.height <= 0;
	}
	,intersects: function(toIntersect) {
		var x0 = this.x < toIntersect.x?toIntersect.x:this.x;
		var x1 = this.get_right() > toIntersect.get_right()?toIntersect.get_right():this.get_right();
		if(x1 <= x0) return false;
		var y0 = this.y < toIntersect.y?toIntersect.y:this.y;
		var y1 = this.get_bottom() > toIntersect.get_bottom()?toIntersect.get_bottom():this.get_bottom();
		return y1 > y0;
	}
	,intersection: function(toIntersect) {
		var x0 = this.x < toIntersect.x?toIntersect.x:this.x;
		var x1 = this.get_right() > toIntersect.get_right()?toIntersect.get_right():this.get_right();
		if(x1 <= x0) return new flash.geom.Rectangle();
		var y0 = this.y < toIntersect.y?toIntersect.y:this.y;
		var y1 = this.get_bottom() > toIntersect.get_bottom()?toIntersect.get_bottom():this.get_bottom();
		if(y1 <= y0) return new flash.geom.Rectangle();
		return new flash.geom.Rectangle(x0,y0,x1 - x0,y1 - y0);
	}
	,inflatePoint: function(point) {
		this.inflate(point.x,point.y);
	}
	,inflate: function(dx,dy) {
		this.x -= dx;
		this.width += dx * 2;
		this.y -= dy;
		this.height += dy * 2;
	}
	,extendBounds: function(r) {
		var dx = this.x - r.x;
		if(dx > 0) {
			this.x -= dx;
			this.width += dx;
		}
		var dy = this.y - r.y;
		if(dy > 0) {
			this.y -= dy;
			this.height += dy;
		}
		if(r.get_right() > this.get_right()) this.set_right(r.get_right());
		if(r.get_bottom() > this.get_bottom()) this.set_bottom(r.get_bottom());
	}
	,equals: function(toCompare) {
		return this.x == toCompare.x && this.y == toCompare.y && this.width == toCompare.width && this.height == toCompare.height;
	}
	,containsRect: function(rect) {
		if(rect.width <= 0 || rect.height <= 0) return rect.x > this.x && rect.y > this.y && rect.get_right() < this.get_right() && rect.get_bottom() < this.get_bottom(); else return rect.x >= this.x && rect.y >= this.y && rect.get_right() <= this.get_right() && rect.get_bottom() <= this.get_bottom();
	}
	,containsPoint: function(point) {
		return this.contains(point.x,point.y);
	}
	,contains: function(inX,inY) {
		return inX >= this.x && inY >= this.y && inX < this.get_right() && inY < this.get_bottom();
	}
	,clone: function() {
		return new flash.geom.Rectangle(this.x,this.y,this.width,this.height);
	}
	,__class__: flash.geom.Rectangle
	,__properties__: {set_bottom:"set_bottom",get_bottom:"get_bottom",set_bottomRight:"set_bottomRight",get_bottomRight:"get_bottomRight",set_left:"set_left",get_left:"get_left",set_right:"set_right",get_right:"get_right",set_size:"set_size",get_size:"get_size",set_top:"set_top",get_top:"get_top",set_topLeft:"set_topLeft",get_topLeft:"get_topLeft"}
}
flash.geom.Transform = function(displayObject) {
	if(displayObject == null) throw "Cannot create Transform with no DisplayObject.";
	this._displayObject = displayObject;
	this._matrix = new flash.geom.Matrix();
	this._fullMatrix = new flash.geom.Matrix();
	this.set_colorTransform(new flash.geom.ColorTransform());
};
$hxClasses["flash.geom.Transform"] = flash.geom.Transform;
flash.geom.Transform.__name__ = ["flash","geom","Transform"];
flash.geom.Transform.prototype = {
	get_pixelBounds: function() {
		return this._displayObject.getBounds(null);
	}
	,set_matrix: function(inValue) {
		this._matrix.copy(inValue);
		this._displayObject.nmeMatrixOverridden();
		return this._matrix;
	}
	,get_matrix: function() {
		return this._matrix.clone();
	}
	,get_concatenatedMatrix: function() {
		return this.nmeGetFullMatrix(this._matrix);
	}
	,set_colorTransform: function(inValue) {
		this.colorTransform = inValue;
		return inValue;
	}
	,nmeSetMatrix: function(inValue) {
		this._matrix.copy(inValue);
	}
	,nmeSetFullMatrix: function(inValue) {
		this._fullMatrix.copy(inValue);
		return this._fullMatrix;
	}
	,nmeGetFullMatrix: function(localMatrix) {
		var m;
		if(localMatrix != null) m = localMatrix.mult(this._fullMatrix); else m = this._fullMatrix.clone();
		return m;
	}
	,__class__: flash.geom.Transform
	,__properties__: {set_colorTransform:"set_colorTransform",get_concatenatedMatrix:"get_concatenatedMatrix",set_matrix:"set_matrix",get_matrix:"get_matrix",get_pixelBounds:"get_pixelBounds"}
}
flash.media = {}
flash.media.Sound = function(stream,context) {
	flash.events.EventDispatcher.call(this,this);
	this.bytesLoaded = 0;
	this.bytesTotal = 0;
	this.id3 = null;
	this.isBuffering = false;
	this.length = 0;
	this.url = null;
	this.nmeSoundChannels = new haxe.ds.IntMap();
	this.nmeSoundIdx = 0;
	if(stream != null) this.load(stream,context);
};
$hxClasses["flash.media.Sound"] = flash.media.Sound;
flash.media.Sound.__name__ = ["flash","media","Sound"];
flash.media.Sound.nmeCanPlayMime = function(mime) {
	var audio = js.Browser.document.createElement("audio");
	var playable = function(ok) {
		if(ok != "" && ok != "no") return true; else return false;
	};
	return playable(audio.canPlayType(mime,null));
}
flash.media.Sound.nmeCanPlayType = function(extension) {
	var mime = flash.media.Sound.nmeMimeForExtension(extension);
	if(mime == null) return false;
	return flash.media.Sound.nmeCanPlayMime(mime);
}
flash.media.Sound.nmeMimeForExtension = function(extension) {
	var mime = null;
	switch(extension) {
	case "mp3":
		mime = "audio/mpeg";
		break;
	case "ogg":
		mime = "audio/ogg; codecs=\"vorbis\"";
		break;
	case "wav":
		mime = "audio/wav; codecs=\"1\"";
		break;
	case "aac":
		mime = "audio/mp4; codecs=\"mp4a.40.2\"";
		break;
	default:
		mime = null;
	}
	return mime;
}
flash.media.Sound.__super__ = flash.events.EventDispatcher;
flash.media.Sound.prototype = $extend(flash.events.EventDispatcher.prototype,{
	nmeOnSoundLoaded: function(evt) {
		this.nmeRemoveEventListeners();
		var evt1 = new flash.events.Event(flash.events.Event.COMPLETE);
		this.dispatchEvent(evt1);
	}
	,nmeOnSoundLoadError: function(evt) {
		this.nmeRemoveEventListeners();
		var evt1 = new flash.events.IOErrorEvent(flash.events.IOErrorEvent.IO_ERROR);
		this.dispatchEvent(evt1);
	}
	,play: function(startTime,loops,sndTransform) {
		if(loops == null) loops = 0;
		if(startTime == null) startTime = 0.0;
		if(this.nmeStreamUrl == null) return null;
		var self = this;
		var curIdx = this.nmeSoundIdx;
		var removeRef = function() {
			self.nmeSoundChannels.remove(curIdx);
		};
		var channel = flash.media.SoundChannel.nmeCreate(this.nmeStreamUrl,startTime,loops,sndTransform,removeRef);
		this.nmeSoundChannels.set(curIdx,channel);
		this.nmeSoundIdx++;
		var audio = channel.nmeAudio;
		return channel;
	}
	,nmeRemoveEventListeners: function() {
		this.nmeSoundCache.removeEventListener(flash.events.Event.COMPLETE,$bind(this,this.nmeOnSoundLoaded),false);
		this.nmeSoundCache.removeEventListener(flash.events.IOErrorEvent.IO_ERROR,$bind(this,this.nmeOnSoundLoadError),false);
	}
	,nmeLoad: function(stream,context,mime) {
		if(mime == null) mime = "";
		this.nmeStreamUrl = stream.url;
		try {
			this.nmeSoundCache = new flash.net.URLLoader();
			this.nmeAddEventListeners();
			this.nmeSoundCache.load(stream);
		} catch( e ) {
		}
	}
	,nmeAddEventListeners: function() {
		this.nmeSoundCache.addEventListener(flash.events.Event.COMPLETE,$bind(this,this.nmeOnSoundLoaded));
		this.nmeSoundCache.addEventListener(flash.events.IOErrorEvent.IO_ERROR,$bind(this,this.nmeOnSoundLoadError));
	}
	,load: function(stream,context) {
		this.nmeLoad(stream,context);
	}
	,close: function() {
	}
	,__class__: flash.media.Sound
});
flash.media.SoundChannel = function() {
	flash.events.EventDispatcher.call(this,this);
	this.ChannelId = -1;
	this.leftPeak = 0.;
	this.position = 0.;
	this.rightPeak = 0.;
	this.nmeAudioCurrentLoop = 1;
	this.nmeAudioTotalLoops = 1;
};
$hxClasses["flash.media.SoundChannel"] = flash.media.SoundChannel;
flash.media.SoundChannel.__name__ = ["flash","media","SoundChannel"];
flash.media.SoundChannel.nmeCreate = function(src,startTime,loops,sndTransform,removeRef) {
	if(loops == null) loops = 0;
	if(startTime == null) startTime = 0.0;
	var channel = new flash.media.SoundChannel();
	channel.nmeAudio = js.Browser.document.createElement("audio");
	channel.nmeRemoveRef = removeRef;
	channel.nmeAudio.addEventListener("ended",$bind(channel,channel.__onSoundChannelFinished),false);
	channel.nmeAudio.addEventListener("seeked",$bind(channel,channel.__onSoundSeeked),false);
	channel.nmeAudio.addEventListener("stalled",$bind(channel,channel.__onStalled),false);
	channel.nmeAudio.addEventListener("progress",$bind(channel,channel.__onProgress),false);
	if(loops > 0) {
		channel.nmeAudioTotalLoops = loops;
		channel.nmeAudio.loop = true;
	}
	channel.nmeStartTime = startTime;
	if(startTime > 0.) {
		var onLoad = null;
		onLoad = function(_) {
			channel.nmeAudio.currentTime = channel.nmeStartTime;
			channel.nmeAudio.play();
			channel.nmeAudio.removeEventListener("canplaythrough",onLoad,false);
		};
		channel.nmeAudio.addEventListener("canplaythrough",onLoad,false);
	} else channel.nmeAudio.autoplay = true;
	channel.nmeAudio.src = src;
	return channel;
}
flash.media.SoundChannel.__super__ = flash.events.EventDispatcher;
flash.media.SoundChannel.prototype = $extend(flash.events.EventDispatcher.prototype,{
	set_soundTransform: function(v) {
		this.nmeAudio.volume = v.volume;
		return this.soundTransform = v;
	}
	,__onStalled: function(evt) {
		if(this.nmeAudio != null) this.nmeAudio.load();
	}
	,__onSoundSeeked: function(evt) {
		if(this.nmeAudioCurrentLoop >= this.nmeAudioTotalLoops) {
			this.nmeAudio.loop = false;
			this.stop();
		} else this.nmeAudioCurrentLoop++;
	}
	,__onSoundChannelFinished: function(evt) {
		if(this.nmeAudioCurrentLoop >= this.nmeAudioTotalLoops) {
			this.nmeAudio.removeEventListener("ended",$bind(this,this.__onSoundChannelFinished),false);
			this.nmeAudio.removeEventListener("seeked",$bind(this,this.__onSoundSeeked),false);
			this.nmeAudio.removeEventListener("stalled",$bind(this,this.__onStalled),false);
			this.nmeAudio.removeEventListener("progress",$bind(this,this.__onProgress),false);
			this.nmeAudio = null;
			var evt1 = new flash.events.Event(flash.events.Event.COMPLETE);
			evt1.target = this;
			this.dispatchEvent(evt1);
			if(this.nmeRemoveRef != null) this.nmeRemoveRef();
		} else {
			this.nmeAudio.currentTime = this.nmeStartTime;
			this.nmeAudio.play();
		}
	}
	,__onProgress: function(evt) {
	}
	,stop: function() {
		if(this.nmeAudio != null) {
			this.nmeAudio.pause();
			this.nmeAudio = null;
			if(this.nmeRemoveRef != null) this.nmeRemoveRef();
		}
	}
	,__class__: flash.media.SoundChannel
	,__properties__: {set_soundTransform:"set_soundTransform"}
});
flash.media.SoundLoaderContext = function(bufferTime,checkPolicyFile) {
	if(checkPolicyFile == null) checkPolicyFile = false;
	if(bufferTime == null) bufferTime = 0;
	this.bufferTime = bufferTime;
	this.checkPolicyFile = checkPolicyFile;
};
$hxClasses["flash.media.SoundLoaderContext"] = flash.media.SoundLoaderContext;
flash.media.SoundLoaderContext.__name__ = ["flash","media","SoundLoaderContext"];
flash.media.SoundLoaderContext.prototype = {
	__class__: flash.media.SoundLoaderContext
}
flash.media.SoundTransform = function(vol,panning) {
	if(panning == null) panning = 0;
	if(vol == null) vol = 1;
	this.volume = vol;
	this.pan = panning;
	this.leftToLeft = 0;
	this.leftToRight = 0;
	this.rightToLeft = 0;
	this.rightToRight = 0;
};
$hxClasses["flash.media.SoundTransform"] = flash.media.SoundTransform;
flash.media.SoundTransform.__name__ = ["flash","media","SoundTransform"];
flash.media.SoundTransform.prototype = {
	__class__: flash.media.SoundTransform
}
flash.net = {}
flash.net.SharedObject = function() {
	flash.events.EventDispatcher.call(this);
};
$hxClasses["flash.net.SharedObject"] = flash.net.SharedObject;
flash.net.SharedObject.__name__ = ["flash","net","SharedObject"];
flash.net.SharedObject.getLocal = function(name,localPath,secure) {
	if(secure == null) secure = false;
	if(localPath == null) localPath = js.Browser.window.location.href;
	var so = new flash.net.SharedObject();
	so.nmeKey = localPath + ":" + name;
	var rawData = null;
	try {
		rawData = flash.net.SharedObject.nmeGetLocalStorage().getItem(so.nmeKey);
	} catch( e ) {
	}
	so.data = { };
	if(rawData != null && rawData != "") {
		var unserializer = new haxe.Unserializer(rawData);
		unserializer.setResolver({ resolveEnum : Type.resolveEnum, resolveClass : flash.net.SharedObject.resolveClass});
		so.data = unserializer.unserialize();
	}
	if(so.data == null) so.data = { };
	return so;
}
flash.net.SharedObject.nmeGetLocalStorage = function() {
	var res = js.Browser.getLocalStorage();
	if(res == null) throw new flash.errors.Error("SharedObject not supported");
	return res;
}
flash.net.SharedObject.resolveClass = function(name) {
	if(name != null) return Type.resolveClass(StringTools.replace(StringTools.replace(name,"jeash.","flash."),"browser.","flash."));
	return null;
}
flash.net.SharedObject.__super__ = flash.events.EventDispatcher;
flash.net.SharedObject.prototype = $extend(flash.events.EventDispatcher.prototype,{
	get_size: function() {
		var d = haxe.Serializer.run(this.data);
		return haxe.io.Bytes.ofString(d).length;
	}
	,setProperty: function(propertyName,value) {
		if(this.data != null) this.data[propertyName] = value;
	}
	,flush: function() {
		var data = haxe.Serializer.run(this.data);
		try {
			flash.net.SharedObject.nmeGetLocalStorage().removeItem(this.nmeKey);
			flash.net.SharedObject.nmeGetLocalStorage().setItem(this.nmeKey,data);
		} catch( e ) {
			return flash.net.SharedObjectFlushStatus.PENDING;
		}
		return flash.net.SharedObjectFlushStatus.FLUSHED;
	}
	,clear: function() {
		this.data = { };
		try {
			flash.net.SharedObject.nmeGetLocalStorage().removeItem(this.nmeKey);
		} catch( e ) {
		}
		this.flush();
	}
	,__class__: flash.net.SharedObject
	,__properties__: {get_size:"get_size"}
});
flash.net.SharedObjectFlushStatus = $hxClasses["flash.net.SharedObjectFlushStatus"] = { __ename__ : ["flash","net","SharedObjectFlushStatus"], __constructs__ : ["FLUSHED","PENDING"] }
flash.net.SharedObjectFlushStatus.FLUSHED = ["FLUSHED",0];
flash.net.SharedObjectFlushStatus.FLUSHED.toString = $estr;
flash.net.SharedObjectFlushStatus.FLUSHED.__enum__ = flash.net.SharedObjectFlushStatus;
flash.net.SharedObjectFlushStatus.PENDING = ["PENDING",1];
flash.net.SharedObjectFlushStatus.PENDING.toString = $estr;
flash.net.SharedObjectFlushStatus.PENDING.__enum__ = flash.net.SharedObjectFlushStatus;
flash.net.URLLoader = function(request) {
	flash.events.EventDispatcher.call(this);
	this.bytesLoaded = 0;
	this.bytesTotal = 0;
	this.set_dataFormat(flash.net.URLLoaderDataFormat.TEXT);
	if(request != null) this.load(request);
};
$hxClasses["flash.net.URLLoader"] = flash.net.URLLoader;
flash.net.URLLoader.__name__ = ["flash","net","URLLoader"];
flash.net.URLLoader.__super__ = flash.events.EventDispatcher;
flash.net.URLLoader.prototype = $extend(flash.events.EventDispatcher.prototype,{
	onStatus: function(status) {
		var evt = new flash.events.HTTPStatusEvent(flash.events.HTTPStatusEvent.HTTP_STATUS,false,false,status);
		evt.currentTarget = this;
		this.dispatchEvent(evt);
	}
	,onSecurityError: function(msg) {
		var evt = new flash.events.SecurityErrorEvent(flash.events.SecurityErrorEvent.SECURITY_ERROR);
		evt.text = msg;
		evt.currentTarget = this;
		this.dispatchEvent(evt);
	}
	,onProgress: function(event) {
		var evt = new flash.events.ProgressEvent(flash.events.ProgressEvent.PROGRESS);
		evt.currentTarget = this;
		evt.bytesLoaded = event.loaded;
		evt.bytesTotal = event.total;
		this.dispatchEvent(evt);
	}
	,onOpen: function() {
		var evt = new flash.events.Event(flash.events.Event.OPEN);
		evt.currentTarget = this;
		this.dispatchEvent(evt);
	}
	,onError: function(msg) {
		var evt = new flash.events.IOErrorEvent(flash.events.IOErrorEvent.IO_ERROR);
		evt.text = msg;
		evt.currentTarget = this;
		this.dispatchEvent(evt);
	}
	,onData: function(_) {
		var content = this.getData();
		var _g = this;
		switch( (_g.dataFormat)[1] ) {
		case 0:
			this.data = flash.utils.ByteArray.nmeOfBuffer(content);
			break;
		default:
			this.data = Std.string(content);
		}
		var evt = new flash.events.Event(flash.events.Event.COMPLETE);
		evt.currentTarget = this;
		this.dispatchEvent(evt);
	}
	,requestUrl: function(url,method,data,requestHeaders) {
		var xmlHttpRequest = new XMLHttpRequest();
		this.registerEvents(xmlHttpRequest);
		var uri = "";
		if(js.Boot.__instanceof(data,flash.utils.ByteArray)) {
			var data1 = data;
			var _g = this;
			switch( (_g.dataFormat)[1] ) {
			case 0:
				uri = data1.data.buffer;
				break;
			default:
				uri = data1.readUTFBytes(data1.length);
			}
		} else if(js.Boot.__instanceof(data,flash.net.URLVariables)) {
			var data1 = data;
			var _g = 0, _g1 = Reflect.fields(data1);
			while(_g < _g1.length) {
				var p = _g1[_g];
				++_g;
				if(uri.length != 0) uri += "&";
				uri += StringTools.urlEncode(p) + "=" + StringTools.urlEncode(Reflect.field(data1,p));
			}
		} else if(data != null) uri = data.toString();
		try {
			if(method == "GET" && uri != null && uri != "") {
				var question = url.split("?").length <= 1;
				xmlHttpRequest.open(method,url + (question?"?":"&") + Std.string(uri),true);
				uri = "";
			} else xmlHttpRequest.open(method,url,true);
		} catch( e ) {
			this.onError(e.toString());
			return;
		}
		var _g = this;
		switch( (_g.dataFormat)[1] ) {
		case 0:
			xmlHttpRequest.responseType = "arraybuffer";
			break;
		default:
		}
		var _g1 = 0;
		while(_g1 < requestHeaders.length) {
			var header = requestHeaders[_g1];
			++_g1;
			xmlHttpRequest.setRequestHeader(header.name,header.value);
		}
		xmlHttpRequest.send(uri);
		this.onOpen();
		this.getData = function() {
			if(xmlHttpRequest.response != null) return xmlHttpRequest.response; else return xmlHttpRequest.responseText;
		};
	}
	,registerEvents: function(subject) {
		var self = this;
		if(typeof XMLHttpRequestProgressEvent != "undefined") subject.addEventListener("progress",$bind(this,this.onProgress),false);
		subject.onreadystatechange = function() {
			if(subject.readyState != 4) return;
			var s = (function($this) {
				var $r;
				try {
					$r = subject.status;
				} catch( e ) {
					$r = null;
				}
				return $r;
			}(this));
			if(s == undefined) s = null;
			if(s != null) self.onStatus(s);
			if(s != null && s >= 200 && s < 400) self.onData(subject.response); else if(s == null) self.onError("Failed to connect or resolve host"); else if(s == 12029) self.onError("Failed to connect to host"); else if(s == 12007) self.onError("Unknown host"); else if(s == 0) {
				self.onError("Unable to make request (may be blocked due to cross-domain permissions)");
				self.onSecurityError("Unable to make request (may be blocked due to cross-domain permissions)");
			} else self.onError("Http Error #" + subject.status);
		};
	}
	,load: function(request) {
		this.requestUrl(request.url,request.method,request.data,request.formatRequestHeaders());
	}
	,getData: function() {
		return null;
	}
	,close: function() {
	}
	,set_dataFormat: function(inputVal) {
		if(inputVal == flash.net.URLLoaderDataFormat.BINARY && !Reflect.hasField(js.Browser.window,"ArrayBuffer")) this.dataFormat = flash.net.URLLoaderDataFormat.TEXT; else this.dataFormat = inputVal;
		return this.dataFormat;
	}
	,__class__: flash.net.URLLoader
	,__properties__: {set_dataFormat:"set_dataFormat"}
});
flash.net.URLLoaderDataFormat = $hxClasses["flash.net.URLLoaderDataFormat"] = { __ename__ : ["flash","net","URLLoaderDataFormat"], __constructs__ : ["BINARY","TEXT","VARIABLES"] }
flash.net.URLLoaderDataFormat.BINARY = ["BINARY",0];
flash.net.URLLoaderDataFormat.BINARY.toString = $estr;
flash.net.URLLoaderDataFormat.BINARY.__enum__ = flash.net.URLLoaderDataFormat;
flash.net.URLLoaderDataFormat.TEXT = ["TEXT",1];
flash.net.URLLoaderDataFormat.TEXT.toString = $estr;
flash.net.URLLoaderDataFormat.TEXT.__enum__ = flash.net.URLLoaderDataFormat;
flash.net.URLLoaderDataFormat.VARIABLES = ["VARIABLES",2];
flash.net.URLLoaderDataFormat.VARIABLES.toString = $estr;
flash.net.URLLoaderDataFormat.VARIABLES.__enum__ = flash.net.URLLoaderDataFormat;
flash.net.URLRequest = function(inURL) {
	if(inURL != null) this.url = inURL;
	this.requestHeaders = [];
	this.method = flash.net.URLRequestMethod.GET;
	this.contentType = null;
};
$hxClasses["flash.net.URLRequest"] = flash.net.URLRequest;
flash.net.URLRequest.__name__ = ["flash","net","URLRequest"];
flash.net.URLRequest.prototype = {
	formatRequestHeaders: function() {
		var res = this.requestHeaders;
		if(res == null) res = [];
		if(this.method == flash.net.URLRequestMethod.GET || this.data == null) return res;
		if(js.Boot.__instanceof(this.data,String) || js.Boot.__instanceof(this.data,flash.utils.ByteArray)) {
			res = res.slice();
			res.push(new flash.net.URLRequestHeader("Content-Type",this.contentType != null?this.contentType:"application/x-www-form-urlencoded"));
		}
		return res;
	}
	,__class__: flash.net.URLRequest
}
flash.net.URLRequestHeader = function(name,value) {
	if(value == null) value = "";
	if(name == null) name = "";
	this.name = name;
	this.value = value;
};
$hxClasses["flash.net.URLRequestHeader"] = flash.net.URLRequestHeader;
flash.net.URLRequestHeader.__name__ = ["flash","net","URLRequestHeader"];
flash.net.URLRequestHeader.prototype = {
	__class__: flash.net.URLRequestHeader
}
flash.net.URLRequestMethod = function() { }
$hxClasses["flash.net.URLRequestMethod"] = flash.net.URLRequestMethod;
flash.net.URLRequestMethod.__name__ = ["flash","net","URLRequestMethod"];
flash.net.URLVariables = function(inEncoded) {
	if(inEncoded != null) this.decode(inEncoded);
};
$hxClasses["flash.net.URLVariables"] = flash.net.URLVariables;
flash.net.URLVariables.__name__ = ["flash","net","URLVariables"];
flash.net.URLVariables.prototype = {
	toString: function() {
		var result = new Array();
		var fields = Reflect.fields(this);
		var _g = 0;
		while(_g < fields.length) {
			var f = fields[_g];
			++_g;
			result.push(StringTools.urlEncode(f) + "=" + StringTools.urlEncode(Reflect.field(this,f)));
		}
		return result.join("&");
	}
	,decode: function(inVars) {
		var fields = Reflect.fields(this);
		var _g = 0;
		while(_g < fields.length) {
			var f = fields[_g];
			++_g;
			Reflect.deleteField(this,f);
		}
		var fields1 = inVars.split(";").join("&").split("&");
		var _g = 0;
		while(_g < fields1.length) {
			var f = fields1[_g];
			++_g;
			var eq = f.indexOf("=");
			if(eq > 0) this[StringTools.urlDecode(HxOverrides.substr(f,0,eq))] = StringTools.urlDecode(HxOverrides.substr(f,eq + 1,null)); else if(eq != 0) this[StringTools.urlDecode(f)] = "";
		}
	}
	,__class__: flash.net.URLVariables
}
flash.system = {}
flash.system.ApplicationDomain = function(parentDomain) {
	if(parentDomain != null) this.parentDomain = parentDomain; else this.parentDomain = flash.system.ApplicationDomain.currentDomain;
};
$hxClasses["flash.system.ApplicationDomain"] = flash.system.ApplicationDomain;
flash.system.ApplicationDomain.__name__ = ["flash","system","ApplicationDomain"];
flash.system.ApplicationDomain.prototype = {
	hasDefinition: function(name) {
		return Type.resolveClass(name) != null;
	}
	,getDefinition: function(name) {
		return Type.resolveClass(name);
	}
	,__class__: flash.system.ApplicationDomain
}
flash.system.LoaderContext = function(checkPolicyFile,applicationDomain,securityDomain) {
	if(checkPolicyFile == null) checkPolicyFile = false;
	this.checkPolicyFile = checkPolicyFile;
	this.securityDomain = securityDomain;
	if(applicationDomain != null) this.applicationDomain = applicationDomain; else this.applicationDomain = flash.system.ApplicationDomain.currentDomain;
};
$hxClasses["flash.system.LoaderContext"] = flash.system.LoaderContext;
flash.system.LoaderContext.__name__ = ["flash","system","LoaderContext"];
flash.system.LoaderContext.prototype = {
	__class__: flash.system.LoaderContext
}
flash.system.SecurityDomain = function() {
};
$hxClasses["flash.system.SecurityDomain"] = flash.system.SecurityDomain;
flash.system.SecurityDomain.__name__ = ["flash","system","SecurityDomain"];
flash.system.SecurityDomain.prototype = {
	__class__: flash.system.SecurityDomain
}
flash.system.System = function() { }
$hxClasses["flash.system.System"] = flash.system.System;
flash.system.System.__name__ = ["flash","system","System"];
flash.system.System.__properties__ = {get_vmVersion:"get_vmVersion",get_totalMemory:"get_totalMemory"}
flash.system.System.exit = function(code) {
	throw "System.exit is currently not supported for HTML5";
}
flash.system.System.gc = function() {
}
flash.system.System.pause = function() {
	throw "System.pause is currently not supported for HTML5";
}
flash.system.System.resume = function() {
	throw "System.resume is currently not supported for HTML5";
}
flash.system.System.setClipboard = function(string) {
	throw "System.setClipboard is currently not supported for HTML5";
}
flash.system.System.get_totalMemory = function() {
	return 0;
}
flash.system.System.get_vmVersion = function() {
	return "nme - tip";
}
flash.text = {}
flash.text.Font = function() {
	this.nmeMetrics = [];
	this.nmeFontScale = 9.0;
	var className = Type.getClassName(Type.getClass(this));
	if(flash.text.Font.nmeFontData == null) {
		flash.text.Font.nmeFontData = [];
		flash.text.Font.nmeFontData["Bitstream_Vera_Sans"] = haxe.Unserializer.run(flash.text.Font.DEFAULT_FONT_DATA);
	}
	if(className == "flash.text.Font") this.set_fontName("Bitstream_Vera_Sans"); else this.set_fontName(className.split(".").pop());
};
$hxClasses["flash.text.Font"] = flash.text.Font;
flash.text.Font.__name__ = ["flash","text","Font"];
flash.text.Font.enumerateFonts = function(enumerateDeviceFonts) {
	if(enumerateDeviceFonts == null) enumerateDeviceFonts = false;
	return flash.text.Font.nmeRegisteredFonts.slice();
}
flash.text.Font.nmeOfResource = function(resourceName,fontName) {
	if(fontName == null) fontName = "";
	var data = haxe.Unserializer.run(haxe.Resource.getString(resourceName));
	if(data == null) {
	} else {
		if(fontName == "") {
			flash.text.Font.nmeFontData[resourceName] = data.hash;
			fontName = data.fontName;
		}
		flash.text.Font.nmeFontData[data.fontName] = data.hash;
	}
	return fontName;
}
flash.text.Font.registerFont = function(font) {
	var instance = js.Boot.__cast(Type.createInstance(font,[]) , flash.text.Font);
	if(instance != null) {
		if(Reflect.hasField(font,"resourceName")) instance.set_fontName(flash.text.Font.nmeOfResource(Reflect.field(font,"resourceName")));
		flash.text.Font.nmeRegisteredFonts.push(instance);
	}
}
flash.text.Font.prototype = {
	set_fontName: function(name) {
		if(name == "_sans" || name == "_serif" || name == "_typewriter") name = "Bitstream_Vera_Sans";
		this.fontName = name;
		if(flash.text.Font.nmeFontData[this.fontName] == null) try {
			flash.text.Font.nmeOfResource(name);
		} catch( e ) {
			this.fontName = "Bitstream_Vera_Sans";
		}
		if(flash.text.Font.nmeFontData[this.fontName] != null) try {
			this.nmeGlyphData = flash.text.Font.nmeFontData[this.fontName];
		} catch( e ) {
			this.fontName = "Bitstream_Vera_Sans";
		}
		return name;
	}
	,nmeSetScale: function(scale) {
		this.nmeFontScale = scale / 1024;
	}
	,nmeRender: function(graphics,inChar,inX,inY,inOutline) {
		var index = 0;
		var glyph = this.nmeGlyphData.get(inChar);
		if(glyph == null) return;
		var commands = glyph.commands;
		var data = glyph.data;
		var _g = 0;
		while(_g < commands.length) {
			var c = commands[_g];
			++_g;
			switch(c) {
			case 1:
				graphics.moveTo(inX + data[index++] * this.nmeFontScale,inY + data[index++] * this.nmeFontScale);
				break;
			case 2:
				graphics.lineTo(inX + data[index++] * this.nmeFontScale,inY + data[index++] * this.nmeFontScale);
				break;
			case 3:
				graphics.curveTo(inX + data[index++] * this.nmeFontScale,inY + data[index++] * this.nmeFontScale,inX + data[index++] * this.nmeFontScale,inY + data[index++] * this.nmeFontScale);
				break;
			}
		}
	}
	,nmeGetAdvance: function(inGlyph,height) {
		var m = this.nmeMetrics[inGlyph];
		if(m == null) {
			var glyph = this.nmeGlyphData.get(inGlyph);
			if(glyph == null) return 0;
			this.nmeMetrics[inGlyph] = m = glyph._width * this.nmeFontScale | 0;
		}
		if(m == null) return 0;
		return m;
	}
	,hasGlyph: function(str) {
		return this.nmeGlyphData.exists(HxOverrides.cca(str,0));
	}
	,__class__: flash.text.Font
	,__properties__: {set_fontName:"set_fontName"}
}
flash.text.FontStyle = $hxClasses["flash.text.FontStyle"] = { __ename__ : ["flash","text","FontStyle"], __constructs__ : ["REGULAR","ITALIC","BOLD_ITALIC","BOLD"] }
flash.text.FontStyle.REGULAR = ["REGULAR",0];
flash.text.FontStyle.REGULAR.toString = $estr;
flash.text.FontStyle.REGULAR.__enum__ = flash.text.FontStyle;
flash.text.FontStyle.ITALIC = ["ITALIC",1];
flash.text.FontStyle.ITALIC.toString = $estr;
flash.text.FontStyle.ITALIC.__enum__ = flash.text.FontStyle;
flash.text.FontStyle.BOLD_ITALIC = ["BOLD_ITALIC",2];
flash.text.FontStyle.BOLD_ITALIC.toString = $estr;
flash.text.FontStyle.BOLD_ITALIC.__enum__ = flash.text.FontStyle;
flash.text.FontStyle.BOLD = ["BOLD",3];
flash.text.FontStyle.BOLD.toString = $estr;
flash.text.FontStyle.BOLD.__enum__ = flash.text.FontStyle;
flash.text.FontType = $hxClasses["flash.text.FontType"] = { __ename__ : ["flash","text","FontType"], __constructs__ : ["EMBEDDED","DEVICE"] }
flash.text.FontType.EMBEDDED = ["EMBEDDED",0];
flash.text.FontType.EMBEDDED.toString = $estr;
flash.text.FontType.EMBEDDED.__enum__ = flash.text.FontType;
flash.text.FontType.DEVICE = ["DEVICE",1];
flash.text.FontType.DEVICE.toString = $estr;
flash.text.FontType.DEVICE.__enum__ = flash.text.FontType;
flash.text.GridFitType = $hxClasses["flash.text.GridFitType"] = { __ename__ : ["flash","text","GridFitType"], __constructs__ : ["NONE","PIXEL","SUBPIXEL"] }
flash.text.GridFitType.NONE = ["NONE",0];
flash.text.GridFitType.NONE.toString = $estr;
flash.text.GridFitType.NONE.__enum__ = flash.text.GridFitType;
flash.text.GridFitType.PIXEL = ["PIXEL",1];
flash.text.GridFitType.PIXEL.toString = $estr;
flash.text.GridFitType.PIXEL.__enum__ = flash.text.GridFitType;
flash.text.GridFitType.SUBPIXEL = ["SUBPIXEL",2];
flash.text.GridFitType.SUBPIXEL.toString = $estr;
flash.text.GridFitType.SUBPIXEL.__enum__ = flash.text.GridFitType;
flash.text.TextField = function() {
	flash.display.InteractiveObject.call(this);
	this.mWidth = 100;
	this.mHeight = 20;
	this.mHTMLMode = false;
	this.multiline = false;
	this.nmeGraphics = new flash.display.Graphics();
	this.mFace = flash.text.TextField.mDefaultFont;
	this.mAlign = flash.text.TextFormatAlign.LEFT;
	this.mParagraphs = new Array();
	this.mSelStart = -1;
	this.mSelEnd = -1;
	this.scrollH = 0;
	this.scrollV = 1;
	this.mType = flash.text.TextFieldType.DYNAMIC;
	this.set_autoSize("NONE");
	this.mTextHeight = 12;
	this.mMaxHeight = this.mTextHeight;
	this.mHTMLText = " ";
	this.mText = " ";
	this.mTextColour = 0;
	this.tabEnabled = false;
	this.mTryFreeType = true;
	this.selectable = true;
	this.mInsertPos = 0;
	this.nmeInputEnabled = false;
	this.mDownChar = 0;
	this.mSelectDrag = -1;
	this.mLineInfo = [];
	this.set_defaultTextFormat(new flash.text.TextFormat());
	this.set_borderColor(0);
	this.set_border(false);
	this.set_backgroundColor(16777215);
	this.set_background(false);
	this.gridFitType = flash.text.GridFitType.PIXEL;
	this.sharpness = 0;
};
$hxClasses["flash.text.TextField"] = flash.text.TextField;
flash.text.TextField.__name__ = ["flash","text","TextField"];
flash.text.TextField.__super__ = flash.display.InteractiveObject;
flash.text.TextField.prototype = $extend(flash.display.InteractiveObject.prototype,{
	set_wordWrap: function(inWordWrap) {
		this.wordWrap = inWordWrap;
		this.Rebuild();
		return this.get_wordWrap();
	}
	,get_wordWrap: function() {
		return this.wordWrap;
	}
	,set_width: function(inValue) {
		if(this.parent != null) this.parent.nmeInvalidateBounds();
		if(this.get__boundsInvalid()) this.validateBounds();
		if(inValue != this.mWidth) {
			this.mWidth = inValue;
			this.Rebuild();
		}
		return this.mWidth;
	}
	,get_width: function() {
		return Math.max(this.mWidth,this.getBounds(this.get_stage()).width);
	}
	,set_type: function(inType) {
		this.mType = inType;
		this.nmeInputEnabled = this.mType == flash.text.TextFieldType.INPUT;
		if(this.mHTMLMode) {
			if(this.nmeInputEnabled) flash.Lib.nmeSetContentEditable(this.nmeGraphics.nmeSurface,true); else flash.Lib.nmeSetContentEditable(this.nmeGraphics.nmeSurface,false);
		} else if(this.nmeInputEnabled) {
			this.set_htmlText(StringTools.replace(this.mText,"\n","<BR />"));
			flash.Lib.nmeSetContentEditable(this.nmeGraphics.nmeSurface,true);
		}
		this.tabEnabled = this.get_type() == flash.text.TextFieldType.INPUT;
		this.Rebuild();
		return inType;
	}
	,get_type: function() {
		return this.mType;
	}
	,get_textHeight: function() {
		return this.mMaxHeight;
	}
	,get_textWidth: function() {
		return this.mMaxWidth;
	}
	,set_textColor: function(inCol) {
		this.mTextColour = inCol;
		this.RebuildText();
		return inCol;
	}
	,get_textColor: function() {
		return this.mTextColour;
	}
	,set_text: function(inText) {
		this.mText = Std.string(inText);
		this.mHTMLMode = false;
		this.RebuildText();
		this._nmeRenderFlags |= 64;
		if(this.parent != null) this.parent._nmeRenderFlags |= 64;
		return this.mText;
	}
	,get_text: function() {
		if(this.mHTMLMode) this.ConvertHTMLToText(false);
		return this.mText;
	}
	,set_scrollV: function(value) {
		return this.scrollV = value;
	}
	,get_scrollV: function() {
		return this.scrollV;
	}
	,set_scrollH: function(value) {
		return this.scrollH = value;
	}
	,get_scrollH: function() {
		return this.scrollH;
	}
	,get_numLines: function() {
		return 0;
	}
	,set_multiline: function(value) {
		return this.multiline = value;
	}
	,get_multiline: function() {
		return this.multiline;
	}
	,get_maxScrollV: function() {
		return 0;
	}
	,get_maxScrollH: function() {
		return 0;
	}
	,set_htmlText: function(inHTMLText) {
		this.mParagraphs = new Array();
		this.mHTMLText = inHTMLText;
		if(!this.mHTMLMode) {
			var domElement = js.Browser.document.createElement("div");
			if(this.background || this.border) {
				domElement.style.width = this.mWidth + "px";
				domElement.style.height = this.mHeight + "px";
			}
			if(this.background) domElement.style.backgroundColor = "#" + StringTools.hex(this.backgroundColor,6);
			if(this.border) domElement.style.border = "1px solid #" + StringTools.hex(this.borderColor,6);
			domElement.style.color = "#" + StringTools.hex(this.mTextColour,6);
			domElement.style.fontFamily = this.mFace;
			domElement.style.fontSize = this.mTextHeight + "px";
			domElement.style.textAlign = Std.string(this.mAlign);
			var wrapper = domElement;
			wrapper.innerHTML = inHTMLText;
			var destination = new flash.display.Graphics(wrapper);
			var nmeSurface = this.nmeGraphics.nmeSurface;
			if(flash.Lib.nmeIsOnStage(nmeSurface)) {
				flash.Lib.nmeAppendSurface(wrapper);
				flash.Lib.nmeCopyStyle(nmeSurface,wrapper);
				flash.Lib.nmeSwapSurface(nmeSurface,wrapper);
				flash.Lib.nmeRemoveSurface(nmeSurface);
			}
			this.nmeGraphics = destination;
			this.nmeGraphics.nmeExtent.width = wrapper.width;
			this.nmeGraphics.nmeExtent.height = wrapper.height;
		} else this.nmeGraphics.nmeSurface.innerHTML = inHTMLText;
		this.mHTMLMode = true;
		this.RebuildText();
		this._nmeRenderFlags |= 64;
		if(this.parent != null) this.parent._nmeRenderFlags |= 64;
		return this.mHTMLText;
	}
	,get_htmlText: function() {
		return this.mHTMLText;
	}
	,set_height: function(inValue) {
		if(this.parent != null) this.parent.nmeInvalidateBounds();
		if(this.get__boundsInvalid()) this.validateBounds();
		if(inValue != this.mHeight) {
			this.mHeight = inValue;
			this.Rebuild();
		}
		return this.mHeight;
	}
	,get_height: function() {
		return Math.max(this.mHeight,this.getBounds(this.get_stage()).height);
	}
	,set_defaultTextFormat: function(inFmt) {
		this.setTextFormat(inFmt);
		this._defaultTextFormat = inFmt;
		return inFmt;
	}
	,get_defaultTextFormat: function() {
		return this._defaultTextFormat;
	}
	,get_caretPos: function() {
		return this.mInsertPos;
	}
	,get_bottomScrollV: function() {
		return 0;
	}
	,set_borderColor: function(inBorderCol) {
		this.borderColor = inBorderCol;
		this.Rebuild();
		return inBorderCol;
	}
	,set_border: function(inBorder) {
		this.border = inBorder;
		this.Rebuild();
		return inBorder;
	}
	,set_backgroundColor: function(inCol) {
		this.backgroundColor = inCol;
		this.Rebuild();
		return inCol;
	}
	,set_background: function(inBack) {
		this.background = inBack;
		this.Rebuild();
		return inBack;
	}
	,set_autoSize: function(inAutoSize) {
		this.autoSize = inAutoSize;
		this.Rebuild();
		return inAutoSize;
	}
	,get_autoSize: function() {
		return this.autoSize;
	}
	,toString: function() {
		return "[TextField name=" + this.name + " id=" + this._nmeId + "]";
	}
	,setTextFormat: function(inFmt,beginIndex,endIndex) {
		if(endIndex == null) endIndex = 0;
		if(beginIndex == null) beginIndex = 0;
		if(inFmt.font != null) this.mFace = inFmt.font;
		if(inFmt.size != null) this.mTextHeight = inFmt.size | 0;
		if(inFmt.align != null) this.mAlign = inFmt.align;
		if(inFmt.color != null) this.mTextColour = inFmt.color;
		this.RebuildText();
		this._nmeRenderFlags |= 64;
		if(this.parent != null) this.parent._nmeRenderFlags |= 64;
		return this.getTextFormat();
	}
	,setSelection: function(beginIndex,endIndex) {
	}
	,RenderRow: function(inRow,inY,inCharIdx,inAlign,inInsert) {
		if(inInsert == null) inInsert = 0;
		var h = 0;
		var w = 0;
		var _g = 0;
		while(_g < inRow.length) {
			var chr = inRow[_g];
			++_g;
			if(chr.fh > h) h = chr.fh;
			w += chr.adv;
		}
		if(w > this.mMaxWidth) this.mMaxWidth = w;
		var full_height = h * 1.2 | 0;
		var align_x = 0;
		var insert_x = 0;
		if(inInsert != null) {
			if(this.autoSize != "NONE") {
				this.scrollH = 0;
				insert_x = inInsert;
			} else {
				insert_x = inInsert - this.scrollH;
				if(insert_x < 0) this.scrollH -= (this.mLimitRenderX * 3 >> 2) - insert_x; else if(insert_x > this.mLimitRenderX) this.scrollH += insert_x - (this.mLimitRenderX * 3 >> 2);
				if(this.scrollH < 0) this.scrollH = 0;
			}
		}
		if(this.autoSize == "NONE" && w <= this.mLimitRenderX) {
			if(inAlign == flash.text.TextFormatAlign.CENTER) align_x = Math.round(this.mWidth) - w >> 1; else if(inAlign == flash.text.TextFormatAlign.RIGHT) align_x = Math.round(this.mWidth) - w;
		}
		var x_list = new Array();
		this.mLineInfo.push({ mY0 : inY, mIndex : inCharIdx - 1, mX : x_list});
		var cache_sel_font = null;
		var cache_normal_font = null;
		var x = align_x - this.scrollH;
		var x0 = x;
		var _g = 0;
		while(_g < inRow.length) {
			var chr = inRow[_g];
			++_g;
			var adv = chr.adv;
			if(x + adv > this.mLimitRenderX) break;
			x_list.push(x);
			if(x >= 0) {
				var font = chr.font;
				if(chr.sel) {
					this.nmeGraphics.lineStyle();
					this.nmeGraphics.beginFill(2105440);
					this.nmeGraphics.drawRect(x,inY,adv,full_height);
					this.nmeGraphics.endFill();
					if(cache_normal_font == chr.font) font = cache_sel_font; else {
						font = flash.text.FontInstance.CreateSolid(chr.font.GetFace(),chr.fh,16777215,1.0);
						cache_sel_font = font;
						cache_normal_font = chr.font;
					}
				}
				font.RenderChar(this.nmeGraphics,chr.chr,x,inY + (h - chr.fh) | 0);
			}
			x += adv;
		}
		x += this.scrollH;
		return full_height;
	}
	,RebuildText: function() {
		this.mParagraphs = [];
		if(!this.mHTMLMode) {
			var font = flash.text.FontInstance.CreateSolid(this.mFace,this.mTextHeight,this.mTextColour,1.0);
			var paras = this.mText.split("\n");
			var _g = 0;
			while(_g < paras.length) {
				var paragraph = paras[_g];
				++_g;
				this.mParagraphs.push({ align : this.mAlign, spans : [{ font : font, text : paragraph + "\n"}]});
			}
		}
		this.Rebuild();
	}
	,Rebuild: function() {
		if(this.mHTMLMode) return;
		this.mLineInfo = [];
		this.nmeGraphics.clear();
		if(this.background) {
			this.nmeGraphics.beginFill(this.backgroundColor);
			this.nmeGraphics.drawRect(0,0,this.get_width(),this.get_height());
			this.nmeGraphics.endFill();
		}
		this.nmeGraphics.lineStyle(this.mTextColour);
		var insert_x = null;
		this.mMaxWidth = 0;
		var wrap = this.mLimitRenderX = this.get_wordWrap() && !this.nmeInputEnabled?this.mWidth | 0:999999;
		var char_idx = 0;
		var h = 0;
		var s0 = this.mSelStart;
		var s1 = this.mSelEnd;
		var _g = 0, _g1 = this.mParagraphs;
		while(_g < _g1.length) {
			var paragraph = _g1[_g];
			++_g;
			var row = [];
			var row_width = 0;
			var last_word_break = 0;
			var last_word_break_width = 0;
			var last_word_char_idx = 0;
			var start_idx = char_idx;
			var tx = 0;
			var _g2 = 0, _g3 = paragraph.spans;
			while(_g2 < _g3.length) {
				var span = _g3[_g2];
				++_g2;
				var text = span.text;
				var font = span.font;
				var fh = font.get_height();
				last_word_break = row.length;
				last_word_break_width = row_width;
				last_word_char_idx = char_idx;
				var _g5 = 0, _g4 = text.length;
				while(_g5 < _g4) {
					var ch = _g5++;
					var g = HxOverrides.cca(text,ch);
					var adv = font.nmeGetAdvance(g);
					if(g == 32) {
						last_word_break = row.length;
						last_word_break_width = tx;
						last_word_char_idx = char_idx;
					}
					if(tx + adv > wrap) {
						if(last_word_break > 0) {
							var row_end = row.splice(last_word_break,row.length - last_word_break);
							h += this.RenderRow(row,h,start_idx,paragraph.align);
							row = row_end;
							tx -= last_word_break_width;
							start_idx = last_word_char_idx;
							last_word_break = 0;
							last_word_break_width = 0;
							last_word_char_idx = 0;
							if(row_end.length > 0 && row_end[0].chr == 32) {
								row_end.shift();
								start_idx++;
							}
						} else {
							h += this.RenderRow(row,h,char_idx,paragraph.align);
							row = [];
							tx = 0;
							start_idx = char_idx;
						}
					}
					row.push({ font : font, chr : g, x : tx, fh : fh, sel : char_idx >= s0 && char_idx < s1, adv : adv});
					tx += adv;
					char_idx++;
				}
			}
			if(row.length > 0) {
				h += this.RenderRow(row,h,start_idx,paragraph.align,insert_x);
				insert_x = null;
			}
		}
		var w = this.mMaxWidth;
		if(h < this.mTextHeight) h = this.mTextHeight;
		this.mMaxHeight = h;
		var _g = this;
		switch(_g.autoSize) {
		case "LEFT":
			break;
		case "RIGHT":
			var x0 = this.get_x() + this.get_width();
			this.set_x(this.mWidth - x0);
			break;
		case "CENTER":
			var x0 = this.get_x() + this.get_width() / 2;
			this.set_x(this.mWidth / 2 - x0);
			break;
		default:
			if(this.get_wordWrap()) this.set_height(h);
		}
		if(this.border) {
			this.nmeGraphics.endFill();
			this.nmeGraphics.lineStyle(1,this.borderColor,1,true);
			this.nmeGraphics.drawRect(.5,.5,this.get_width() - .5,this.get_height() - .5);
		}
	}
	,nmeRender: function(inMask,clipRect) {
		if(!this.nmeCombinedVisible) return;
		if((this._nmeRenderFlags & 4) != 0 || (this._nmeRenderFlags & 8) != 0) this.nmeValidateMatrix();
		if(this.nmeGraphics.nmeRender(inMask,this.nmeFilters,1,1)) {
			this._nmeRenderFlags |= 64;
			if(this.parent != null) this.parent._nmeRenderFlags |= 64;
			this.nmeApplyFilters(this.nmeGraphics.nmeSurface);
			this._nmeRenderFlags |= 32;
		}
		if(!this.mHTMLMode && inMask != null) {
			var m = this.getSurfaceTransform(this.nmeGraphics);
			flash.Lib.nmeDrawToSurface(this.nmeGraphics.nmeSurface,inMask,m,(this.parent != null?this.parent.nmeCombinedAlpha:1) * this.alpha,clipRect,this.gridFitType != flash.text.GridFitType.PIXEL);
		} else {
			if((this._nmeRenderFlags & 32) != 0) {
				var m = this.getSurfaceTransform(this.nmeGraphics);
				flash.Lib.nmeSetSurfaceTransform(this.nmeGraphics.nmeSurface,m);
				this._nmeRenderFlags &= -33;
			}
			flash.Lib.nmeSetSurfaceOpacity(this.nmeGraphics.nmeSurface,(this.parent != null?this.parent.nmeCombinedAlpha:1) * this.alpha);
		}
	}
	,nmeGetObjectUnderPoint: function(point) {
		if(!this.get_visible()) return null; else if(this.mText.length > 1) {
			var local = this.globalToLocal(point);
			if(local.x < 0 || local.y < 0 || local.x > this.mMaxWidth || local.y > this.mMaxHeight) return null; else return this;
		} else return flash.display.InteractiveObject.prototype.nmeGetObjectUnderPoint.call(this,point);
	}
	,nmeGetGraphics: function() {
		return this.nmeGraphics;
	}
	,getTextFormat: function(beginIndex,endIndex) {
		if(endIndex == null) endIndex = 0;
		if(beginIndex == null) beginIndex = 0;
		return new flash.text.TextFormat(this.mFace,this.mTextHeight,this.mTextColour);
	}
	,getLineIndexAtPoint: function(inX,inY) {
		if(this.mLineInfo.length < 1) return -1;
		if(inY <= 0) return 0;
		var _g1 = 0, _g = this.mLineInfo.length;
		while(_g1 < _g) {
			var l = _g1++;
			if(this.mLineInfo[l].mY0 > inY) return l == 0?0:l - 1;
		}
		return this.mLineInfo.length - 1;
	}
	,getCharIndexAtPoint: function(inX,inY) {
		var li = this.getLineIndexAtPoint(inX,inY);
		if(li < 0) return -1;
		var line = this.mLineInfo[li];
		var idx = line.mIndex;
		var _g = 0, _g1 = line.mX;
		while(_g < _g1.length) {
			var x = _g1[_g];
			++_g;
			if(x > inX) return idx;
			idx++;
		}
		return idx;
	}
	,getCharBoundaries: function(a) {
		return null;
	}
	,DecodeColour: function(col) {
		return Std.parseInt("0x" + HxOverrides.substr(col,1,null));
	}
	,ConvertHTMLToText: function(inUnSetHTML) {
		this.mText = "";
		var _g = 0, _g1 = this.mParagraphs;
		while(_g < _g1.length) {
			var paragraph = _g1[_g];
			++_g;
			var _g2 = 0, _g3 = paragraph.spans;
			while(_g2 < _g3.length) {
				var span = _g3[_g2];
				++_g2;
				this.mText += span.text;
			}
		}
		if(inUnSetHTML) {
			this.mHTMLMode = false;
			this.RebuildText();
		}
	}
	,appendText: function(newText) {
		var _g = this;
		_g.set_text(_g.get_text() + newText);
	}
	,__class__: flash.text.TextField
	,__properties__: $extend(flash.display.InteractiveObject.prototype.__properties__,{set_autoSize:"set_autoSize",set_background:"set_background",set_backgroundColor:"set_backgroundColor",set_border:"set_border",set_borderColor:"set_borderColor",get_bottomScrollV:"get_bottomScrollV",get_caretPos:"get_caretPos",set_defaultTextFormat:"set_defaultTextFormat",get_defaultTextFormat:"get_defaultTextFormat",set_htmlText:"set_htmlText",get_htmlText:"get_htmlText",get_maxScrollH:"get_maxScrollH",get_maxScrollV:"get_maxScrollV",get_numLines:"get_numLines",set_text:"set_text",get_text:"get_text",set_textColor:"set_textColor",get_textColor:"get_textColor",get_textHeight:"get_textHeight",get_textWidth:"get_textWidth",set_type:"set_type",get_type:"get_type",set_wordWrap:"set_wordWrap",get_wordWrap:"get_wordWrap"})
});
flash.text.FontInstanceMode = $hxClasses["flash.text.FontInstanceMode"] = { __ename__ : ["flash","text","FontInstanceMode"], __constructs__ : ["fimSolid"] }
flash.text.FontInstanceMode.fimSolid = ["fimSolid",0];
flash.text.FontInstanceMode.fimSolid.toString = $estr;
flash.text.FontInstanceMode.fimSolid.__enum__ = flash.text.FontInstanceMode;
flash.text.FontInstance = function(inFont,inHeight) {
	this.mFont = inFont;
	this.mHeight = inHeight;
	this.mTryFreeType = true;
	this.mGlyphs = [];
	this.mCacheAsBitmap = false;
};
$hxClasses["flash.text.FontInstance"] = flash.text.FontInstance;
flash.text.FontInstance.__name__ = ["flash","text","FontInstance"];
flash.text.FontInstance.CreateSolid = function(inFace,inHeight,inColour,inAlpha) {
	var id = "SOLID:" + inFace + ":" + inHeight + ":" + inColour + ":" + inAlpha;
	var f = flash.text.FontInstance.mSolidFonts.get(id);
	if(f != null) return f;
	var font = new flash.text.Font();
	font.nmeSetScale(inHeight);
	font.set_fontName(inFace);
	if(font == null) return null;
	f = new flash.text.FontInstance(font,inHeight);
	f.SetSolid(inColour,inAlpha);
	flash.text.FontInstance.mSolidFonts.set(id,f);
	return f;
}
flash.text.FontInstance.prototype = {
	get_height: function() {
		return this.mHeight;
	}
	,toString: function() {
		return "FontInstance:" + Std.string(this.mFont) + ":" + this.mColour + "(" + this.mGlyphs.length + ")";
	}
	,RenderChar: function(inGraphics,inGlyph,inX,inY) {
		inGraphics.nmeClearLine();
		inGraphics.beginFill(this.mColour,this.mAlpha);
		this.mFont.nmeRender(inGraphics,inGlyph,inX,inY,this.mTryFreeType);
		inGraphics.endFill();
	}
	,SetSolid: function(inCol,inAlpha) {
		this.mColour = inCol;
		this.mAlpha = inAlpha;
		this.mMode = flash.text.FontInstanceMode.fimSolid;
	}
	,nmeGetAdvance: function(inChar) {
		if(this.mFont == null) return 0;
		return this.mFont.nmeGetAdvance(inChar,this.mHeight);
	}
	,GetFace: function() {
		return this.mFont.fontName;
	}
	,__class__: flash.text.FontInstance
	,__properties__: {get_height:"get_height"}
}
flash.text.TextFieldAutoSize = function() {
};
$hxClasses["flash.text.TextFieldAutoSize"] = flash.text.TextFieldAutoSize;
flash.text.TextFieldAutoSize.__name__ = ["flash","text","TextFieldAutoSize"];
flash.text.TextFieldAutoSize.prototype = {
	__class__: flash.text.TextFieldAutoSize
}
flash.text.TextFieldType = function() {
};
$hxClasses["flash.text.TextFieldType"] = flash.text.TextFieldType;
flash.text.TextFieldType.__name__ = ["flash","text","TextFieldType"];
flash.text.TextFieldType.prototype = {
	__class__: flash.text.TextFieldType
}
flash.text.TextFormat = function(in_font,in_size,in_color,in_bold,in_italic,in_underline,in_url,in_target,in_align,in_leftMargin,in_rightMargin,in_indent,in_leading) {
	this.font = in_font;
	this.size = in_size;
	this.color = in_color;
	this.bold = in_bold;
	this.italic = in_italic;
	this.underline = in_underline;
	this.url = in_url;
	this.target = in_target;
	this.align = in_align;
	this.leftMargin = in_leftMargin;
	this.rightMargin = in_rightMargin;
	this.indent = in_indent;
	this.leading = in_leading;
};
$hxClasses["flash.text.TextFormat"] = flash.text.TextFormat;
flash.text.TextFormat.__name__ = ["flash","text","TextFormat"];
flash.text.TextFormat.prototype = {
	clone: function() {
		var newFormat = new flash.text.TextFormat(this.font,this.size,this.color,this.bold,this.italic,this.underline,this.url,this.target);
		newFormat.align = this.align;
		newFormat.leftMargin = this.leftMargin;
		newFormat.rightMargin = this.rightMargin;
		newFormat.indent = this.indent;
		newFormat.leading = this.leading;
		newFormat.blockIndent = this.blockIndent;
		newFormat.bullet = this.bullet;
		newFormat.display = this.display;
		newFormat.kerning = this.kerning;
		newFormat.letterSpacing = this.letterSpacing;
		newFormat.tabStops = this.tabStops;
		return newFormat;
	}
	,__class__: flash.text.TextFormat
}
flash.text.TextFormatAlign = $hxClasses["flash.text.TextFormatAlign"] = { __ename__ : ["flash","text","TextFormatAlign"], __constructs__ : ["LEFT","RIGHT","JUSTIFY","CENTER"] }
flash.text.TextFormatAlign.LEFT = ["LEFT",0];
flash.text.TextFormatAlign.LEFT.toString = $estr;
flash.text.TextFormatAlign.LEFT.__enum__ = flash.text.TextFormatAlign;
flash.text.TextFormatAlign.RIGHT = ["RIGHT",1];
flash.text.TextFormatAlign.RIGHT.toString = $estr;
flash.text.TextFormatAlign.RIGHT.__enum__ = flash.text.TextFormatAlign;
flash.text.TextFormatAlign.JUSTIFY = ["JUSTIFY",2];
flash.text.TextFormatAlign.JUSTIFY.toString = $estr;
flash.text.TextFormatAlign.JUSTIFY.__enum__ = flash.text.TextFormatAlign;
flash.text.TextFormatAlign.CENTER = ["CENTER",3];
flash.text.TextFormatAlign.CENTER.toString = $estr;
flash.text.TextFormatAlign.CENTER.__enum__ = flash.text.TextFormatAlign;
flash.ui = {}
flash.ui.Keyboard = function() { }
$hxClasses["flash.ui.Keyboard"] = flash.ui.Keyboard;
flash.ui.Keyboard.__name__ = ["flash","ui","Keyboard"];
flash.ui.Keyboard.isAccessible = function() {
	return false;
}
flash.ui.Keyboard.nmeConvertMozillaCode = function(code) {
	switch(code) {
	case 8:
		return 8;
	case 9:
		return 9;
	case 13:
		return 13;
	case 14:
		return 13;
	case 16:
		return 16;
	case 17:
		return 17;
	case 20:
		return 18;
	case 27:
		return 27;
	case 32:
		return 32;
	case 33:
		return 33;
	case 34:
		return 34;
	case 35:
		return 35;
	case 36:
		return 36;
	case 37:
		return 37;
	case 39:
		return 39;
	case 38:
		return 38;
	case 40:
		return 40;
	case 45:
		return 45;
	case 46:
		return 46;
	case 144:
		return 144;
	default:
		return code;
	}
}
flash.ui.Keyboard.nmeConvertWebkitCode = function(code) {
	var _g = code.toLowerCase();
	switch(_g) {
	case "backspace":
		return 8;
	case "tab":
		return 9;
	case "enter":
		return 13;
	case "shift":
		return 16;
	case "control":
		return 17;
	case "capslock":
		return 18;
	case "escape":
		return 27;
	case "space":
		return 32;
	case "pageup":
		return 33;
	case "pagedown":
		return 34;
	case "end":
		return 35;
	case "home":
		return 36;
	case "left":
		return 37;
	case "right":
		return 39;
	case "up":
		return 38;
	case "down":
		return 40;
	case "insert":
		return 45;
	case "delete":
		return 46;
	case "numlock":
		return 144;
	case "break":
		return 19;
	}
	if(code.indexOf("U+") == 0) return Std.parseInt("0x" + HxOverrides.substr(code,3,null));
	throw "Unrecognized key code: " + code;
	return 0;
}
flash.ui.Mouse = function() {
};
$hxClasses["flash.ui.Mouse"] = flash.ui.Mouse;
flash.ui.Mouse.__name__ = ["flash","ui","Mouse"];
flash.ui.Mouse.hide = function() {
}
flash.ui.Mouse.show = function() {
}
flash.ui.Mouse.prototype = {
	__class__: flash.ui.Mouse
}
flash.ui.Multitouch = function() { }
$hxClasses["flash.ui.Multitouch"] = flash.ui.Multitouch;
flash.ui.Multitouch.__name__ = ["flash","ui","Multitouch"];
flash.ui.Multitouch.__properties__ = {get_supportsTouchEvents:"get_supportsTouchEvents",set_inputMode:"set_inputMode",get_inputMode:"get_inputMode"}
flash.ui.Multitouch.get_inputMode = function() {
	return flash.ui.MultitouchInputMode.TOUCH_POINT;
}
flash.ui.Multitouch.set_inputMode = function(inMode) {
	if(inMode == flash.ui.MultitouchInputMode.GESTURE) return flash.ui.Multitouch.get_inputMode();
	return inMode;
}
flash.ui.Multitouch.get_supportsTouchEvents = function() {
	var supported = Reflect.hasField(js.Browser.window,"ontouchstart");
	return supported;
}
flash.ui.MultitouchInputMode = $hxClasses["flash.ui.MultitouchInputMode"] = { __ename__ : ["flash","ui","MultitouchInputMode"], __constructs__ : ["NONE","TOUCH_POINT","GESTURE"] }
flash.ui.MultitouchInputMode.NONE = ["NONE",0];
flash.ui.MultitouchInputMode.NONE.toString = $estr;
flash.ui.MultitouchInputMode.NONE.__enum__ = flash.ui.MultitouchInputMode;
flash.ui.MultitouchInputMode.TOUCH_POINT = ["TOUCH_POINT",1];
flash.ui.MultitouchInputMode.TOUCH_POINT.toString = $estr;
flash.ui.MultitouchInputMode.TOUCH_POINT.__enum__ = flash.ui.MultitouchInputMode;
flash.ui.MultitouchInputMode.GESTURE = ["GESTURE",2];
flash.ui.MultitouchInputMode.GESTURE.toString = $estr;
flash.ui.MultitouchInputMode.GESTURE.__enum__ = flash.ui.MultitouchInputMode;
flash.utils = {}
flash.utils.ByteArray = function() {
	this.littleEndian = false;
	this.allocated = 0;
	this.position = 0;
	this.length = 0;
	this._nmeResizeBuffer(this.allocated);
};
$hxClasses["flash.utils.ByteArray"] = flash.utils.ByteArray;
flash.utils.ByteArray.__name__ = ["flash","utils","ByteArray"];
flash.utils.ByteArray.fromBytes = function(inBytes) {
	var result = new flash.utils.ByteArray();
	result.byteView = new Uint8Array(inBytes.b);
	result.set_length(result.byteView.length);
	result.allocated = result.length;
	return result;
}
flash.utils.ByteArray.nmeOfBuffer = function(buffer) {
	var bytes = new flash.utils.ByteArray();
	bytes.set_length(bytes.allocated = buffer.byteLength);
	bytes.data = new DataView(buffer);
	bytes.byteView = new Uint8Array(buffer);
	return bytes;
}
flash.utils.ByteArray.prototype = {
	set_length: function(value) {
		if(this.allocated < value) this._nmeResizeBuffer(this.allocated = Math.max(value,this.allocated * 2) | 0); else if(this.allocated > value) this._nmeResizeBuffer(this.allocated = value);
		this.length = value;
		return value;
	}
	,set_endian: function(endian) {
		this.littleEndian = endian == "littleEndian";
		return endian;
	}
	,get_endian: function() {
		return this.littleEndian?"littleEndian":"bigEndian";
	}
	,get_bytesAvailable: function() {
		return this.length - this.position;
	}
	,writeUTFBytes: function(value) {
		var _g1 = 0, _g = value.length;
		while(_g1 < _g) {
			var i = _g1++;
			var c = value.charCodeAt(i);
			if(c <= 127) this.writeByte(c); else if(c <= 2047) {
				this.writeByte(192 | c >> 6);
				this.writeByte(128 | c & 63);
			} else if(c <= 65535) {
				this.writeByte(224 | c >> 12);
				this.writeByte(128 | c >> 6 & 63);
				this.writeByte(128 | c & 63);
			} else {
				this.writeByte(240 | c >> 18);
				this.writeByte(128 | c >> 12 & 63);
				this.writeByte(128 | c >> 6 & 63);
				this.writeByte(128 | c & 63);
			}
		}
	}
	,writeUTF: function(value) {
		this.writeUnsignedShort(this._getUTFBytesCount(value));
		this.writeUTFBytes(value);
	}
	,writeUnsignedShort: function(value) {
		var lengthToEnsure = this.position + 2;
		if(this.length < lengthToEnsure) {
			if(this.allocated < lengthToEnsure) this._nmeResizeBuffer(this.allocated = Math.max(lengthToEnsure,this.allocated * 2) | 0); else if(this.allocated > lengthToEnsure) this._nmeResizeBuffer(this.allocated = lengthToEnsure);
			this.length = lengthToEnsure;
			lengthToEnsure;
		}
		this.data.setUint16(this.position,value,this.littleEndian);
		this.position += 2;
	}
	,writeUnsignedInt: function(value) {
		var lengthToEnsure = this.position + 4;
		if(this.length < lengthToEnsure) {
			if(this.allocated < lengthToEnsure) this._nmeResizeBuffer(this.allocated = Math.max(lengthToEnsure,this.allocated * 2) | 0); else if(this.allocated > lengthToEnsure) this._nmeResizeBuffer(this.allocated = lengthToEnsure);
			this.length = lengthToEnsure;
			lengthToEnsure;
		}
		this.data.setUint32(this.position,value,this.littleEndian);
		this.position += 4;
	}
	,writeShort: function(value) {
		var lengthToEnsure = this.position + 2;
		if(this.length < lengthToEnsure) {
			if(this.allocated < lengthToEnsure) this._nmeResizeBuffer(this.allocated = Math.max(lengthToEnsure,this.allocated * 2) | 0); else if(this.allocated > lengthToEnsure) this._nmeResizeBuffer(this.allocated = lengthToEnsure);
			this.length = lengthToEnsure;
			lengthToEnsure;
		}
		this.data.setInt16(this.position,value,this.littleEndian);
		this.position += 2;
	}
	,writeInt: function(value) {
		var lengthToEnsure = this.position + 4;
		if(this.length < lengthToEnsure) {
			if(this.allocated < lengthToEnsure) this._nmeResizeBuffer(this.allocated = Math.max(lengthToEnsure,this.allocated * 2) | 0); else if(this.allocated > lengthToEnsure) this._nmeResizeBuffer(this.allocated = lengthToEnsure);
			this.length = lengthToEnsure;
			lengthToEnsure;
		}
		this.data.setInt32(this.position,value,this.littleEndian);
		this.position += 4;
	}
	,writeFloat: function(x) {
		var lengthToEnsure = this.position + 4;
		if(this.length < lengthToEnsure) {
			if(this.allocated < lengthToEnsure) this._nmeResizeBuffer(this.allocated = Math.max(lengthToEnsure,this.allocated * 2) | 0); else if(this.allocated > lengthToEnsure) this._nmeResizeBuffer(this.allocated = lengthToEnsure);
			this.length = lengthToEnsure;
			lengthToEnsure;
		}
		this.data.setFloat32(this.position,x,this.littleEndian);
		this.position += 4;
	}
	,writeDouble: function(x) {
		var lengthToEnsure = this.position + 8;
		if(this.length < lengthToEnsure) {
			if(this.allocated < lengthToEnsure) this._nmeResizeBuffer(this.allocated = Math.max(lengthToEnsure,this.allocated * 2) | 0); else if(this.allocated > lengthToEnsure) this._nmeResizeBuffer(this.allocated = lengthToEnsure);
			this.length = lengthToEnsure;
			lengthToEnsure;
		}
		this.data.setFloat64(this.position,x,this.littleEndian);
		this.position += 8;
	}
	,writeBytes: function(bytes,offset,length) {
		if(offset < 0 || length < 0) throw new flash.errors.IOError("Write error - Out of bounds");
		var lengthToEnsure = this.position + length;
		if(this.length < lengthToEnsure) {
			if(this.allocated < lengthToEnsure) this._nmeResizeBuffer(this.allocated = Math.max(lengthToEnsure,this.allocated * 2) | 0); else if(this.allocated > lengthToEnsure) this._nmeResizeBuffer(this.allocated = lengthToEnsure);
			this.length = lengthToEnsure;
			lengthToEnsure;
		}
		this.byteView.set(bytes.byteView.subarray(offset,offset + length),this.position);
		this.position += length;
	}
	,writeByte: function(value) {
		var lengthToEnsure = this.position + 1;
		if(this.length < lengthToEnsure) {
			if(this.allocated < lengthToEnsure) this._nmeResizeBuffer(this.allocated = Math.max(lengthToEnsure,this.allocated * 2) | 0); else if(this.allocated > lengthToEnsure) this._nmeResizeBuffer(this.allocated = lengthToEnsure);
			this.length = lengthToEnsure;
			lengthToEnsure;
		}
		var data = this.data;
		data.setInt8(this.position,value);
		this.position += 1;
	}
	,writeBoolean: function(value) {
		this.writeByte(value?1:0);
	}
	,toString: function() {
		var cachePosition = this.position;
		this.position = 0;
		var value = this.readUTFBytes(this.length);
		this.position = cachePosition;
		return value;
	}
	,readUTFBytes: function(len) {
		var value = "";
		var max = this.position + len;
		while(this.position < max) {
			var data = this.data;
			var c = data.getUint8(this.position++);
			if(c < 128) {
				if(c == 0) break;
				value += String.fromCharCode(c);
			} else if(c < 224) value += String.fromCharCode((c & 63) << 6 | data.getUint8(this.position++) & 127); else if(c < 240) {
				var c2 = data.getUint8(this.position++);
				value += String.fromCharCode((c & 31) << 12 | (c2 & 127) << 6 | data.getUint8(this.position++) & 127);
			} else {
				var c2 = data.getUint8(this.position++);
				var c3 = data.getUint8(this.position++);
				value += String.fromCharCode((c & 15) << 18 | (c2 & 127) << 12 | c3 << 6 & 127 | data.getUint8(this.position++) & 127);
			}
		}
		return value;
	}
	,readUTF: function() {
		var bytesCount = this.readUnsignedShort();
		return this.readUTFBytes(bytesCount);
	}
	,readUnsignedShort: function() {
		var uShort = this.data.getUint16(this.position,this.littleEndian);
		this.position += 2;
		return uShort;
	}
	,readUnsignedInt: function() {
		var uInt = this.data.getUint32(this.position,this.littleEndian);
		this.position += 4;
		return uInt;
	}
	,readUnsignedByte: function() {
		var data = this.data;
		return data.getUint8(this.position++);
	}
	,readShort: function() {
		var $short = this.data.getInt16(this.position,this.littleEndian);
		this.position += 2;
		return $short;
	}
	,readInt: function() {
		var $int = this.data.getInt32(this.position,this.littleEndian);
		this.position += 4;
		return $int;
	}
	,readFullBytes: function(bytes,pos,len) {
		if(this.length < len) {
			if(this.allocated < len) this._nmeResizeBuffer(this.allocated = Math.max(len,this.allocated * 2) | 0); else if(this.allocated > len) this._nmeResizeBuffer(this.allocated = len);
			this.length = len;
			len;
		}
		var _g1 = pos, _g = pos + len;
		while(_g1 < _g) {
			var i = _g1++;
			var data = this.data;
			data.setInt8(this.position++,bytes.b[i]);
		}
	}
	,readFloat: function() {
		var $float = this.data.getFloat32(this.position,this.littleEndian);
		this.position += 4;
		return $float;
	}
	,readDouble: function() {
		var $double = this.data.getFloat64(this.position,this.littleEndian);
		this.position += 8;
		return $double;
	}
	,readBytes: function(bytes,offset,length) {
		if(offset < 0 || length < 0) throw new flash.errors.IOError("Read error - Out of bounds");
		if(offset == null) offset = 0;
		if(length == null) length = this.length;
		var lengthToEnsure = offset + length;
		if(bytes.length < lengthToEnsure) {
			if(bytes.allocated < lengthToEnsure) bytes._nmeResizeBuffer(bytes.allocated = Math.max(lengthToEnsure,bytes.allocated * 2) | 0); else if(bytes.allocated > lengthToEnsure) bytes._nmeResizeBuffer(bytes.allocated = lengthToEnsure);
			bytes.length = lengthToEnsure;
			lengthToEnsure;
		}
		bytes.byteView.set(this.byteView.subarray(this.position,this.position + length),offset);
		bytes.position = offset;
		this.position += length;
		if(bytes.position + length > bytes.length) bytes.set_length(bytes.position + length);
	}
	,readByte: function() {
		var data = this.data;
		return data.getUint8(this.position++);
	}
	,readBoolean: function() {
		return this.readByte() != 0;
	}
	,nmeSet: function(pos,v) {
		var data = this.data;
		data.setUint8(pos,v);
	}
	,nmeGetBuffer: function() {
		return this.data.buffer;
	}
	,nmeGet: function(pos) {
		var data = this.data;
		return data.getUint8(pos);
	}
	,nmeFromBytes: function(inBytes) {
		this.byteView = new Uint8Array(inBytes.b);
		this.set_length(this.byteView.length);
		this.allocated = this.length;
	}
	,clear: function() {
		if(this.allocated < 0) this._nmeResizeBuffer(this.allocated = Math.max(0,this.allocated * 2) | 0); else if(this.allocated > 0) this._nmeResizeBuffer(this.allocated = 0);
		this.length = 0;
		0;
	}
	,_nmeResizeBuffer: function(len) {
		var oldByteView = this.byteView;
		var newByteView = new Uint8Array(len);
		if(oldByteView != null) {
			if(oldByteView.length <= len) newByteView.set(oldByteView); else newByteView.set(oldByteView.subarray(0,len));
		}
		this.byteView = newByteView;
		this.data = new DataView(newByteView.buffer);
	}
	,_getUTFBytesCount: function(value) {
		var count = 0;
		var _g1 = 0, _g = value.length;
		while(_g1 < _g) {
			var i = _g1++;
			var c = value.charCodeAt(i);
			if(c <= 127) count += 1; else if(c <= 2047) count += 2; else if(c <= 65535) count += 3; else count += 4;
		}
		return count;
	}
	,__set: function(pos,v) {
		this.data.setUint8(pos,v);
	}
	,__get: function(pos) {
		return this.data.getUint8(pos);
	}
	,__class__: flash.utils.ByteArray
	,__properties__: {get_bytesAvailable:"get_bytesAvailable",set_endian:"set_endian",get_endian:"get_endian",set_length:"set_length"}
}
flash.utils.Endian = function() { }
$hxClasses["flash.utils.Endian"] = flash.utils.Endian;
flash.utils.Endian.__name__ = ["flash","utils","Endian"];
flash.utils.Uuid = function() { }
$hxClasses["flash.utils.Uuid"] = flash.utils.Uuid;
flash.utils.Uuid.__name__ = ["flash","utils","Uuid"];
flash.utils.Uuid.random = function(size) {
	if(size == null) size = 32;
	var nchars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".length;
	var uid = new StringBuf();
	var _g = 0;
	while(_g < size) {
		var i = _g++;
		uid.b += Std.string("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.random() * nchars | 0));
	}
	return uid.b;
}
flash.utils.Uuid.uuid = function() {
	return flash.utils.Uuid.random(8) + "-" + flash.utils.Uuid.random(4) + "-" + flash.utils.Uuid.random(4) + "-" + flash.utils.Uuid.random(4) + "-" + flash.utils.Uuid.random(12);
}
haxe.StackItem = $hxClasses["haxe.StackItem"] = { __ename__ : ["haxe","StackItem"], __constructs__ : ["CFunction","Module","FilePos","Method","Lambda"] }
haxe.StackItem.CFunction = ["CFunction",0];
haxe.StackItem.CFunction.toString = $estr;
haxe.StackItem.CFunction.__enum__ = haxe.StackItem;
haxe.StackItem.Module = function(m) { var $x = ["Module",1,m]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; }
haxe.StackItem.FilePos = function(s,file,line) { var $x = ["FilePos",2,s,file,line]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; }
haxe.StackItem.Method = function(classname,method) { var $x = ["Method",3,classname,method]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; }
haxe.StackItem.Lambda = function(v) { var $x = ["Lambda",4,v]; $x.__enum__ = haxe.StackItem; $x.toString = $estr; return $x; }
haxe.CallStack = function() { }
$hxClasses["haxe.CallStack"] = haxe.CallStack;
haxe.CallStack.__name__ = ["haxe","CallStack"];
haxe.CallStack.exceptionStack = function() {
	return [];
}
haxe.CallStack.toString = function(stack) {
	var b = new StringBuf();
	var _g = 0;
	while(_g < stack.length) {
		var s = stack[_g];
		++_g;
		b.b += "\nCalled from ";
		haxe.CallStack.itemToString(b,s);
	}
	return b.b;
}
haxe.CallStack.itemToString = function(b,s) {
	var $e = (s);
	switch( $e[1] ) {
	case 0:
		b.b += "a C function";
		break;
	case 1:
		var m = $e[2];
		b.b += "module ";
		b.b += Std.string(m);
		break;
	case 2:
		var line = $e[4], file = $e[3], s1 = $e[2];
		if(s1 != null) {
			haxe.CallStack.itemToString(b,s1);
			b.b += " (";
		}
		b.b += Std.string(file);
		b.b += " line ";
		b.b += Std.string(line);
		if(s1 != null) b.b += ")";
		break;
	case 3:
		var meth = $e[3], cname = $e[2];
		b.b += Std.string(cname);
		b.b += ".";
		b.b += Std.string(meth);
		break;
	case 4:
		var n = $e[2];
		b.b += "local function #";
		b.b += Std.string(n);
		break;
	}
}
haxe.Json = function() {
};
$hxClasses["haxe.Json"] = haxe.Json;
haxe.Json.__name__ = ["haxe","Json"];
haxe.Json.parse = function(text) {
	return new haxe.Json().doParse(text);
}
haxe.Json.prototype = {
	parseNumber: function(c) {
		var start = this.pos - 1;
		var minus = c == 45, digit = !minus, zero = c == 48;
		var point = false, e = false, pm = false, end = false;
		while(true) {
			c = this.str.charCodeAt(this.pos++);
			switch(c) {
			case 48:
				if(zero && !point) this.invalidNumber(start);
				if(minus) {
					minus = false;
					zero = true;
				}
				digit = true;
				break;
			case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:
				if(zero && !point) this.invalidNumber(start);
				if(minus) minus = false;
				digit = true;
				zero = false;
				break;
			case 46:
				if(minus || point) this.invalidNumber(start);
				digit = false;
				point = true;
				break;
			case 101:case 69:
				if(minus || zero || e) this.invalidNumber(start);
				digit = false;
				e = true;
				break;
			case 43:case 45:
				if(!e || pm) this.invalidNumber(start);
				digit = false;
				pm = true;
				break;
			default:
				if(!digit) this.invalidNumber(start);
				this.pos--;
				end = true;
			}
			if(end) break;
		}
		var f = Std.parseFloat(HxOverrides.substr(this.str,start,this.pos - start));
		var i = f | 0;
		return i == f?i:f;
	}
	,invalidNumber: function(start) {
		throw "Invalid number at position " + start + ": " + HxOverrides.substr(this.str,start,this.pos - start);
	}
	,parseString: function() {
		var start = this.pos;
		var buf = new StringBuf();
		while(true) {
			var c = this.str.charCodeAt(this.pos++);
			if(c == 34) break;
			if(c == 92) {
				buf.addSub(this.str,start,this.pos - start - 1);
				c = this.str.charCodeAt(this.pos++);
				switch(c) {
				case 114:
					buf.b += "\r";
					break;
				case 110:
					buf.b += "\n";
					break;
				case 116:
					buf.b += "\t";
					break;
				case 98:
					buf.b += "";
					break;
				case 102:
					buf.b += "";
					break;
				case 47:case 92:case 34:
					buf.b += String.fromCharCode(c);
					break;
				case 117:
					var uc = Std.parseInt("0x" + HxOverrides.substr(this.str,this.pos,4));
					this.pos += 4;
					buf.b += String.fromCharCode(uc);
					break;
				default:
					throw "Invalid escape sequence \\" + String.fromCharCode(c) + " at position " + (this.pos - 1);
				}
				start = this.pos;
			} else if(c != c) throw "Unclosed string";
		}
		buf.addSub(this.str,start,this.pos - start - 1);
		return buf.b;
	}
	,parseRec: function() {
		while(true) {
			var c = this.str.charCodeAt(this.pos++);
			switch(c) {
			case 32:case 13:case 10:case 9:
				break;
			case 123:
				var obj = { }, field = null, comma = null;
				while(true) {
					var c1 = this.str.charCodeAt(this.pos++);
					switch(c1) {
					case 32:case 13:case 10:case 9:
						break;
					case 125:
						if(field != null || comma == false) this.invalidChar();
						return obj;
					case 58:
						if(field == null) this.invalidChar();
						obj[field] = this.parseRec();
						field = null;
						comma = true;
						break;
					case 44:
						if(comma) comma = false; else this.invalidChar();
						break;
					case 34:
						if(comma) this.invalidChar();
						field = this.parseString();
						break;
					default:
						this.invalidChar();
					}
				}
				break;
			case 91:
				var arr = [], comma = null;
				while(true) {
					var c1 = this.str.charCodeAt(this.pos++);
					switch(c1) {
					case 32:case 13:case 10:case 9:
						break;
					case 93:
						if(comma == false) this.invalidChar();
						return arr;
					case 44:
						if(comma) comma = false; else this.invalidChar();
						break;
					default:
						if(comma) this.invalidChar();
						this.pos--;
						arr.push(this.parseRec());
						comma = true;
					}
				}
				break;
			case 116:
				var save = this.pos;
				if(this.str.charCodeAt(this.pos++) != 114 || this.str.charCodeAt(this.pos++) != 117 || this.str.charCodeAt(this.pos++) != 101) {
					this.pos = save;
					this.invalidChar();
				}
				return true;
			case 102:
				var save = this.pos;
				if(this.str.charCodeAt(this.pos++) != 97 || this.str.charCodeAt(this.pos++) != 108 || this.str.charCodeAt(this.pos++) != 115 || this.str.charCodeAt(this.pos++) != 101) {
					this.pos = save;
					this.invalidChar();
				}
				return false;
			case 110:
				var save = this.pos;
				if(this.str.charCodeAt(this.pos++) != 117 || this.str.charCodeAt(this.pos++) != 108 || this.str.charCodeAt(this.pos++) != 108) {
					this.pos = save;
					this.invalidChar();
				}
				return null;
			case 34:
				return this.parseString();
			case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:case 45:
				return this.parseNumber(c);
			default:
				this.invalidChar();
			}
		}
	}
	,invalidChar: function() {
		this.pos--;
		throw "Invalid char " + this.str.charCodeAt(this.pos) + " at position " + this.pos;
	}
	,doParse: function(str) {
		this.str = str;
		this.pos = 0;
		return this.parseRec();
	}
	,__class__: haxe.Json
}
haxe.Resource = function() { }
$hxClasses["haxe.Resource"] = haxe.Resource;
haxe.Resource.__name__ = ["haxe","Resource"];
haxe.Resource.listNames = function() {
	var names = new Array();
	var _g = 0, _g1 = haxe.Resource.content;
	while(_g < _g1.length) {
		var x = _g1[_g];
		++_g;
		names.push(x.name);
	}
	return names;
}
haxe.Resource.getString = function(name) {
	var _g = 0, _g1 = haxe.Resource.content;
	while(_g < _g1.length) {
		var x = _g1[_g];
		++_g;
		if(x.name == name) {
			if(x.str != null) return x.str;
			var b = haxe.Unserializer.run(x.data);
			return b.toString();
		}
	}
	return null;
}
haxe.Serializer = function() {
	this.buf = new StringBuf();
	this.cache = new Array();
	this.useCache = haxe.Serializer.USE_CACHE;
	this.useEnumIndex = haxe.Serializer.USE_ENUM_INDEX;
	this.shash = new haxe.ds.StringMap();
	this.scount = 0;
};
$hxClasses["haxe.Serializer"] = haxe.Serializer;
haxe.Serializer.__name__ = ["haxe","Serializer"];
haxe.Serializer.run = function(v) {
	var s = new haxe.Serializer();
	s.serialize(v);
	return s.toString();
}
haxe.Serializer.prototype = {
	serialize: function(v) {
		var _g = Type["typeof"](v);
		var $e = (_g);
		switch( $e[1] ) {
		case 0:
			this.buf.b += "n";
			break;
		case 1:
			if(v == 0) {
				this.buf.b += "z";
				return;
			}
			this.buf.b += "i";
			this.buf.b += Std.string(v);
			break;
		case 2:
			if(Math.isNaN(v)) this.buf.b += "k"; else if(!Math.isFinite(v)) this.buf.b += Std.string(v < 0?"m":"p"); else {
				this.buf.b += "d";
				this.buf.b += Std.string(v);
			}
			break;
		case 3:
			this.buf.b += Std.string(v?"t":"f");
			break;
		case 6:
			var c = $e[2];
			if(c == String) {
				this.serializeString(v);
				return;
			}
			if(this.useCache && this.serializeRef(v)) return;
			switch(c) {
			case Array:
				var ucount = 0;
				this.buf.b += "a";
				var l = v.length;
				var _g1 = 0;
				while(_g1 < l) {
					var i = _g1++;
					if(v[i] == null) ucount++; else {
						if(ucount > 0) {
							if(ucount == 1) this.buf.b += "n"; else {
								this.buf.b += "u";
								this.buf.b += Std.string(ucount);
							}
							ucount = 0;
						}
						this.serialize(v[i]);
					}
				}
				if(ucount > 0) {
					if(ucount == 1) this.buf.b += "n"; else {
						this.buf.b += "u";
						this.buf.b += Std.string(ucount);
					}
				}
				this.buf.b += "h";
				break;
			case List:
				this.buf.b += "l";
				var v1 = v;
				var $it0 = v1.iterator();
				while( $it0.hasNext() ) {
					var i = $it0.next();
					this.serialize(i);
				}
				this.buf.b += "h";
				break;
			case Date:
				var d = v;
				this.buf.b += "v";
				this.buf.b += Std.string(HxOverrides.dateStr(d));
				break;
			case haxe.ds.StringMap:
				this.buf.b += "b";
				var v1 = v;
				var $it1 = v1.keys();
				while( $it1.hasNext() ) {
					var k = $it1.next();
					this.serializeString(k);
					this.serialize(v1.get(k));
				}
				this.buf.b += "h";
				break;
			case haxe.ds.IntMap:
				this.buf.b += "q";
				var v1 = v;
				var $it2 = v1.keys();
				while( $it2.hasNext() ) {
					var k = $it2.next();
					this.buf.b += ":";
					this.buf.b += Std.string(k);
					this.serialize(v1.get(k));
				}
				this.buf.b += "h";
				break;
			case haxe.ds.ObjectMap:
				this.buf.b += "M";
				var v1 = v;
				var $it3 = v1.keys();
				while( $it3.hasNext() ) {
					var k = $it3.next();
					var id = Reflect.field(k,"__id__");
					Reflect.deleteField(k,"__id__");
					this.serialize(k);
					k.__id__ = id;
					this.serialize(v1.h[k.__id__]);
				}
				this.buf.b += "h";
				break;
			case haxe.io.Bytes:
				var v1 = v;
				var i = 0;
				var max = v1.length - 2;
				var charsBuf = new StringBuf();
				var b64 = haxe.Serializer.BASE64;
				while(i < max) {
					var b1 = v1.b[i++];
					var b2 = v1.b[i++];
					var b3 = v1.b[i++];
					charsBuf.b += Std.string(b64.charAt(b1 >> 2));
					charsBuf.b += Std.string(b64.charAt((b1 << 4 | b2 >> 4) & 63));
					charsBuf.b += Std.string(b64.charAt((b2 << 2 | b3 >> 6) & 63));
					charsBuf.b += Std.string(b64.charAt(b3 & 63));
				}
				if(i == max) {
					var b1 = v1.b[i++];
					var b2 = v1.b[i++];
					charsBuf.b += Std.string(b64.charAt(b1 >> 2));
					charsBuf.b += Std.string(b64.charAt((b1 << 4 | b2 >> 4) & 63));
					charsBuf.b += Std.string(b64.charAt(b2 << 2 & 63));
				} else if(i == max + 1) {
					var b1 = v1.b[i++];
					charsBuf.b += Std.string(b64.charAt(b1 >> 2));
					charsBuf.b += Std.string(b64.charAt(b1 << 4 & 63));
				}
				var chars = charsBuf.b;
				this.buf.b += "s";
				this.buf.b += Std.string(chars.length);
				this.buf.b += ":";
				this.buf.b += Std.string(chars);
				break;
			default:
				this.cache.pop();
				if(v.hxSerialize != null) {
					this.buf.b += "C";
					this.serializeString(Type.getClassName(c));
					this.cache.push(v);
					v.hxSerialize(this);
					this.buf.b += "g";
				} else {
					this.buf.b += "c";
					this.serializeString(Type.getClassName(c));
					this.cache.push(v);
					this.serializeFields(v);
				}
			}
			break;
		case 4:
			if(this.useCache && this.serializeRef(v)) return;
			this.buf.b += "o";
			this.serializeFields(v);
			break;
		case 7:
			var e = $e[2];
			if(this.useCache && this.serializeRef(v)) return;
			this.cache.pop();
			this.buf.b += Std.string(this.useEnumIndex?"j":"w");
			this.serializeString(Type.getEnumName(e));
			if(this.useEnumIndex) {
				this.buf.b += ":";
				this.buf.b += Std.string(v[1]);
			} else this.serializeString(v[0]);
			this.buf.b += ":";
			var l = v.length;
			this.buf.b += Std.string(l - 2);
			var _g1 = 2;
			while(_g1 < l) {
				var i = _g1++;
				this.serialize(v[i]);
			}
			this.cache.push(v);
			break;
		case 5:
			throw "Cannot serialize function";
			break;
		default:
			throw "Cannot serialize " + Std.string(v);
		}
	}
	,serializeFields: function(v) {
		var _g = 0, _g1 = Reflect.fields(v);
		while(_g < _g1.length) {
			var f = _g1[_g];
			++_g;
			this.serializeString(f);
			this.serialize(Reflect.field(v,f));
		}
		this.buf.b += "g";
	}
	,serializeRef: function(v) {
		var vt = typeof(v);
		var _g1 = 0, _g = this.cache.length;
		while(_g1 < _g) {
			var i = _g1++;
			var ci = this.cache[i];
			if(typeof(ci) == vt && ci == v) {
				this.buf.b += "r";
				this.buf.b += Std.string(i);
				return true;
			}
		}
		this.cache.push(v);
		return false;
	}
	,serializeString: function(s) {
		var x = this.shash.get(s);
		if(x != null) {
			this.buf.b += "R";
			this.buf.b += Std.string(x);
			return;
		}
		this.shash.set(s,this.scount++);
		this.buf.b += "y";
		s = StringTools.urlEncode(s);
		this.buf.b += Std.string(s.length);
		this.buf.b += ":";
		this.buf.b += Std.string(s);
	}
	,toString: function() {
		return this.buf.b;
	}
	,__class__: haxe.Serializer
}
haxe._Template = {}
haxe._Template.TemplateExpr = $hxClasses["haxe._Template.TemplateExpr"] = { __ename__ : ["haxe","_Template","TemplateExpr"], __constructs__ : ["OpVar","OpExpr","OpIf","OpStr","OpBlock","OpForeach","OpMacro"] }
haxe._Template.TemplateExpr.OpVar = function(v) { var $x = ["OpVar",0,v]; $x.__enum__ = haxe._Template.TemplateExpr; $x.toString = $estr; return $x; }
haxe._Template.TemplateExpr.OpExpr = function(expr) { var $x = ["OpExpr",1,expr]; $x.__enum__ = haxe._Template.TemplateExpr; $x.toString = $estr; return $x; }
haxe._Template.TemplateExpr.OpIf = function(expr,eif,eelse) { var $x = ["OpIf",2,expr,eif,eelse]; $x.__enum__ = haxe._Template.TemplateExpr; $x.toString = $estr; return $x; }
haxe._Template.TemplateExpr.OpStr = function(str) { var $x = ["OpStr",3,str]; $x.__enum__ = haxe._Template.TemplateExpr; $x.toString = $estr; return $x; }
haxe._Template.TemplateExpr.OpBlock = function(l) { var $x = ["OpBlock",4,l]; $x.__enum__ = haxe._Template.TemplateExpr; $x.toString = $estr; return $x; }
haxe._Template.TemplateExpr.OpForeach = function(expr,loop) { var $x = ["OpForeach",5,expr,loop]; $x.__enum__ = haxe._Template.TemplateExpr; $x.toString = $estr; return $x; }
haxe._Template.TemplateExpr.OpMacro = function(name,params) { var $x = ["OpMacro",6,name,params]; $x.__enum__ = haxe._Template.TemplateExpr; $x.toString = $estr; return $x; }
haxe.Template = function(str) {
	var tokens = this.parseTokens(str);
	this.expr = this.parseBlock(tokens);
	if(!tokens.isEmpty()) throw "Unexpected '" + Std.string(tokens.first().s) + "'";
};
$hxClasses["haxe.Template"] = haxe.Template;
haxe.Template.__name__ = ["haxe","Template"];
haxe.Template.prototype = {
	run: function(e) {
		var $e = (e);
		switch( $e[1] ) {
		case 0:
			var v = $e[2];
			this.buf.b += Std.string(Std.string(this.resolve(v)));
			break;
		case 1:
			var e1 = $e[2];
			this.buf.b += Std.string(Std.string(e1()));
			break;
		case 2:
			var eelse = $e[4], eif = $e[3], e1 = $e[2];
			var v = e1();
			if(v == null || v == false) {
				if(eelse != null) this.run(eelse);
			} else this.run(eif);
			break;
		case 3:
			var str = $e[2];
			this.buf.b += Std.string(str);
			break;
		case 4:
			var l = $e[2];
			var $it0 = l.iterator();
			while( $it0.hasNext() ) {
				var e1 = $it0.next();
				this.run(e1);
			}
			break;
		case 5:
			var loop = $e[3], e1 = $e[2];
			var v = e1();
			try {
				var x = $iterator(v)();
				if(x.hasNext == null) throw null;
				v = x;
			} catch( e2 ) {
				try {
					if(v.hasNext == null) throw null;
				} catch( e3 ) {
					throw "Cannot iter on " + Std.string(v);
				}
			}
			this.stack.push(this.context);
			var v1 = v;
			while( v1.hasNext() ) {
				var ctx = v1.next();
				this.context = ctx;
				this.run(loop);
			}
			this.context = this.stack.pop();
			break;
		case 6:
			var params = $e[3], m = $e[2];
			var v = Reflect.field(this.macros,m);
			var pl = new Array();
			var old = this.buf;
			pl.push($bind(this,this.resolve));
			var $it1 = params.iterator();
			while( $it1.hasNext() ) {
				var p = $it1.next();
				var $e = (p);
				switch( $e[1] ) {
				case 0:
					var v1 = $e[2];
					pl.push(this.resolve(v1));
					break;
				default:
					this.buf = new StringBuf();
					this.run(p);
					pl.push(this.buf.b);
				}
			}
			this.buf = old;
			try {
				this.buf.b += Std.string(Std.string(v.apply(this.macros,pl)));
			} catch( e1 ) {
				var plstr = (function($this) {
					var $r;
					try {
						$r = pl.join(",");
					} catch( e2 ) {
						$r = "???";
					}
					return $r;
				}(this));
				var msg = "Macro call " + m + "(" + plstr + ") failed (" + Std.string(e1) + ")";
				throw msg;
			}
			break;
		}
	}
	,makeExpr2: function(l) {
		var p = l.pop();
		if(p == null) throw "<eof>";
		if(p.s) return this.makeConst(p.p);
		switch(p.p) {
		case "(":
			var e1 = this.makeExpr(l);
			var p1 = l.pop();
			if(p1 == null || p1.s) throw p1.p;
			if(p1.p == ")") return e1;
			var e2 = this.makeExpr(l);
			var p2 = l.pop();
			if(p2 == null || p2.p != ")") throw p2.p;
			return (function($this) {
				var $r;
				switch(p1.p) {
				case "+":
					$r = function() {
						return e1() + e2();
					};
					break;
				case "-":
					$r = function() {
						return e1() - e2();
					};
					break;
				case "*":
					$r = function() {
						return e1() * e2();
					};
					break;
				case "/":
					$r = function() {
						return e1() / e2();
					};
					break;
				case ">":
					$r = function() {
						return e1() > e2();
					};
					break;
				case "<":
					$r = function() {
						return e1() < e2();
					};
					break;
				case ">=":
					$r = function() {
						return e1() >= e2();
					};
					break;
				case "<=":
					$r = function() {
						return e1() <= e2();
					};
					break;
				case "==":
					$r = function() {
						return e1() == e2();
					};
					break;
				case "!=":
					$r = function() {
						return e1() != e2();
					};
					break;
				case "&&":
					$r = function() {
						return e1() && e2();
					};
					break;
				case "||":
					$r = function() {
						return e1() || e2();
					};
					break;
				default:
					$r = (function($this) {
						var $r;
						throw "Unknown operation " + p1.p;
						return $r;
					}($this));
				}
				return $r;
			}(this));
		case "!":
			var e = this.makeExpr(l);
			return function() {
				var v = e();
				return v == null || v == false;
			};
		case "-":
			var e3 = this.makeExpr(l);
			return function() {
				return -e3();
			};
		}
		throw p.p;
	}
	,makeExpr: function(l) {
		return this.makePath(this.makeExpr2(l),l);
	}
	,makePath: function(e,l) {
		var p = l.first();
		if(p == null || p.p != ".") return e;
		l.pop();
		var field = l.pop();
		if(field == null || !field.s) throw field.p;
		var f = field.p;
		haxe.Template.expr_trim.match(f);
		f = haxe.Template.expr_trim.matched(1);
		return this.makePath(function() {
			return Reflect.field(e(),f);
		},l);
	}
	,makeConst: function(v) {
		haxe.Template.expr_trim.match(v);
		v = haxe.Template.expr_trim.matched(1);
		if(HxOverrides.cca(v,0) == 34) {
			var str = HxOverrides.substr(v,1,v.length - 2);
			return function() {
				return str;
			};
		}
		if(haxe.Template.expr_int.match(v)) {
			var i = Std.parseInt(v);
			return function() {
				return i;
			};
		}
		if(haxe.Template.expr_float.match(v)) {
			var f = Std.parseFloat(v);
			return function() {
				return f;
			};
		}
		var me = this;
		return function() {
			return me.resolve(v);
		};
	}
	,parseExpr: function(data) {
		var l = new List();
		var expr = data;
		while(haxe.Template.expr_splitter.match(data)) {
			var p = haxe.Template.expr_splitter.matchedPos();
			var k = p.pos + p.len;
			if(p.pos != 0) l.add({ p : HxOverrides.substr(data,0,p.pos), s : true});
			var p1 = haxe.Template.expr_splitter.matched(0);
			l.add({ p : p1, s : p1.indexOf("\"") >= 0});
			data = haxe.Template.expr_splitter.matchedRight();
		}
		if(data.length != 0) l.add({ p : data, s : true});
		var e;
		try {
			e = this.makeExpr(l);
			if(!l.isEmpty()) throw l.first().p;
		} catch( s ) {
			if( js.Boot.__instanceof(s,String) ) {
				throw "Unexpected '" + s + "' in " + expr;
			} else throw(s);
		}
		return function() {
			try {
				return e();
			} catch( exc ) {
				throw "Error : " + Std.string(exc) + " in " + expr;
			}
		};
	}
	,parse: function(tokens) {
		var t = tokens.pop();
		var p = t.p;
		if(t.s) return haxe._Template.TemplateExpr.OpStr(p);
		if(t.l != null) {
			var pe = new List();
			var _g = 0, _g1 = t.l;
			while(_g < _g1.length) {
				var p1 = _g1[_g];
				++_g;
				pe.add(this.parseBlock(this.parseTokens(p1)));
			}
			return haxe._Template.TemplateExpr.OpMacro(p,pe);
		}
		if(HxOverrides.substr(p,0,3) == "if ") {
			p = HxOverrides.substr(p,3,p.length - 3);
			var e = this.parseExpr(p);
			var eif = this.parseBlock(tokens);
			var t1 = tokens.first();
			var eelse;
			if(t1 == null) throw "Unclosed 'if'";
			if(t1.p == "end") {
				tokens.pop();
				eelse = null;
			} else if(t1.p == "else") {
				tokens.pop();
				eelse = this.parseBlock(tokens);
				t1 = tokens.pop();
				if(t1 == null || t1.p != "end") throw "Unclosed 'else'";
			} else {
				t1.p = HxOverrides.substr(t1.p,4,t1.p.length - 4);
				eelse = this.parse(tokens);
			}
			return haxe._Template.TemplateExpr.OpIf(e,eif,eelse);
		}
		if(HxOverrides.substr(p,0,8) == "foreach ") {
			p = HxOverrides.substr(p,8,p.length - 8);
			var e = this.parseExpr(p);
			var efor = this.parseBlock(tokens);
			var t1 = tokens.pop();
			if(t1 == null || t1.p != "end") throw "Unclosed 'foreach'";
			return haxe._Template.TemplateExpr.OpForeach(e,efor);
		}
		if(haxe.Template.expr_splitter.match(p)) return haxe._Template.TemplateExpr.OpExpr(this.parseExpr(p));
		return haxe._Template.TemplateExpr.OpVar(p);
	}
	,parseBlock: function(tokens) {
		var l = new List();
		while(true) {
			var t = tokens.first();
			if(t == null) break;
			if(!t.s && (t.p == "end" || t.p == "else" || HxOverrides.substr(t.p,0,7) == "elseif ")) break;
			l.add(this.parse(tokens));
		}
		if(l.length == 1) return l.first();
		return haxe._Template.TemplateExpr.OpBlock(l);
	}
	,parseTokens: function(data) {
		var tokens = new List();
		while(haxe.Template.splitter.match(data)) {
			var p = haxe.Template.splitter.matchedPos();
			if(p.pos > 0) tokens.add({ p : HxOverrides.substr(data,0,p.pos), s : true, l : null});
			if(HxOverrides.cca(data,p.pos) == 58) {
				tokens.add({ p : HxOverrides.substr(data,p.pos + 2,p.len - 4), s : false, l : null});
				data = haxe.Template.splitter.matchedRight();
				continue;
			}
			var parp = p.pos + p.len;
			var npar = 1;
			while(npar > 0) {
				var c = HxOverrides.cca(data,parp);
				if(c == 40) npar++; else if(c == 41) npar--; else if(c == null) throw "Unclosed macro parenthesis";
				parp++;
			}
			var params = HxOverrides.substr(data,p.pos + p.len,parp - (p.pos + p.len) - 1).split(",");
			tokens.add({ p : haxe.Template.splitter.matched(2), s : false, l : params});
			data = HxOverrides.substr(data,parp,data.length - parp);
		}
		if(data.length > 0) tokens.add({ p : data, s : true, l : null});
		return tokens;
	}
	,resolve: function(v) {
		if(Reflect.hasField(this.context,v)) return Reflect.field(this.context,v);
		var $it0 = this.stack.iterator();
		while( $it0.hasNext() ) {
			var ctx = $it0.next();
			if(Reflect.hasField(ctx,v)) return Reflect.field(ctx,v);
		}
		if(v == "__current__") return this.context;
		return Reflect.field(haxe.Template.globals,v);
	}
	,execute: function(context,macros) {
		this.macros = macros == null?{ }:macros;
		this.context = context;
		this.stack = new List();
		this.buf = new StringBuf();
		this.run(this.expr);
		return this.buf.b;
	}
	,__class__: haxe.Template
}
haxe.Unserializer = function(buf) {
	this.buf = buf;
	this.length = buf.length;
	this.pos = 0;
	this.scache = new Array();
	this.cache = new Array();
	var r = haxe.Unserializer.DEFAULT_RESOLVER;
	if(r == null) {
		r = Type;
		haxe.Unserializer.DEFAULT_RESOLVER = r;
	}
	this.setResolver(r);
};
$hxClasses["haxe.Unserializer"] = haxe.Unserializer;
haxe.Unserializer.__name__ = ["haxe","Unserializer"];
haxe.Unserializer.initCodes = function() {
	var codes = new Array();
	var _g1 = 0, _g = haxe.Unserializer.BASE64.length;
	while(_g1 < _g) {
		var i = _g1++;
		codes[haxe.Unserializer.BASE64.charCodeAt(i)] = i;
	}
	return codes;
}
haxe.Unserializer.run = function(v) {
	return new haxe.Unserializer(v).unserialize();
}
haxe.Unserializer.prototype = {
	unserialize: function() {
		var _g = this.buf.charCodeAt(this.pos++);
		switch(_g) {
		case 110:
			return null;
		case 116:
			return true;
		case 102:
			return false;
		case 122:
			return 0;
		case 105:
			return this.readDigits();
		case 100:
			var p1 = this.pos;
			while(true) {
				var c = this.buf.charCodeAt(this.pos);
				if(c >= 43 && c < 58 || c == 101 || c == 69) this.pos++; else break;
			}
			return Std.parseFloat(HxOverrides.substr(this.buf,p1,this.pos - p1));
		case 121:
			var len = this.readDigits();
			if(this.buf.charCodeAt(this.pos++) != 58 || this.length - this.pos < len) throw "Invalid string length";
			var s = HxOverrides.substr(this.buf,this.pos,len);
			this.pos += len;
			s = StringTools.urlDecode(s);
			this.scache.push(s);
			return s;
		case 107:
			return Math.NaN;
		case 109:
			return Math.NEGATIVE_INFINITY;
		case 112:
			return Math.POSITIVE_INFINITY;
		case 97:
			var buf = this.buf;
			var a = new Array();
			this.cache.push(a);
			while(true) {
				var c = this.buf.charCodeAt(this.pos);
				if(c == 104) {
					this.pos++;
					break;
				}
				if(c == 117) {
					this.pos++;
					var n = this.readDigits();
					a[a.length + n - 1] = null;
				} else a.push(this.unserialize());
			}
			return a;
		case 111:
			var o = { };
			this.cache.push(o);
			this.unserializeObject(o);
			return o;
		case 114:
			var n = this.readDigits();
			if(n < 0 || n >= this.cache.length) throw "Invalid reference";
			return this.cache[n];
		case 82:
			var n = this.readDigits();
			if(n < 0 || n >= this.scache.length) throw "Invalid string reference";
			return this.scache[n];
		case 120:
			throw this.unserialize();
			break;
		case 99:
			var name = this.unserialize();
			var cl = this.resolver.resolveClass(name);
			if(cl == null) throw "Class not found " + name;
			var o = Type.createEmptyInstance(cl);
			this.cache.push(o);
			this.unserializeObject(o);
			return o;
		case 119:
			var name = this.unserialize();
			var edecl = this.resolver.resolveEnum(name);
			if(edecl == null) throw "Enum not found " + name;
			var e = this.unserializeEnum(edecl,this.unserialize());
			this.cache.push(e);
			return e;
		case 106:
			var name = this.unserialize();
			var edecl = this.resolver.resolveEnum(name);
			if(edecl == null) throw "Enum not found " + name;
			this.pos++;
			var index = this.readDigits();
			var tag = Type.getEnumConstructs(edecl)[index];
			if(tag == null) throw "Unknown enum index " + name + "@" + index;
			var e = this.unserializeEnum(edecl,tag);
			this.cache.push(e);
			return e;
		case 108:
			var l = new List();
			this.cache.push(l);
			var buf = this.buf;
			while(this.buf.charCodeAt(this.pos) != 104) l.add(this.unserialize());
			this.pos++;
			return l;
		case 98:
			var h = new haxe.ds.StringMap();
			this.cache.push(h);
			var buf = this.buf;
			while(this.buf.charCodeAt(this.pos) != 104) {
				var s = this.unserialize();
				h.set(s,this.unserialize());
			}
			this.pos++;
			return h;
		case 113:
			var h = new haxe.ds.IntMap();
			this.cache.push(h);
			var buf = this.buf;
			var c = this.buf.charCodeAt(this.pos++);
			while(c == 58) {
				var i = this.readDigits();
				h.set(i,this.unserialize());
				c = this.buf.charCodeAt(this.pos++);
			}
			if(c != 104) throw "Invalid IntMap format";
			return h;
		case 77:
			var h = new haxe.ds.ObjectMap();
			this.cache.push(h);
			var buf = this.buf;
			while(this.buf.charCodeAt(this.pos) != 104) {
				var s = this.unserialize();
				h.set(s,this.unserialize());
			}
			this.pos++;
			return h;
		case 118:
			var d = HxOverrides.strDate(HxOverrides.substr(this.buf,this.pos,19));
			this.cache.push(d);
			this.pos += 19;
			return d;
		case 115:
			var len = this.readDigits();
			var buf = this.buf;
			if(this.buf.charCodeAt(this.pos++) != 58 || this.length - this.pos < len) throw "Invalid bytes length";
			var codes = haxe.Unserializer.CODES;
			if(codes == null) {
				codes = haxe.Unserializer.initCodes();
				haxe.Unserializer.CODES = codes;
			}
			var i = this.pos;
			var rest = len & 3;
			var size = (len >> 2) * 3 + (rest >= 2?rest - 1:0);
			var max = i + (len - rest);
			var bytes = haxe.io.Bytes.alloc(size);
			var bpos = 0;
			while(i < max) {
				var c1 = codes[buf.charCodeAt(i++)];
				var c2 = codes[buf.charCodeAt(i++)];
				bytes.b[bpos++] = (c1 << 2 | c2 >> 4) & 255;
				var c3 = codes[buf.charCodeAt(i++)];
				bytes.b[bpos++] = (c2 << 4 | c3 >> 2) & 255;
				var c4 = codes[buf.charCodeAt(i++)];
				bytes.b[bpos++] = (c3 << 6 | c4) & 255;
			}
			if(rest >= 2) {
				var c1 = codes[buf.charCodeAt(i++)];
				var c2 = codes[buf.charCodeAt(i++)];
				bytes.b[bpos++] = (c1 << 2 | c2 >> 4) & 255;
				if(rest == 3) {
					var c3 = codes[buf.charCodeAt(i++)];
					bytes.b[bpos++] = (c2 << 4 | c3 >> 2) & 255;
				}
			}
			this.pos += len;
			this.cache.push(bytes);
			return bytes;
		case 67:
			var name = this.unserialize();
			var cl = this.resolver.resolveClass(name);
			if(cl == null) throw "Class not found " + name;
			var o = Type.createEmptyInstance(cl);
			this.cache.push(o);
			o.hxUnserialize(this);
			if(this.buf.charCodeAt(this.pos++) != 103) throw "Invalid custom data";
			return o;
		default:
		}
		this.pos--;
		throw "Invalid char " + this.buf.charAt(this.pos) + " at position " + this.pos;
	}
	,unserializeEnum: function(edecl,tag) {
		if(this.buf.charCodeAt(this.pos++) != 58) throw "Invalid enum format";
		var nargs = this.readDigits();
		if(nargs == 0) return Type.createEnum(edecl,tag);
		var args = new Array();
		while(nargs-- > 0) args.push(this.unserialize());
		return Type.createEnum(edecl,tag,args);
	}
	,unserializeObject: function(o) {
		while(true) {
			if(this.pos >= this.length) throw "Invalid object";
			if(this.buf.charCodeAt(this.pos) == 103) break;
			var k = this.unserialize();
			if(!js.Boot.__instanceof(k,String)) throw "Invalid object key";
			var v = this.unserialize();
			o[k] = v;
		}
		this.pos++;
	}
	,readDigits: function() {
		var k = 0;
		var s = false;
		var fpos = this.pos;
		while(true) {
			var c = this.buf.charCodeAt(this.pos);
			if(c != c) break;
			if(c == 45) {
				if(this.pos != fpos) break;
				s = true;
				this.pos++;
				continue;
			}
			if(c < 48 || c > 57) break;
			k = k * 10 + (c - 48);
			this.pos++;
		}
		if(s) k *= -1;
		return k;
	}
	,setResolver: function(r) {
		if(r == null) this.resolver = { resolveClass : function(_) {
			return null;
		}, resolveEnum : function(_) {
			return null;
		}}; else this.resolver = r;
	}
	,__class__: haxe.Unserializer
}
haxe.ds = {}
haxe.ds.IntMap = function() {
	this.h = { };
};
$hxClasses["haxe.ds.IntMap"] = haxe.ds.IntMap;
haxe.ds.IntMap.__name__ = ["haxe","ds","IntMap"];
haxe.ds.IntMap.__interfaces__ = [IMap];
haxe.ds.IntMap.prototype = {
	keys: function() {
		var a = [];
		for( var key in this.h ) {
		if(this.h.hasOwnProperty(key)) a.push(key | 0);
		}
		return HxOverrides.iter(a);
	}
	,remove: function(key) {
		if(!this.h.hasOwnProperty(key)) return false;
		delete(this.h[key]);
		return true;
	}
	,exists: function(key) {
		return this.h.hasOwnProperty(key);
	}
	,get: function(key) {
		return this.h[key];
	}
	,set: function(key,value) {
		this.h[key] = value;
	}
	,__class__: haxe.ds.IntMap
}
haxe.ds.ObjectMap = function() {
	this.h = { };
	this.h.__keys__ = { };
};
$hxClasses["haxe.ds.ObjectMap"] = haxe.ds.ObjectMap;
haxe.ds.ObjectMap.__name__ = ["haxe","ds","ObjectMap"];
haxe.ds.ObjectMap.__interfaces__ = [IMap];
haxe.ds.ObjectMap.prototype = {
	keys: function() {
		var a = [];
		for( var key in this.h.__keys__ ) {
		if(this.h.hasOwnProperty(key)) a.push(this.h.__keys__[key]);
		}
		return HxOverrides.iter(a);
	}
	,remove: function(key) {
		var id = key.__id__;
		if(!this.h.hasOwnProperty(id)) return false;
		delete(this.h[id]);
		delete(this.h.__keys__[id]);
		return true;
	}
	,set: function(key,value) {
		var id = key.__id__ != null?key.__id__:key.__id__ = ++haxe.ds.ObjectMap.count;
		this.h[id] = value;
		this.h.__keys__[id] = key;
	}
	,__class__: haxe.ds.ObjectMap
}
haxe.ds.StringMap = function() {
	this.h = { };
};
$hxClasses["haxe.ds.StringMap"] = haxe.ds.StringMap;
haxe.ds.StringMap.__name__ = ["haxe","ds","StringMap"];
haxe.ds.StringMap.__interfaces__ = [IMap];
haxe.ds.StringMap.prototype = {
	iterator: function() {
		return { ref : this.h, it : this.keys(), hasNext : function() {
			return this.it.hasNext();
		}, next : function() {
			var i = this.it.next();
			return this.ref["$" + i];
		}};
	}
	,keys: function() {
		var a = [];
		for( var key in this.h ) {
		if(this.h.hasOwnProperty(key)) a.push(key.substr(1));
		}
		return HxOverrides.iter(a);
	}
	,remove: function(key) {
		key = "$" + key;
		if(!this.h.hasOwnProperty(key)) return false;
		delete(this.h[key]);
		return true;
	}
	,exists: function(key) {
		return this.h.hasOwnProperty("$" + key);
	}
	,get: function(key) {
		return this.h["$" + key];
	}
	,set: function(key,value) {
		this.h["$" + key] = value;
	}
	,__class__: haxe.ds.StringMap
}
haxe.io = {}
haxe.io.Bytes = function(length,b) {
	this.length = length;
	this.b = b;
};
$hxClasses["haxe.io.Bytes"] = haxe.io.Bytes;
haxe.io.Bytes.__name__ = ["haxe","io","Bytes"];
haxe.io.Bytes.alloc = function(length) {
	var a = new Array();
	var _g = 0;
	while(_g < length) {
		var i = _g++;
		a.push(0);
	}
	return new haxe.io.Bytes(length,a);
}
haxe.io.Bytes.ofString = function(s) {
	var a = new Array();
	var _g1 = 0, _g = s.length;
	while(_g1 < _g) {
		var i = _g1++;
		var c = s.charCodeAt(i);
		if(c <= 127) a.push(c); else if(c <= 2047) {
			a.push(192 | c >> 6);
			a.push(128 | c & 63);
		} else if(c <= 65535) {
			a.push(224 | c >> 12);
			a.push(128 | c >> 6 & 63);
			a.push(128 | c & 63);
		} else {
			a.push(240 | c >> 18);
			a.push(128 | c >> 12 & 63);
			a.push(128 | c >> 6 & 63);
			a.push(128 | c & 63);
		}
	}
	return new haxe.io.Bytes(a.length,a);
}
haxe.io.Bytes.prototype = {
	toString: function() {
		return this.readString(0,this.length);
	}
	,readString: function(pos,len) {
		if(pos < 0 || len < 0 || pos + len > this.length) throw haxe.io.Error.OutsideBounds;
		var s = "";
		var b = this.b;
		var fcc = String.fromCharCode;
		var i = pos;
		var max = pos + len;
		while(i < max) {
			var c = b[i++];
			if(c < 128) {
				if(c == 0) break;
				s += fcc(c);
			} else if(c < 224) s += fcc((c & 63) << 6 | b[i++] & 127); else if(c < 240) {
				var c2 = b[i++];
				s += fcc((c & 31) << 12 | (c2 & 127) << 6 | b[i++] & 127);
			} else {
				var c2 = b[i++];
				var c3 = b[i++];
				s += fcc((c & 15) << 18 | (c2 & 127) << 12 | c3 << 6 & 127 | b[i++] & 127);
			}
		}
		return s;
	}
	,__class__: haxe.io.Bytes
}
haxe.io.Eof = function() { }
$hxClasses["haxe.io.Eof"] = haxe.io.Eof;
haxe.io.Eof.__name__ = ["haxe","io","Eof"];
haxe.io.Eof.prototype = {
	toString: function() {
		return "Eof";
	}
	,__class__: haxe.io.Eof
}
haxe.io.Error = $hxClasses["haxe.io.Error"] = { __ename__ : ["haxe","io","Error"], __constructs__ : ["Blocked","Overflow","OutsideBounds","Custom"] }
haxe.io.Error.Blocked = ["Blocked",0];
haxe.io.Error.Blocked.toString = $estr;
haxe.io.Error.Blocked.__enum__ = haxe.io.Error;
haxe.io.Error.Overflow = ["Overflow",1];
haxe.io.Error.Overflow.toString = $estr;
haxe.io.Error.Overflow.__enum__ = haxe.io.Error;
haxe.io.Error.OutsideBounds = ["OutsideBounds",2];
haxe.io.Error.OutsideBounds.toString = $estr;
haxe.io.Error.OutsideBounds.__enum__ = haxe.io.Error;
haxe.io.Error.Custom = function(e) { var $x = ["Custom",3,e]; $x.__enum__ = haxe.io.Error; $x.toString = $estr; return $x; }
var js = {}
js.Boot = function() { }
$hxClasses["js.Boot"] = js.Boot;
js.Boot.__name__ = ["js","Boot"];
js.Boot.__string_rec = function(o,s) {
	if(o == null) return "null";
	if(s.length >= 5) return "<...>";
	var t = typeof(o);
	if(t == "function" && (o.__name__ || o.__ename__)) t = "object";
	switch(t) {
	case "object":
		if(o instanceof Array) {
			if(o.__enum__) {
				if(o.length == 2) return o[0];
				var str = o[0] + "(";
				s += "\t";
				var _g1 = 2, _g = o.length;
				while(_g1 < _g) {
					var i = _g1++;
					if(i != 2) str += "," + js.Boot.__string_rec(o[i],s); else str += js.Boot.__string_rec(o[i],s);
				}
				return str + ")";
			}
			var l = o.length;
			var i;
			var str = "[";
			s += "\t";
			var _g = 0;
			while(_g < l) {
				var i1 = _g++;
				str += (i1 > 0?",":"") + js.Boot.__string_rec(o[i1],s);
			}
			str += "]";
			return str;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( e ) {
			return "???";
		}
		if(tostr != null && tostr != Object.toString) {
			var s2 = o.toString();
			if(s2 != "[object Object]") return s2;
		}
		var k = null;
		var str = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		for( var k in o ) { ;
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str.length != 2) str += ", \n";
		str += s + k + " : " + js.Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str += "\n" + s + "}";
		return str;
	case "function":
		return "<function>";
	case "string":
		return o;
	default:
		return String(o);
	}
}
js.Boot.__interfLoop = function(cc,cl) {
	if(cc == null) return false;
	if(cc == cl) return true;
	var intf = cc.__interfaces__;
	if(intf != null) {
		var _g1 = 0, _g = intf.length;
		while(_g1 < _g) {
			var i = _g1++;
			var i1 = intf[i];
			if(i1 == cl || js.Boot.__interfLoop(i1,cl)) return true;
		}
	}
	return js.Boot.__interfLoop(cc.__super__,cl);
}
js.Boot.__instanceof = function(o,cl) {
	if(cl == null) return false;
	switch(cl) {
	case Int:
		return (o|0) === o;
	case Float:
		return typeof(o) == "number";
	case Bool:
		return typeof(o) == "boolean";
	case String:
		return typeof(o) == "string";
	case Dynamic:
		return true;
	default:
		if(o != null) {
			if(typeof(cl) == "function") {
				if(o instanceof cl) {
					if(cl == Array) return o.__enum__ == null;
					return true;
				}
				if(js.Boot.__interfLoop(o.__class__,cl)) return true;
			}
		} else return false;
		if(cl == Class && o.__name__ != null) return true;
		if(cl == Enum && o.__ename__ != null) return true;
		return o.__enum__ == cl;
	}
}
js.Boot.__cast = function(o,t) {
	if(js.Boot.__instanceof(o,t)) return o; else throw "Cannot cast " + Std.string(o) + " to " + Std.string(t);
}
js.Browser = function() { }
$hxClasses["js.Browser"] = js.Browser;
js.Browser.__name__ = ["js","Browser"];
js.Browser.getLocalStorage = function() {
	try {
		var s = js.Browser.window.localStorage;
		s.getItem("");
		return s;
	} catch( e ) {
		return null;
	}
}
var nme = {}
nme.AssetData = function() { }
$hxClasses["nme.AssetData"] = nme.AssetData;
nme.AssetData.__name__ = ["nme","AssetData"];
nme.AssetData.initialize = function() {
	if(!nme.AssetData.initialized) {
		nme.AssetData.path.set("assets/data/apple.png","assets/data/apple.png");
		var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
		nme.AssetData.type.set("assets/data/apple.png",value);
		nme.AssetData.path.set("assets/data/autotiles.png","assets/data/autotiles.png");
		var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
		nme.AssetData.type.set("assets/data/autotiles.png",value);
		nme.AssetData.path.set("assets/data/autotiles_alt.png","assets/data/autotiles_alt.png");
		var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
		nme.AssetData.type.set("assets/data/autotiles_alt.png",value);
		nme.AssetData.path.set("assets/data/base.png","assets/data/base.png");
		var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
		nme.AssetData.type.set("assets/data/base.png",value);
		nme.AssetData.path.set("assets/data/beep.mp3","assets/data/beep.mp3");
		var value = Reflect.field(openfl.AssetType,"music".toUpperCase());
		nme.AssetData.type.set("assets/data/beep.mp3",value);
		nme.AssetData.path.set("assets/data/beep.ogg","assets/data/beep.ogg");
		var value = Reflect.field(openfl.AssetType,"sound".toUpperCase());
		nme.AssetData.type.set("assets/data/beep.ogg",value);
		nme.AssetData.path.set("assets/data/button.png","assets/data/button.png");
		var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
		nme.AssetData.type.set("assets/data/button.png",value);
		nme.AssetData.path.set("assets/data/button_a.png","assets/data/button_a.png");
		var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
		nme.AssetData.type.set("assets/data/button_a.png",value);
		nme.AssetData.path.set("assets/data/button_b.png","assets/data/button_b.png");
		var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
		nme.AssetData.type.set("assets/data/button_b.png",value);
		nme.AssetData.path.set("assets/data/button_c.png","assets/data/button_c.png");
		var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
		nme.AssetData.type.set("assets/data/button_c.png",value);
		nme.AssetData.path.set("assets/data/button_down.png","assets/data/button_down.png");
		var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
		nme.AssetData.type.set("assets/data/button_down.png",value);
		nme.AssetData.path.set("assets/data/button_left.png","assets/data/button_left.png");
		var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
		nme.AssetData.type.set("assets/data/button_left.png",value);
		nme.AssetData.path.set("assets/data/button_right.png","assets/data/button_right.png");
		var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
		nme.AssetData.type.set("assets/data/button_right.png",value);
		nme.AssetData.path.set("assets/data/button_up.png","assets/data/button_up.png");
		var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
		nme.AssetData.type.set("assets/data/button_up.png",value);
		nme.AssetData.path.set("assets/data/button_x.png","assets/data/button_x.png");
		var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
		nme.AssetData.type.set("assets/data/button_x.png",value);
		nme.AssetData.path.set("assets/data/button_y.png","assets/data/button_y.png");
		var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
		nme.AssetData.type.set("assets/data/button_y.png",value);
		nme.AssetData.className.set("assets/data/courier.ttf",nme.NME_assets_data_courier_ttf);
		var value = Reflect.field(openfl.AssetType,"font".toUpperCase());
		nme.AssetData.type.set("assets/data/courier.ttf",value);
		nme.AssetData.path.set("assets/data/cursor.png","assets/data/cursor.png");
		var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
		nme.AssetData.type.set("assets/data/cursor.png",value);
		nme.AssetData.path.set("assets/data/default.png","assets/data/default.png");
		var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
		nme.AssetData.type.set("assets/data/default.png",value);
		nme.AssetData.path.set("assets/data/fontData10pt.png","assets/data/fontData10pt.png");
		var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
		nme.AssetData.type.set("assets/data/fontData10pt.png",value);
		nme.AssetData.path.set("assets/data/fontData11pt.png","assets/data/fontData11pt.png");
		var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
		nme.AssetData.type.set("assets/data/fontData11pt.png",value);
		nme.AssetData.path.set("assets/data/handle.png","assets/data/handle.png");
		var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
		nme.AssetData.type.set("assets/data/handle.png",value);
		nme.AssetData.path.set("assets/data/logo.png","assets/data/logo.png");
		var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
		nme.AssetData.type.set("assets/data/logo.png",value);
		nme.AssetData.path.set("assets/data/logo_corners.png","assets/data/logo_corners.png");
		var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
		nme.AssetData.type.set("assets/data/logo_corners.png",value);
		nme.AssetData.path.set("assets/data/logo_light.png","assets/data/logo_light.png");
		var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
		nme.AssetData.type.set("assets/data/logo_light.png",value);
		nme.AssetData.className.set("assets/data/nokiafc22.ttf",nme.NME_assets_data_nokiafc22_ttf);
		var value = Reflect.field(openfl.AssetType,"font".toUpperCase());
		nme.AssetData.type.set("assets/data/nokiafc22.ttf",value);
		nme.AssetData.className.set("assets/data/Play-Bold.ttf",nme.NME_assets_data_play_bold_ttf);
		var value = Reflect.field(openfl.AssetType,"font".toUpperCase());
		nme.AssetData.type.set("assets/data/Play-Bold.ttf",value);
		nme.AssetData.path.set("assets/data/Play-font-OFL.txt","assets/data/Play-font-OFL.txt");
		var value = Reflect.field(openfl.AssetType,"text".toUpperCase());
		nme.AssetData.type.set("assets/data/Play-font-OFL.txt",value);
		nme.AssetData.className.set("assets/data/Play-Regular.ttf",nme.NME_assets_data_play_regular_ttf);
		var value = Reflect.field(openfl.AssetType,"font".toUpperCase());
		nme.AssetData.type.set("assets/data/Play-Regular.ttf",value);
		nme.AssetData.path.set("assets/data/stick.png","assets/data/stick.png");
		var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
		nme.AssetData.type.set("assets/data/stick.png",value);
		nme.AssetData.path.set("assets/data/vcr/flixel.png","assets/data/vcr/flixel.png");
		var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
		nme.AssetData.type.set("assets/data/vcr/flixel.png",value);
		nme.AssetData.path.set("assets/data/vcr/open.png","assets/data/vcr/open.png");
		var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
		nme.AssetData.type.set("assets/data/vcr/open.png",value);
		nme.AssetData.path.set("assets/data/vcr/pause.png","assets/data/vcr/pause.png");
		var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
		nme.AssetData.type.set("assets/data/vcr/pause.png",value);
		nme.AssetData.path.set("assets/data/vcr/play.png","assets/data/vcr/play.png");
		var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
		nme.AssetData.type.set("assets/data/vcr/play.png",value);
		nme.AssetData.path.set("assets/data/vcr/record_off.png","assets/data/vcr/record_off.png");
		var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
		nme.AssetData.type.set("assets/data/vcr/record_off.png",value);
		nme.AssetData.path.set("assets/data/vcr/record_on.png","assets/data/vcr/record_on.png");
		var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
		nme.AssetData.type.set("assets/data/vcr/record_on.png",value);
		nme.AssetData.path.set("assets/data/vcr/restart.png","assets/data/vcr/restart.png");
		var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
		nme.AssetData.type.set("assets/data/vcr/restart.png",value);
		nme.AssetData.path.set("assets/data/vcr/step.png","assets/data/vcr/step.png");
		var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
		nme.AssetData.type.set("assets/data/vcr/step.png",value);
		nme.AssetData.path.set("assets/data/vcr/stop.png","assets/data/vcr/stop.png");
		var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
		nme.AssetData.type.set("assets/data/vcr/stop.png",value);
		nme.AssetData.path.set("assets/data/vis/bounds.png","assets/data/vis/bounds.png");
		var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
		nme.AssetData.type.set("assets/data/vis/bounds.png",value);
		nme.AssetData.path.set("assets/images/banana.png","assets/images/banana.png");
		var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
		nme.AssetData.type.set("assets/images/banana.png",value);
		nme.AssetData.path.set("assets/images/bg_extra.png","assets/images/bg_extra.png");
		var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
		nme.AssetData.type.set("assets/images/bg_extra.png",value);
		nme.AssetData.path.set("assets/images/itsanewrecord.png","assets/images/itsanewrecord.png");
		var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
		nme.AssetData.type.set("assets/images/itsanewrecord.png",value);
		nme.AssetData.path.set("assets/images/mulevel1_door.png","assets/images/mulevel1_door.png");
		var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
		nme.AssetData.type.set("assets/images/mulevel1_door.png",value);
		nme.AssetData.path.set("assets/images/part_star.png","assets/images/part_star.png");
		var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
		nme.AssetData.type.set("assets/images/part_star.png",value);
		nme.AssetData.path.set("assets/images/player.png","assets/images/player.png");
		var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
		nme.AssetData.type.set("assets/images/player.png",value);
		nme.AssetData.path.set("assets/images/present1.png","assets/images/present1.png");
		var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
		nme.AssetData.type.set("assets/images/present1.png",value);
		nme.AssetData.path.set("assets/images/present2.png","assets/images/present2.png");
		var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
		nme.AssetData.type.set("assets/images/present2.png",value);
		nme.AssetData.path.set("assets/images/present3.png","assets/images/present3.png");
		var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
		nme.AssetData.type.set("assets/images/present3.png",value);
		nme.AssetData.path.set("assets/images/pressz.png","assets/images/pressz.png");
		var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
		nme.AssetData.type.set("assets/images/pressz.png",value);
		nme.AssetData.path.set("assets/images/press_z_to_start.png","assets/images/press_z_to_start.png");
		var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
		nme.AssetData.type.set("assets/images/press_z_to_start.png",value);
		nme.AssetData.path.set("assets/images/ruby2.png","assets/images/ruby2.png");
		var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
		nme.AssetData.type.set("assets/images/ruby2.png",value);
		nme.AssetData.path.set("assets/images/rubyicon.png","assets/images/rubyicon.png");
		var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
		nme.AssetData.type.set("assets/images/rubyicon.png",value);
		nme.AssetData.path.set("assets/images/stageclear.png","assets/images/stageclear.png");
		var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
		nme.AssetData.type.set("assets/images/stageclear.png",value);
		nme.AssetData.path.set("assets/images/thankyouforplaying.png","assets/images/thankyouforplaying.png");
		var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
		nme.AssetData.type.set("assets/images/thankyouforplaying.png",value);
		nme.AssetData.path.set("assets/images/title_image.png","assets/images/title_image.png");
		var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
		nme.AssetData.type.set("assets/images/title_image.png",value);
		nme.AssetData.path.set("assets/maps/mylevel1.json.txt","assets/maps/mylevel1.json.txt");
		var value = Reflect.field(openfl.AssetType,"text".toUpperCase());
		nme.AssetData.type.set("assets/maps/mylevel1.json.txt",value);
		nme.AssetData.path.set("assets/maps/mylevel1.tmx","assets/maps/mylevel1.tmx");
		var value = Reflect.field(openfl.AssetType,"text".toUpperCase());
		nme.AssetData.type.set("assets/maps/mylevel1.tmx",value);
		nme.AssetData.path.set("assets/maps/mylevel1_b.json.txt","assets/maps/mylevel1_b.json.txt");
		var value = Reflect.field(openfl.AssetType,"text".toUpperCase());
		nme.AssetData.type.set("assets/maps/mylevel1_b.json.txt",value);
		nme.AssetData.path.set("assets/maps/mylevel1_b.tmx","assets/maps/mylevel1_b.tmx");
		var value = Reflect.field(openfl.AssetType,"text".toUpperCase());
		nme.AssetData.type.set("assets/maps/mylevel1_b.tmx",value);
		nme.AssetData.path.set("assets/maps/mylevel1_b_tiles.png","assets/maps/mylevel1_b_tiles.png");
		var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
		nme.AssetData.type.set("assets/maps/mylevel1_b_tiles.png",value);
		nme.AssetData.path.set("assets/maps/mylevel1_tiles.png","assets/maps/mylevel1_tiles.png");
		var value = Reflect.field(openfl.AssetType,"image".toUpperCase());
		nme.AssetData.type.set("assets/maps/mylevel1_tiles.png",value);
		nme.AssetData.path.set("assets/sounds/allstageclear_bgm.mp3","assets/sounds/allstageclear_bgm.mp3");
		var value = Reflect.field(openfl.AssetType,"music".toUpperCase());
		nme.AssetData.type.set("assets/sounds/allstageclear_bgm.mp3",value);
		nme.AssetData.path.set("assets/sounds/allstageclear_bgm.ogg","assets/sounds/allstageclear_bgm.ogg");
		var value = Reflect.field(openfl.AssetType,"sound".toUpperCase());
		nme.AssetData.type.set("assets/sounds/allstageclear_bgm.ogg",value);
		nme.AssetData.path.set("assets/sounds/bokunobanana.mp3","assets/sounds/bokunobanana.mp3");
		var value = Reflect.field(openfl.AssetType,"music".toUpperCase());
		nme.AssetData.type.set("assets/sounds/bokunobanana.mp3",value);
		nme.AssetData.path.set("assets/sounds/bokunobanana.ogg","assets/sounds/bokunobanana.ogg");
		var value = Reflect.field(openfl.AssetType,"sound".toUpperCase());
		nme.AssetData.type.set("assets/sounds/bokunobanana.ogg",value);
		nme.AssetData.path.set("assets/sounds/getruby.mp3","assets/sounds/getruby.mp3");
		var value = Reflect.field(openfl.AssetType,"music".toUpperCase());
		nme.AssetData.type.set("assets/sounds/getruby.mp3",value);
		nme.AssetData.path.set("assets/sounds/getruby.ogg","assets/sounds/getruby.ogg");
		var value = Reflect.field(openfl.AssetType,"sound".toUpperCase());
		nme.AssetData.type.set("assets/sounds/getruby.ogg",value);
		nme.AssetData.path.set("assets/sounds/itsanewrecord.mp3","assets/sounds/itsanewrecord.mp3");
		var value = Reflect.field(openfl.AssetType,"music".toUpperCase());
		nme.AssetData.type.set("assets/sounds/itsanewrecord.mp3",value);
		nme.AssetData.path.set("assets/sounds/itsanewrecord.ogg","assets/sounds/itsanewrecord.ogg");
		var value = Reflect.field(openfl.AssetType,"sound".toUpperCase());
		nme.AssetData.type.set("assets/sounds/itsanewrecord.ogg",value);
		nme.AssetData.path.set("assets/sounds/jump.mp3","assets/sounds/jump.mp3");
		var value = Reflect.field(openfl.AssetType,"music".toUpperCase());
		nme.AssetData.type.set("assets/sounds/jump.mp3",value);
		nme.AssetData.path.set("assets/sounds/jump.ogg","assets/sounds/jump.ogg");
		var value = Reflect.field(openfl.AssetType,"sound".toUpperCase());
		nme.AssetData.type.set("assets/sounds/jump.ogg",value);
		nme.AssetData.path.set("assets/sounds/level1_bgm.mp3","assets/sounds/level1_bgm.mp3");
		var value = Reflect.field(openfl.AssetType,"music".toUpperCase());
		nme.AssetData.type.set("assets/sounds/level1_bgm.mp3",value);
		nme.AssetData.path.set("assets/sounds/level1_bgm.ogg","assets/sounds/level1_bgm.ogg");
		var value = Reflect.field(openfl.AssetType,"sound".toUpperCase());
		nme.AssetData.type.set("assets/sounds/level1_bgm.ogg",value);
		nme.AssetData.path.set("assets/sounds/run_30fps20pat.mp3","assets/sounds/run_30fps20pat.mp3");
		var value = Reflect.field(openfl.AssetType,"music".toUpperCase());
		nme.AssetData.type.set("assets/sounds/run_30fps20pat.mp3",value);
		nme.AssetData.path.set("assets/sounds/run_30fps20pat.ogg","assets/sounds/run_30fps20pat.ogg");
		var value = Reflect.field(openfl.AssetType,"sound".toUpperCase());
		nme.AssetData.type.set("assets/sounds/run_30fps20pat.ogg",value);
		nme.AssetData.path.set("assets/sounds/shake.mp3","assets/sounds/shake.mp3");
		var value = Reflect.field(openfl.AssetType,"music".toUpperCase());
		nme.AssetData.type.set("assets/sounds/shake.mp3",value);
		nme.AssetData.path.set("assets/sounds/shake.ogg","assets/sounds/shake.ogg");
		var value = Reflect.field(openfl.AssetType,"sound".toUpperCase());
		nme.AssetData.type.set("assets/sounds/shake.ogg",value);
		nme.AssetData.path.set("assets/sounds/stageclear.mp3","assets/sounds/stageclear.mp3");
		var value = Reflect.field(openfl.AssetType,"music".toUpperCase());
		nme.AssetData.type.set("assets/sounds/stageclear.mp3",value);
		nme.AssetData.path.set("assets/sounds/stageclear.ogg","assets/sounds/stageclear.ogg");
		var value = Reflect.field(openfl.AssetType,"sound".toUpperCase());
		nme.AssetData.type.set("assets/sounds/stageclear.ogg",value);
		nme.AssetData.path.set("assets/sounds/stand2.mp3","assets/sounds/stand2.mp3");
		var value = Reflect.field(openfl.AssetType,"music".toUpperCase());
		nme.AssetData.type.set("assets/sounds/stand2.mp3",value);
		nme.AssetData.path.set("assets/sounds/stand2.ogg","assets/sounds/stand2.ogg");
		var value = Reflect.field(openfl.AssetType,"sound".toUpperCase());
		nme.AssetData.type.set("assets/sounds/stand2.ogg",value);
		nme.AssetData.path.set("assets/sounds/title_bgm.mp3","assets/sounds/title_bgm.mp3");
		var value = Reflect.field(openfl.AssetType,"music".toUpperCase());
		nme.AssetData.type.set("assets/sounds/title_bgm.mp3",value);
		nme.AssetData.path.set("assets/sounds/title_bgm.ogg","assets/sounds/title_bgm.ogg");
		var value = Reflect.field(openfl.AssetType,"sound".toUpperCase());
		nme.AssetData.type.set("assets/sounds/title_bgm.ogg",value);
		nme.AssetData.className.set("PlayBold",nme.NME_assets_data_play_bold_ttf1);
		var value = Reflect.field(openfl.AssetType,"font".toUpperCase());
		nme.AssetData.type.set("PlayBold",value);
		nme.AssetData.path.set("Beep","assets/data/beep.mp3");
		var value = Reflect.field(openfl.AssetType,"sound".toUpperCase());
		nme.AssetData.type.set("Beep",value);
		nme.AssetData.path.set("SeJump","assets/sounds/jump.mp3");
		var value = Reflect.field(openfl.AssetType,"sound".toUpperCase());
		nme.AssetData.type.set("SeJump",value);
		nme.AssetData.path.set("SeStand","assets/sounds/stand2.mp3");
		var value = Reflect.field(openfl.AssetType,"sound".toUpperCase());
		nme.AssetData.type.set("SeStand",value);
		nme.AssetData.path.set("SeRuby","assets/sounds/getruby.mp3");
		var value = Reflect.field(openfl.AssetType,"sound".toUpperCase());
		nme.AssetData.type.set("SeRuby",value);
		nme.AssetData.path.set("SeRun","assets/sounds/run_30fps20pat.mp3");
		var value = Reflect.field(openfl.AssetType,"sound".toUpperCase());
		nme.AssetData.type.set("SeRun",value);
		nme.AssetData.path.set("SeBanana","assets/sounds/bokunobanana.mp3");
		var value = Reflect.field(openfl.AssetType,"sound".toUpperCase());
		nme.AssetData.type.set("SeBanana",value);
		nme.AssetData.path.set("SeShake","assets/sounds/shake.mp3");
		var value = Reflect.field(openfl.AssetType,"sound".toUpperCase());
		nme.AssetData.type.set("SeShake",value);
		nme.AssetData.path.set("SeStageClear","assets/sounds/stageclear.mp3");
		var value = Reflect.field(openfl.AssetType,"sound".toUpperCase());
		nme.AssetData.type.set("SeStageClear",value);
		nme.AssetData.path.set("SeNewRecord","assets/sounds/itsanewrecord.mp3");
		var value = Reflect.field(openfl.AssetType,"sound".toUpperCase());
		nme.AssetData.type.set("SeNewRecord",value);
		nme.AssetData.path.set("BgmLevel1","assets/sounds/level1_bgm.mp3");
		var value = Reflect.field(openfl.AssetType,"music".toUpperCase());
		nme.AssetData.type.set("BgmLevel1",value);
		nme.AssetData.path.set("BgmAllStageClear","assets/sounds/allstageclear_bgm.mp3");
		var value = Reflect.field(openfl.AssetType,"music".toUpperCase());
		nme.AssetData.type.set("BgmAllStageClear",value);
		nme.AssetData.path.set("BgmTitle","assets/sounds/title_bgm.mp3");
		var value = Reflect.field(openfl.AssetType,"music".toUpperCase());
		nme.AssetData.type.set("BgmTitle",value);
		nme.AssetData.initialized = true;
	}
}
nme.NME_assets_data_courier_ttf = function() {
	flash.text.Font.call(this);
};
$hxClasses["nme.NME_assets_data_courier_ttf"] = nme.NME_assets_data_courier_ttf;
nme.NME_assets_data_courier_ttf.__name__ = ["nme","NME_assets_data_courier_ttf"];
nme.NME_assets_data_courier_ttf.__super__ = flash.text.Font;
nme.NME_assets_data_courier_ttf.prototype = $extend(flash.text.Font.prototype,{
	__class__: nme.NME_assets_data_courier_ttf
});
nme.NME_assets_data_nokiafc22_ttf = function() {
	flash.text.Font.call(this);
};
$hxClasses["nme.NME_assets_data_nokiafc22_ttf"] = nme.NME_assets_data_nokiafc22_ttf;
nme.NME_assets_data_nokiafc22_ttf.__name__ = ["nme","NME_assets_data_nokiafc22_ttf"];
nme.NME_assets_data_nokiafc22_ttf.__super__ = flash.text.Font;
nme.NME_assets_data_nokiafc22_ttf.prototype = $extend(flash.text.Font.prototype,{
	__class__: nme.NME_assets_data_nokiafc22_ttf
});
nme.NME_assets_data_play_bold_ttf = function() {
	flash.text.Font.call(this);
};
$hxClasses["nme.NME_assets_data_play_bold_ttf"] = nme.NME_assets_data_play_bold_ttf;
nme.NME_assets_data_play_bold_ttf.__name__ = ["nme","NME_assets_data_play_bold_ttf"];
nme.NME_assets_data_play_bold_ttf.__super__ = flash.text.Font;
nme.NME_assets_data_play_bold_ttf.prototype = $extend(flash.text.Font.prototype,{
	__class__: nme.NME_assets_data_play_bold_ttf
});
nme.NME_assets_data_play_regular_ttf = function() {
	flash.text.Font.call(this);
};
$hxClasses["nme.NME_assets_data_play_regular_ttf"] = nme.NME_assets_data_play_regular_ttf;
nme.NME_assets_data_play_regular_ttf.__name__ = ["nme","NME_assets_data_play_regular_ttf"];
nme.NME_assets_data_play_regular_ttf.__super__ = flash.text.Font;
nme.NME_assets_data_play_regular_ttf.prototype = $extend(flash.text.Font.prototype,{
	__class__: nme.NME_assets_data_play_regular_ttf
});
nme.NME_assets_data_play_bold_ttf1 = function() {
	flash.text.Font.call(this);
};
$hxClasses["nme.NME_assets_data_play_bold_ttf1"] = nme.NME_assets_data_play_bold_ttf1;
nme.NME_assets_data_play_bold_ttf1.__name__ = ["nme","NME_assets_data_play_bold_ttf1"];
nme.NME_assets_data_play_bold_ttf1.__super__ = flash.text.Font;
nme.NME_assets_data_play_bold_ttf1.prototype = $extend(flash.text.Font.prototype,{
	__class__: nme.NME_assets_data_play_bold_ttf1
});
var openfl = {}
openfl.Assets = function() { }
$hxClasses["openfl.Assets"] = openfl.Assets;
openfl.Assets.__name__ = ["openfl","Assets"];
openfl.Assets.__properties__ = {get_type:"get_type",get_path:"get_path",get_library:"get_library",get_id:"get_id"}
openfl.Assets.initialize = function() {
	if(!openfl.Assets.initialized) {
		nme.AssetData.initialize();
		openfl.Assets.initialized = true;
	}
}
openfl.Assets.getBitmapData = function(id,useCache) {
	if(useCache == null) useCache = true;
	openfl.Assets.initialize();
	if(nme.AssetData.type.exists(id) && nme.AssetData.type.get(id) == openfl.AssetType.IMAGE) {
		if(useCache && openfl.Assets.cachedBitmapData.exists(id)) return openfl.Assets.cachedBitmapData.get(id); else {
			var data = (js.Boot.__cast(ApplicationMain.loaders.get(nme.AssetData.path.get(id)).contentLoaderInfo.content , flash.display.Bitmap)).bitmapData;
			if(useCache) openfl.Assets.cachedBitmapData.set(id,data);
			return data;
		}
	} else if(id.indexOf(":") > -1) {
		var libraryName = HxOverrides.substr(id,0,id.indexOf(":"));
		var symbolName = HxOverrides.substr(id,id.indexOf(":") + 1,null);
		if(nme.AssetData.library.exists(libraryName)) {
		} else console.log("[openfl.Assets] There is no asset library named \"" + libraryName + "\"");
	} else console.log("[openfl.Assets] There is no BitmapData asset with an ID of \"" + id + "\"");
	return null;
}
openfl.Assets.getBytes = function(id) {
	openfl.Assets.initialize();
	if(nme.AssetData.type.exists(id)) {
		var bytes = null;
		var data = ApplicationMain.urlLoaders.get(nme.AssetData.path.get(id)).data;
		if(js.Boot.__instanceof(data,String)) {
			var bytes1 = new flash.utils.ByteArray();
			bytes1.writeUTFBytes(data);
		} else if(js.Boot.__instanceof(data,flash.utils.ByteArray)) bytes = data; else bytes = null;
		if(bytes != null) {
			bytes.position = 0;
			return bytes;
		} else return null;
	} else console.log("[openfl.Assets] There is no String or ByteArray asset with an ID of \"" + id + "\"");
	return null;
}
openfl.Assets.getFont = function(id) {
	openfl.Assets.initialize();
	if(nme.AssetData.type.exists(id) && nme.AssetData.type.get(id) == openfl.AssetType.FONT) return js.Boot.__cast(Type.createInstance(nme.AssetData.className.get(id),[]) , flash.text.Font); else console.log("[openfl.Assets] There is no Font asset with an ID of \"" + id + "\"");
	return null;
}
openfl.Assets.getSound = function(id) {
	openfl.Assets.initialize();
	if(nme.AssetData.type.exists(id)) {
		var type = nme.AssetData.type.get(id);
		if(type == openfl.AssetType.SOUND || type == openfl.AssetType.MUSIC) return new flash.media.Sound(new flash.net.URLRequest(nme.AssetData.path.get(id)));
	}
	console.log("[openfl.Assets] There is no Sound asset with an ID of \"" + id + "\"");
	return null;
}
openfl.Assets.getText = function(id) {
	var bytes = openfl.Assets.getBytes(id);
	if(bytes == null) return null; else return bytes.readUTFBytes(bytes.length);
}
openfl.Assets.resolveClass = function(name) {
	name = StringTools.replace(name,"native.","flash.");
	name = StringTools.replace(name,"browser.","flash.");
	return Type.resolveClass(name);
}
openfl.Assets.resolveEnum = function(name) {
	name = StringTools.replace(name,"native.","flash.");
	name = StringTools.replace(name,"browser.","flash.");
	return Type.resolveEnum(name);
}
openfl.Assets.get_id = function() {
	openfl.Assets.initialize();
	var ids = [];
	var $it0 = nme.AssetData.type.keys();
	while( $it0.hasNext() ) {
		var key = $it0.next();
		ids.push(key);
	}
	return ids;
}
openfl.Assets.get_library = function() {
	openfl.Assets.initialize();
	return nme.AssetData.library;
}
openfl.Assets.get_path = function() {
	openfl.Assets.initialize();
	return nme.AssetData.path;
}
openfl.Assets.get_type = function() {
	openfl.Assets.initialize();
	return nme.AssetData.type;
}
openfl.AssetType = $hxClasses["openfl.AssetType"] = { __ename__ : ["openfl","AssetType"], __constructs__ : ["BINARY","FONT","IMAGE","MUSIC","SOUND","TEXT"] }
openfl.AssetType.BINARY = ["BINARY",0];
openfl.AssetType.BINARY.toString = $estr;
openfl.AssetType.BINARY.__enum__ = openfl.AssetType;
openfl.AssetType.FONT = ["FONT",1];
openfl.AssetType.FONT.toString = $estr;
openfl.AssetType.FONT.__enum__ = openfl.AssetType;
openfl.AssetType.IMAGE = ["IMAGE",2];
openfl.AssetType.IMAGE.toString = $estr;
openfl.AssetType.IMAGE.__enum__ = openfl.AssetType;
openfl.AssetType.MUSIC = ["MUSIC",3];
openfl.AssetType.MUSIC.toString = $estr;
openfl.AssetType.MUSIC.__enum__ = openfl.AssetType;
openfl.AssetType.SOUND = ["SOUND",4];
openfl.AssetType.SOUND.toString = $estr;
openfl.AssetType.SOUND.__enum__ = openfl.AssetType;
openfl.AssetType.TEXT = ["TEXT",5];
openfl.AssetType.TEXT.toString = $estr;
openfl.AssetType.TEXT.__enum__ = openfl.AssetType;
openfl.LibraryType = $hxClasses["openfl.LibraryType"] = { __ename__ : ["openfl","LibraryType"], __constructs__ : ["SWF","SWF_LITE","XFL"] }
openfl.LibraryType.SWF = ["SWF",0];
openfl.LibraryType.SWF.toString = $estr;
openfl.LibraryType.SWF.__enum__ = openfl.LibraryType;
openfl.LibraryType.SWF_LITE = ["SWF_LITE",1];
openfl.LibraryType.SWF_LITE.toString = $estr;
openfl.LibraryType.SWF_LITE.__enum__ = openfl.LibraryType;
openfl.LibraryType.XFL = ["XFL",2];
openfl.LibraryType.XFL.toString = $estr;
openfl.LibraryType.XFL.__enum__ = openfl.LibraryType;
openfl.display = {}
openfl.display.Tilesheet = function(image) {
	this.nmeBitmap = image;
	this.nmeCenterPoints = new Array();
	this.nmeTileRects = new Array();
};
$hxClasses["openfl.display.Tilesheet"] = openfl.display.Tilesheet;
openfl.display.Tilesheet.__name__ = ["openfl","display","Tilesheet"];
openfl.display.Tilesheet.prototype = {
	drawTiles: function(graphics,tileData,smooth,flags) {
		if(flags == null) flags = 0;
		if(smooth == null) smooth = false;
		graphics.drawTiles(this,tileData,smooth,flags);
	}
	,addTileRect: function(rectangle,centerPoint) {
		this.nmeTileRects.push(rectangle);
		if(centerPoint == null) centerPoint = new flash.geom.Point();
		this.nmeCenterPoints.push(centerPoint);
		return this.nmeTileRects.length - 1;
	}
	,__class__: openfl.display.Tilesheet
}
org.flixel.FlxAssets = function() { }
$hxClasses["org.flixel.FlxAssets"] = org.flixel.FlxAssets;
org.flixel.FlxAssets.__name__ = ["org","flixel","FlxAssets"];
org.flixel.FlxAssets.drawLogo = function(graph) {
	graph.beginFill(47394);
	graph.moveTo(50,13);
	graph.lineTo(51,13);
	graph.lineTo(87,50);
	graph.lineTo(87,51);
	graph.lineTo(51,87);
	graph.lineTo(50,87);
	graph.lineTo(13,51);
	graph.lineTo(13,50);
	graph.lineTo(50,13);
	graph.endFill();
	graph.beginFill(16761138);
	graph.moveTo(0,0);
	graph.lineTo(25,0);
	graph.lineTo(50,13);
	graph.lineTo(13,50);
	graph.lineTo(0,25);
	graph.lineTo(0,0);
	graph.endFill();
	graph.beginFill(16066382);
	graph.moveTo(100,0);
	graph.lineTo(75,0);
	graph.lineTo(51,13);
	graph.lineTo(87,50);
	graph.lineTo(100,25);
	graph.lineTo(100,0);
	graph.endFill();
	graph.beginFill(3555839);
	graph.moveTo(0,100);
	graph.lineTo(25,100);
	graph.lineTo(50,87);
	graph.lineTo(13,51);
	graph.lineTo(0,75);
	graph.lineTo(0,100);
	graph.endFill();
	graph.beginFill(314875);
	graph.moveTo(100,100);
	graph.lineTo(75,100);
	graph.lineTo(51,87);
	graph.lineTo(87,51);
	graph.lineTo(100,75);
	graph.lineTo(100,100);
	graph.endFill();
}
org.flixel.FlxAssets.getBitmapData = function(id) {
	return openfl.Assets.getBitmapData(id);
}
org.flixel.FlxAssets.cacheSounds = function() {
}
org.flixel.FlxAssets.addBitmapDataToCache = function(key,bmd) {
	Reflect.field(openfl.Assets,"initialize").apply(openfl.Assets,[]);
	var resourceTypes = Reflect.getProperty(openfl.Assets,"resourceTypes");
	resourceTypes.set(key,"image");
	openfl.Assets.cachedBitmapData.set(key,bmd);
}
org.flixel.FlxCamera = function(X,Y,Width,Height,Zoom) {
	if(Zoom == null) Zoom = 0;
	org.flixel.FlxBasic.call(this);
	this._scrollTarget = new org.flixel.util.FlxPoint();
	this.x = X;
	this.y = Y;
	this.set_width(Width);
	this.set_height(Height);
	this.target = null;
	this.deadzone = null;
	this.scroll = new org.flixel.util.FlxPoint();
	this._point = new org.flixel.util.FlxPoint();
	this.bounds = null;
	this.bgColor = org.flixel.FlxG.get_bgColor();
	this._canvas = new flash.display.Sprite();
	this._canvas.set_x(-this.width * 0.5);
	this._canvas.set_y(-this.height * 0.5);
	this.set_color(-1);
	this._flashSprite = new flash.display.Sprite();
	this.set_zoom(Zoom);
	this._flashOffsetX = this.width * 0.5 * this.zoom;
	this._flashOffsetY = this.height * 0.5 * this.zoom;
	this._flashSprite.set_x(this.x + this._flashOffsetX);
	this._flashSprite.set_y(this.y + this._flashOffsetY);
	this._flashSprite.addChild(this._canvas);
	this._flashRect = new flash.geom.Rectangle(0,0,this.width,this.height);
	this._flashPoint = new flash.geom.Point();
	this._fxFlashColor = 0;
	this._fxFlashDuration = 0.0;
	this._fxFlashComplete = null;
	this._fxFlashAlpha = 0.0;
	this._fxFadeColor = 0;
	this._fxFadeDuration = 0.0;
	this._fxFadeComplete = null;
	this._fxFadeAlpha = 0.0;
	this._fxShakeIntensity = 0.0;
	this._fxShakeDuration = 0.0;
	this._fxShakeComplete = null;
	this._fxShakeOffset = new org.flixel.util.FlxPoint();
	this._fxShakeDirection = 0;
	this._canvas.set_scrollRect(new flash.geom.Rectangle(0,0,this.width * this.zoom,this.height * this.zoom));
	this._debugLayer = new flash.display.Sprite();
	this._debugLayer.set_x(-this.width * 0.5);
	this._debugLayer.set_y(-this.height * 0.5);
	this._debugLayer.set_scaleX(1);
	this._flashSprite.addChild(this._debugLayer);
	this._currentStackItem = new org.flixel.system.layer.DrawStackItem();
	this._headOfDrawStack = this._currentStackItem;
	this._fxFadeIn = false;
	this.set_alpha(1.0);
	this.set_angle(0.0);
	this.set_antialiasing(false);
};
$hxClasses["org.flixel.FlxCamera"] = org.flixel.FlxCamera;
org.flixel.FlxCamera.__name__ = ["org","flixel","FlxCamera"];
org.flixel.FlxCamera.__super__ = org.flixel.FlxBasic;
org.flixel.FlxCamera.prototype = $extend(org.flixel.FlxBasic.prototype,{
	set_height: function(val) {
		if(val > 0) {
			this.height = val;
			if(this._canvas != null) {
				var rect = this._canvas.get_scrollRect();
				rect.height = val * this.zoom;
				this._canvas.set_scrollRect(rect);
				this._flashOffsetY = this.height * 0.5 * this.zoom;
				this._debugLayer.set_y(this._canvas.set_y(-this.height * 0.5));
			}
		}
		return val;
	}
	,set_width: function(val) {
		if(val > 0) {
			this.width = val;
			if(this._canvas != null) {
				var rect = this._canvas.get_scrollRect();
				rect.width = val * this.zoom;
				this._canvas.set_scrollRect(rect);
				this._flashOffsetX = this.width * 0.5 * this.zoom;
				this._debugLayer.set_x(this._canvas.set_x(-this.width * 0.5));
			}
		}
		return val;
	}
	,drawFX: function() {
		var alphaComponent;
		if(this._fxFlashAlpha > 0.0) {
			alphaComponent = this._fxFlashColor >> 24 & 255;
			this.fill(this._fxFlashColor & 16777215,true,(alphaComponent <= 0?255:alphaComponent) * this._fxFlashAlpha / 255,this._canvas.get_graphics());
		}
		if(this._fxFadeAlpha > 0.0) {
			alphaComponent = this._fxFadeColor >> 24 & 255;
			this.fill(this._fxFadeColor & 16777215,true,(alphaComponent <= 0?255:alphaComponent) * this._fxFadeAlpha / 255,this._canvas.get_graphics());
		}
		if(this._fxShakeOffset.x != 0 || this._fxShakeOffset.y != 0) {
			var _g = this._flashSprite;
			_g.set_x(_g.get_x() + this._fxShakeOffset.x);
			var _g = this._flashSprite;
			_g.set_y(_g.get_y() + this._fxShakeOffset.y);
		}
	}
	,fill: function(Color,BlendAlpha,FxAlpha,graphics) {
		if(FxAlpha == null) FxAlpha = 1.0;
		if(BlendAlpha == null) BlendAlpha = true;
		var targetGraphics = graphics == null?this._canvas.get_graphics():graphics;
		Color = Color & 16777215;
		targetGraphics.beginFill(Color,FxAlpha);
		targetGraphics.drawRect(0,0,this.width,this.height);
		targetGraphics.endFill();
	}
	,getContainerSprite: function() {
		return this._flashSprite;
	}
	,setScale: function(X,Y) {
		this._flashSprite.set_scaleX(X);
		this._flashSprite.set_scaleY(Y);
		this._flashOffsetX = this.width * 0.5 * X;
		this._flashOffsetY = this.height * 0.5 * Y;
	}
	,getScale: function() {
		return this._point.make(this._flashSprite.get_scaleX(),this._flashSprite.get_scaleY());
	}
	,set_antialiasing: function(Antialiasing) {
		this.antialiasing = Antialiasing;
		return Antialiasing;
	}
	,set_color: function(Color) {
		this.color = Color & 16777215;
		var colorTransform = this._canvas.transform.colorTransform;
		colorTransform.redMultiplier = (this.color >> 16) / 255;
		colorTransform.greenMultiplier = (this.color >> 8 & 255) / 255;
		colorTransform.blueMultiplier = (this.color & 255) / 255;
		this._canvas.transform.set_colorTransform(colorTransform);
		return Color;
	}
	,set_angle: function(Angle) {
		this.angle = Angle;
		this._flashSprite.set_rotation(Angle);
		return Angle;
	}
	,set_alpha: function(Alpha) {
		this.alpha = org.flixel.util.FlxMath.bound(Alpha,0,1);
		this._canvas.alpha = Alpha;
		return Alpha;
	}
	,set_zoom: function(Zoom) {
		if(Zoom == 0) this.zoom = org.flixel.FlxCamera.defaultZoom; else this.zoom = Zoom;
		this.setScale(this.zoom,this.zoom);
		return this.zoom;
	}
	,copyFrom: function(Camera) {
		if(Camera.bounds == null) this.bounds = null; else {
			if(this.bounds == null) this.bounds = new org.flixel.util.FlxRect();
			this.bounds.copyFrom(Camera.bounds);
		}
		this.target = Camera.target;
		if(this.target != null) {
			if(Camera.deadzone == null) this.deadzone = null; else {
				if(this.deadzone == null) this.deadzone = new org.flixel.util.FlxRect();
				this.deadzone.copyFrom(Camera.deadzone);
			}
		}
		return this;
	}
	,stopFX: function() {
		this._fxFlashAlpha = 0.0;
		this._fxFadeAlpha = 0.0;
		this._fxShakeDuration = 0;
		this._flashSprite.set_x(this.x + this._flashOffsetX);
		this._flashSprite.set_y(this.y + this._flashOffsetY);
	}
	,shake: function(Intensity,Duration,OnComplete,Force,Direction) {
		if(Direction == null) Direction = 0;
		if(Force == null) Force = true;
		if(Duration == null) Duration = 0.5;
		if(Intensity == null) Intensity = 0.05;
		if(!Force && (this._fxShakeOffset.x != 0 || this._fxShakeOffset.y != 0)) return;
		this._fxShakeIntensity = Intensity;
		this._fxShakeDuration = Duration;
		this._fxShakeComplete = OnComplete;
		this._fxShakeDirection = Direction;
		this._fxShakeOffset.make(null,null);
	}
	,fade: function(Color,Duration,FadeIn,OnComplete,Force) {
		if(Force == null) Force = false;
		if(FadeIn == null) FadeIn = false;
		if(Duration == null) Duration = 1;
		if(Color == null) Color = -16777216;
		if(!Force && this._fxFadeAlpha > 0.0) return;
		this._fxFadeColor = Color;
		if(Duration <= 0) Duration = 0.0000000000000001;
		this._fxFadeIn = FadeIn;
		this._fxFadeDuration = Duration;
		this._fxFadeComplete = OnComplete;
		if(this._fxFadeIn) this._fxFadeAlpha = 0.999999; else this._fxFadeAlpha = 0.0000000000000001;
	}
	,flash: function(Color,Duration,OnComplete,Force) {
		if(Force == null) Force = false;
		if(Duration == null) Duration = 1;
		if(Color == null) Color = -1;
		if(!Force && this._fxFlashAlpha > 0.0) return;
		this._fxFlashColor = Color;
		if(Duration <= 0) Duration = 0.0000000000000001;
		this._fxFlashDuration = Duration;
		this._fxFlashComplete = OnComplete;
		this._fxFlashAlpha = 1.0;
	}
	,setBounds: function(X,Y,Width,Height,UpdateWorld) {
		if(UpdateWorld == null) UpdateWorld = false;
		if(Height == null) Height = 0;
		if(Width == null) Width = 0;
		if(Y == null) Y = 0;
		if(X == null) X = 0;
		if(this.bounds == null) this.bounds = new org.flixel.util.FlxRect();
		this.bounds.make(X,Y,Width,Height);
		if(UpdateWorld) org.flixel.FlxG.worldBounds.copyFrom(this.bounds);
		this.update();
	}
	,focusOn: function(point) {
		this.scroll.make(point.x - this.width * 0.5,point.y - this.height * 0.5);
	}
	,followAdjust: function(LeadX,LeadY) {
		if(LeadY == null) LeadY = 0;
		if(LeadX == null) LeadX = 0;
		this.followLead = new flash.geom.Point(LeadX,LeadY);
	}
	,follow: function(Target,Style,Offset,Lerp) {
		if(Lerp == null) Lerp = 0;
		if(Style == null) Style = 0;
		this.style = Style;
		this.target = Target;
		this.followLerp = Lerp;
		var helper;
		var w = 0;
		var h = 0;
		this._lastTargetPosition = null;
		switch(Style) {
		case 1:
			var w1 = this.width / 8 + (Offset != null?Offset.x:0);
			var h1 = this.height / 3 + (Offset != null?Offset.y:0);
			this.deadzone = new org.flixel.util.FlxRect((this.width - w1) / 2,(this.height - h1) / 2 - h1 * 0.25,w1,h1);
			break;
		case 2:
			helper = Math.max(this.width,this.height) / 4;
			this.deadzone = new org.flixel.util.FlxRect((this.width - helper) / 2,(this.height - helper) / 2,helper,helper);
			break;
		case 3:
			helper = Math.max(this.width,this.height) / 8;
			this.deadzone = new org.flixel.util.FlxRect((this.width - helper) / 2,(this.height - helper) / 2,helper,helper);
			break;
		case 0:
			if(this.target != null) {
				w = this.target.width + (Offset != null?Offset.x:0);
				h = this.target.height + (Offset != null?Offset.y:0);
			}
			this.deadzone = new org.flixel.util.FlxRect((this.width - w) / 2,(this.height - h) / 2 - h * 0.25,w,h);
			break;
		case 4:
			this.deadzone = new org.flixel.util.FlxRect(0,0,this.width,this.height);
			break;
		default:
			this.deadzone = null;
		}
	}
	,update: function() {
		if(org.flixel.FlxG.paused) return;
		if(this.target != null) {
			if(this.deadzone == null) this.focusOn(this.target.getMidpoint(this._point)); else {
				var edge;
				var targetX = this.target.x;
				var targetY = this.target.y;
				if(this.style == 4) {
					if(targetX > this.scroll.x + this.width) this._scrollTarget.x += this.width; else if(targetX < this.scroll.x) this._scrollTarget.x -= this.width;
					if(targetY > this.scroll.y + this.height) this._scrollTarget.y += this.height; else if(targetY < this.scroll.y) this._scrollTarget.y -= this.height;
				} else {
					edge = targetX - this.deadzone.x;
					if(this._scrollTarget.x > edge) this._scrollTarget.x = edge;
					edge = targetX + this.target.width - this.deadzone.x - this.deadzone.width;
					if(this._scrollTarget.x < edge) this._scrollTarget.x = edge;
					edge = targetY - this.deadzone.y;
					if(this._scrollTarget.y > edge) this._scrollTarget.y = edge;
					edge = targetY + this.target.height - this.deadzone.y - this.deadzone.height;
					if(this._scrollTarget.y < edge) this._scrollTarget.y = edge;
				}
				if(this.followLead != null && js.Boot.__instanceof(this.target,org.flixel.FlxSprite)) {
					if(this._lastTargetPosition == null) this._lastTargetPosition = new org.flixel.util.FlxPoint(this.target.x,this.target.y);
					this._scrollTarget.x += (this.target.x - this._lastTargetPosition.x) * this.followLead.x;
					this._scrollTarget.y += (this.target.y - this._lastTargetPosition.y) * this.followLead.y;
					this._lastTargetPosition.x = this.target.x;
					this._lastTargetPosition.y = this.target.y;
				}
				if(this.followLerp == 0) {
					this.scroll.x = this._scrollTarget.x;
					this.scroll.y = this._scrollTarget.y;
				} else {
					this.scroll.x += (this._scrollTarget.x - this.scroll.x) * org.flixel.FlxG.elapsed / (org.flixel.FlxG.elapsed + this.followLerp * org.flixel.FlxG.elapsed);
					this.scroll.y += (this._scrollTarget.y - this.scroll.y) * org.flixel.FlxG.elapsed / (org.flixel.FlxG.elapsed + this.followLerp * org.flixel.FlxG.elapsed);
				}
			}
		}
		if(this.bounds != null) {
			if(this.scroll.x < this.bounds.get_left()) this.scroll.x = this.bounds.get_left();
			if(this.scroll.x > this.bounds.get_right() - this.width) this.scroll.x = this.bounds.get_right() - this.width;
			if(this.scroll.y < this.bounds.get_top()) this.scroll.y = this.bounds.get_top();
			if(this.scroll.y > this.bounds.get_bottom() - this.height) this.scroll.y = this.bounds.get_bottom() - this.height;
		}
		if(this._fxFlashAlpha > 0.0) {
			this._fxFlashAlpha -= org.flixel.FlxG.elapsed / this._fxFlashDuration;
			if(this._fxFlashAlpha <= 0 && this._fxFlashComplete != null) this._fxFlashComplete();
		}
		if(this._fxFadeAlpha > 0.0 && this._fxFadeAlpha < 1.0) {
			if(this._fxFadeIn) {
				this._fxFadeAlpha -= org.flixel.FlxG.elapsed / this._fxFadeDuration;
				if(this._fxFadeAlpha <= 0.0) {
					this._fxFadeAlpha = 0.0;
					if(this._fxFadeComplete != null) this._fxFadeComplete();
				}
			} else {
				this._fxFadeAlpha += org.flixel.FlxG.elapsed / this._fxFadeDuration;
				if(this._fxFadeAlpha >= 1.0) {
					this._fxFadeAlpha = 1.0;
					if(this._fxFadeComplete != null) this._fxFadeComplete();
				}
			}
		}
		if(this._fxShakeDuration > 0) {
			this._fxShakeDuration -= org.flixel.FlxG.elapsed;
			if(this._fxShakeDuration <= 0) {
				this._fxShakeOffset.make(null,null);
				if(this._fxShakeComplete != null) this._fxShakeComplete();
			} else {
				if(this._fxShakeDirection == 0 || this._fxShakeDirection == 1) this._fxShakeOffset.x = ((function($this) {
					var $r;
					org.flixel.util.FlxRandom.globalSeed = 69621 * (org.flixel.util.FlxRandom.globalSeed * 2147483647 | 0) % 2147483647 / 2147483647;
					if(org.flixel.util.FlxRandom.globalSeed <= 0) org.flixel.util.FlxRandom.globalSeed += 1;
					$r = org.flixel.util.FlxRandom.globalSeed;
					return $r;
				}(this)) * this._fxShakeIntensity * this.width * 2 - this._fxShakeIntensity * this.width) * this.zoom;
				if(this._fxShakeDirection == 0 || this._fxShakeDirection == 2) this._fxShakeOffset.y = ((function($this) {
					var $r;
					org.flixel.util.FlxRandom.globalSeed = 69621 * (org.flixel.util.FlxRandom.globalSeed * 2147483647 | 0) % 2147483647 / 2147483647;
					if(org.flixel.util.FlxRandom.globalSeed <= 0) org.flixel.util.FlxRandom.globalSeed += 1;
					$r = org.flixel.util.FlxRandom.globalSeed;
					return $r;
				}(this)) * this._fxShakeIntensity * this.height * 2 - this._fxShakeIntensity * this.height) * this.zoom;
			}
			if(this.target != null) {
				this._flashSprite.set_x(this.x + this._flashOffsetX);
				this._flashSprite.set_y(this.y + this._flashOffsetY);
			}
		}
	}
	,destroy: function() {
		this.target = null;
		this.scroll = null;
		this.deadzone = null;
		this.bounds = null;
		this._flashRect = null;
		this._flashPoint = null;
		this._fxFlashComplete = null;
		this._fxFadeComplete = null;
		this._fxShakeComplete = null;
		this._fxShakeOffset = null;
		this._flashSprite.removeChild(this._debugLayer);
		this._flashSprite.removeChild(this._canvas);
		var canvasNumChildren = this._canvas.nmeChildren.length;
		var _g1 = 0, _g = canvasNumChildren;
		while(_g1 < _g) {
			var i = _g1++;
			this._canvas.removeChildAt(0);
		}
		this._debugLayer = null;
		this._canvas = null;
		this.clearDrawStack();
		this._headOfDrawStack.dispose();
		this._headOfDrawStack = null;
		this._currentStackItem = null;
		this._flashSprite = null;
		org.flixel.FlxBasic.prototype.destroy.call(this);
	}
	,render: function() {
		var currItem = this._headOfDrawStack;
		while(currItem != null) {
			var data = currItem.drawData;
			var dataLen = data.length;
			var position = currItem.position;
			if(position > 0) {
				if(dataLen != position) data.splice(position,dataLen - position);
				var tempFlags = 16;
				if(currItem.useAlpha) tempFlags |= 8;
				currItem.atlas._tileSheetData.tileSheet.drawTiles(this._canvas.get_graphics(),data,this.antialiasing,tempFlags);
				org.flixel.system.layer.TileSheetExt._DRAWCALLS++;
			}
			currItem = currItem.next;
		}
	}
	,clearDrawStack: function() {
		var currItem = this._headOfDrawStack.next;
		while(currItem != null) {
			currItem.atlas = null;
			currItem.initialized = false;
			currItem.position = 0;
			var newStorageHead = currItem;
			currItem = currItem.next;
			if(org.flixel.FlxCamera._storageHead == null) {
				org.flixel.FlxCamera._storageHead = newStorageHead;
				newStorageHead.next = null;
			} else {
				newStorageHead.next = org.flixel.FlxCamera._storageHead;
				org.flixel.FlxCamera._storageHead = newStorageHead;
			}
		}
		this._headOfDrawStack.reset();
		this._headOfDrawStack.next = null;
		this._currentStackItem = this._headOfDrawStack;
	}
	,getDrawStackItem: function(ObjAtlas,UseAlpha) {
		var itemToReturn = null;
		if(this._currentStackItem.initialized == false) {
			this._headOfDrawStack = this._currentStackItem;
			this._currentStackItem.atlas = ObjAtlas;
			this._currentStackItem.useAlpha = UseAlpha;
			itemToReturn = this._currentStackItem;
		} else if(this._currentStackItem.atlas == ObjAtlas && this._currentStackItem.useAlpha == UseAlpha) itemToReturn = this._currentStackItem;
		if(itemToReturn == null) {
			var newItem = null;
			if(org.flixel.FlxCamera._storageHead != null) {
				newItem = org.flixel.FlxCamera._storageHead;
				var newHead = org.flixel.FlxCamera._storageHead.next;
				newItem.next = null;
				org.flixel.FlxCamera._storageHead = newHead;
			} else newItem = new org.flixel.system.layer.DrawStackItem();
			newItem.atlas = ObjAtlas;
			newItem.useAlpha = UseAlpha;
			this._currentStackItem.next = newItem;
			this._currentStackItem = newItem;
			itemToReturn = this._currentStackItem;
		}
		itemToReturn.initialized = true;
		return itemToReturn;
	}
	,__class__: org.flixel.FlxCamera
	,__properties__: $extend(org.flixel.FlxBasic.prototype.__properties__,{set_width:"set_width",set_height:"set_height",set_zoom:"set_zoom",set_alpha:"set_alpha",set_angle:"set_angle",set_color:"set_color",set_antialiasing:"set_antialiasing"})
});
org.flixel.FlxTypedEmitter = function(X,Y,Size) {
	if(Size == null) Size = 0;
	if(Y == null) Y = 0;
	if(X == null) X = 0;
	this._waitForKill = false;
	this._timer = 0;
	org.flixel.FlxTypedGroup.call(this,Size);
	this.xPosition = new org.flixel.Bounds(X,0);
	this.yPosition = new org.flixel.Bounds(Y,0);
	this.xVelocity = new org.flixel.Bounds(-100,100);
	this.yVelocity = new org.flixel.Bounds(-100,100);
	this.rotation = new org.flixel.Bounds(-360,360);
	this.startScale = new org.flixel.Bounds(1,1);
	this.endScale = new org.flixel.Bounds(1,1);
	this.startAlpha = new org.flixel.Bounds(1.0,1.0);
	this.endAlpha = new org.flixel.Bounds(1.0,1.0);
	this.startRed = new org.flixel.Bounds(1.0,1.0);
	this.startGreen = new org.flixel.Bounds(1.0,1.0);
	this.startBlue = new org.flixel.Bounds(1.0,1.0);
	this.endRed = new org.flixel.Bounds(1.0,1.0);
	this.endGreen = new org.flixel.Bounds(1.0,1.0);
	this.endBlue = new org.flixel.Bounds(1.0,1.0);
	this.blend = null;
	this.acceleration = new org.flixel.util.FlxPoint(0,0);
	this._particleClass = org.flixel.FlxParticle;
	this.particleDrag = new org.flixel.util.FlxPoint();
	this.frequency = 0.1;
	this.life = new org.flixel.Bounds(3,3);
	this.bounce = 0;
	this._quantity = 0;
	this._counter = 0;
	this._explode = true;
	this.on = false;
	this.exists = false;
	this._point = new org.flixel.util.FlxPoint();
};
$hxClasses["org.flixel.FlxTypedEmitter"] = org.flixel.FlxTypedEmitter;
org.flixel.FlxTypedEmitter.__name__ = ["org","flixel","FlxTypedEmitter"];
org.flixel.FlxTypedEmitter.__super__ = org.flixel.FlxTypedGroup;
org.flixel.FlxTypedEmitter.prototype = $extend(org.flixel.FlxTypedGroup.prototype,{
	set_lifespan: function(value) {
		var dl = this.life.max - this.life.min;
		this.life.min = value;
		this.life.max = value + dl;
		return value;
	}
	,get_lifespan: function() {
		return this.life.min;
	}
	,set_maxRotation: function(value) {
		this.rotation.max = value;
		return value;
	}
	,get_maxRotation: function() {
		return this.rotation.max;
	}
	,set_minRotation: function(value) {
		this.rotation.min = value;
		return value;
	}
	,get_minRotation: function() {
		return this.rotation.min;
	}
	,set_gravity: function(value) {
		this.acceleration.y = value;
		return value;
	}
	,get_gravity: function() {
		return this.acceleration.y;
	}
	,set_y: function(value) {
		this.yPosition.min = value;
		return value;
	}
	,get_y: function() {
		return this.yPosition.min;
	}
	,set_x: function(value) {
		this.xPosition.min = value;
		return value;
	}
	,get_x: function() {
		return this.xPosition.min;
	}
	,set_height: function(value) {
		this.yPosition.max = value;
		return value;
	}
	,get_height: function() {
		return this.yPosition.max;
	}
	,set_width: function(value) {
		this.xPosition.max = value;
		return value;
	}
	,get_width: function() {
		return this.xPosition.max;
	}
	,set_particleClass: function(value) {
		return this._particleClass = value;
	}
	,get_particleClass: function() {
		return this._particleClass;
	}
	,at: function(Object) {
		Object.getMidpoint(this._point);
		this.set_x(this._point.x - ((this.get_width() | 0) >> 1));
		this.set_y(this._point.y - ((this.get_height() | 0) >> 1));
	}
	,setColor: function(start,end) {
		if(end == null) end = 16777215;
		if(start == null) start = 16777215;
		start &= 16777215;
		end &= 16777215;
		var startRedComp = (start >> 16 & 255) / 255;
		var startGreenComp = (start >> 8 & 255) / 255;
		var startBlueComp = (start & 255) / 255;
		var endRedComp = (end >> 16 & 255) / 255;
		var endGreenComp = (end >> 8 & 255) / 255;
		var endBlueComp = (end & 255) / 255;
		this.startRed.min = this.startRed.max = startRedComp;
		this.startGreen.min = this.startGreen.max = startGreenComp;
		this.startBlue.min = this.startBlue.max = startBlueComp;
		this.endRed.min = this.endRed.max = endRedComp;
		this.endGreen.min = this.endGreen.max = endGreenComp;
		this.endBlue.min = this.endBlue.max = endBlueComp;
	}
	,setAlpha: function(startMin,startMax,endMin,endMax) {
		if(endMax == null) endMax = 1.0;
		if(endMin == null) endMin = 1.0;
		if(startMax == null) startMax = 1.0;
		if(startMin == null) startMin = 1.0;
		if(startMin < 0) startMin = 0;
		if(startMax < startMin) startMax = startMin;
		if(endMin < 0) endMin = 0;
		if(endMax < endMin) endMax = endMin;
		this.startAlpha.min = startMin;
		this.startAlpha.max = startMax;
		this.endAlpha.min = endMin;
		this.endAlpha.max = endMax;
	}
	,setScale: function(startMin,startMax,endMin,endMax) {
		if(endMax == null) endMax = 1;
		if(endMin == null) endMin = 1;
		if(startMax == null) startMax = 1;
		if(startMin == null) startMin = 1;
		if(startMax < startMin) startMax = startMin;
		if(endMax < endMin) endMax = endMin;
		this.startScale.min = startMin;
		this.startScale.max = startMax;
		this.endScale.min = endMin;
		this.endScale.max = endMax;
	}
	,setRotation: function(Min,Max) {
		if(Max == null) Max = 0;
		if(Min == null) Min = 0;
		if(Max < Min) Max = Min;
		this.rotation.min = Min;
		this.rotation.max = Max;
	}
	,setYSpeed: function(Min,Max) {
		if(Max == null) Max = 0;
		if(Min == null) Min = 0;
		if(Max < Min) Max = Min;
		this.yVelocity.min = Min;
		this.yVelocity.max = Max;
	}
	,setXSpeed: function(Min,Max) {
		if(Max == null) Max = 0;
		if(Min == null) Min = 0;
		if(Max < Min) Max = Min;
		this.xVelocity.min = Min;
		this.xVelocity.max = Max;
	}
	,setSize: function(Width,Height) {
		this.set_width(Width);
		this.set_height(Height);
	}
	,emitParticle: function() {
		var particle = this.recycle(this._particleClass);
		particle.elasticity = this.bounce;
		particle.reset(this.get_x() - ((particle.width | 0) >> 1) + (function($this) {
			var $r;
			org.flixel.util.FlxRandom.globalSeed = 69621 * (org.flixel.util.FlxRandom.globalSeed * 2147483647 | 0) % 2147483647 / 2147483647;
			if(org.flixel.util.FlxRandom.globalSeed <= 0) org.flixel.util.FlxRandom.globalSeed += 1;
			$r = org.flixel.util.FlxRandom.globalSeed;
			return $r;
		}(this)) * this.get_width(),this.get_y() - ((particle.height | 0) >> 1) + (function($this) {
			var $r;
			org.flixel.util.FlxRandom.globalSeed = 69621 * (org.flixel.util.FlxRandom.globalSeed * 2147483647 | 0) % 2147483647 / 2147483647;
			if(org.flixel.util.FlxRandom.globalSeed <= 0) org.flixel.util.FlxRandom.globalSeed += 1;
			$r = org.flixel.util.FlxRandom.globalSeed;
			return $r;
		}(this)) * this.get_height());
		particle.visible = true;
		if(this.life.min != this.life.max) particle.lifespan = particle.maxLifespan = this.life.min + (function($this) {
			var $r;
			org.flixel.util.FlxRandom.globalSeed = 69621 * (org.flixel.util.FlxRandom.globalSeed * 2147483647 | 0) % 2147483647 / 2147483647;
			if(org.flixel.util.FlxRandom.globalSeed <= 0) org.flixel.util.FlxRandom.globalSeed += 1;
			$r = org.flixel.util.FlxRandom.globalSeed;
			return $r;
		}(this)) * (this.life.max - this.life.min); else particle.lifespan = particle.maxLifespan = this.life.min;
		if(this.startAlpha.min != this.startAlpha.max) particle.startAlpha = this.startAlpha.min + (function($this) {
			var $r;
			org.flixel.util.FlxRandom.globalSeed = 69621 * (org.flixel.util.FlxRandom.globalSeed * 2147483647 | 0) % 2147483647 / 2147483647;
			if(org.flixel.util.FlxRandom.globalSeed <= 0) org.flixel.util.FlxRandom.globalSeed += 1;
			$r = org.flixel.util.FlxRandom.globalSeed;
			return $r;
		}(this)) * (this.startAlpha.max - this.startAlpha.min); else particle.startAlpha = this.startAlpha.min;
		particle.set_alpha(particle.startAlpha);
		var particleEndAlpha = this.endAlpha.min;
		if(this.endAlpha.min != this.endAlpha.max) particleEndAlpha = this.endAlpha.min + (function($this) {
			var $r;
			org.flixel.util.FlxRandom.globalSeed = 69621 * (org.flixel.util.FlxRandom.globalSeed * 2147483647 | 0) % 2147483647 / 2147483647;
			if(org.flixel.util.FlxRandom.globalSeed <= 0) org.flixel.util.FlxRandom.globalSeed += 1;
			$r = org.flixel.util.FlxRandom.globalSeed;
			return $r;
		}(this)) * (this.endAlpha.max - this.endAlpha.min);
		if(particleEndAlpha != particle.startAlpha) {
			particle.useFading = true;
			particle.rangeAlpha = particleEndAlpha - particle.startAlpha;
		} else {
			particle.useFading = false;
			particle.rangeAlpha = 0;
		}
		var startRedComp = particle.startRed = this.startRed.min;
		var startGreenComp = particle.startGreen = this.startGreen.min;
		var startBlueComp = particle.startBlue = this.startBlue.min;
		var endRedComp = this.endRed.min;
		var endGreenComp = this.endGreen.min;
		var endBlueComp = this.endBlue.min;
		if(this.startRed.min != this.startRed.max) particle.startRed = startRedComp = this.startRed.min + (function($this) {
			var $r;
			org.flixel.util.FlxRandom.globalSeed = 69621 * (org.flixel.util.FlxRandom.globalSeed * 2147483647 | 0) % 2147483647 / 2147483647;
			if(org.flixel.util.FlxRandom.globalSeed <= 0) org.flixel.util.FlxRandom.globalSeed += 1;
			$r = org.flixel.util.FlxRandom.globalSeed;
			return $r;
		}(this)) * (this.startRed.max - this.startRed.min);
		if(this.startGreen.min != this.startGreen.max) particle.startGreen = startGreenComp = this.startGreen.min + (function($this) {
			var $r;
			org.flixel.util.FlxRandom.globalSeed = 69621 * (org.flixel.util.FlxRandom.globalSeed * 2147483647 | 0) % 2147483647 / 2147483647;
			if(org.flixel.util.FlxRandom.globalSeed <= 0) org.flixel.util.FlxRandom.globalSeed += 1;
			$r = org.flixel.util.FlxRandom.globalSeed;
			return $r;
		}(this)) * (this.startGreen.max - this.startGreen.min);
		if(this.startBlue.min != this.startBlue.max) particle.startBlue = startBlueComp = this.startBlue.min + (function($this) {
			var $r;
			org.flixel.util.FlxRandom.globalSeed = 69621 * (org.flixel.util.FlxRandom.globalSeed * 2147483647 | 0) % 2147483647 / 2147483647;
			if(org.flixel.util.FlxRandom.globalSeed <= 0) org.flixel.util.FlxRandom.globalSeed += 1;
			$r = org.flixel.util.FlxRandom.globalSeed;
			return $r;
		}(this)) * (this.startBlue.max - this.startBlue.min);
		if(this.endRed.min != this.endRed.max) endRedComp = this.endRed.min + (function($this) {
			var $r;
			org.flixel.util.FlxRandom.globalSeed = 69621 * (org.flixel.util.FlxRandom.globalSeed * 2147483647 | 0) % 2147483647 / 2147483647;
			if(org.flixel.util.FlxRandom.globalSeed <= 0) org.flixel.util.FlxRandom.globalSeed += 1;
			$r = org.flixel.util.FlxRandom.globalSeed;
			return $r;
		}(this)) * (this.endRed.max - this.endRed.min);
		if(this.endGreen.min != this.endGreen.max) endGreenComp = this.endGreen.min + (function($this) {
			var $r;
			org.flixel.util.FlxRandom.globalSeed = 69621 * (org.flixel.util.FlxRandom.globalSeed * 2147483647 | 0) % 2147483647 / 2147483647;
			if(org.flixel.util.FlxRandom.globalSeed <= 0) org.flixel.util.FlxRandom.globalSeed += 1;
			$r = org.flixel.util.FlxRandom.globalSeed;
			return $r;
		}(this)) * (this.endGreen.max - this.endGreen.min);
		if(this.endBlue.min != this.endBlue.max) endBlueComp = this.endBlue.min + (function($this) {
			var $r;
			org.flixel.util.FlxRandom.globalSeed = 69621 * (org.flixel.util.FlxRandom.globalSeed * 2147483647 | 0) % 2147483647 / 2147483647;
			if(org.flixel.util.FlxRandom.globalSeed <= 0) org.flixel.util.FlxRandom.globalSeed += 1;
			$r = org.flixel.util.FlxRandom.globalSeed;
			return $r;
		}(this)) * (this.endBlue.max - this.endBlue.min);
		particle.rangeRed = endRedComp - startRedComp;
		particle.rangeGreen = endGreenComp - startGreenComp;
		particle.rangeBlue = endBlueComp - startBlueComp;
		particle.useColoring = false;
		if(particle.rangeRed != 0 || particle.rangeGreen != 0 || particle.rangeBlue != 0) particle.useColoring = true;
		if(this.startScale.min != this.startScale.max) particle.startScale = this.startScale.min + (function($this) {
			var $r;
			org.flixel.util.FlxRandom.globalSeed = 69621 * (org.flixel.util.FlxRandom.globalSeed * 2147483647 | 0) % 2147483647 / 2147483647;
			if(org.flixel.util.FlxRandom.globalSeed <= 0) org.flixel.util.FlxRandom.globalSeed += 1;
			$r = org.flixel.util.FlxRandom.globalSeed;
			return $r;
		}(this)) * (this.startScale.max - this.startScale.min); else particle.startScale = this.startScale.min;
		particle.scale.x = particle.scale.y = particle.startScale;
		var particleEndScale = this.endScale.min;
		if(this.endScale.min != this.endScale.max) particleEndScale = this.endScale.min + ((function($this) {
			var $r;
			org.flixel.util.FlxRandom.globalSeed = 69621 * (org.flixel.util.FlxRandom.globalSeed * 2147483647 | 0) % 2147483647 / 2147483647;
			if(org.flixel.util.FlxRandom.globalSeed <= 0) org.flixel.util.FlxRandom.globalSeed += 1;
			$r = org.flixel.util.FlxRandom.globalSeed;
			return $r;
		}(this)) * (this.endScale.max - this.endScale.min) | 0);
		if(particleEndScale != particle.startScale) {
			particle.useScaling = true;
			particle.rangeScale = particleEndScale - particle.startScale;
		} else {
			particle.useScaling = false;
			particle.rangeScale = 0;
		}
		particle.set_blend(this.blend);
		if(this.xVelocity.min != this.xVelocity.max) particle.velocity.x = this.xVelocity.min + (function($this) {
			var $r;
			org.flixel.util.FlxRandom.globalSeed = 69621 * (org.flixel.util.FlxRandom.globalSeed * 2147483647 | 0) % 2147483647 / 2147483647;
			if(org.flixel.util.FlxRandom.globalSeed <= 0) org.flixel.util.FlxRandom.globalSeed += 1;
			$r = org.flixel.util.FlxRandom.globalSeed;
			return $r;
		}(this)) * (this.xVelocity.max - this.xVelocity.min); else particle.velocity.x = this.xVelocity.min;
		if(this.yVelocity.min != this.yVelocity.max) particle.velocity.y = this.yVelocity.min + (function($this) {
			var $r;
			org.flixel.util.FlxRandom.globalSeed = 69621 * (org.flixel.util.FlxRandom.globalSeed * 2147483647 | 0) % 2147483647 / 2147483647;
			if(org.flixel.util.FlxRandom.globalSeed <= 0) org.flixel.util.FlxRandom.globalSeed += 1;
			$r = org.flixel.util.FlxRandom.globalSeed;
			return $r;
		}(this)) * (this.yVelocity.max - this.yVelocity.min); else particle.velocity.y = this.yVelocity.min;
		particle.acceleration.make(this.acceleration.x,this.acceleration.y);
		if(this.rotation.min != this.rotation.max) particle.angularVelocity = this.rotation.min + (function($this) {
			var $r;
			org.flixel.util.FlxRandom.globalSeed = 69621 * (org.flixel.util.FlxRandom.globalSeed * 2147483647 | 0) % 2147483647 / 2147483647;
			if(org.flixel.util.FlxRandom.globalSeed <= 0) org.flixel.util.FlxRandom.globalSeed += 1;
			$r = org.flixel.util.FlxRandom.globalSeed;
			return $r;
		}(this)) * (this.rotation.max - this.rotation.min); else particle.angularVelocity = this.rotation.min;
		if(particle.angularVelocity != 0) particle.angle = (function($this) {
			var $r;
			org.flixel.util.FlxRandom.globalSeed = 69621 * (org.flixel.util.FlxRandom.globalSeed * 2147483647 | 0) % 2147483647 / 2147483647;
			if(org.flixel.util.FlxRandom.globalSeed <= 0) org.flixel.util.FlxRandom.globalSeed += 1;
			$r = org.flixel.util.FlxRandom.globalSeed;
			return $r;
		}(this)) * 360 - 180;
		particle.drag.make(this.particleDrag.x,this.particleDrag.y);
		particle.onEmit();
	}
	,start: function(Explode,Lifespan,Frequency,Quantity,LifespanRange) {
		if(LifespanRange == null) LifespanRange = 0;
		if(Quantity == null) Quantity = 0;
		if(Frequency == null) Frequency = 0.1;
		if(Lifespan == null) Lifespan = 0;
		if(Explode == null) Explode = true;
		this.revive();
		this.visible = true;
		this.on = true;
		this._explode = Explode;
		this.life.min = Lifespan;
		this.life.max = Lifespan + Math.abs(LifespanRange);
		this.frequency = Frequency;
		this._quantity += Quantity;
		this._counter = 0;
		this._timer = 0;
		this._waitForKill = false;
	}
	,kill: function() {
		this.on = false;
		this._waitForKill = false;
		org.flixel.FlxTypedGroup.prototype.kill.call(this);
	}
	,update: function() {
		if(this.on) {
			if(this._explode) {
				this.on = false;
				this._waitForKill = true;
				var i = 0;
				var l = this._quantity;
				if(l <= 0 || l > this.length) l = this.length;
				while(i < l) {
					this.emitParticle();
					i++;
				}
				this._quantity = 0;
			} else if(this.frequency <= 0) {
				this.emitParticle();
				if(this._quantity > 0 && ++this._counter >= this._quantity) {
					this.on = false;
					this._waitForKill = true;
					this._quantity = 0;
				}
			} else {
				this._timer += org.flixel.FlxG.elapsed;
				while(this._timer > this.frequency) {
					this._timer -= this.frequency;
					this.emitParticle();
					if(this._quantity > 0 && ++this._counter >= this._quantity) {
						this.on = false;
						this._waitForKill = true;
						this._quantity = 0;
					}
				}
			}
		} else if(this._waitForKill) {
			this._timer += org.flixel.FlxG.elapsed;
			if(this.life.max > 0 && this._timer > this.life.max) {
				this.kill();
				return;
			}
		}
		org.flixel.FlxTypedGroup.prototype.update.call(this);
	}
	,makeParticles: function(Graphics,Quantity,BakedRotations,Multiple,Collide,AutoBuffer) {
		if(AutoBuffer == null) AutoBuffer = false;
		if(Collide == null) Collide = 0.8;
		if(Multiple == null) Multiple = false;
		if(BakedRotations == null) BakedRotations = 16;
		if(Quantity == null) Quantity = 50;
		this.set_maxSize(Quantity);
		var totalFrames = 1;
		if(Multiple) {
			var sprite = new org.flixel.FlxSprite();
			sprite.loadGraphic(Graphics,true);
			totalFrames = sprite.frames;
			sprite.destroy();
		}
		var randomFrame;
		var particle;
		var i = 0;
		while(i < Quantity) {
			particle = Type.createInstance(this._particleClass,[]);
			if(Multiple) {
				randomFrame = (function($this) {
					var $r;
					org.flixel.util.FlxRandom.globalSeed = 69621 * (org.flixel.util.FlxRandom.globalSeed * 2147483647 | 0) % 2147483647 / 2147483647;
					if(org.flixel.util.FlxRandom.globalSeed <= 0) org.flixel.util.FlxRandom.globalSeed += 1;
					$r = org.flixel.util.FlxRandom.globalSeed;
					return $r;
				}(this)) * totalFrames | 0;
				if(BakedRotations > 0) {
					particle.loadGraphic(Graphics,true);
					particle.set_frame(randomFrame);
				} else {
					particle.loadGraphic(Graphics,true);
					particle.set_frame(randomFrame);
				}
			} else if(BakedRotations > 0) particle.loadGraphic(Graphics); else particle.loadGraphic(Graphics);
			if(Collide > 0) {
				var _g = particle;
				_g.set_width(_g.width * Collide);
				var _g = particle;
				_g.set_height(_g.height * Collide);
				particle.centerOffsets();
			} else particle.allowCollisions = 0;
			particle.exists = false;
			this.add(particle);
			i++;
		}
		return this;
	}
	,destroy: function() {
		this.xPosition = null;
		this.yPosition = null;
		this.xVelocity = null;
		this.yVelocity = null;
		this.rotation = null;
		this.startScale = null;
		this.endScale = null;
		this.startAlpha = null;
		this.endAlpha = null;
		this.startRed = null;
		this.startGreen = null;
		this.startBlue = null;
		this.endRed = null;
		this.endGreen = null;
		this.endBlue = null;
		this.blend = null;
		this.acceleration = null;
		this.particleDrag = null;
		this._particleClass = null;
		this._point = null;
		org.flixel.FlxTypedGroup.prototype.destroy.call(this);
	}
	,__class__: org.flixel.FlxTypedEmitter
	,__properties__: $extend(org.flixel.FlxTypedGroup.prototype.__properties__,{set_particleClass:"set_particleClass",get_particleClass:"get_particleClass",set_width:"set_width",get_width:"get_width",set_height:"set_height",get_height:"get_height",set_x:"set_x",get_x:"get_x",set_y:"set_y",get_y:"get_y",set_gravity:"set_gravity",get_gravity:"get_gravity",set_minRotation:"set_minRotation",get_minRotation:"get_minRotation",set_maxRotation:"set_maxRotation",get_maxRotation:"get_maxRotation",set_lifespan:"set_lifespan",get_lifespan:"get_lifespan"})
});
org.flixel.FlxEmitter = function(X,Y,Size) {
	if(Size == null) Size = 0;
	if(Y == null) Y = 0;
	if(X == null) X = 0;
	org.flixel.FlxTypedEmitter.call(this,X,Y,Size);
};
$hxClasses["org.flixel.FlxEmitter"] = org.flixel.FlxEmitter;
org.flixel.FlxEmitter.__name__ = ["org","flixel","FlxEmitter"];
org.flixel.FlxEmitter.__super__ = org.flixel.FlxTypedEmitter;
org.flixel.FlxEmitter.prototype = $extend(org.flixel.FlxTypedEmitter.prototype,{
	__class__: org.flixel.FlxEmitter
});
org.flixel.Bounds = function(min,max) {
	this.min = min;
	this.max = max == null?min:max;
};
$hxClasses["org.flixel.Bounds"] = org.flixel.Bounds;
org.flixel.Bounds.__name__ = ["org","flixel","Bounds"];
org.flixel.Bounds.prototype = {
	__class__: org.flixel.Bounds
}
org.flixel.FlxG = function() {
};
$hxClasses["org.flixel.FlxG"] = org.flixel.FlxG;
org.flixel.FlxG.__name__ = ["org","flixel","FlxG"];
org.flixel.FlxG.__properties__ = {get_state:"get_state",get_stage:"get_stage",set_volume:"set_volume",set_framerate:"set_framerate",get_framerate:"get_framerate",set_flashFramerate:"set_flashFramerate",get_flashFramerate:"get_flashFramerate",set_bgColor:"set_bgColor",get_bgColor:"get_bgColor"}
org.flixel.FlxG.getLibraryName = function() {
	return "HaxeFlixel" + " v" + "2" + "." + "0.0-alpha.3";
}
org.flixel.FlxG.toggleDebugger = function() {
	if(org.flixel.FlxG._game != null && org.flixel.FlxG._game.get_debugger() != null) {
		org.flixel.FlxG._game._debuggerUp = !org.flixel.FlxG._game.get_debugger().get_visible();
		org.flixel.FlxG._game.get_debugger().set_visible(!org.flixel.FlxG._game.get_debugger().get_visible());
	}
}
org.flixel.FlxG.showDebugger = function() {
	if(org.flixel.FlxG._game != null && org.flixel.FlxG._game.get_debugger() != null) {
		org.flixel.FlxG._game._debuggerUp = true;
		org.flixel.FlxG._game.get_debugger().set_visible(true);
	}
}
org.flixel.FlxG.hideDebugger = function() {
	if(org.flixel.FlxG._game != null && org.flixel.FlxG._game.get_debugger() != null) {
		org.flixel.FlxG._game._debuggerUp = false;
		org.flixel.FlxG._game.get_debugger().set_visible(false);
	}
}
org.flixel.FlxG._log = function(Data) {
	if(org.flixel.FlxG._game != null && org.flixel.FlxG._game.get_debugger() != null) org.flixel.FlxG.advancedLog(Data,org.flixel.system.debug.Log.STYLE_NORMAL);
}
org.flixel.FlxG._warn = function(Data) {
	if(org.flixel.FlxG._game != null && org.flixel.FlxG._game.get_debugger() != null) org.flixel.FlxG.advancedLog(Data,org.flixel.system.debug.Log.STYLE_WARNING);
}
org.flixel.FlxG._error = function(Data) {
	if(org.flixel.FlxG._game != null && org.flixel.FlxG._game.get_debugger() != null) org.flixel.FlxG.advancedLog(Data,org.flixel.system.debug.Log.STYLE_ERROR);
}
org.flixel.FlxG._notice = function(Data) {
	if(org.flixel.FlxG._game != null && org.flixel.FlxG._game.get_debugger() != null) org.flixel.FlxG.advancedLog(Data,org.flixel.system.debug.Log.STYLE_NOTICE);
}
org.flixel.FlxG.advancedLog = function(Data,Style) {
	if(org.flixel.FlxG._game != null && org.flixel.FlxG._game.get_debugger() != null) {
		if(!js.Boot.__instanceof(Data,Array)) Data = [Data];
		org.flixel.FlxG._game.get_debugger().log.add(Data,Style);
		if(Style.errorSound != null) org.flixel.FlxG.play(Style.errorSound);
		if(Style.openConsole) org.flixel.FlxG._game.get_debugger().set_visible(org.flixel.FlxG._game._debuggerUp = true);
		if(Reflect.isFunction(Style.callbackFunction)) Style.callbackFunction.apply(null,[]);
	}
}
org.flixel.FlxG.clearLog = function() {
	if(org.flixel.FlxG._game != null && org.flixel.FlxG._game.get_debugger() != null) org.flixel.FlxG._game.get_debugger().log.clear();
}
org.flixel.FlxG.watch = function(AnyObject,VariableName,DisplayName) {
	if(org.flixel.FlxG._game != null && org.flixel.FlxG._game._debugger != null) org.flixel.FlxG._game._debugger.watch.add(AnyObject,VariableName,DisplayName);
}
org.flixel.FlxG.unwatch = function(AnyObject,VariableName) {
	if(org.flixel.FlxG._game != null && org.flixel.FlxG._game._debugger != null) org.flixel.FlxG._game._debugger.watch.remove(AnyObject,VariableName);
}
org.flixel.FlxG.quickWatch = function(Name,NewValue) {
	if(org.flixel.FlxG._game != null && org.flixel.FlxG._game._debugger != null) org.flixel.FlxG._game.get_debugger().watch.updateQuickWatch(Name,NewValue);
}
org.flixel.FlxG.removeQuickWatch = function(Name) {
	if(org.flixel.FlxG._game != null && org.flixel.FlxG._game._debugger != null) org.flixel.FlxG._game.get_debugger().watch.remove(null,null,Name);
}
org.flixel.FlxG.get_framerate = function() {
	return 1000 / org.flixel.FlxG._game._step | 0;
}
org.flixel.FlxG.set_framerate = function(Framerate) {
	org.flixel.FlxG._game._step = Math.abs(1000 / Framerate) | 0;
	org.flixel.FlxG._game._stepSeconds = org.flixel.FlxG._game._step / 1000;
	if(org.flixel.FlxG._game._maxAccumulation < org.flixel.FlxG._game._step) org.flixel.FlxG._game._maxAccumulation = org.flixel.FlxG._game._step;
	return Framerate;
}
org.flixel.FlxG.get_flashFramerate = function() {
	if(org.flixel.FlxG._game.get_stage() != null) return org.flixel.FlxG._game.get_stage().get_frameRate() | 0;
	return 0;
}
org.flixel.FlxG.set_flashFramerate = function(Framerate) {
	org.flixel.FlxG._game._flashFramerate = Math.abs(Framerate) | 0;
	if(org.flixel.FlxG._game.get_stage() != null) org.flixel.FlxG._game.get_stage().set_frameRate(org.flixel.FlxG._game._flashFramerate);
	org.flixel.FlxG._game._maxAccumulation = (2000 / org.flixel.FlxG._game._flashFramerate | 0) - 1;
	if(org.flixel.FlxG._game._maxAccumulation < org.flixel.FlxG._game._step) org.flixel.FlxG._game._maxAccumulation = org.flixel.FlxG._game._step;
	return Framerate;
}
org.flixel.FlxG.loadReplay = function(Data,State,CancelKeys,Timeout,Callback) {
	if(Timeout == null) Timeout = 0;
	org.flixel.FlxG._game._replay.load(Data);
	if(State == null) org.flixel.FlxG.resetGame(); else org.flixel.FlxG.switchState(State);
	org.flixel.FlxG._game._replayCancelKeys = CancelKeys;
	org.flixel.FlxG._game._replayTimer = Timeout * 1000 | 0;
	org.flixel.FlxG._game._replayCallback = Callback;
	org.flixel.FlxG._game._replayRequested = true;
}
org.flixel.FlxG.reloadReplay = function(StandardMode) {
	if(StandardMode == null) StandardMode = true;
	if(StandardMode) org.flixel.FlxG.resetGame(); else org.flixel.FlxG.resetState();
	if(org.flixel.FlxG._game._replay.frameCount > 0) org.flixel.FlxG._game._replayRequested = true;
}
org.flixel.FlxG.stopReplay = function() {
	org.flixel.FlxG._game._replaying = false;
	if(org.flixel.FlxG._game._debugger != null) org.flixel.FlxG._game._debugger.vcr.stopped();
	org.flixel.FlxG.resetInput();
}
org.flixel.FlxG.recordReplay = function(StandardMode) {
	if(StandardMode == null) StandardMode = true;
	if(StandardMode) org.flixel.FlxG.resetGame(); else org.flixel.FlxG.resetState();
	org.flixel.FlxG._game._recordingRequested = true;
}
org.flixel.FlxG.stopRecording = function() {
	org.flixel.FlxG._game._recording = false;
	if(org.flixel.FlxG._game._debugger != null) org.flixel.FlxG._game._debugger.vcr.stopped();
	return org.flixel.FlxG._game._replay.save();
}
org.flixel.FlxG.resetState = function() {
	org.flixel.FlxG._game._requestedState = Type.createInstance(Type.resolveClass((function($this) {
		var $r;
		var s = Type.getClassName(Type.getClass(org.flixel.FlxG._game._state));
		if(s != null) {
			s = StringTools.replace(s,"::",".");
		}
		$r = s;
		return $r;
	}(this))),[]);
	if(js.Boot.__instanceof(org.flixel.FlxG._game._requestedState,org.flixel.FlxSubState)) throw "You can't set FlxSubState class instance as the state for your game";
}
org.flixel.FlxG.resetGame = function() {
	org.flixel.FlxG._game._requestedReset = true;
}
org.flixel.FlxG.resetInput = function() {
	org.flixel.system.input.FlxInputs.resetInputs();
}
org.flixel.FlxG.playMusic = function(Music,Volume) {
	if(Volume == null) Volume = 1.0;
}
org.flixel.FlxG.loadSound = function(EmbeddedSound,Volume,Looped,AutoDestroy,AutoPlay,URL,OnComplete) {
	if(AutoPlay == null) AutoPlay = false;
	if(AutoDestroy == null) AutoDestroy = false;
	if(Looped == null) Looped = false;
	if(Volume == null) Volume = 1.0;
	return null;
}
org.flixel.FlxG.play = function(EmbeddedSound,Volume,Looped,AutoDestroy,OnComplete) {
	if(AutoDestroy == null) AutoDestroy = true;
	if(Looped == null) Looped = false;
	if(Volume == null) Volume = 1.0;
	return null;
}
org.flixel.FlxG.stream = function(URL,Volume,Looped,AutoDestroy,OnComplete) {
	if(AutoDestroy == null) AutoDestroy = true;
	if(Looped == null) Looped = false;
	if(Volume == null) Volume = 1.0;
	return null;
}
org.flixel.FlxG.set_volume = function(Volume) {
	org.flixel.FlxG.volume = Volume;
	if(org.flixel.FlxG.volume < 0) org.flixel.FlxG.volume = 0; else if(org.flixel.FlxG.volume > 1) org.flixel.FlxG.volume = 1;
	if(org.flixel.FlxG.volumeHandler != null) {
		var param = org.flixel.FlxG.mute?0:org.flixel.FlxG.volume;
		org.flixel.FlxG.volumeHandler(param);
	}
	return Volume;
}
org.flixel.FlxG.destroySounds = function(ForceDestroy) {
	if(ForceDestroy == null) ForceDestroy = false;
	if(org.flixel.FlxG.music != null && (ForceDestroy || !org.flixel.FlxG.music.survive)) {
		org.flixel.FlxG.music.destroy();
		org.flixel.FlxG.music = null;
	}
	var i = 0;
	var sound;
	var l = org.flixel.FlxG.sounds.members.length;
	while(i < l) {
		sound = org.flixel.FlxG.sounds.members[i++];
		if(sound != null && (ForceDestroy || !sound.survive)) sound.destroy();
	}
}
org.flixel.FlxG.updateSounds = function() {
	if(org.flixel.FlxG.music != null && org.flixel.FlxG.music.active) org.flixel.FlxG.music.update();
	if(org.flixel.FlxG.sounds != null && org.flixel.FlxG.sounds.active) org.flixel.FlxG.sounds.update();
}
org.flixel.FlxG.pauseSounds = function() {
	if(org.flixel.FlxG.music != null && org.flixel.FlxG.music.exists && org.flixel.FlxG.music.active) org.flixel.FlxG.music.pause();
	var i = 0;
	var sound;
	var l = org.flixel.FlxG.sounds.length;
	while(i < l) {
		sound = org.flixel.FlxG.sounds.members[i++];
		if(sound != null && sound.exists && sound.active) sound.pause();
	}
}
org.flixel.FlxG.resumeSounds = function() {
	if(org.flixel.FlxG.music != null && org.flixel.FlxG.music.exists) org.flixel.FlxG.music.play();
	var i = 0;
	var sound;
	var l = org.flixel.FlxG.sounds.length;
	while(i < l) {
		sound = org.flixel.FlxG.sounds.members[i++];
		if(sound != null && sound.exists) sound.resume();
	}
}
org.flixel.FlxG.checkBitmapCache = function(Key) {
	return org.flixel.FlxG._cache.exists(Key) && org.flixel.FlxG._cache.get(Key) != null;
}
org.flixel.FlxG.createBitmap = function(Width,Height,Color,Unique,Key) {
	if(Unique == null) Unique = false;
	var key = Key;
	if(key == null) {
		key = Width + "x" + Height + ":" + Color;
		if(Unique && org.flixel.FlxG.checkBitmapCache(key)) key = org.flixel.FlxG.getUniqueBitmapKey(key);
	}
	if(!org.flixel.FlxG.checkBitmapCache(key)) org.flixel.FlxG._cache.set(key,new flash.display.BitmapData(Width,Height,true,Color));
	org.flixel.FlxG._lastBitmapDataKey = key;
	return org.flixel.FlxG._cache.get(key);
}
org.flixel.FlxG.addBitmap = function(Graphic,Reverse,Unique,Key,FrameWidth,FrameHeight,SpacingX,SpacingY) {
	if(SpacingY == null) SpacingY = 1;
	if(SpacingX == null) SpacingX = 1;
	if(FrameHeight == null) FrameHeight = 0;
	if(FrameWidth == null) FrameWidth = 0;
	if(Unique == null) Unique = false;
	if(Reverse == null) Reverse = false;
	if(Graphic == null) return null;
	var isClass = true;
	var isBitmap = true;
	if(js.Boot.__instanceof(Graphic,Class)) {
		isClass = true;
		isBitmap = false;
	} else if(js.Boot.__instanceof(Graphic,flash.display.BitmapData)) {
		isClass = false;
		isBitmap = true;
	} else if(js.Boot.__instanceof(Graphic,String)) {
		isClass = false;
		isBitmap = false;
	} else return null;
	var additionalKey = "";
	if(FrameWidth != 0 || FrameHeight != 0 || SpacingX != 1 || SpacingY != 1) additionalKey = "FrameSize:" + FrameWidth + "_" + FrameHeight + "_Spacing:" + SpacingX + "_" + SpacingY;
	var key = Key;
	if(key == null) {
		if(isClass) key = Type.getClassName(js.Boot.__cast(Graphic , Class)); else if(isBitmap) {
			if(!Unique) {
				key = org.flixel.FlxG.getCacheKeyFor(Graphic);
				if(key == null) key = org.flixel.FlxG.getUniqueBitmapKey();
			}
		} else key = Graphic;
		key += Reverse?"_REVERSE_":"";
		key += additionalKey;
		if(Unique) key = org.flixel.FlxG.getUniqueBitmapKey(key == null?"pixels":key);
	}
	var tempBitmap;
	if(!org.flixel.FlxG.checkBitmapCache(key)) {
		var bd = null;
		if(isClass) bd = Type.createInstance(js.Boot.__cast(Graphic , Class),[]).bitmapData; else if(isBitmap) bd = Graphic; else bd = org.flixel.FlxAssets.getBitmapData(Graphic);
		if(additionalKey != "") {
			var numHorizontalFrames = FrameWidth == 0?1:(bd._nmeTextureBuffer != null?bd._nmeTextureBuffer.width:0) / FrameWidth | 0;
			var numVerticalFrames = FrameHeight == 0?1:(bd._nmeTextureBuffer != null?bd._nmeTextureBuffer.height:0) / FrameHeight | 0;
			FrameWidth = FrameWidth == 0?bd._nmeTextureBuffer != null?bd._nmeTextureBuffer.width:0:FrameWidth;
			FrameHeight = FrameHeight == 0?bd._nmeTextureBuffer != null?bd._nmeTextureBuffer.height:0:FrameHeight;
			var tempBitmap1 = new flash.display.BitmapData((bd._nmeTextureBuffer != null?bd._nmeTextureBuffer.width:0) + numHorizontalFrames * SpacingX,(bd._nmeTextureBuffer != null?bd._nmeTextureBuffer.height:0) + numVerticalFrames * SpacingY,true,0);
			var tempRect = new flash.geom.Rectangle(0,0,FrameWidth,FrameHeight);
			var tempPoint = new flash.geom.Point();
			var _g1 = 0, _g = numHorizontalFrames;
			while(_g1 < _g) {
				var i = _g1++;
				tempPoint.x = i * (FrameWidth + SpacingX);
				tempRect.x = i * FrameWidth;
				var _g3 = 0, _g2 = numVerticalFrames;
				while(_g3 < _g2) {
					var j = _g3++;
					tempPoint.y = j * (FrameHeight + SpacingY);
					tempRect.y = j * FrameHeight;
					tempBitmap1.copyPixels(bd,tempRect,tempPoint);
				}
			}
			bd = tempBitmap1;
		} else if(Unique) bd = bd.clone();
		org.flixel.FlxG._cache.set(key,bd);
	}
	org.flixel.FlxG._lastBitmapDataKey = key;
	return org.flixel.FlxG._cache.get(key);
}
org.flixel.FlxG.addTilemapBitmap = function(Graphic,Reverse,Unique,Key,FrameWidth,FrameHeight,RepeatX,RepeatY) {
	if(RepeatY == null) RepeatY = 1;
	if(RepeatX == null) RepeatX = 1;
	if(FrameHeight == null) FrameHeight = 0;
	if(FrameWidth == null) FrameWidth = 0;
	if(Unique == null) Unique = false;
	if(Reverse == null) Reverse = false;
	var bitmap = org.flixel.FlxG.addBitmap(Graphic,Reverse,Unique,Key,FrameWidth,FrameHeight,RepeatX + 1,RepeatY + 1);
	var extendedFrameWidth = FrameWidth + RepeatX + 1;
	var extendedFrameHeight = FrameHeight + RepeatY + 1;
	var numCols = (bitmap._nmeTextureBuffer != null?bitmap._nmeTextureBuffer.width:0) / extendedFrameWidth | 0;
	var numRows = (bitmap._nmeTextureBuffer != null?bitmap._nmeTextureBuffer.height:0) / extendedFrameHeight | 0;
	var tempRect = new flash.geom.Rectangle();
	var tempPoint = new flash.geom.Point();
	var pixelColor;
	tempRect.y = 0;
	tempRect.width = 1;
	tempRect.height = bitmap._nmeTextureBuffer != null?bitmap._nmeTextureBuffer.height:0;
	tempPoint.y = 0;
	var _g = 0;
	while(_g < numCols) {
		var i = _g++;
		var tempX = i * extendedFrameWidth + FrameWidth;
		tempRect.x = tempX - 1;
		var _g1 = 0;
		while(_g1 < RepeatX) {
			var j = _g1++;
			tempPoint.x = tempX + j;
			bitmap.copyPixels(bitmap,tempRect,tempPoint);
		}
	}
	tempRect.x = 0;
	tempRect.width = bitmap._nmeTextureBuffer != null?bitmap._nmeTextureBuffer.width:0;
	tempRect.height = 1;
	tempPoint.x = 0;
	var _g = 0;
	while(_g < numRows) {
		var i = _g++;
		var tempY = i * extendedFrameHeight + FrameHeight;
		tempRect.y = tempY - 1;
		var _g1 = 0;
		while(_g1 < RepeatY) {
			var j = _g1++;
			tempPoint.y = tempY + j;
			bitmap.copyPixels(bitmap,tempRect,tempPoint);
		}
	}
	return bitmap;
}
org.flixel.FlxG.getCacheKeyFor = function(bmd) {
	var $it0 = org.flixel.FlxG._cache.keys();
	while( $it0.hasNext() ) {
		var key = $it0.next();
		var data = org.flixel.FlxG._cache.get(key);
		if(data == bmd) return key;
	}
	return null;
}
org.flixel.FlxG.getUniqueBitmapKey = function(baseKey) {
	if(baseKey == null) baseKey = "pixels";
	if(org.flixel.FlxG.checkBitmapCache(baseKey)) {
		var inc = 0;
		var ukey;
		do ukey = baseKey + inc++; while(org.flixel.FlxG.checkBitmapCache(ukey));
		baseKey = ukey;
	}
	return baseKey;
}
org.flixel.FlxG.fromAssetsCache = function(bmd) {
	var cachedBitmapData = openfl.Assets.cachedBitmapData;
	if(cachedBitmapData != null) {
		var $it0 = cachedBitmapData.keys();
		while( $it0.hasNext() ) {
			var key = $it0.next();
			var cacheBmd = cachedBitmapData.get(key);
			if(cacheBmd == bmd) return true;
		}
	}
	return false;
}
org.flixel.FlxG.removeBitmap = function(Graphic) {
	if(org.flixel.FlxG._cache.exists(Graphic)) {
		var bmd = org.flixel.FlxG._cache.get(Graphic);
		org.flixel.FlxG._cache.remove(Graphic);
		if(org.flixel.FlxG.fromAssetsCache(bmd) == false) {
			bmd.dispose();
			bmd = null;
		}
	}
}
org.flixel.FlxG.clearBitmapCache = function() {
	var bmd;
	if(org.flixel.FlxG._cache != null) {
		var $it0 = org.flixel.FlxG._cache.keys();
		while( $it0.hasNext() ) {
			var key = $it0.next();
			bmd = org.flixel.FlxG._cache.get(key);
			org.flixel.FlxG._cache.remove(key);
			if(bmd != null && org.flixel.FlxG.fromAssetsCache(bmd) == false) {
				bmd.dispose();
				bmd = null;
			}
		}
	}
	org.flixel.FlxG._cache = new haxe.ds.StringMap();
}
org.flixel.FlxG.clearAssetsCache = function() {
	var $it0 = openfl.Assets.cachedBitmapData.keys();
	while( $it0.hasNext() ) {
		var key = $it0.next();
		var bmd = openfl.Assets.cachedBitmapData.get(key);
		bmd.dispose();
		openfl.Assets.cachedBitmapData.remove(key);
	}
}
org.flixel.FlxG.get_stage = function() {
	if(org.flixel.FlxG._game.get_stage() != null) return org.flixel.FlxG._game.get_stage();
	return null;
}
org.flixel.FlxG.get_state = function() {
	return org.flixel.FlxG._game._state;
}
org.flixel.FlxG.switchState = function(State) {
	org.flixel.FlxG._game._requestedState = State;
}
org.flixel.FlxG.setDebuggerLayout = function(Layout) {
	org.flixel.FlxG._game._debugger.setLayout(Layout);
}
org.flixel.FlxG.resetDebuggerLayout = function() {
	org.flixel.FlxG._game._debugger.resetLayout();
}
org.flixel.FlxG.addCamera = function(NewCamera) {
	org.flixel.FlxG._game.addChildAt(NewCamera._flashSprite,org.flixel.FlxG._game.getChildIndex(org.flixel.FlxG._game._inputContainer));
	org.flixel.FlxG.cameras.push(NewCamera);
	NewCamera.ID = org.flixel.FlxG.cameras.length - 1;
	return NewCamera;
}
org.flixel.FlxG.removeCamera = function(Camera,Destroy) {
	if(Destroy == null) Destroy = true;
	if(Camera != null && org.flixel.FlxG._game.contains(Camera._flashSprite)) {
		org.flixel.FlxG._game.removeChild(Camera._flashSprite);
		var index = org.flixel.util.FlxArray.indexOf(org.flixel.FlxG.cameras,Camera,null);
		if(index >= 0) org.flixel.FlxG.cameras.splice(index,1);
	} else org.flixel.FlxG.error("Removing camera, not part of game.");
	var _g1 = 0, _g = org.flixel.FlxG.cameras.length;
	while(_g1 < _g) {
		var i = _g1++;
		org.flixel.FlxG.cameras[i].ID = i;
	}
	if(Destroy) Camera.destroy();
}
org.flixel.FlxG.resetCameras = function(NewCamera) {
	var cam;
	var i = 0;
	var l = org.flixel.FlxG.cameras.length;
	while(i < l) {
		cam = org.flixel.FlxG.cameras[i++];
		org.flixel.FlxG._game.removeChild(cam._flashSprite);
		cam.destroy();
	}
	org.flixel.FlxG.cameras.splice(0,org.flixel.FlxG.cameras.length);
	if(NewCamera == null) NewCamera = new org.flixel.FlxCamera(0,0,org.flixel.FlxG.width,org.flixel.FlxG.height);
	org.flixel.FlxG.camera = org.flixel.FlxG.addCamera(NewCamera);
	NewCamera.ID = 0;
}
org.flixel.FlxG.flash = function(Color,Duration,OnComplete,Force) {
	if(Force == null) Force = false;
	if(Duration == null) Duration = 1;
	if(Color == null) Color = -1;
	var i = 0;
	var l = org.flixel.FlxG.cameras.length;
	while(i < l) org.flixel.FlxG.cameras[i++].flash(Color,Duration,OnComplete,Force);
}
org.flixel.FlxG.fade = function(Color,Duration,FadeIn,OnComplete,Force) {
	if(Force == null) Force = false;
	if(FadeIn == null) FadeIn = false;
	if(Duration == null) Duration = 1;
	if(Color == null) Color = -16777216;
	var i = 0;
	var l = org.flixel.FlxG.cameras.length;
	while(i < l) org.flixel.FlxG.cameras[i++].fade(Color,Duration,FadeIn,OnComplete,Force);
}
org.flixel.FlxG.shake = function(Intensity,Duration,OnComplete,Force,Direction) {
	if(Direction == null) Direction = 0;
	if(Force == null) Force = true;
	if(Duration == null) Duration = 0.5;
	if(Intensity == null) Intensity = 0.05;
	var i = 0;
	var l = org.flixel.FlxG.cameras.length;
	while(i < l) org.flixel.FlxG.cameras[i++].shake(Intensity,Duration,OnComplete,Force,Direction);
}
org.flixel.FlxG.get_bgColor = function() {
	if(org.flixel.FlxG.camera == null) return -16777216; else return org.flixel.FlxG.camera.bgColor;
}
org.flixel.FlxG.set_bgColor = function(Color) {
	var i = 0;
	var l = org.flixel.FlxG.cameras.length;
	while(i < l) org.flixel.FlxG.cameras[i++].bgColor = Color;
	return Color;
}
org.flixel.FlxG.overlap = function(ObjectOrGroup1,ObjectOrGroup2,NotifyCallback,ProcessCallback) {
	if(ObjectOrGroup1 == null) ObjectOrGroup1 = org.flixel.FlxG.get_state();
	if(ObjectOrGroup2 == ObjectOrGroup1) ObjectOrGroup2 = null;
	org.flixel.system.FlxQuadTree.divisions = org.flixel.FlxG.worldDivisions;
	var quadTree = org.flixel.system.FlxQuadTree.recycle(org.flixel.FlxG.worldBounds.x,org.flixel.FlxG.worldBounds.y,org.flixel.FlxG.worldBounds.width,org.flixel.FlxG.worldBounds.height);
	quadTree.load(ObjectOrGroup1,ObjectOrGroup2,NotifyCallback,ProcessCallback);
	var result = quadTree.execute();
	quadTree.destroy();
	return result;
}
org.flixel.FlxG.collide = function(ObjectOrGroup1,ObjectOrGroup2,NotifyCallback) {
	return org.flixel.FlxG.overlap(ObjectOrGroup1,ObjectOrGroup2,NotifyCallback,org.flixel.FlxObject.separate);
}
org.flixel.FlxG.addPlugin = function(Plugin) {
	var pluginList = org.flixel.FlxG.plugins;
	var l = pluginList.length;
	var _g = 0;
	while(_g < l) {
		var i = _g++;
		if(pluginList[i].toString() == Plugin.toString()) return Plugin;
	}
	pluginList.push(Plugin);
	return Plugin;
}
org.flixel.FlxG.getPlugin = function(ClassType) {
	var pluginList = org.flixel.FlxG.plugins;
	var i = 0;
	var l = pluginList.length;
	while(i < l) {
		if(js.Boot.__instanceof(pluginList[i],ClassType)) return org.flixel.FlxG.plugins[i];
		i++;
	}
	return null;
}
org.flixel.FlxG.removePlugin = function(Plugin) {
	var pluginList = org.flixel.FlxG.plugins;
	var i = pluginList.length - 1;
	while(i >= 0) {
		if(pluginList[i] == Plugin) {
			pluginList.splice(i,1);
			return Plugin;
		}
		i--;
	}
	return Plugin;
}
org.flixel.FlxG.removePluginType = function(ClassType) {
	var results = false;
	var pluginList = org.flixel.FlxG.plugins;
	var i = pluginList.length - 1;
	while(i >= 0) {
		if(js.Boot.__instanceof(pluginList[i],ClassType)) {
			pluginList.splice(i,1);
			results = true;
		}
		i--;
	}
	return results;
}
org.flixel.FlxG.init = function(Game,Width,Height,Zoom) {
	org.flixel.FlxG.clearBitmapCache();
	org.flixel.FlxG._game = Game;
	org.flixel.FlxG.width = Math.abs(Width) | 0;
	org.flixel.FlxG.height = Math.abs(Height) | 0;
	org.flixel.FlxG.mute = false;
	org.flixel.FlxG.set_volume(0.5);
	org.flixel.FlxG.sounds = new org.flixel.FlxTypedGroup();
	org.flixel.FlxG.volumeHandler = null;
	if(org.flixel.FlxG.flashGfxSprite == null) {
		org.flixel.FlxG.flashGfxSprite = new flash.display.Sprite();
		org.flixel.FlxG.flashGfx = org.flixel.FlxG.flashGfxSprite.get_graphics();
	}
	org.flixel.FlxCamera.defaultZoom = Zoom;
	org.flixel.FlxG._cameraRect = new flash.geom.Rectangle();
	org.flixel.FlxG.cameras = new Array();
	org.flixel.FlxG.useBufferLocking = false;
	org.flixel.FlxG.plugins = new Array();
	org.flixel.FlxG.addPlugin(new org.flixel.plugin.DebugPathDisplay());
	org.flixel.FlxG.addPlugin(new org.flixel.plugin.TimerManager());
	org.flixel.FlxG.mobile = false;
	org.flixel.FlxG.log = Reflect.makeVarArgs(org.flixel.FlxG._log);
	org.flixel.FlxG.warn = Reflect.makeVarArgs(org.flixel.FlxG._warn);
	org.flixel.FlxG.error = Reflect.makeVarArgs(org.flixel.FlxG._error);
	org.flixel.FlxG.notice = Reflect.makeVarArgs(org.flixel.FlxG._notice);
	org.flixel.FlxG.visualDebug = false;
}
org.flixel.FlxG.reset = function() {
	org.flixel.plugin.pxText.PxBitmapFont.clearStorage();
	org.flixel.system.layer.Atlas.clearAtlasCache();
	org.flixel.system.layer.TileSheetData.clear();
	org.flixel.FlxG.clearBitmapCache();
	org.flixel.FlxG.resetInput();
	org.flixel.FlxG.destroySounds(true);
	org.flixel.FlxG.paused = false;
	org.flixel.FlxG.timeScale = 1.0;
	org.flixel.FlxG.elapsed = 0;
	org.flixel.util.FlxRandom.globalSeed = Math.random();
	org.flixel.FlxG.worldBounds = new org.flixel.util.FlxRect(-10,-10,org.flixel.FlxG.width + 20,org.flixel.FlxG.height + 20);
	org.flixel.FlxG.worldDivisions = 6;
	var debugPathDisplay = js.Boot.__cast(org.flixel.FlxG.getPlugin(org.flixel.plugin.DebugPathDisplay) , org.flixel.plugin.DebugPathDisplay);
	if(debugPathDisplay != null) debugPathDisplay.clear();
}
org.flixel.FlxG.lockCameras = function() {
	var cam;
	var cams = org.flixel.FlxG.cameras;
	var i = 0;
	var l = cams.length;
	while(i < l) {
		cam = cams[i++];
		if(cam == null || !cam.exists || !cam.visible) continue;
		cam.clearDrawStack();
		cam._canvas.get_graphics().clear();
		cam._debugLayer.get_graphics().clear();
		cam.fill(cam.bgColor & 16777215,true,(cam.bgColor >> 24 & 255) / 255);
	}
}
org.flixel.FlxG.renderCameras = function() {
	var cam;
	var cams = org.flixel.FlxG.cameras;
	var i = 0;
	var l = cams.length;
	while(i < l) {
		cam = cams[i++];
		if(cam == null || !cam.exists || !cam.visible) continue;
		cam.render();
	}
}
org.flixel.FlxG.unlockCameras = function() {
	var cam;
	var cams = org.flixel.FlxG.cameras;
	var i = 0;
	var l = cams.length;
	while(i < l) {
		cam = cams[i++];
		if(cam == null || !cam.exists || !cam.visible) continue;
		cam.drawFX();
	}
}
org.flixel.FlxG.updateCameras = function() {
	var cam;
	var cams = org.flixel.FlxG.cameras;
	var i = 0;
	var l = cams.length;
	while(i < l) {
		cam = cams[i++];
		if(cam != null && cam.exists) {
			if(cam.active) cam.update();
			if(cam.target == null) {
				cam._flashSprite.set_x(cam.x + cam._flashOffsetX);
				cam._flashSprite.set_y(cam.y + cam._flashOffsetY);
			}
			cam._flashSprite.set_visible(cam.visible);
		}
	}
}
org.flixel.FlxG.updatePlugins = function() {
	var plugin;
	var pluginList = org.flixel.FlxG.plugins;
	var i = 0;
	var l = pluginList.length;
	while(i < l) {
		plugin = pluginList[i++];
		if(plugin.exists && plugin.active) plugin.update();
	}
}
org.flixel.FlxG.drawPlugins = function() {
	var plugin;
	var pluginList = org.flixel.FlxG.plugins;
	var i = 0;
	var l = pluginList.length;
	while(i < l) {
		plugin = pluginList[i++];
		if(plugin.exists && plugin.visible) plugin.draw();
	}
}
org.flixel.FlxG.drawDebugPlugins = function() {
	var plugin;
	var pluginList = org.flixel.FlxG.plugins;
	var i = 0;
	var l = pluginList.length;
	while(i < l) {
		plugin = pluginList[i++];
		if(plugin.exists && plugin.visible && !plugin.ignoreDrawDebug) plugin.drawDebug();
	}
}
org.flixel.FlxG.tween = function(object,values,duration,options) {
	var type = 8, complete = null, ease = null, tweener = org.flixel.FlxG.tweener;
	if(js.Boot.__instanceof(object,org.flixel.FlxBasic)) tweener = js.Boot.__cast(object , org.flixel.FlxBasic);
	if(options != null) {
		if(Reflect.hasField(options,"type")) type = options.type;
		if(Reflect.hasField(options,"complete")) complete = options.complete;
		if(Reflect.hasField(options,"ease")) ease = options.ease;
		if(Reflect.hasField(options,"tweener")) tweener = options.tweener;
	}
	var tween = new org.flixel.tweens.misc.MultiVarTween(complete,type);
	tween.tween(object,values,duration,ease);
	tweener.addTween(tween);
	return tween;
}
org.flixel.FlxG.random = function() {
	return (function($this) {
		var $r;
		org.flixel.util.FlxRandom.globalSeed = 69621 * (org.flixel.util.FlxRandom.globalSeed * 2147483647 | 0) % 2147483647 / 2147483647;
		if(org.flixel.util.FlxRandom.globalSeed <= 0) org.flixel.util.FlxRandom.globalSeed += 1;
		$r = org.flixel.util.FlxRandom.globalSeed;
		return $r;
	}(this));
}
org.flixel.FlxG.prototype = {
	__class__: org.flixel.FlxG
}
org.flixel.FlxParticle = function() {
	this.useColoring = false;
	this.useScaling = false;
	this.useFading = false;
	org.flixel.FlxSprite.call(this);
	this.lifespan = 0;
	this.friction = 500;
	this.exists = false;
};
$hxClasses["org.flixel.FlxParticle"] = org.flixel.FlxParticle;
org.flixel.FlxParticle.__name__ = ["org","flixel","FlxParticle"];
org.flixel.FlxParticle.__super__ = org.flixel.FlxSprite;
org.flixel.FlxParticle.prototype = $extend(org.flixel.FlxSprite.prototype,{
	onEmit: function() {
	}
	,reset: function(X,Y) {
		org.flixel.FlxSprite.prototype.reset.call(this,X,Y);
		this.set_alpha(1.0);
		this.scale.x = this.scale.y = 1.0;
		this.set_color(16777215);
	}
	,update: function() {
		org.flixel.FlxBasic._ACTIVECOUNT++;
		if(this._flickerTimer > 0) {
			this._flickerTimer -= org.flixel.FlxG.elapsed;
			if(this._flickerTimer <= 0) {
				this._flickerTimer = 0;
				this._flicker = false;
			}
		}
		this.last.x = this.x;
		this.last.y = this.y;
		if(this.lifespan > 0) {
			this.lifespan -= org.flixel.FlxG.elapsed;
			if(this.lifespan <= 0) this.kill();
			var lifespanRatio = 1 - this.lifespan / this.maxLifespan;
			if(this.useFading) this.set_alpha(this.startAlpha + lifespanRatio * this.rangeAlpha);
			if(this.useScaling) this.scale.x = this.scale.y = this.startScale + lifespanRatio * this.rangeScale;
			if(this.useColoring) {
				var redComp = this.startRed + lifespanRatio * this.rangeRed;
				var greenComp = this.startGreen + lifespanRatio * this.rangeGreen;
				var blueComp = this.startBlue + lifespanRatio * this.rangeBlue;
				this.set_color((255 * redComp | 0) << 16 | (255 * greenComp | 0) << 8 | (255 * blueComp | 0));
			}
			if(this.touching != 0) {
				if(this.angularVelocity != 0) this.angularVelocity = -this.angularVelocity;
			}
			if(this.acceleration.y > 0) {
				if((this.touching & 4096) != 0) {
					this.drag.x = this.friction;
					if((this.wasTouching & 4096) == 0) {
						if(this.velocity.y < -this.elasticity * 10) {
							if(this.angularVelocity != 0) this.angularVelocity *= -this.elasticity;
						} else {
							this.velocity.y = 0;
							this.angularVelocity = 0;
						}
					}
				} else this.drag.x = 0;
			}
		}
		if(this.exists && this.alive) {
			this.updateMotion();
			this.wasTouching = this.touching;
			this.touching = 0;
			this.updateAnimation();
		}
	}
	,__class__: org.flixel.FlxParticle
});
org.flixel.FlxPath = function(Nodes) {
	if(Nodes == null) this.nodes = new Array(); else this.nodes = Nodes;
	this._point = new org.flixel.util.FlxPoint();
	this.debugScrollFactor = new org.flixel.util.FlxPoint(1.0,1.0);
	this.debugColor = 16777215;
	this.ignoreDrawDebug = false;
	var debugPathDisplay = org.flixel.FlxPath.get_manager();
	if(debugPathDisplay != null) debugPathDisplay.add(this);
};
$hxClasses["org.flixel.FlxPath"] = org.flixel.FlxPath;
org.flixel.FlxPath.__name__ = ["org","flixel","FlxPath"];
org.flixel.FlxPath.__properties__ = {get_manager:"get_manager"}
org.flixel.FlxPath.get_manager = function() {
	return js.Boot.__cast(org.flixel.FlxG.getPlugin(org.flixel.plugin.DebugPathDisplay) , org.flixel.plugin.DebugPathDisplay);
}
org.flixel.FlxPath.prototype = {
	drawDebug: function(Camera) {
		if(this.nodes.length <= 0) return;
		if(Camera == null) Camera = org.flixel.FlxG.camera;
		var gfx = Camera._debugLayer.get_graphics();
		var node;
		var nextNode;
		var i = 0;
		var l = this.nodes.length;
		while(i < l) {
			node = this.nodes[i];
			this._point.x = node.x - Camera.scroll.x * this.debugScrollFactor.x;
			this._point.y = node.y - Camera.scroll.y * this.debugScrollFactor.y;
			var nodeSize = 2;
			if(i == 0 || i == l - 1) nodeSize *= 2;
			var nodeColor = this.debugColor;
			if(l > 1) {
				if(i == 0) nodeColor = -16744448; else if(i == l - 1) nodeColor = -65536;
			}
			gfx.beginFill(nodeColor,0.5);
			gfx.lineStyle();
			gfx.drawRect(this._point.x - nodeSize * 0.5,this._point.y - nodeSize * 0.5,nodeSize,nodeSize);
			gfx.endFill();
			var linealpha = 0.3;
			if(i < l - 1) nextNode = this.nodes[i + 1]; else {
				nextNode = this.nodes[0];
				linealpha = 0.15;
			}
			gfx.moveTo(this._point.x,this._point.y);
			gfx.lineStyle(1,this.debugColor,linealpha);
			this._point.x = nextNode.x - Camera.scroll.x * this.debugScrollFactor.x;
			this._point.y = nextNode.y - Camera.scroll.y * this.debugScrollFactor.y;
			gfx.lineTo(this._point.x,this._point.y);
			i++;
		}
	}
	,tail: function() {
		if(this.nodes.length > 0) return this.nodes[this.nodes.length - 1];
		return null;
	}
	,head: function() {
		if(this.nodes.length > 0) return this.nodes[0];
		return null;
	}
	,removeAt: function(Index) {
		if(this.nodes.length <= 0) return null;
		if(Index >= this.nodes.length) Index = this.nodes.length - 1;
		return this.nodes.splice(Index,1)[0];
	}
	,remove: function(Node) {
		var index = org.flixel.util.FlxArray.indexOf(this.nodes,Node,null);
		if(index >= 0) return this.nodes.splice(index,1)[0]; else return null;
	}
	,addPointAt: function(Node,Index,AsReference) {
		if(AsReference == null) AsReference = false;
		if(Index < 0) return;
		if(Index > this.nodes.length) Index = this.nodes.length;
		if(AsReference) this.nodes.splice(Index,0,Node); else this.nodes.splice(Index,0,new org.flixel.util.FlxPoint(Node.x,Node.y));
	}
	,addPoint: function(Node,AsReference) {
		if(AsReference == null) AsReference = false;
		if(AsReference) this.nodes.push(Node); else this.nodes.push(new org.flixel.util.FlxPoint(Node.x,Node.y));
	}
	,addAt: function(X,Y,Index) {
		if(Index < 0) return;
		if(Index > this.nodes.length) Index = this.nodes.length;
		this.nodes.splice(Index,0,new org.flixel.util.FlxPoint(X,Y));
	}
	,add: function(X,Y) {
		this.nodes.push(new org.flixel.util.FlxPoint(X,Y));
	}
	,destroy: function() {
		var debugPathDisplay = org.flixel.FlxPath.get_manager();
		if(debugPathDisplay != null) debugPathDisplay.remove(this);
		this.debugScrollFactor = null;
		this._point = null;
		this.nodes = null;
	}
	,__class__: org.flixel.FlxPath
}
org.flixel.FlxSave = function() {
	this.destroy();
};
$hxClasses["org.flixel.FlxSave"] = org.flixel.FlxSave;
org.flixel.FlxSave.__name__ = ["org","flixel","FlxSave"];
org.flixel.FlxSave.prototype = {
	checkBinding: function() {
		if(this._sharedObject == null) {
			org.flixel.FlxG.warn("You must call FlxSave.bind()\nbefore you can read or write data.");
			return false;
		}
		return true;
	}
	,onDone: function(Result) {
		switch(Result) {
		case org.flixel.FlxSave.PENDING:
			org.flixel.FlxG.warn("FlxSave is requesting extra storage space.");
			break;
		case org.flixel.FlxSave.ERROR:
			org.flixel.FlxG.error("There was a problem flushing\nthe shared object data from FlxSave.");
			break;
		}
		if(this._onComplete != null) this._onComplete(Result == org.flixel.FlxSave.SUCCESS);
		if(this._closeRequested) this.destroy();
		return Result == org.flixel.FlxSave.SUCCESS;
	}
	,erase: function() {
		if(!this.checkBinding()) return false;
		this._sharedObject.clear();
		return true;
	}
	,flush: function(MinFileSize,OnComplete) {
		if(MinFileSize == null) MinFileSize = 0;
		if(!this.checkBinding()) return false;
		this._onComplete = OnComplete;
		var result;
		try {
			result = this._sharedObject.flush();
		} catch( e ) {
			if( js.Boot.__instanceof(e,flash.errors.Error) ) {
				return this.onDone(org.flixel.FlxSave.ERROR);
			} else throw(e);
		}
		if(result == flash.net.SharedObjectFlushStatus.PENDING) {
		}
		return this.onDone(result == flash.net.SharedObjectFlushStatus.FLUSHED?org.flixel.FlxSave.SUCCESS:org.flixel.FlxSave.PENDING);
	}
	,close: function(MinFileSize,OnComplete) {
		if(MinFileSize == null) MinFileSize = 0;
		this._closeRequested = true;
		return this.flush(MinFileSize,OnComplete);
	}
	,bind: function(Name) {
		this.destroy();
		this.name = Name;
		try {
			this._sharedObject = flash.net.SharedObject.getLocal(this.name);
		} catch( e ) {
			if( js.Boot.__instanceof(e,flash.errors.Error) ) {
				org.flixel.FlxG.error("There was a problem binding to\nthe shared object data from FlxSave.");
				this.destroy();
				return false;
			} else throw(e);
		}
		this.data = this._sharedObject.data;
		return true;
	}
	,destroy: function() {
		this._sharedObject = null;
		this.name = null;
		this.data = null;
		this._onComplete = null;
		this._closeRequested = false;
	}
	,__class__: org.flixel.FlxSave
}
org.flixel.FlxSound = function() {
	this._volumeAdjust = 1.0;
	org.flixel.FlxBasic.call(this);
	this.reset();
};
$hxClasses["org.flixel.FlxSound"] = org.flixel.FlxSound;
org.flixel.FlxSound.__name__ = ["org","flixel","FlxSound"];
org.flixel.FlxSound.__super__ = org.flixel.FlxBasic;
org.flixel.FlxSound.prototype = $extend(org.flixel.FlxBasic.prototype,{
	gotID3: function(event) {
		org.flixel.FlxG.notice("Got ID3 info.");
		this.name = this._sound.id3.songName;
		this.artist = this._sound.id3.artist;
		this._sound.removeEventListener(flash.events.Event.ID3,$bind(this,this.gotID3));
	}
	,cleanup: function(destroySound,resetPosition,resetFading) {
		if(resetFading == null) resetFading = true;
		if(resetPosition == null) resetPosition = true;
		if(destroySound) {
			this.reset();
			return;
		}
		if(this._channel != null) {
			this._channel.removeEventListener(flash.events.Event.SOUND_COMPLETE,$bind(this,this.stopped));
			this._channel.stop();
			this._channel = null;
		}
		this.active = false;
		if(resetPosition) {
			this._position = 0;
			this._paused = false;
		}
		if(resetFading) {
			if(this._fade != null) this._fade.destroy();
			this._fade = null;
			this._onFadeComplete = null;
		}
	}
	,stopped: function(event) {
		if(this.onComplete != null) this.onComplete();
		if(this._looped) {
			this.cleanup(false);
			this.play();
		} else this.cleanup(this.autoDestroy);
	}
	,startSound: function(Position) {
		var numLoops = this._looped && Position == 0?9999:0;
		this._position = Position;
		this._paused = false;
		this._channel = this._sound.play(this._position,numLoops,this._transform);
		if(this._channel != null) {
			this._channel.addEventListener(flash.events.Event.SOUND_COMPLETE,$bind(this,this.stopped));
			this.active = true;
		} else {
			this.exists = false;
			this.active = false;
		}
	}
	,updateTransform: function() {
		this._transform.volume = (org.flixel.FlxG.mute?0:1) * org.flixel.FlxG.volume * this._volume * this._volumeAdjust;
		if(this._channel != null) this._channel.set_soundTransform(this._transform);
	}
	,getActualVolume: function() {
		return this._volume * this._volumeAdjust;
	}
	,set_volume: function(Volume) {
		this._volume = Volume;
		if(this._volume < 0) this._volume = 0; else if(this._volume > 1) this._volume = 1;
		this.updateTransform();
		return Volume;
	}
	,get_volume: function() {
		return this._volume;
	}
	,get_playing: function() {
		return this._channel != null;
	}
	,fadeIn: function(Seconds) {
		if(this.get_playing() && this._fade == null) return;
		var fadeStartVolume = this._fade != null?this._fade.get_value():0;
		this._fade = new org.flixel.FadeTween(fadeStartVolume,1,Seconds);
		this._onFadeComplete = null;
		this.play();
	}
	,fadeOut: function(Seconds,PauseInstead) {
		if(PauseInstead == null) PauseInstead = false;
		if(!this.get_playing()) return;
		var fadeStartVolume = this._fade != null?this._fade.get_value():1;
		this._fade = new org.flixel.FadeTween(fadeStartVolume,0,Seconds);
		this._onFadeComplete = PauseInstead?$bind(this,this.pause):$bind(this,this.stop);
	}
	,stop: function() {
		this.cleanup(this.autoDestroy,true,true);
	}
	,pause: function() {
		if(!this.get_playing()) return;
		this._position = this._channel.position;
		this._paused = true;
		this.cleanup(false,false,false);
	}
	,resume: function() {
		if(this._paused) this.startSound(this._position);
	}
	,play: function(ForceRestart) {
		if(ForceRestart == null) ForceRestart = false;
		if(!this.exists) return;
		if(ForceRestart) this.cleanup(false,true,true); else if(this.get_playing()) return;
		if(this._paused) this.resume(); else this.startSound(0);
	}
	,proximity: function(X,Y,TargetObject,Radius,Pan) {
		if(Pan == null) Pan = true;
		this.x = X;
		this.y = Y;
		this._target = TargetObject;
		this._radius = Radius;
		this._pan = Pan;
		return this;
	}
	,loadStream: function(SoundURL,Looped,AutoDestroy,OnComplete) {
		if(AutoDestroy == null) AutoDestroy = false;
		if(Looped == null) Looped = false;
		this.cleanup(true);
		this._sound = new flash.media.Sound();
		this._sound.addEventListener(flash.events.Event.ID3,$bind(this,this.gotID3));
		this._sound.load(new flash.net.URLRequest(SoundURL));
		this._looped = Looped;
		this.autoDestroy = AutoDestroy;
		this.updateTransform();
		this.exists = true;
		this.onComplete = OnComplete;
		return this;
	}
	,loadEmbedded: function(EmbeddedSound,Looped,AutoDestroy,OnComplete) {
		if(AutoDestroy == null) AutoDestroy = false;
		if(Looped == null) Looped = false;
		this.cleanup(true);
		if(js.Boot.__instanceof(EmbeddedSound,flash.media.Sound)) this._sound = EmbeddedSound; else if(js.Boot.__instanceof(EmbeddedSound,Class)) this._sound = Type.createInstance(EmbeddedSound,[]); else if(js.Boot.__instanceof(EmbeddedSound,String)) this._sound = openfl.Assets.getSound(EmbeddedSound);
		this._looped = Looped;
		this.autoDestroy = AutoDestroy;
		this.updateTransform();
		this.exists = true;
		this.onComplete = OnComplete;
		return this;
	}
	,kill: function() {
		org.flixel.FlxBasic.prototype.kill.call(this);
		this.cleanup(false);
	}
	,update: function() {
		if(!this.get_playing()) return;
		this._position = this._channel.position;
		var radialMultiplier = 1.0;
		var fadeMultiplier = 1.0;
		if(this._target != null) {
			radialMultiplier = org.flixel.util.FlxMath.getDistance(new org.flixel.util.FlxPoint(this._target.x,this._target.y),new org.flixel.util.FlxPoint(this.x,this.y)) / this._radius;
			if(radialMultiplier < 0) radialMultiplier = 0;
			if(radialMultiplier > 1) radialMultiplier = 1;
			radialMultiplier = 1 - radialMultiplier;
			if(this._pan) {
				var d = (this.x - this._target.x) / this._radius;
				if(d < -1) d = -1; else if(d > 1) d = 1;
				this._transform.pan = d;
			}
		}
		if(this._fade != null) {
			var _g = this._fade;
			_g.set_progress(_g.get_progress() + org.flixel.FlxG.elapsed);
			fadeMultiplier = this._fade.get_value();
			if(this._fade.get_finished()) {
				this._fade = null;
				if(this._onFadeComplete != null) this._onFadeComplete();
			}
		}
		this._volumeAdjust = radialMultiplier * fadeMultiplier;
		this.updateTransform();
		if(this._transform.volume > 0) {
			this.amplitudeLeft = this._channel.leftPeak / this._transform.volume;
			this.amplitudeRight = this._channel.rightPeak / this._transform.volume;
			this.amplitude = (this.amplitudeLeft + this.amplitudeRight) * 0.5;
		} else {
			this.amplitudeLeft = 0;
			this.amplitudeRight = 0;
			this.amplitude = 0;
		}
	}
	,destroy: function() {
		this._transform = null;
		this.exists = false;
		this.active = false;
		this._target = null;
		this.name = null;
		this.artist = null;
		if(this._channel != null) {
			this._channel.removeEventListener(flash.events.Event.SOUND_COMPLETE,$bind(this,this.stopped));
			this._channel.stop();
			this._channel = null;
		}
		if(this._sound != null) {
			this._sound.removeEventListener(flash.events.Event.ID3,$bind(this,this.gotID3));
			this._sound = null;
		}
		this.onComplete = null;
		org.flixel.FlxBasic.prototype.destroy.call(this);
	}
	,reset: function() {
		this.destroy();
		this.x = 0;
		this.y = 0;
		this._position = 0;
		this._paused = false;
		this._volume = 1.0;
		this._volumeAdjust = 1.0;
		this._looped = false;
		this._target = null;
		this._radius = 0;
		this._pan = false;
		if(this._fade != null) this._fade.destroy();
		this._fade = null;
		this._onFadeComplete = null;
		this.visible = false;
		this.amplitude = 0;
		this.amplitudeLeft = 0;
		this.amplitudeRight = 0;
		this.autoDestroy = false;
		if(this._transform == null) this._transform = new flash.media.SoundTransform();
		this._transform.pan = 0;
	}
	,__class__: org.flixel.FlxSound
	,__properties__: $extend(org.flixel.FlxBasic.prototype.__properties__,{get_playing:"get_playing",set_volume:"set_volume",get_volume:"get_volume"})
});
org.flixel.FadeTween = function(StartValue,EndValue,Duration,Ease) {
	this.easingFunction = Ease != null?Ease:org.flixel.FadeTween.linear;
	this.startValue = StartValue;
	this.totalChange = EndValue - StartValue;
	this.duration = Duration;
	this._progress = 0;
};
$hxClasses["org.flixel.FadeTween"] = org.flixel.FadeTween;
org.flixel.FadeTween.__name__ = ["org","flixel","FadeTween"];
org.flixel.FadeTween.linear = function(t,b,c,d) {
	return b + c * t / d;
}
org.flixel.FadeTween.prototype = {
	get_value: function() {
		return this.easingFunction(this._progress,this.startValue,this.totalChange,this.duration);
	}
	,get_finished: function() {
		return this._progress >= this.duration;
	}
	,set_progress: function(value) {
		if(value >= this.duration) value = this.duration; else if(value < 0) value = 0;
		this._progress = value;
		return this._progress;
	}
	,get_progress: function() {
		return this._progress;
	}
	,destroy: function() {
		this.easingFunction = null;
	}
	,__class__: org.flixel.FadeTween
	,__properties__: {set_progress:"set_progress",get_progress:"get_progress",get_finished:"get_finished",get_value:"get_value"}
}
org.flixel.FlxSubState = function(bgColor,useMouse) {
	if(useMouse == null) useMouse = false;
	if(bgColor == null) bgColor = 0;
	this._initialized = false;
	org.flixel.FlxState.call(this);
	this.closeCallback = null;
	this._bgSprite = new org.flixel.system.BGSprite();
	this.set_bgColor(bgColor);
	this.set_useMouse(useMouse);
};
$hxClasses["org.flixel.FlxSubState"] = org.flixel.FlxSubState;
org.flixel.FlxSubState.__name__ = ["org","flixel","FlxSubState"];
org.flixel.FlxSubState.__super__ = org.flixel.FlxState;
org.flixel.FlxSubState.prototype = $extend(org.flixel.FlxState.prototype,{
	destroy: function() {
		org.flixel.FlxState.prototype.destroy.call(this);
		this._initialized = false;
		this._parentState = null;
		this.closeCallback = null;
	}
	,close: function(destroy) {
		if(destroy == null) destroy = true;
		if(this._parentState != null) this._parentState.subStateCloseHandler(destroy); else throw "This subState haven't any parent state";
	}
	,draw: function() {
		this._bgSprite.draw();
		org.flixel.FlxState.prototype.draw.call(this);
	}
	,set_bgColor: function(value) {
		this._bgColor = value;
		if(this._bgSprite != null) this._bgSprite.get_pixels().setPixel32(0,0,this._bgColor);
		return value;
	}
	,get_bgColor: function() {
		return this._bgColor;
	}
	,initialize: function() {
		this._initialized = true;
	}
	,get_initialized: function() {
		return this._initialized;
	}
	,__class__: org.flixel.FlxSubState
	,__properties__: $extend(org.flixel.FlxState.prototype.__properties__,{get_initialized:"get_initialized"})
});
org.flixel.FlxText = function(X,Y,Width,Text,size,EmbeddedFont,IsStatic) {
	if(IsStatic == null) IsStatic = false;
	if(EmbeddedFont == null) EmbeddedFont = true;
	if(size == null) size = 8;
	org.flixel.FlxSprite.call(this,X,Y);
	this._isStatic = false;
	var key = org.flixel.FlxG.getUniqueBitmapKey("text");
	this.makeGraphic(Width,1,0,false,key);
	if(Text == null) Text = "";
	this._textField = new flash.text.TextField();
	this._textField.set_width(Width);
	this._textField.selectable = false;
	this._textField.multiline = true;
	this._textField.set_wordWrap(true);
	this._format = new flash.text.TextFormat(openfl.Assets.getFont(org.flixel.FlxAssets.defaultFont).fontName,size,16777215);
	this._formatAdjusted = new flash.text.TextFormat();
	this._textField.set_defaultTextFormat(this._format);
	this._textField.set_text(Text);
	this._textField.embedFonts = EmbeddedFont;
	if(Text.length <= 0) this._textField.set_height(1); else this._textField.set_height(10);
	this._regen = true;
	this._shadow = 0;
	this._useShadow = false;
	this.allowCollisions = 0;
	this.moves = false;
	if(Text != "") this.calcFrame(true);
	this._isStatic = IsStatic;
};
$hxClasses["org.flixel.FlxText"] = org.flixel.FlxText;
org.flixel.FlxText.__name__ = ["org","flixel","FlxText"];
org.flixel.FlxText.__super__ = org.flixel.FlxSprite;
org.flixel.FlxText.prototype = $extend(org.flixel.FlxSprite.prototype,{
	updateFormat: function(format) {
		this._textField.setTextFormat(format,0,this._textField.get_text().length);
	}
	,draw: function() {
		if(this._regen) this.calcFrame(true);
		org.flixel.FlxSprite.prototype.draw.call(this);
	}
	,updateFrameData: function() {
		if(this._node != null && this.frameWidth >= 1 && this.frameHeight >= 1) {
			this._framesData = this._node.getSpriteSheetFrames(this.width | 0,this.height | 0);
			this._flxFrame = this._framesData.frames[0];
		}
	}
	,updateAtlasInfo: function(updateAtlas) {
		if(updateAtlas == null) updateAtlas = false;
		this._atlas = org.flixel.FlxG.get_state().getAtlasFor(this._bitmapDataKey);
		var cachedBmd = org.flixel.FlxG._cache.get(this._bitmapDataKey);
		if(cachedBmd != this._pixels) {
			org.flixel.FlxG._cache.set(this._bitmapDataKey,this._pixels);
			this._atlas.clearAndFillWith(this._pixels);
			cachedBmd.dispose();
		}
		this._node = this._atlas.getNodeByKey(this._bitmapDataKey);
		this.updateFrameData();
	}
	,set_atlas: function(value) {
		if(!this._isStatic) return value;
		return org.flixel.FlxSprite.prototype.set_atlas.call(this,value);
	}
	,convertTextAlignmentFromString: function(strAlign) {
		if(strAlign == "right") return flash.text.TextFormatAlign.RIGHT; else if(strAlign == "center") return flash.text.TextFormatAlign.CENTER; else if(strAlign == "justify") return flash.text.TextFormatAlign.JUSTIFY; else return flash.text.TextFormatAlign.LEFT;
	}
	,dtfCopy: function() {
		var defaultTextFormat = this._textField.get_defaultTextFormat();
		return new flash.text.TextFormat(defaultTextFormat.font,defaultTextFormat.size,defaultTextFormat.color,defaultTextFormat.bold,defaultTextFormat.italic,defaultTextFormat.underline,defaultTextFormat.url,defaultTextFormat.target,defaultTextFormat.align);
	}
	,setClipping: function(width,height) {
	}
	,addFilter: function(filter,widthInc,heightInc) {
		if(heightInc == null) heightInc = 0;
		if(widthInc == null) widthInc = 0;
		org.flixel.FlxSprite.prototype.addFilter.call(this,filter);
	}
	,calcFrame: function(AreYouSure) {
		if(AreYouSure == null) AreYouSure = false;
		if(AreYouSure) {
			this._regen = true;
			if(this._regen) {
				this.set_height(this._textField.get_textHeight());
				var _g = this;
				_g.set_height(_g.height + 4);
				this._pixels = new flash.display.BitmapData(this.width | 0,this.height | 0,true,0);
				this.frameHeight = this.height | 0;
				this._textField.set_height(this.height * 1.2);
				this._flashRect.x = 0;
				this._flashRect.y = 0;
				this._flashRect.width = this.width;
				this._flashRect.height = this.height;
				this._regen = false;
			} else this._pixels.fillRect(this._flashRect,0);
			if(this._textField != null && this._textField.get_text() != null && this._textField.get_text().length > 0) {
				this._formatAdjusted.font = this._format.font;
				this._formatAdjusted.size = this._format.size;
				this._formatAdjusted.color = this._format.color;
				this._formatAdjusted.align = this._format.align;
				this._matrix.identity();
				if(this._format.align == flash.text.TextFormatAlign.CENTER) {
					this._formatAdjusted.align = flash.text.TextFormatAlign.LEFT;
					this._textField.setTextFormat(this._formatAdjusted,0,this._textField.get_text().length);
					this._matrix.translate(Math.floor((this.width - this._textField.get_textWidth()) / 2),0);
				}
				if(this._useShadow) {
					this._formatAdjusted.color = this._shadow;
					this._textField.setTextFormat(this._formatAdjusted,0,this._textField.get_text().length);
					this._matrix.translate(1,1);
					this._pixels.draw(this._textField,this._matrix,this._colorTransform);
					this._matrix.translate(-1,-1);
					this._formatAdjusted.color = this._format.color;
					this._textField.setTextFormat(this._formatAdjusted,0,this._textField.get_text().length);
				}
				this._pixels.draw(this._textField,this._matrix,this._colorTransform);
				this._textField.setTextFormat(this._format,0,this._textField.get_text().length);
			}
			this.updateAtlasInfo();
			this.origin.make(this.frameWidth * 0.5,this.frameHeight * 0.5);
		}
		this.dirty = false;
		if(this.filters != null) {
			this._pixels.copyPixels(this._pixelsBackup,this._flashRect,this._flashPointZero);
			var _g = 0, _g1 = this.filters;
			while(_g < _g1.length) {
				var filter = _g1[_g];
				++_g;
				this._pixels.applyFilter(this._pixels,this._flashRect,this._flashPointZero,filter);
			}
		}
	}
	,set_isStatic: function(value) {
		if(this._isStatic) return value;
		return this._isStatic = value;
	}
	,get_isStatic: function() {
		return this._isStatic;
	}
	,set_useShadow: function(value) {
		if(this._isStatic) return value;
		if(value != this._useShadow) {
			this._useShadow = value;
			this.dirty = true;
		}
		return this._useShadow;
	}
	,get_useShadow: function() {
		return this._useShadow;
	}
	,set_shadow: function(Color) {
		if(this._isStatic) return Color;
		this._shadow = Color;
		this.dirty = true;
		return Color;
	}
	,get_shadow: function() {
		return this._shadow;
	}
	,set_alignment: function(Alignment) {
		if(this._isStatic) return Alignment;
		this._format.align = this.convertTextAlignmentFromString(Alignment);
		this._textField.set_defaultTextFormat(this._format);
		this._textField.setTextFormat(this._format,0,this._textField.get_text().length);
		this.dirty = true;
		this._regen = true;
		return Alignment;
	}
	,get_alignment: function() {
		return js.Boot.__cast(this._format.align , String);
	}
	,set_font: function(Font) {
		if(this._isStatic) return Font;
		this._format.font = openfl.Assets.getFont(Font).fontName;
		this._textField.set_defaultTextFormat(this._format);
		this._textField.setTextFormat(this._format,0,this._textField.get_text().length);
		this._regen = true;
		return Font;
	}
	,get_font: function() {
		return this._format.font;
	}
	,set_color: function(Color) {
		if(this._isStatic) return Color;
		Color &= 16777215;
		this._format.color = Color;
		this._textField.set_defaultTextFormat(this._format);
		this._textField.setTextFormat(this._format,0,this._textField.get_text().length);
		this._regen = true;
		return Color;
	}
	,get_color: function() {
		return this._format.color;
	}
	,set_size: function(Size) {
		if(this._isStatic) return Size;
		this._format.size = Size;
		this._textField.set_defaultTextFormat(this._format);
		this._textField.setTextFormat(this._format,0,this._textField.get_text().length);
		this._regen = true;
		return Size;
	}
	,get_size: function() {
		return this._format.size;
	}
	,set_text: function(Text) {
		if(this._isStatic) return Text;
		var ot = this._textField.get_text();
		this._textField.set_text(Text);
		if(this._textField.get_text() != ot) this._regen = true;
		return this._textField.get_text();
	}
	,get_text: function() {
		return this._textField.get_text();
	}
	,setFormat: function(Font,Size,Color,Alignment,ShadowColor,UseShadow) {
		if(UseShadow == null) UseShadow = false;
		if(ShadowColor == null) ShadowColor = 0;
		if(Color == null) Color = 16777215;
		if(Size == null) Size = 8;
		if(this._isStatic) return this;
		if(Font == null) Font = org.flixel.FlxAssets.defaultFont;
		this._format.font = openfl.Assets.getFont(Font).fontName;
		this._format.size = Size;
		Color &= 16777215;
		this._format.color = Color;
		this._format.align = this.convertTextAlignmentFromString(Alignment);
		this._textField.set_defaultTextFormat(this._format);
		this._textField.setTextFormat(this._format,0,this._textField.get_text().length);
		this._shadow = ShadowColor;
		this._useShadow = UseShadow;
		this._regen = true;
		return this;
	}
	,destroy: function() {
		this._textField = null;
		this._format = null;
		this._formatAdjusted = null;
		org.flixel.FlxSprite.prototype.destroy.call(this);
	}
	,__class__: org.flixel.FlxText
	,__properties__: $extend(org.flixel.FlxSprite.prototype.__properties__,{set_shadow:"set_shadow",get_shadow:"get_shadow",set_useShadow:"set_useShadow",get_useShadow:"get_useShadow",set_text:"set_text",get_text:"get_text",set_size:"set_size",get_size:"get_size",set_font:"set_font",get_font:"get_font",set_alignment:"set_alignment",get_alignment:"get_alignment",set_isStatic:"set_isStatic",get_isStatic:"get_isStatic"})
});
org.flixel.FlxTilemap = function() {
	this.tileScaleHack = 1.01;
	this._repeatY = 0;
	this._repeatX = 0;
	org.flixel.FlxObject.call(this);
	this.auto = 0;
	this.widthInTiles = 0;
	this.heightInTiles = 0;
	this.totalTiles = 0;
	this._buffers = new Array();
	this._flashPoint = new flash.geom.Point();
	this._flashRect = null;
	this._data = null;
	this._tileWidth = 0;
	this._tileHeight = 0;
	this._rectIDs = null;
	this._tiles = null;
	this._tileObjects = null;
	this.immovable = true;
	this.moves = false;
	this.cameras = null;
	this._lastVisualDebug = org.flixel.FlxG.visualDebug;
	this._startingIndex = 0;
	this._helperPoint = new flash.geom.Point();
};
$hxClasses["org.flixel.FlxTilemap"] = org.flixel.FlxTilemap;
org.flixel.FlxTilemap.__name__ = ["org","flixel","FlxTilemap"];
org.flixel.FlxTilemap.arrayToCSV = function(Data,Width,Invert) {
	if(Invert == null) Invert = false;
	var row = 0;
	var column;
	var csv = "";
	var Height = Data.length / Width | 0;
	var index;
	var offset = 0;
	while(row < Height) {
		column = 0;
		while(column < Width) {
			index = Data[offset];
			if(Invert) {
				if(index == 0) index = 1; else if(index == 1) index = 0;
			}
			if(column == 0) {
				if(row == 0) csv += index; else csv += "\n" + index;
			} else csv += ", " + index;
			column++;
			offset++;
		}
		row++;
	}
	return csv;
}
org.flixel.FlxTilemap.bitmapToCSV = function(bitmapData,Invert,Scale,ColorMap) {
	if(Scale == null) Scale = 1;
	if(Invert == null) Invert = false;
	if(Scale < 1) Scale = 1;
	if(Scale > 1) {
		var bd = bitmapData;
		bitmapData = new flash.display.BitmapData((bitmapData._nmeTextureBuffer != null?bitmapData._nmeTextureBuffer.width:0) * Scale,(bitmapData._nmeTextureBuffer != null?bitmapData._nmeTextureBuffer.height:0) * Scale);
		var bdW = bd._nmeTextureBuffer != null?bd._nmeTextureBuffer.width:0;
		var bdH = bd._nmeTextureBuffer != null?bd._nmeTextureBuffer.height:0;
		var pCol = 0;
		var _g = 0;
		while(_g < bdW) {
			var i = _g++;
			var _g1 = 0;
			while(_g1 < bdH) {
				var j = _g1++;
				pCol = bd.getPixel(i,j);
				var _g2 = 0;
				while(_g2 < Scale) {
					var k = _g2++;
					var _g3 = 0;
					while(_g3 < Scale) {
						var m = _g3++;
						bitmapData.setPixel(i * Scale + k,j * Scale + m,pCol);
					}
				}
			}
		}
	}
	var row = 0;
	var column;
	var pixel;
	var csv = "";
	var bitmapWidth = bitmapData._nmeTextureBuffer != null?bitmapData._nmeTextureBuffer.width:0;
	var bitmapHeight = bitmapData._nmeTextureBuffer != null?bitmapData._nmeTextureBuffer.height:0;
	while(row < bitmapHeight) {
		column = 0;
		while(column < bitmapWidth) {
			pixel = bitmapData.getPixel(column,row);
			if(ColorMap != null) pixel = org.flixel.util.FlxArray.indexOf(ColorMap,pixel,null); else if(Invert && pixel > 0 || !Invert && pixel == 0) pixel = 1; else pixel = 0;
			if(column == 0) {
				if(row == 0) csv += pixel; else csv += "\n" + pixel;
			} else csv += ", " + pixel;
			column++;
		}
		row++;
	}
	return csv;
}
org.flixel.FlxTilemap.imageToCSV = function(ImageFile,Invert,Scale) {
	if(Scale == null) Scale = 1;
	if(Invert == null) Invert = false;
	var tempBitmapData;
	if(js.Boot.__instanceof(ImageFile,String)) tempBitmapData = org.flixel.FlxAssets.getBitmapData(ImageFile); else tempBitmapData = Type.createInstance(ImageFile,[]).bitmapData;
	return org.flixel.FlxTilemap.bitmapToCSV(tempBitmapData,Invert,Scale);
}
org.flixel.FlxTilemap.__super__ = org.flixel.FlxObject;
org.flixel.FlxTilemap.prototype = $extend(org.flixel.FlxObject.prototype,{
	set_forceComplexRender: function(value) {
		var i = 0;
		var l;
		if(this._buffers != null) {
			i = 0;
			l = this._buffers.length;
			var _g = 0;
			while(_g < l) {
				var i1 = _g++;
				this._buffers[i1].forceComplexRender = value;
			}
		}
		return org.flixel.FlxObject.prototype.set_forceComplexRender.call(this,value);
	}
	,updateBuffers: function() {
		var i = 0;
		var l;
		if(this._buffers != null) {
			i = 0;
			l = this._buffers.length;
			var _g = 0;
			while(_g < l) {
				var i1 = _g++;
				this._buffers[i1].destroy();
			}
			this._buffers = null;
		}
		this._buffers = new Array();
	}
	,tileToFlxSprite: function(X,Y,NewTile) {
		if(NewTile == null) NewTile = 0;
		var rowIndex = X + Y * this.widthInTiles;
		var rect = null;
		var tile = this._tileObjects[this._data[rowIndex]];
		if(tile == null || !tile.visible) {
		} else {
			var rx = (this._data[rowIndex] - this._startingIndex) * (this._tileWidth + this._repeatX + 1);
			var ry = 0;
			if((rx | 0) >= this._tiles.get_width()) {
				ry = (rx / this._tiles.get_width() | 0) * (this._tileHeight + this._repeatY + 1);
				rx %= this._tiles.get_width();
			}
			rect = new flash.geom.Rectangle(rx,ry,this._tileWidth,this._tileHeight);
		}
		var pt = new flash.geom.Point(0,0);
		var tileSprite = new org.flixel.FlxSprite();
		tileSprite.makeGraphic(this._tileWidth,this._tileHeight,0,true);
		tileSprite.x = X * this._tileWidth + this.x;
		tileSprite.y = Y * this._tileHeight + this.y;
		if(rect != null) tileSprite.get_pixels().copyPixels(this._tiles,rect,pt);
		tileSprite.dirty = true;
		tileSprite.updateFrameData();
		if(NewTile >= 0) this.setTile(X,Y,NewTile);
		return tileSprite;
	}
	,updateFrameData: function() {
		if(this._node != null && this._tileWidth >= 1 && this._tileHeight >= 1) {
			this._framesData = this._node.getSpriteSheetFrames(this._tileWidth,this._tileHeight,new flash.geom.Point(0,0),0,0,0,0,this._repeatX + 1,this._repeatY + 1);
			this._rectIDs = new Array();
			org.flixel.util.FlxArray.setLength(this._rectIDs,this.totalTiles);
			var i = 0;
			while(i < this.totalTiles) this.updateTile(i++);
		}
	}
	,updateTile: function(Index) {
		var tile = this._tileObjects[this._data[Index]];
		if(tile == null || !tile.visible) {
			this._rectIDs[Index] = -1;
			return;
		}
		this._rectIDs[Index] = this._framesData.frames[this._data[Index] - this._startingIndex].tileID;
	}
	,autoTile: function(Index) {
		if(this._data[Index] == 0) return;
		this._data[Index] = 0;
		if(Index - this.widthInTiles < 0 || this._data[Index - this.widthInTiles] > 0) this._data[Index] += 1;
		if(Index % this.widthInTiles >= this.widthInTiles - 1 || this._data[Index + 1] > 0) this._data[Index] += 2;
		if((Index + this.widthInTiles | 0) >= this.totalTiles || this._data[Index + this.widthInTiles] > 0) this._data[Index] += 4;
		if(Index % this.widthInTiles <= 0 || this._data[Index - 1] > 0) this._data[Index] += 8;
		if(this.auto == 2 && this._data[Index] == 15) {
			if(Index % this.widthInTiles > 0 && (Index + this.widthInTiles | 0) < this.totalTiles && this._data[Index + this.widthInTiles - 1] <= 0) this._data[Index] = 1;
			if(Index % this.widthInTiles > 0 && Index - this.widthInTiles >= 0 && this._data[Index - this.widthInTiles - 1] <= 0) this._data[Index] = 2;
			if(Index % this.widthInTiles < this.widthInTiles - 1 && Index - this.widthInTiles >= 0 && this._data[Index - this.widthInTiles + 1] <= 0) this._data[Index] = 4;
			if(Index % this.widthInTiles < this.widthInTiles - 1 && (Index + this.widthInTiles | 0) < this.totalTiles && this._data[Index + this.widthInTiles + 1] <= 0) this._data[Index] = 8;
		}
		this._data[Index] += 1;
	}
	,rayHit: function(Start,End,Resolution) {
		if(Resolution == null) Resolution = 1;
		var Result = null;
		var step = this._tileWidth;
		if(this._tileHeight < this._tileWidth) step = this._tileHeight;
		step /= Resolution;
		var deltaX = End.x - Start.x;
		var deltaY = End.y - Start.y;
		var distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
		var steps = Math.ceil(distance / step);
		var stepX = deltaX / steps;
		var stepY = deltaY / steps;
		var curX = Start.x - stepX - this.x;
		var curY = Start.y - stepY - this.y;
		var tileX;
		var tileY;
		var i = 0;
		while(i < steps) {
			curX += stepX;
			curY += stepY;
			if(curX < 0 || curX > this.width || curY < 0 || curY > this.height) {
				i++;
				continue;
			}
			tileX = Math.floor(curX / this._tileWidth);
			tileY = Math.floor(curY / this._tileHeight);
			if(this._tileObjects[this._data[tileY * this.widthInTiles + tileX]].allowCollisions != 0) {
				tileX *= this._tileWidth;
				tileY *= this._tileHeight;
				var rx = 0;
				var ry = 0;
				var q;
				var lx = curX - stepX;
				var ly = curY - stepY;
				q = tileX;
				if(deltaX < 0) q += this._tileWidth;
				rx = q;
				ry = ly + stepY * ((q - lx) / stepX);
				if(ry > tileY && ry < tileY + this._tileHeight) {
					if(Result == null) Result = new org.flixel.util.FlxPoint();
					Result.x = rx;
					Result.y = ry;
					return Result;
				}
				q = tileY;
				if(deltaY < 0) q += this._tileHeight;
				rx = lx + stepX * ((q - ly) / stepY);
				ry = q;
				if(rx > tileX && rx < tileX + this._tileWidth) {
					if(Result == null) Result = new org.flixel.util.FlxPoint();
					Result.x = rx;
					Result.y = ry;
					return Result;
				}
				return null;
			}
			i++;
		}
		return null;
	}
	,ray: function(Start,End,Result,Resolution) {
		if(Resolution == null) Resolution = 1;
		var step = this._tileWidth;
		if(this._tileHeight < this._tileWidth) step = this._tileHeight;
		step /= Resolution;
		var deltaX = End.x - Start.x;
		var deltaY = End.y - Start.y;
		var distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
		var steps = Math.ceil(distance / step);
		var stepX = deltaX / steps;
		var stepY = deltaY / steps;
		var curX = Start.x - stepX - this.x;
		var curY = Start.y - stepY - this.y;
		var tileX;
		var tileY;
		var i = 0;
		while(i < steps) {
			curX += stepX;
			curY += stepY;
			if(curX < 0 || curX > this.width || curY < 0 || curY > this.height) {
				i++;
				continue;
			}
			tileX = Math.floor(curX / this._tileWidth);
			tileY = Math.floor(curY / this._tileHeight);
			if(this._tileObjects[this._data[tileY * this.widthInTiles + tileX]].allowCollisions != 0) {
				tileX *= this._tileWidth;
				tileY *= this._tileHeight;
				var rx = 0;
				var ry = 0;
				var q;
				var lx = curX - stepX;
				var ly = curY - stepY;
				q = tileX;
				if(deltaX < 0) q += this._tileWidth;
				rx = q;
				ry = ly + stepY * ((q - lx) / stepX);
				if(ry > tileY && ry < tileY + this._tileHeight) {
					if(Result != null) {
						Result.x = rx;
						Result.y = ry;
					}
					return false;
				}
				q = tileY;
				if(deltaY < 0) q += this._tileHeight;
				rx = lx + stepX * ((q - ly) / stepY);
				ry = q;
				if(rx > tileX && rx < tileX + this._tileWidth) {
					if(Result != null) {
						Result.x = rx;
						Result.y = ry;
					}
					return false;
				}
				return true;
			}
			i++;
		}
		return true;
	}
	,getBounds: function(Bounds) {
		if(Bounds == null) Bounds = new org.flixel.util.FlxRect();
		return (function($this) {
			var $r;
			Bounds.x = $this.x;
			Bounds.y = $this.y;
			Bounds.width = $this.width;
			Bounds.height = $this.height;
			$r = Bounds;
			return $r;
		}(this));
	}
	,follow: function(Camera,Border,UpdateWorld) {
		if(UpdateWorld == null) UpdateWorld = true;
		if(Border == null) Border = 0;
		if(Camera == null) Camera = org.flixel.FlxG.camera;
		Camera.setBounds(this.x + Border * this._tileWidth,this.y + Border * this._tileHeight,this.width - Border * this._tileWidth * 2,this.height - Border * this._tileHeight * 2,UpdateWorld);
	}
	,setTileProperties: function(Tile,AllowCollisions,Callback,CallbackFilter,Range) {
		if(Range == null) Range = 1;
		if(AllowCollisions == null) AllowCollisions = 4369;
		if(Range <= 0) Range = 1;
		var tile;
		var i = Tile;
		var l = Tile + Range;
		while(i < l) {
			tile = this._tileObjects[i++];
			tile.allowCollisions = AllowCollisions;
			tile.callbackFunction = Callback;
			tile.filter = CallbackFilter;
		}
	}
	,setTileByIndex: function(Index,Tile,UpdateGraphics) {
		if(UpdateGraphics == null) UpdateGraphics = true;
		if(Index >= this._data.length) return false;
		var ok = true;
		this._data[Index] = Tile;
		if(!UpdateGraphics) return ok;
		this.setDirty();
		if(this.auto == 0) {
			this.updateTile(Index);
			return ok;
		}
		var i;
		var row = (Index / this.widthInTiles | 0) - 1;
		var rowLength = row + 3;
		var column = Index % this.widthInTiles - 1;
		var columnHeight = column + 3;
		while(row < rowLength) {
			column = columnHeight - 3;
			while(column < columnHeight) {
				if(row >= 0 && row < this.heightInTiles && column >= 0 && column < this.widthInTiles) {
					i = row * this.widthInTiles + column;
					this.autoTile(i);
					this.updateTile(i);
				}
				column++;
			}
			row++;
		}
		return ok;
	}
	,setTile: function(X,Y,Tile,UpdateGraphics) {
		if(UpdateGraphics == null) UpdateGraphics = true;
		if(X >= this.widthInTiles || Y >= this.heightInTiles) return false;
		return this.setTileByIndex(Y * this.widthInTiles + X,Tile,UpdateGraphics);
	}
	,getTileCoords: function(Index,Midpoint) {
		if(Midpoint == null) Midpoint = true;
		var array = null;
		var point;
		var i = 0;
		var l = this.widthInTiles * this.heightInTiles;
		while(i < l) {
			if(this._data[i] == Index) {
				point = new org.flixel.util.FlxPoint(this.x + (i % this.widthInTiles | 0) * this._tileWidth,this.y + (i / this.widthInTiles | 0) * this._tileHeight);
				if(Midpoint) {
					point.x += this._tileWidth * 0.5;
					point.y += this._tileHeight * 0.5;
				}
				if(array == null) array = new Array();
				array.push(point);
			}
			i++;
		}
		return array;
	}
	,getTileInstances: function(Index) {
		var array = null;
		var i = 0;
		var l = this.widthInTiles * this.heightInTiles;
		while(i < l) {
			if(this._data[i] == Index) {
				if(array == null) array = [];
				array.push(i);
			}
			i++;
		}
		return array;
	}
	,getTileByIndex: function(Index) {
		return this._data[Index];
	}
	,getTile: function(X,Y) {
		return this._data[Y * this.widthInTiles + X];
	}
	,overlapsPoint: function(point,InScreenSpace,Camera) {
		if(InScreenSpace == null) InScreenSpace = false;
		if(!InScreenSpace) return this._tileObjects[this._data[Math.floor(Math.floor((point.y - this.y) / this._tileHeight) * this.widthInTiles + (point.x - this.x) / this._tileWidth)]].allowCollisions > 0;
		if(Camera == null) Camera = org.flixel.FlxG.camera;
		point.x = point.x - Camera.scroll.x;
		point.y = point.y - Camera.scroll.y;
		this.getScreenXY(this._point,Camera);
		return this._tileObjects[this._data[((point.y - this._point.y) / this._tileHeight | 0) * this.widthInTiles + (point.x - this._point.x) / this._tileWidth | 0]].allowCollisions > 0;
	}
	,overlapsWithCallback: function(Object,Callback,FlipCallbackParams,Position) {
		if(FlipCallbackParams == null) FlipCallbackParams = false;
		var results = false;
		var X = this.x;
		var Y = this.y;
		if(Position != null) {
			X = Position.x;
			Y = Position.y;
		}
		var selectionX = Math.floor((Object.x - X) / this._tileWidth);
		var selectionY = Math.floor((Object.y - Y) / this._tileHeight);
		var selectionWidth = selectionX + Math.ceil(Object.width / this._tileWidth) + 1;
		var selectionHeight = selectionY + Math.ceil(Object.height / this._tileHeight) + 1;
		if(selectionX < 0) selectionX = 0;
		if(selectionY < 0) selectionY = 0;
		if(selectionWidth > this.widthInTiles) selectionWidth = this.widthInTiles;
		if(selectionHeight > this.heightInTiles) selectionHeight = this.heightInTiles;
		var rowStart = selectionY * this.widthInTiles;
		var row = selectionY;
		var column;
		var tile;
		var overlapFound;
		var deltaX = X - this.last.x;
		var deltaY = Y - this.last.y;
		while(row < selectionHeight) {
			column = selectionX;
			while(column < selectionWidth) {
				overlapFound = false;
				var dataIndex = this._data[rowStart + column];
				if(dataIndex < 0) {
					column++;
					continue;
				}
				tile = this._tileObjects[dataIndex];
				if(tile.allowCollisions != 0) {
					tile.x = X + column * this._tileWidth;
					tile.y = Y + row * this._tileHeight;
					tile.last.x = tile.x - deltaX;
					tile.last.y = tile.y - deltaY;
					if(Callback != null) {
						if(FlipCallbackParams) overlapFound = Callback(Object,tile); else overlapFound = Callback(tile,Object);
					} else overlapFound = Object.x + Object.width > tile.x && Object.x < tile.x + tile.width && Object.y + Object.height > tile.y && Object.y < tile.y + tile.height;
					if(overlapFound) {
						if(tile.callbackFunction != null && (tile.filter == null || js.Boot.__instanceof(Object,tile.filter))) {
							tile.mapIndex = rowStart + column;
							tile.callbackFunction(tile,Object);
						}
						results = true;
					}
				} else if(tile.callbackFunction != null && (tile.filter == null || js.Boot.__instanceof(Object,tile.filter))) {
					tile.mapIndex = rowStart + column;
					tile.callbackFunction(tile,Object);
				}
				column++;
			}
			rowStart += this.widthInTiles;
			row++;
		}
		return results;
	}
	,overlapsAt: function(X,Y,ObjectOrGroup,InScreenSpace,Camera) {
		if(InScreenSpace == null) InScreenSpace = false;
		if(js.Boot.__instanceof(ObjectOrGroup,org.flixel.FlxTypedGroup)) {
			var results = false;
			var basic;
			var i = 0;
			var grp = ObjectOrGroup;
			var members = grp.members;
			while(i < grp.length) {
				basic = members[i++];
				if(basic != null && basic.exists) {
					if(js.Boot.__instanceof(basic,org.flixel.FlxObject)) {
						this._point.x = X;
						this._point.y = Y;
						if(this.overlapsWithCallback(js.Boot.__cast(basic , org.flixel.FlxObject),null,false,this._point)) results = true;
					} else if(this.overlapsAt(X,Y,basic,InScreenSpace,Camera)) results = true;
				}
			}
			return results;
		} else if(js.Boot.__instanceof(ObjectOrGroup,org.flixel.FlxObject)) {
			this._point.x = X;
			this._point.y = Y;
			return this.overlapsWithCallback(js.Boot.__cast(ObjectOrGroup , org.flixel.FlxObject),null,false,this._point);
		}
		return false;
	}
	,overlaps: function(ObjectOrGroup,InScreenSpace,Camera) {
		if(InScreenSpace == null) InScreenSpace = false;
		if(js.Boot.__instanceof(ObjectOrGroup,org.flixel.FlxTypedGroup)) {
			var results = false;
			var basic;
			var i = 0;
			var grp = ObjectOrGroup;
			var members = grp.members;
			while(i < grp.length) {
				basic = members[i++];
				if(basic != null && basic.exists) {
					if(js.Boot.__instanceof(basic,org.flixel.FlxObject)) {
						if(this.overlapsWithCallback(js.Boot.__cast(basic , org.flixel.FlxObject))) results = true;
					} else if(this.overlaps(basic,InScreenSpace,Camera)) results = true;
				}
			}
			return results;
		} else if(js.Boot.__instanceof(ObjectOrGroup,org.flixel.FlxObject)) return this.overlapsWithCallback(js.Boot.__cast(ObjectOrGroup , org.flixel.FlxObject));
		return false;
	}
	,walkPath: function(Data,Start,Points) {
		Points.push(new org.flixel.util.FlxPoint(this.x + Math.floor(Start % this.widthInTiles) * this._tileWidth + this._tileWidth * 0.5,this.y + Math.floor(Start / this.widthInTiles) * this._tileHeight + this._tileHeight * 0.5));
		if(Data[Start] == 0) return;
		var left = Start % this.widthInTiles > 0;
		var right = Start % this.widthInTiles < this.widthInTiles - 1;
		var up = Start / this.widthInTiles > 0;
		var down = Start / this.widthInTiles < this.heightInTiles - 1;
		var current = Data[Start];
		var i;
		if(up) {
			i = Start - this.widthInTiles;
			if(i >= 0 && Data[i] >= 0 && Data[i] < current) return this.walkPath(Data,i,Points);
		}
		if(right) {
			i = Start + 1;
			if(i >= 0 && Data[i] >= 0 && Data[i] < current) return this.walkPath(Data,i,Points);
		}
		if(down) {
			i = Start + this.widthInTiles;
			if(i >= 0 && Data[i] >= 0 && Data[i] < current) return this.walkPath(Data,i,Points);
		}
		if(left) {
			i = Start - 1;
			if(i >= 0 && Data[i] >= 0 && Data[i] < current) return this.walkPath(Data,i,Points);
		}
		if(up && right) {
			i = Start - this.widthInTiles + 1;
			if(i >= 0 && Data[i] >= 0 && Data[i] < current) return this.walkPath(Data,i,Points);
		}
		if(right && down) {
			i = Start + this.widthInTiles + 1;
			if(i >= 0 && Data[i] >= 0 && Data[i] < current) return this.walkPath(Data,i,Points);
		}
		if(left && down) {
			i = Start + this.widthInTiles - 1;
			if(i >= 0 && Data[i] >= 0 && Data[i] < current) return this.walkPath(Data,i,Points);
		}
		if(up && left) {
			i = Start - this.widthInTiles - 1;
			if(i >= 0 && Data[i] >= 0 && Data[i] < current) return this.walkPath(Data,i,Points);
		}
		return;
	}
	,computePathDistance: function(StartIndex,EndIndex,WideDiagonal) {
		var mapSize = this.widthInTiles * this.heightInTiles;
		var distances = new Array();
		org.flixel.util.FlxArray.setLength(distances,mapSize);
		var i = 0;
		while(i < mapSize) {
			if(this._tileObjects[this._data[i]].allowCollisions != 0) distances[i] = -2; else distances[i] = -1;
			i++;
		}
		distances[StartIndex] = 0;
		var distance = 1;
		var neighbors = [StartIndex];
		var current;
		var currentIndex;
		var left;
		var right;
		var up;
		var down;
		var currentLength;
		var foundEnd = false;
		while(neighbors.length > 0) {
			current = neighbors;
			neighbors = new Array();
			i = 0;
			currentLength = current.length;
			while(i < currentLength) {
				currentIndex = current[i++];
				if(currentIndex == (EndIndex | 0)) {
					foundEnd = true;
					neighbors = [];
					break;
				}
				left = currentIndex % this.widthInTiles > 0;
				right = currentIndex % this.widthInTiles < this.widthInTiles - 1;
				up = currentIndex / this.widthInTiles > 0;
				down = currentIndex / this.widthInTiles < this.heightInTiles - 1;
				var index;
				if(up) {
					index = currentIndex - this.widthInTiles;
					if(distances[index] == -1) {
						distances[index] = distance;
						neighbors.push(index);
					}
				}
				if(right) {
					index = currentIndex + 1;
					if(distances[index] == -1) {
						distances[index] = distance;
						neighbors.push(index);
					}
				}
				if(down) {
					index = currentIndex + this.widthInTiles;
					if(distances[index] == -1) {
						distances[index] = distance;
						neighbors.push(index);
					}
				}
				if(left) {
					index = currentIndex - 1;
					if(distances[index] == -1) {
						distances[index] = distance;
						neighbors.push(index);
					}
				}
				if(up && right) {
					index = currentIndex - this.widthInTiles + 1;
					if(WideDiagonal && distances[index] == -1 && distances[currentIndex - this.widthInTiles] >= -1 && distances[currentIndex + 1] >= -1) {
						distances[index] = distance;
						neighbors.push(index);
					} else if(!WideDiagonal && distances[index] == -1) {
						distances[index] = distance;
						neighbors.push(index);
					}
				}
				if(right && down) {
					index = currentIndex + this.widthInTiles + 1;
					if(WideDiagonal && distances[index] == -1 && distances[currentIndex + this.widthInTiles] >= -1 && distances[currentIndex + 1] >= -1) {
						distances[index] = distance;
						neighbors.push(index);
					} else if(!WideDiagonal && distances[index] == -1) {
						distances[index] = distance;
						neighbors.push(index);
					}
				}
				if(left && down) {
					index = currentIndex + this.widthInTiles - 1;
					if(WideDiagonal && distances[index] == -1 && distances[currentIndex + this.widthInTiles] >= -1 && distances[currentIndex - 1] >= -1) {
						distances[index] = distance;
						neighbors.push(index);
					} else if(!WideDiagonal && distances[index] == -1) {
						distances[index] = distance;
						neighbors.push(index);
					}
				}
				if(up && left) {
					index = currentIndex - this.widthInTiles - 1;
					if(WideDiagonal && distances[index] == -1 && distances[currentIndex - this.widthInTiles] >= -1 && distances[currentIndex - 1] >= -1) {
						distances[index] = distance;
						neighbors.push(index);
					} else if(!WideDiagonal && distances[index] == -1) {
						distances[index] = distance;
						neighbors.push(index);
					}
				}
			}
			distance++;
		}
		if(!foundEnd) distances = null;
		return distances;
	}
	,raySimplifyPath: function(Points) {
		var source = Points[0];
		var lastIndex = -1;
		var node;
		var i = 1;
		var l = Points.length;
		while(i < l) {
			node = Points[i++];
			if(node == null) continue;
			if(this.ray(source,node,this._point)) {
				if(lastIndex >= 0) Points[lastIndex] = null;
			} else source = Points[lastIndex];
			lastIndex = i - 1;
		}
	}
	,simplifyPath: function(Points) {
		var deltaPrevious;
		var deltaNext;
		var last = Points[0];
		var node;
		var i = 1;
		var l = Points.length - 1;
		while(i < l) {
			node = Points[i];
			deltaPrevious = (node.x - last.x) / (node.y - last.y);
			deltaNext = (node.x - Points[i + 1].x) / (node.y - Points[i + 1].y);
			if(last.x == Points[i + 1].x || last.y == Points[i + 1].y || deltaPrevious == deltaNext) Points[i] = null; else last = node;
			i++;
		}
	}
	,findPath: function(Start,End,Simplify,RaySimplify,WideDiagonal) {
		if(WideDiagonal == null) WideDiagonal = true;
		if(RaySimplify == null) RaySimplify = false;
		if(Simplify == null) Simplify = true;
		var startIndex = ((Start.y - this.y) / this._tileHeight | 0) * this.widthInTiles + ((Start.x - this.x) / this._tileWidth | 0);
		var endIndex = ((End.y - this.y) / this._tileHeight | 0) * this.widthInTiles + ((End.x - this.x) / this._tileWidth | 0);
		if(this._tileObjects[this._data[startIndex]].allowCollisions > 0 || this._tileObjects[this._data[endIndex]].allowCollisions > 0) return null;
		var distances = this.computePathDistance(startIndex,endIndex,WideDiagonal);
		if(distances == null) return null;
		var points = new Array();
		this.walkPath(distances,endIndex,points);
		var node;
		node = points[points.length - 1];
		node.x = Start.x;
		node.y = Start.y;
		node = points[0];
		node.x = End.x;
		node.y = End.y;
		if(Simplify) this.simplifyPath(points);
		if(RaySimplify) this.raySimplifyPath(points);
		var path = new org.flixel.FlxPath();
		var i = points.length - 1;
		while(i >= 0) {
			node = points[i--];
			if(node != null) path.addPoint(node,true);
		}
		return path;
	}
	,setDirty: function(Dirty) {
		if(Dirty == null) Dirty = true;
		var i = 0;
		var l = this._buffers.length;
		while(i < l) this._buffers[i++].dirty = Dirty;
	}
	,getData: function(Simple) {
		if(Simple == null) Simple = false;
		if(!Simple) return this._data;
		var i = 0;
		var l = this._data.length;
		var data = new Array();
		org.flixel.util.FlxArray.setLength(data,l);
		while(i < l) {
			data[i] = this._tileObjects[this._data[i]].allowCollisions > 0?1:0;
			i++;
		}
		return data;
	}
	,draw: function() {
		if(this._flickerTimer != 0) {
			this._flicker = !this._flicker;
			if(this._flicker) return;
		}
		if(this.cameras == null) this.cameras = org.flixel.FlxG.cameras;
		var camera;
		var buffer;
		var i = 0;
		var l = this.cameras.length;
		while(i < l) {
			camera = this.cameras[i];
			if(!camera.visible || !camera.exists) continue;
			if(this._buffers[i] == null) {
				this._buffers[i] = new org.flixel.system.FlxTilemapBuffer(this._tileWidth,this._tileHeight,this.widthInTiles,this.heightInTiles,camera);
				this._buffers[i].forceComplexRender = this.forceComplexRender;
			}
			buffer = this._buffers[i++];
			this.drawTilemap(buffer,camera);
			org.flixel.FlxBasic._VISIBLECOUNT++;
		}
	}
	,drawDebugOnCamera: function(Camera) {
		var buffer = null;
		var l = org.flixel.FlxG.cameras.length;
		var _g = 0;
		while(_g < l) {
			var i = _g++;
			if(org.flixel.FlxG.cameras[i] == Camera) {
				buffer = this._buffers[i];
				break;
			}
		}
		if(buffer == null) return;
		this._helperPoint.x = this.x - Camera.scroll.x * this.scrollFactor.x;
		this._helperPoint.y = this.y - Camera.scroll.y * this.scrollFactor.y;
		var tileID;
		var debugColor;
		var drawX;
		var drawY;
		this._point.x = Camera.scroll.x * this.scrollFactor.x - this.x;
		this._point.y = Camera.scroll.y * this.scrollFactor.y - this.y;
		var screenXInTiles = Math.floor(this._point.x / this._tileWidth);
		var screenYInTiles = Math.floor(this._point.y / this._tileHeight);
		var screenRows = buffer.rows;
		var screenColumns = buffer.columns;
		if(screenXInTiles < 0) screenXInTiles = 0;
		if(screenXInTiles > this.widthInTiles - screenColumns) screenXInTiles = this.widthInTiles - screenColumns;
		if(screenYInTiles < 0) screenYInTiles = 0;
		if(screenYInTiles > this.heightInTiles - screenRows) screenYInTiles = this.heightInTiles - screenRows;
		var rowIndex = screenYInTiles * this.widthInTiles + screenXInTiles;
		this._flashPoint.y = 0;
		var row = 0;
		var column;
		var columnIndex;
		var tile;
		var debugTile;
		while(row < screenRows) {
			columnIndex = rowIndex;
			column = 0;
			this._flashPoint.x = 0;
			while(column < screenColumns) {
				tileID = this._rectIDs[columnIndex];
				if(tileID != -1) {
					drawX = this._helperPoint.x + columnIndex % this.widthInTiles * this._tileWidth;
					drawY = this._helperPoint.y + Math.floor(columnIndex / this.widthInTiles) * this._tileHeight;
					tile = this._tileObjects[this._data[columnIndex]];
					if(tile != null) {
						if(tile.allowCollisions <= 0) debugColor = -16776961; else if(tile.allowCollisions != 4369) debugColor = -16181; else debugColor = -16744448;
						var gfx = Camera._debugLayer.get_graphics();
						gfx.lineStyle(1,debugColor,0.5);
						gfx.drawRect(drawX,drawY,this._tileWidth,this._tileHeight);
					}
				}
				this._flashPoint.x += this._tileWidth;
				column++;
				columnIndex++;
			}
			rowIndex += this.widthInTiles;
			this._flashPoint.y += this._tileHeight;
			row++;
		}
	}
	,drawTilemap: function(Buffer,Camera) {
		this._helperPoint.x = this.x - Camera.scroll.x * this.scrollFactor.x;
		this._helperPoint.y = this.y - Camera.scroll.y * this.scrollFactor.y;
		var tileID;
		var drawX;
		var drawY;
		var drawItem = Camera.getDrawStackItem(this._atlas,false);
		var currDrawData = drawItem.drawData;
		var currIndex = drawItem.position;
		this._point.x = Camera.scroll.x * this.scrollFactor.x - this.x;
		this._point.y = Camera.scroll.y * this.scrollFactor.y - this.y;
		var screenXInTiles = Math.floor(this._point.x / this._tileWidth);
		var screenYInTiles = Math.floor(this._point.y / this._tileHeight);
		var screenRows = Buffer.rows;
		var screenColumns = Buffer.columns;
		if(screenXInTiles < 0) screenXInTiles = 0;
		if(screenXInTiles > this.widthInTiles - screenColumns) screenXInTiles = this.widthInTiles - screenColumns;
		if(screenYInTiles < 0) screenYInTiles = 0;
		if(screenYInTiles > this.heightInTiles - screenRows) screenYInTiles = this.heightInTiles - screenRows;
		var rowIndex = screenYInTiles * this.widthInTiles + screenXInTiles;
		this._flashPoint.y = 0;
		var row = 0;
		var column;
		var columnIndex;
		var tile;
		var debugTile;
		while(row < screenRows) {
			columnIndex = rowIndex;
			column = 0;
			this._flashPoint.x = 0;
			while(column < screenColumns) {
				tileID = this._rectIDs[columnIndex];
				if(tileID != -1) {
					drawX = this._helperPoint.x + columnIndex % this.widthInTiles * this._tileWidth;
					drawY = this._helperPoint.y + Math.floor(columnIndex / this.widthInTiles) * this._tileHeight;
					currDrawData[currIndex++] = Math.floor(drawX);
					currDrawData[currIndex++] = Math.floor(drawY);
					currDrawData[currIndex++] = tileID;
					currDrawData[currIndex++] = this.tileScaleHack;
					currDrawData[currIndex++] = 0;
					currDrawData[currIndex++] = 0;
					currDrawData[currIndex++] = this.tileScaleHack;
				}
				this._flashPoint.x += this._tileWidth;
				column++;
				columnIndex++;
			}
			rowIndex += this.widthInTiles;
			this._flashPoint.y += this._tileHeight;
			row++;
		}
		drawItem.position = currIndex;
		Buffer.x = screenXInTiles * this._tileWidth;
		Buffer.y = screenYInTiles * this._tileHeight;
	}
	,update: function() {
		if(this._lastVisualDebug != org.flixel.FlxG.visualDebug) {
			this._lastVisualDebug = org.flixel.FlxG.visualDebug;
			this.setDirty();
		}
		org.flixel.FlxObject.prototype.update.call(this);
	}
	,loadMap: function(MapData,TileGraphic,TileWidth,TileHeight,AutoTile,StartingIndex,DrawIndex,CollideIndex,RepeatX,RepeatY) {
		if(RepeatY == null) RepeatY = 1;
		if(RepeatX == null) RepeatX = 1;
		if(CollideIndex == null) CollideIndex = 1;
		if(DrawIndex == null) DrawIndex = 1;
		if(StartingIndex == null) StartingIndex = 0;
		if(AutoTile == null) AutoTile = 0;
		if(TileHeight == null) TileHeight = 0;
		if(TileWidth == null) TileWidth = 0;
		this.auto = AutoTile;
		this._startingIndex = StartingIndex <= 0?0:StartingIndex;
		if(js.Boot.__instanceof(MapData,String)) {
			this._data = new Array();
			var columns;
			var rows = MapData.split("\n");
			this.heightInTiles = rows.length;
			this.widthInTiles = 0;
			var row = 0;
			var column;
			while(row < this.heightInTiles) {
				columns = rows[row++].split(",");
				if(columns.length <= 1) {
					this.heightInTiles = this.heightInTiles - 1;
					continue;
				}
				if(this.widthInTiles == 0) this.widthInTiles = columns.length;
				column = 0;
				while(column < this.widthInTiles) this._data.push(Std.parseInt(columns[column++]));
			}
		} else if(js.Boot.__instanceof(MapData,Array)) this._data = MapData; else throw "Unexpected MapData format '" + Std.string(Type["typeof"](MapData)) + "' passed into loadMap. Map data must be CSV string or Array<Int>.";
		var i;
		this.totalTiles = this._data.length;
		if(this.auto > 0) {
			this._startingIndex = 1;
			DrawIndex = 1;
			CollideIndex = 1;
			i = 0;
			while(i < this.totalTiles) this.autoTile(i++);
		}
		this._tiles = org.flixel.FlxG.addBitmap(TileGraphic);
		this._tileWidth = TileWidth;
		if(this._tileWidth <= 0) this._tileWidth = this._tiles.get_height();
		this._tileHeight = TileHeight;
		if(this._tileHeight <= 0) this._tileHeight = this._tileWidth;
		this._repeatX = RepeatX >= 0?RepeatX:0;
		this._repeatY = RepeatY >= 0?RepeatY:0;
		this._tiles = org.flixel.FlxG.addTilemapBitmap(TileGraphic,false,false,null,this._tileWidth,this._tileHeight,this._repeatX,this._repeatY);
		this._bitmapDataKey = org.flixel.FlxG._lastBitmapDataKey;
		this._tileObjects = new Array();
		var length = this._tiles.get_width() / (this._tileWidth + (this._repeatX + 1)) * this._tiles.get_height() / (this._tileHeight + (this._repeatY + 1)) | 0;
		length += this._startingIndex;
		var _g = 0;
		while(_g < length) {
			var i1 = _g++;
			this._tileObjects[i1] = new org.flixel.system.FlxTile(this,i1,this._tileWidth,this._tileHeight,i1 >= DrawIndex,i1 >= CollideIndex?this.allowCollisions:0);
		}
		this.updateAtlasInfo();
		this.set_width(this.widthInTiles * this._tileWidth);
		this.set_height(this.heightInTiles * this._tileHeight);
		return this;
	}
	,destroy: function() {
		this._flashPoint = null;
		this._flashRect = null;
		this._tiles = null;
		var i = 0;
		var l;
		if(this._tileObjects != null) {
			l = this._tileObjects.length;
			var _g = 0;
			while(_g < l) {
				var i1 = _g++;
				this._tileObjects[i1].destroy();
			}
			this._tileObjects = null;
		}
		if(this._buffers != null) {
			i = 0;
			l = this._buffers.length;
			var _g = 0;
			while(_g < l) {
				var i1 = _g++;
				this._buffers[i1].destroy();
			}
			this._buffers = null;
		}
		this._data = null;
		this._helperPoint = null;
		this._rectIDs = null;
		org.flixel.FlxObject.prototype.destroy.call(this);
	}
	,__class__: org.flixel.FlxTilemap
});
org.flixel.plugin = {}
org.flixel.plugin.DebugPathDisplay = function() {
	org.flixel.FlxBasic.call(this);
	this._paths = new Array();
	this.active = false;
};
$hxClasses["org.flixel.plugin.DebugPathDisplay"] = org.flixel.plugin.DebugPathDisplay;
org.flixel.plugin.DebugPathDisplay.__name__ = ["org","flixel","plugin","DebugPathDisplay"];
org.flixel.plugin.DebugPathDisplay.__super__ = org.flixel.FlxBasic;
org.flixel.plugin.DebugPathDisplay.prototype = $extend(org.flixel.FlxBasic.prototype,{
	clear: function() {
		if(this._paths != null) {
			var i = this._paths.length - 1;
			var path;
			while(i >= 0) {
				path = this._paths[i--];
				if(path != null) path.destroy();
			}
		}
		this._paths = [];
	}
	,remove: function(Path) {
		var index = org.flixel.util.FlxArray.indexOf(this._paths,Path,null);
		if(index >= 0) this._paths.splice(index,1);
	}
	,add: function(Path) {
		this._paths.push(Path);
	}
	,drawDebugOnCamera: function(Camera) {
		if(Camera == null) Camera = org.flixel.FlxG.camera;
		var i = this._paths.length - 1;
		var path;
		while(i >= 0) {
			path = this._paths[i--];
			if(path != null && !path.ignoreDrawDebug) path.drawDebug(Camera);
		}
	}
	,drawDebug: function() {
		if(!org.flixel.FlxG.visualDebug || this.ignoreDrawDebug) return;
		if(this.cameras == null) this.cameras = org.flixel.FlxG.cameras;
		var i = 0;
		var l = this.cameras.length;
		while(i < l) this.drawDebugOnCamera(this.cameras[i++]);
	}
	,destroy: function() {
		this.clear();
		this._paths = null;
		org.flixel.FlxBasic.prototype.destroy.call(this);
	}
	,__class__: org.flixel.plugin.DebugPathDisplay
});
org.flixel.plugin.TimerManager = function() {
	org.flixel.FlxBasic.call(this);
	this._timers = new Array();
	this.visible = false;
};
$hxClasses["org.flixel.plugin.TimerManager"] = org.flixel.plugin.TimerManager;
org.flixel.plugin.TimerManager.__name__ = ["org","flixel","plugin","TimerManager"];
org.flixel.plugin.TimerManager.__super__ = org.flixel.FlxBasic;
org.flixel.plugin.TimerManager.prototype = $extend(org.flixel.FlxBasic.prototype,{
	clear: function() {
		if(this._timers != null) {
			var i = this._timers.length - 1;
			var timer;
			while(i >= 0) {
				timer = this._timers[i--];
				if(timer != null) timer.destroy();
			}
		}
		this._timers = [];
	}
	,remove: function(Timer) {
		var index = org.flixel.util.FlxArray.indexOf(this._timers,Timer,null);
		if(index >= 0) {
			this._timers[index] = this._timers[this._timers.length - 1];
			this._timers.pop();
		}
	}
	,add: function(Timer) {
		this._timers.push(Timer);
	}
	,update: function() {
		if(org.flixel.FlxG.paused) return;
		var i = this._timers.length - 1;
		var timer;
		while(i >= 0) {
			timer = this._timers[i--];
			if(timer != null && !timer.paused && !timer.finished && timer.time > 0) timer.update();
		}
	}
	,destroy: function() {
		this.clear();
		this._timers = null;
		org.flixel.FlxBasic.prototype.destroy.call(this);
	}
	,__class__: org.flixel.plugin.TimerManager
});
org.flixel.plugin.pxText = {}
org.flixel.plugin.pxText.PxBitmapFont = function() {
	this._maxHeight = 0;
	this._point = new flash.geom.Point();
	this._bgTileID = -1;
	this._glyphs = new haxe.ds.IntMap();
	this._num_letters = 0;
	this._atlasGlyphs = new haxe.ds.StringMap();
	this._bgTiles = new haxe.ds.StringMap();
};
$hxClasses["org.flixel.plugin.pxText.PxBitmapFont"] = org.flixel.plugin.pxText.PxBitmapFont;
org.flixel.plugin.pxText.PxBitmapFont.__name__ = ["org","flixel","plugin","pxText","PxBitmapFont"];
org.flixel.plugin.pxText.PxBitmapFont.store = function(pHandle,pFont) {
	org.flixel.plugin.pxText.PxBitmapFont._storedFonts.set(pHandle,pFont);
}
org.flixel.plugin.pxText.PxBitmapFont.fetch = function(pHandle) {
	var f = org.flixel.plugin.pxText.PxBitmapFont._storedFonts.get(pHandle);
	return f;
}
org.flixel.plugin.pxText.PxBitmapFont.clearStorage = function() {
	var $it0 = org.flixel.plugin.pxText.PxBitmapFont._storedFonts.iterator();
	while( $it0.hasNext() ) {
		var font = $it0.next();
		font.dispose();
	}
	org.flixel.plugin.pxText.PxBitmapFont._storedFonts = new haxe.ds.StringMap();
}
org.flixel.plugin.pxText.PxBitmapFont.prototype = {
	get_numLetters: function() {
		return this._num_letters;
	}
	,get_bitmapDataKey: function() {
		return this._bitmapDataKey;
	}
	,get_pixels: function() {
		return this._pixels;
	}
	,bgTileID: function(AtlasName) {
		return this._bgTiles.get(AtlasName);
	}
	,getFontHeight: function() {
		return this._maxHeight;
	}
	,getTextWidth: function(pText,pLetterSpacing,pFontScale) {
		if(pFontScale == null) pFontScale = 1.0;
		if(pLetterSpacing == null) pLetterSpacing = 0;
		var w = 0;
		var textLength = pText.length;
		var _g1 = 0, _g = textLength;
		while(_g1 < _g) {
			var i = _g1++;
			var charCode = HxOverrides.cca(pText,i);
			if(this._glyphs.exists(charCode)) w += this._glyphs.get(charCode).xadvance;
		}
		w = Math.round(w * pFontScale);
		if(textLength > 1) w += (textLength - 1) * pLetterSpacing;
		return w;
	}
	,render: function(atlasName,drawData,pText,pColor,pSecondColor,pAlpha,pOffsetX,pOffsetY,pLetterSpacing,pScale,pUseColor) {
		if(pUseColor == null) pUseColor = true;
		var colorMultiplier = 1 / 255;
		var red = colorMultiplier;
		var green = colorMultiplier;
		var blue = colorMultiplier;
		if(pUseColor) {
			red = (pColor >> 16) * colorMultiplier;
			green = (pColor >> 8 & 255) * colorMultiplier;
			blue = (pColor & 255) * colorMultiplier;
		}
		pSecondColor &= 16777215;
		red *= pSecondColor >> 16;
		green *= pSecondColor >> 8 & 255;
		blue *= pSecondColor & 255;
		this._point.x = pOffsetX;
		this._point.y = pOffsetY;
		var glyph;
		var glyphWidth;
		this._glyphs = this._atlasGlyphs.get(atlasName);
		if(this._glyphs == null) return;
		var _g1 = 0, _g = pText.length;
		while(_g1 < _g) {
			var i = _g1++;
			var charCode = HxOverrides.cca(pText,i);
			glyph = this._glyphs.get(charCode);
			if(this._glyphs.exists(charCode)) {
				glyphWidth = glyph.xadvance;
				drawData.push(glyph.tileID);
				drawData.push(this._point.x + glyph.xoffset * pScale);
				drawData.push(this._point.y + glyph.yoffset * pScale);
				drawData.push(red);
				drawData.push(green);
				drawData.push(blue);
				this._point.x += glyphWidth * pScale + pLetterSpacing;
			}
		}
	}
	,setGlyph: function(node,pCharID,pRect,pOffsetX,pOffsetY,pAdvanceX) {
		if(pAdvanceX == null) pAdvanceX = 0;
		if(pOffsetY == null) pOffsetY = 0;
		if(pOffsetX == null) pOffsetX = 0;
		var tileID = node.addTileRect(pRect,org.flixel.plugin.pxText.PxBitmapFont.ZERO_POINT);
		var symbol = new org.flixel.plugin.pxText.PxFontSymbol();
		symbol.tileID = tileID;
		symbol.xoffset = pOffsetX;
		symbol.yoffset = pOffsetY;
		symbol.xadvance = pAdvanceX;
		this._glyphs.set(pCharID,symbol);
		this._num_letters++;
		if(Math.floor(pRect.height) + pOffsetY > this._maxHeight) this._maxHeight = Math.floor(pRect.height) + pOffsetY;
	}
	,dispose: function(total) {
		if(total == null) total = true;
		this._symbols = null;
		this._tileRects = null;
		this._pixels = null;
		this._bitmapDataKey = null;
		this._glyphs = null;
		if(total) {
			this._atlasGlyphs = null;
			this._bgTiles = null;
		}
	}
	,prepareAngelCodeBitmapData: function(pBitmapData,pXMLData,pSymbols) {
		var chars = null;
		var $it0 = pXMLData.elements();
		while( $it0.hasNext() ) {
			var node = $it0.next();
			if(node.get_nodeName() == "font") {
				var $it1 = node.elements();
				while( $it1.hasNext() ) {
					var nodeChild = $it1.next();
					if(nodeChild.get_nodeName() == "chars") {
						chars = nodeChild;
						break;
					}
				}
			}
		}
		var symbol;
		var maxX = 0;
		var maxY = 0;
		if(chars != null) {
			var $it2 = chars.elements();
			while( $it2.hasNext() ) {
				var node = $it2.next();
				if(node.get_nodeName() == "char") {
					symbol = new org.flixel.plugin.pxText.HelperSymbol();
					symbol.x = Std.parseInt(node.get("x"));
					symbol.y = Std.parseInt(node.get("y"));
					symbol.width = Std.parseInt(node.get("width"));
					symbol.height = Std.parseInt(node.get("height"));
					symbol.xoffset = Std.parseInt(node.get("xoffset"));
					symbol.yoffset = Std.parseInt(node.get("yoffset"));
					symbol.xadvance = Std.parseInt(node.get("xadvance"));
					symbol.charCode = Std.parseInt(node.get("id"));
					pSymbols.push(symbol);
					maxX = symbol.x + symbol.width;
					maxY = symbol.y + symbol.height;
				}
			}
		}
		var newWidth = pBitmapData._nmeTextureBuffer != null?pBitmapData._nmeTextureBuffer.width:0;
		var newHeight = pBitmapData._nmeTextureBuffer != null?pBitmapData._nmeTextureBuffer.height:0;
		if((pBitmapData._nmeTextureBuffer != null?pBitmapData._nmeTextureBuffer.width:0) - 2 < maxX) newWidth += 2; else if((pBitmapData._nmeTextureBuffer != null?pBitmapData._nmeTextureBuffer.height:0) - 2 < maxY) newHeight += 2;
		var resultBitmapData = new flash.display.BitmapData(newWidth,newHeight,true,0);
		resultBitmapData.copyPixels(pBitmapData,pBitmapData.rect,org.flixel.plugin.pxText.PxBitmapFont.ZERO_POINT);
		resultBitmapData.setPixel32((resultBitmapData._nmeTextureBuffer != null?resultBitmapData._nmeTextureBuffer.width:0) - 1,(resultBitmapData._nmeTextureBuffer != null?resultBitmapData._nmeTextureBuffer.height:0) - 1,-1);
		return resultBitmapData;
	}
	,preparePixelizerBitmapData: function(pBitmapData,pRects) {
		var bgColor = pBitmapData.getPixel(0,0);
		var cy = 0;
		var cx;
		while(cy < (pBitmapData._nmeTextureBuffer != null?pBitmapData._nmeTextureBuffer.height:0)) {
			var rowHeight = 0;
			cx = 0;
			while(cx < (pBitmapData._nmeTextureBuffer != null?pBitmapData._nmeTextureBuffer.width:0)) {
				if((pBitmapData.getPixel(cx,cy) | 0) != bgColor) {
					var gx = cx;
					var gy = cy;
					while((pBitmapData.getPixel(gx,cy) | 0) != bgColor) gx++;
					while((pBitmapData.getPixel(cx,gy) | 0) != bgColor) gy++;
					var gw = gx - cx;
					var gh = gy - cy;
					pRects.push(new flash.geom.Rectangle(cx,cy,gw,gh));
					if(gh > rowHeight) rowHeight = gh;
					if(gh > this._maxHeight) this._maxHeight = gh;
					cx += gw;
				}
				cx++;
			}
			cy += rowHeight + 1;
		}
		var resultBitmapData = new flash.display.BitmapData((pBitmapData._nmeTextureBuffer != null?pBitmapData._nmeTextureBuffer.width:0) + 2,pBitmapData._nmeTextureBuffer != null?pBitmapData._nmeTextureBuffer.height:0,true,0);
		resultBitmapData.copyPixels(pBitmapData,pBitmapData.rect,org.flixel.plugin.pxText.PxBitmapFont.ZERO_POINT);
		var pixelColor;
		var bgColor32 = pBitmapData.getPixel(0,0);
		cy = 0;
		while(cy < (pBitmapData._nmeTextureBuffer != null?pBitmapData._nmeTextureBuffer.height:0)) {
			cx = 0;
			while(cx < (pBitmapData._nmeTextureBuffer != null?pBitmapData._nmeTextureBuffer.width:0)) {
				pixelColor = pBitmapData.getPixel32(cx,cy);
				if(pixelColor == bgColor32) resultBitmapData.setPixel32(cx,cy,0);
				cx++;
			}
			cy++;
		}
		resultBitmapData.setPixel32((resultBitmapData._nmeTextureBuffer != null?resultBitmapData._nmeTextureBuffer.width:0) - 1,(resultBitmapData._nmeTextureBuffer != null?resultBitmapData._nmeTextureBuffer.height:0) - 1,-1);
		resultBitmapData.floodFill(0,0,0);
		return resultBitmapData;
	}
	,reset: function() {
		this.dispose(false);
		this._maxHeight = 0;
		this._glyphs = new haxe.ds.IntMap();
		this._bgTileID = -1;
		this._symbols = null;
		this._tileRects = null;
		this._glyphString = "";
	}
	,updateAtlasGlyphs: function(AtlasName) {
		this._atlasGlyphs.set(AtlasName,this._glyphs);
		this._bgTiles.set(AtlasName,this._bgTileID);
	}
	,updateGlyphData: function(node) {
		if(this._atlasGlyphs.exists(node.atlas.name)) return;
		this._glyphs = new haxe.ds.IntMap();
		var rect;
		if(this._symbols != null) {
			this._glyphString = "";
			var point = new flash.geom.Point();
			var bd;
			var charString;
			var _g = 0, _g1 = this._symbols;
			while(_g < _g1.length) {
				var symbol = _g1[_g];
				++_g;
				rect = new flash.geom.Rectangle();
				rect.x = symbol.x;
				rect.y = symbol.y;
				rect.width = symbol.width;
				rect.height = symbol.height;
				point.x = symbol.xoffset;
				point.y = symbol.yoffset;
				charString = String.fromCharCode(symbol.charCode);
				this._glyphString += charString;
				var xadvance = symbol.xadvance;
				var charWidth = xadvance;
				if(rect.width > xadvance) {
					charWidth = symbol.width;
					point.x = 0;
				}
				if(charString != " " && charString != "") this.setGlyph(node,symbol.charCode,rect,Math.floor(point.x),Math.floor(point.y),charWidth); else this.setGlyph(node,symbol.charCode,rect,Math.floor(point.x),1,charWidth);
			}
			this._bgTileID = node.addTileRect(new flash.geom.Rectangle(this._pixels.get_width() - 1,this._pixels.get_height() - 1,1,1),org.flixel.plugin.pxText.PxBitmapFont.ZERO_POINT);
			this.updateAtlasGlyphs(node.atlas.name);
		} else if(this._tileRects != null) {
			var _g1 = 0, _g = this._tileRects.length;
			while(_g1 < _g) {
				var letterID = _g1++;
				rect = this._tileRects[letterID];
				this.setGlyph(node,HxOverrides.cca(this._glyphString,letterID),rect,0,0,rect.width | 0);
			}
			this._bgTileID = node.addTileRect(new flash.geom.Rectangle(this._pixels.get_width() - 1,this._pixels.get_height() - 1,1,1),org.flixel.plugin.pxText.PxBitmapFont.ZERO_POINT);
			this.updateAtlasGlyphs(node.atlas.name);
		}
	}
	,loadAngelCode: function(pBitmapData,pXMLData) {
		this.reset();
		if(pBitmapData != null && pXMLData != null) {
			this._symbols = new Array();
			var result = this.prepareAngelCodeBitmapData(pBitmapData,pXMLData,this._symbols);
			this._bitmapDataKey = org.flixel.FlxG.getUniqueBitmapKey("font");
			this._pixels = org.flixel.FlxG.addBitmap(result,false,false,this._bitmapDataKey);
		}
		return this;
	}
	,loadPixelizer: function(pBitmapData,pLetters) {
		this.reset();
		this._glyphString = pLetters;
		if(pBitmapData != null) {
			this._tileRects = [];
			var result = this.preparePixelizerBitmapData(pBitmapData,this._tileRects);
			this._bitmapDataKey = org.flixel.FlxG.getUniqueBitmapKey("font");
			this._pixels = org.flixel.FlxG.addBitmap(result,false,false,this._bitmapDataKey);
			var currRect;
		}
		return this;
	}
	,__class__: org.flixel.plugin.pxText.PxBitmapFont
	,__properties__: {get_numLetters:"get_numLetters",get_pixels:"get_pixels",get_bitmapDataKey:"get_bitmapDataKey"}
}
org.flixel.plugin.pxText.HelperSymbol = function() {
};
$hxClasses["org.flixel.plugin.pxText.HelperSymbol"] = org.flixel.plugin.pxText.HelperSymbol;
org.flixel.plugin.pxText.HelperSymbol.__name__ = ["org","flixel","plugin","pxText","HelperSymbol"];
org.flixel.plugin.pxText.HelperSymbol.prototype = {
	__class__: org.flixel.plugin.pxText.HelperSymbol
}
org.flixel.plugin.pxText.PxFontSymbol = function() {
};
$hxClasses["org.flixel.plugin.pxText.PxFontSymbol"] = org.flixel.plugin.pxText.PxFontSymbol;
org.flixel.plugin.pxText.PxFontSymbol.__name__ = ["org","flixel","plugin","pxText","PxFontSymbol"];
org.flixel.plugin.pxText.PxFontSymbol.prototype = {
	__class__: org.flixel.plugin.pxText.PxFontSymbol
}
org.flixel.plugin.texturepacker = {}
org.flixel.plugin.texturepacker.Frame = function() {
	this.offset = null;
	this.sourceSize = null;
	this.trimmed = false;
	this.rotated = false;
	this.frame = null;
	this.name = null;
};
$hxClasses["org.flixel.plugin.texturepacker.Frame"] = org.flixel.plugin.texturepacker.Frame;
org.flixel.plugin.texturepacker.Frame.__name__ = ["org","flixel","plugin","texturepacker","Frame"];
org.flixel.plugin.texturepacker.Frame.prototype = {
	destroy: function() {
		this.name = null;
		this.frame = null;
		this.sourceSize = null;
		this.offset = null;
	}
	,__class__: org.flixel.plugin.texturepacker.Frame
}
org.flixel.plugin.texturepacker.TexturePackerData = function(description,assetName) {
	this.assetName = assetName;
	this.description = description;
	this.frames = new Array();
	this.parseData();
};
$hxClasses["org.flixel.plugin.texturepacker.TexturePackerData"] = org.flixel.plugin.texturepacker.TexturePackerData;
org.flixel.plugin.texturepacker.TexturePackerData.__name__ = ["org","flixel","plugin","texturepacker","TexturePackerData"];
org.flixel.plugin.texturepacker.TexturePackerData.prototype = {
	destroy: function() {
		var l = this.frames.length;
		var _g = 0;
		while(_g < l) {
			var i = _g++;
			this.frames[i].destroy();
		}
		this.frames = null;
		this.assetName = null;
		this.asset = null;
	}
	,parseData: function() {
		if(this.frames.length != 0) return;
		this.asset = openfl.Assets.getBitmapData(this.assetName);
		var data = haxe.Json.parse(openfl.Assets.getText(this.description));
		var _g = 0, _g1 = Lambda.array(data.frames);
		while(_g < _g1.length) {
			var frame = _g1[_g];
			++_g;
			var texFrame = new org.flixel.plugin.texturepacker.Frame();
			texFrame.trimmed = frame.trimmed;
			texFrame.rotated = frame.rotated;
			texFrame.name = frame.filename;
			texFrame.sourceSize = new org.flixel.util.FlxPoint(frame.sourceSize.w,frame.sourceSize.h);
			texFrame.offset = new org.flixel.util.FlxPoint(0,0);
			texFrame.offset.make(frame.spriteSourceSize.x,frame.spriteSourceSize.y);
			if(frame.rotated) texFrame.frame = new flash.geom.Rectangle(frame.frame.x,frame.frame.y,frame.frame.h,frame.frame.w); else texFrame.frame = new flash.geom.Rectangle(frame.frame.x,frame.frame.y,frame.frame.w,frame.frame.h);
			this.frames.push(texFrame);
		}
	}
	,__class__: org.flixel.plugin.texturepacker.TexturePackerData
}
org.flixel.system = {}
org.flixel.system.BGSprite = function() {
	org.flixel.FlxSprite.call(this);
	this.makeGraphic(1,1,0,true,org.flixel.FlxG.getUniqueBitmapKey("bg_graphic_"));
	this.scrollFactor.make(null,null);
};
$hxClasses["org.flixel.system.BGSprite"] = org.flixel.system.BGSprite;
org.flixel.system.BGSprite.__name__ = ["org","flixel","system","BGSprite"];
org.flixel.system.BGSprite.__super__ = org.flixel.FlxSprite;
org.flixel.system.BGSprite.prototype = $extend(org.flixel.FlxSprite.prototype,{
	draw: function() {
		if(this._atlas == null) return;
		if(this.cameras == null) this.cameras = org.flixel.FlxG.cameras;
		var camera;
		var i = 0;
		var l = this.cameras.length;
		var drawItem;
		var currDrawData;
		var currIndex;
		var useAlpha = this.alpha < 1;
		while(i < l) {
			camera = this.cameras[i++];
			if(!camera.visible || !camera.exists) continue;
			drawItem = camera.getDrawStackItem(this._atlas,useAlpha);
			currDrawData = drawItem.drawData;
			currIndex = drawItem.position;
			this._point.x = camera.width * 0.5;
			this._point.y = camera.height * 0.5;
			var csx = camera.width;
			var ssy = 0;
			var ssx = 0;
			var csy = camera.height;
			currDrawData[currIndex++] = this._point.x;
			currDrawData[currIndex++] = this._point.y;
			currDrawData[currIndex++] = this._flxFrame.tileID;
			currDrawData[currIndex++] = csx;
			currDrawData[currIndex++] = ssx;
			currDrawData[currIndex++] = -ssy;
			currDrawData[currIndex++] = csy;
			if(useAlpha) currDrawData[currIndex++] = this.alpha;
			drawItem.position = currIndex;
			org.flixel.FlxBasic._VISIBLECOUNT++;
		}
	}
	,__class__: org.flixel.system.BGSprite
});
org.flixel.system.FlxAnim = function(Name,Frames,FrameRate,Looped) {
	if(Looped == null) Looped = true;
	if(FrameRate == null) FrameRate = 0;
	this.name = Name;
	this.set_frameRate(FrameRate);
	this.frames = Frames;
	this.looped = Looped;
};
$hxClasses["org.flixel.system.FlxAnim"] = org.flixel.system.FlxAnim;
org.flixel.system.FlxAnim.__name__ = ["org","flixel","system","FlxAnim"];
org.flixel.system.FlxAnim.prototype = {
	set_frameRate: function(value) {
		this.delay = 0;
		this.frameRate = value;
		if(value > 0) this.delay = 1.0 / value;
		return value;
	}
	,destroy: function() {
		this.frames = null;
	}
	,__class__: org.flixel.system.FlxAnim
	,__properties__: {set_frameRate:"set_frameRate"}
}
org.flixel.system.FlxDebugger = function(Width,Height) {
	flash.display.Sprite.call(this);
	this.set_visible(false);
	this.hasMouse = false;
	this._screen = new flash.geom.Point(Width,Height);
	this.addChild(new flash.display.Bitmap(new flash.display.BitmapData(Width | 0,15,true,2130706432)));
	var txt = new flash.text.TextField();
	txt.set_x(2);
	txt.set_width(160);
	txt.set_height(16);
	txt.selectable = false;
	txt.multiline = false;
	txt.set_defaultTextFormat(new flash.text.TextFormat(openfl.Assets.getFont(org.flixel.FlxAssets.debuggerFont).fontName,12,16777215));
	var str = "HaxeFlixel" + " v" + "2" + "." + "0.0-alpha.3";
	if(org.flixel.FlxG.debug) str += " [debug]"; else str += " [release]";
	txt.set_text(str);
	this.addChild(txt);
	this._gutter = 8;
	var screenBounds = new flash.geom.Rectangle(this._gutter,15 + this._gutter / 2,this._screen.x - this._gutter * 2,this._screen.y - this._gutter * 1.5 - 15);
	this.log = new org.flixel.system.debug.Log("log",0,0,true,screenBounds);
	this.addChild(this.log);
	this.watch = new org.flixel.system.debug.Watch("watch",0,0,true,screenBounds);
	this.addChild(this.watch);
	this.console = new org.flixel.system.debug.Console("console",0,0,false,screenBounds);
	this.addChild(this.console);
	org.flixel.FlxG.console = this.console;
	this.perf = new org.flixel.system.debug.Perf("stats",0,0,false,screenBounds);
	this.addChild(this.perf);
	this.vcr = new org.flixel.system.debug.VCR();
	this.vcr.set_x((Width - this.vcr.get_width() / 2) / 2);
	this.vcr.set_y(2);
	this.addChild(this.vcr);
	this.vis = new org.flixel.system.debug.Vis();
	this.vis.set_x(Width - this.vis.get_width() - 4);
	this.vis.set_y(2);
	this.addChild(this.vis);
	this.setLayout(0);
	this.addEventListener(flash.events.MouseEvent.MOUSE_OVER,$bind(this,this.onMouseOver));
	this.addEventListener(flash.events.MouseEvent.MOUSE_OUT,$bind(this,this.onMouseOut));
};
$hxClasses["org.flixel.system.FlxDebugger"] = org.flixel.system.FlxDebugger;
org.flixel.system.FlxDebugger.__name__ = ["org","flixel","system","FlxDebugger"];
org.flixel.system.FlxDebugger.__super__ = flash.display.Sprite;
org.flixel.system.FlxDebugger.prototype = $extend(flash.display.Sprite.prototype,{
	resetLayout: function() {
		var _g = this;
		switch(_g._layout) {
		case 1:
			this.log.resize(this._screen.x / 4,68);
			this.log.reposition(0,this._screen.y);
			this.console.resize(this._screen.x / 2 - this._gutter * 4,35);
			this.console.reposition(this.log.get_x() + this.log.get_width() + this._gutter,this._screen.y);
			this.watch.resize(this._screen.x / 4,68);
			this.watch.reposition(this._screen.x,this._screen.y);
			this.perf.reposition(this._screen.x,0);
			break;
		case 2:
			this.console.resize(this._screen.x - this._gutter * 2,35);
			this.console.reposition(this._gutter,this._screen.y);
			this.log.resize((this._screen.x - this._gutter * 3) / 2,this._screen.y / 2);
			this.log.reposition(0,this._screen.y - this.log.get_height() - this.console.get_height() - this._gutter * 1.5);
			this.watch.resize((this._screen.x - this._gutter * 3) / 2,this._screen.y / 2);
			this.watch.reposition(this._screen.x,this._screen.y - this.watch.get_height() - this.console.get_height() - this._gutter * 1.5);
			this.perf.reposition(this._screen.x,0);
			break;
		case 3:
			this.console.resize(this._screen.x - this._gutter * 2,35);
			this.console.reposition(0,0);
			this.log.resize((this._screen.x - this._gutter * 3) / 2,this._screen.y / 4);
			this.log.reposition(0,this.console.get_height() + this._gutter + 15);
			this.watch.resize((this._screen.x - this._gutter * 3) / 2,this._screen.y / 4);
			this.watch.reposition(this._screen.x,this.console.get_height() + this._gutter + 15);
			this.perf.reposition(this._screen.x,this._screen.y);
			break;
		case 4:
			this.console.resize(this._screen.x - this._gutter * 2,35);
			this.console.reposition(this._gutter,this._screen.y);
			this.log.resize(this._screen.x / 3,(this._screen.y - 15 - this._gutter * 2.5) / 2 - this.console.get_height() / 2 - this._gutter);
			this.log.reposition(0,0);
			this.watch.resize(this._screen.x / 3,(this._screen.y - 15 - this._gutter * 2.5) / 2 - this.console.get_height() / 2);
			this.watch.reposition(0,this.log.get_y() + this.log.get_height() + this._gutter);
			this.perf.reposition(this._screen.x,0);
			break;
		case 5:
			this.console.resize(this._screen.x - this._gutter * 2,35);
			this.console.reposition(this._gutter,this._screen.y);
			this.log.resize(this._screen.x / 3,(this._screen.y - 15 - this._gutter * 2.5) / 2 - this.console.get_height() / 2 - this._gutter);
			this.log.reposition(this._screen.x,0);
			this.watch.resize(this._screen.x / 3,(this._screen.y - 15 - this._gutter * 2.5) / 2 - this.console.get_height() / 2);
			this.watch.reposition(this._screen.x,this.log.get_y() + this.log.get_height() + this._gutter);
			this.perf.reposition(0,0);
			break;
		case 0:
			this.console.resize(this._screen.x - this._gutter * 2,35);
			this.console.reposition(this._gutter,this._screen.y);
			this.log.resize((this._screen.x - this._gutter * 3) / 2,this._screen.y / 4);
			this.log.reposition(0,this._screen.y - this.log.get_height() - this.console.get_height() - this._gutter * 1.5);
			this.watch.resize((this._screen.x - this._gutter * 3) / 2,this._screen.y / 4);
			this.watch.reposition(this._screen.x,this._screen.y - this.watch.get_height() - this.console.get_height() - this._gutter * 1.5);
			this.perf.reposition(this._screen.x,0);
			break;
		default:
			this.console.resize(this._screen.x - this._gutter * 2,35);
			this.console.reposition(this._gutter,this._screen.y);
			this.log.resize((this._screen.x - this._gutter * 3) / 2,this._screen.y / 4);
			this.log.reposition(0,this._screen.y - this.log.get_height() - this.console.get_height() - this._gutter * 1.5);
			this.watch.resize((this._screen.x - this._gutter * 3) / 2,this._screen.y / 4);
			this.watch.reposition(this._screen.x,this._screen.y - this.watch.get_height() - this.console.get_height() - this._gutter * 1.5);
			this.perf.reposition(this._screen.x,0);
		}
	}
	,setLayout: function(Layout) {
		this._layout = Layout;
		this.resetLayout();
	}
	,onMouseOut: function(E) {
		this.hasMouse = false;
		if(!org.flixel.FlxG.mouse.useSystemCursor && !org.flixel.FlxG._game._debugger.vcr.paused) flash.ui.Mouse.hide();
	}
	,onMouseOver: function(E) {
		this.hasMouse = true;
		flash.ui.Mouse.show();
	}
	,destroy: function() {
		this._screen = null;
		if(this.log != null) {
			this.removeChild(this.log);
			this.log.destroy();
			this.log = null;
		}
		if(this.watch != null) {
			this.removeChild(this.watch);
			this.watch.destroy();
			this.watch = null;
		}
		if(this.perf != null) {
			this.removeChild(this.perf);
			this.perf.destroy();
			this.perf = null;
		}
		if(this.vcr != null) {
			this.removeChild(this.vcr);
			this.vcr.destroy();
			this.vcr = null;
		}
		if(this.vis != null) {
			this.removeChild(this.vis);
			this.vis.destroy();
			this.vis = null;
		}
		if(this.console != null) {
			this.removeChild(this.console);
			this.console.destroy();
			this.console = null;
		}
		this.removeEventListener(flash.events.MouseEvent.MOUSE_OVER,$bind(this,this.onMouseOver));
		this.removeEventListener(flash.events.MouseEvent.MOUSE_OUT,$bind(this,this.onMouseOut));
	}
	,__class__: org.flixel.system.FlxDebugger
});
org.flixel.system.FlxList = function() {
	this.object = null;
	this.next = null;
	this.exists = true;
};
$hxClasses["org.flixel.system.FlxList"] = org.flixel.system.FlxList;
org.flixel.system.FlxList.__name__ = ["org","flixel","system","FlxList"];
org.flixel.system.FlxList.recycle = function() {
	if(org.flixel.system.FlxList._cachedListsHead != null) {
		var cachedList = org.flixel.system.FlxList._cachedListsHead;
		org.flixel.system.FlxList._cachedListsHead = org.flixel.system.FlxList._cachedListsHead.next;
		org.flixel.system.FlxList._NUM_CACHED_FLX_LIST--;
		cachedList.exists = true;
		cachedList.next = null;
		return cachedList;
	} else return new org.flixel.system.FlxList();
}
org.flixel.system.FlxList.clearCache = function() {
	while(org.flixel.system.FlxList._cachedListsHead != null) {
		var node = org.flixel.system.FlxList._cachedListsHead;
		org.flixel.system.FlxList._cachedListsHead = org.flixel.system.FlxList._cachedListsHead.next;
		node.object = null;
		node.next = null;
	}
	org.flixel.system.FlxList._NUM_CACHED_FLX_LIST = 0;
}
org.flixel.system.FlxList.prototype = {
	destroy: function() {
		if(!this.exists) return;
		this.object = null;
		if(this.next != null) this.next.destroy();
		this.exists = false;
		this.next = org.flixel.system.FlxList._cachedListsHead;
		org.flixel.system.FlxList._cachedListsHead = this;
		org.flixel.system.FlxList._NUM_CACHED_FLX_LIST++;
	}
	,__class__: org.flixel.system.FlxList
}
org.flixel.system.FlxQuadTree = function(X,Y,Width,Height,Parent) {
	org.flixel.util.FlxRect.call(this,X,Y,Width,Height);
	this.reset(X,Y,Width,Height,Parent);
};
$hxClasses["org.flixel.system.FlxQuadTree"] = org.flixel.system.FlxQuadTree;
org.flixel.system.FlxQuadTree.__name__ = ["org","flixel","system","FlxQuadTree"];
org.flixel.system.FlxQuadTree.recycle = function(X,Y,Width,Height,Parent) {
	if(org.flixel.system.FlxQuadTree._cachedTreesHead != null) {
		var cachedTree = org.flixel.system.FlxQuadTree._cachedTreesHead;
		org.flixel.system.FlxQuadTree._cachedTreesHead = org.flixel.system.FlxQuadTree._cachedTreesHead.next;
		org.flixel.system.FlxQuadTree._NUM_CACHED_QUAD_TREES--;
		cachedTree.reset(X,Y,Width,Height,Parent);
		return cachedTree;
	} else return new org.flixel.system.FlxQuadTree(X,Y,Width,Height,Parent);
}
org.flixel.system.FlxQuadTree.clearCache = function() {
	while(org.flixel.system.FlxQuadTree._cachedTreesHead != null) {
		var node = org.flixel.system.FlxQuadTree._cachedTreesHead;
		org.flixel.system.FlxQuadTree._cachedTreesHead = org.flixel.system.FlxQuadTree._cachedTreesHead.next;
		node.next = null;
	}
	org.flixel.system.FlxQuadTree._NUM_CACHED_QUAD_TREES = 0;
}
org.flixel.system.FlxQuadTree.__super__ = org.flixel.util.FlxRect;
org.flixel.system.FlxQuadTree.prototype = $extend(org.flixel.util.FlxRect.prototype,{
	overlapNode: function() {
		var overlapProcessed = false;
		var checkObject;
		while(org.flixel.system.FlxQuadTree._iterator != null) {
			if(!org.flixel.system.FlxQuadTree._object.exists || org.flixel.system.FlxQuadTree._object.allowCollisions <= 0) break;
			checkObject = org.flixel.system.FlxQuadTree._iterator.object;
			if(org.flixel.system.FlxQuadTree._object == checkObject || !checkObject.exists || checkObject.allowCollisions <= 0) {
				org.flixel.system.FlxQuadTree._iterator = org.flixel.system.FlxQuadTree._iterator.next;
				continue;
			}
			org.flixel.system.FlxQuadTree._objectHullX = org.flixel.system.FlxQuadTree._object.x < org.flixel.system.FlxQuadTree._object.last.x?org.flixel.system.FlxQuadTree._object.x:org.flixel.system.FlxQuadTree._object.last.x;
			org.flixel.system.FlxQuadTree._objectHullY = org.flixel.system.FlxQuadTree._object.y < org.flixel.system.FlxQuadTree._object.last.y?org.flixel.system.FlxQuadTree._object.y:org.flixel.system.FlxQuadTree._object.last.y;
			org.flixel.system.FlxQuadTree._objectHullWidth = org.flixel.system.FlxQuadTree._object.x - org.flixel.system.FlxQuadTree._object.last.x;
			org.flixel.system.FlxQuadTree._objectHullWidth = org.flixel.system.FlxQuadTree._object.width + (org.flixel.system.FlxQuadTree._objectHullWidth > 0?org.flixel.system.FlxQuadTree._objectHullWidth:-org.flixel.system.FlxQuadTree._objectHullWidth);
			org.flixel.system.FlxQuadTree._objectHullHeight = org.flixel.system.FlxQuadTree._object.y - org.flixel.system.FlxQuadTree._object.last.y;
			org.flixel.system.FlxQuadTree._objectHullHeight = org.flixel.system.FlxQuadTree._object.height + (org.flixel.system.FlxQuadTree._objectHullHeight > 0?org.flixel.system.FlxQuadTree._objectHullHeight:-org.flixel.system.FlxQuadTree._objectHullHeight);
			org.flixel.system.FlxQuadTree._checkObjectHullX = checkObject.x < checkObject.last.x?checkObject.x:checkObject.last.x;
			org.flixel.system.FlxQuadTree._checkObjectHullY = checkObject.y < checkObject.last.y?checkObject.y:checkObject.last.y;
			org.flixel.system.FlxQuadTree._checkObjectHullWidth = checkObject.x - checkObject.last.x;
			org.flixel.system.FlxQuadTree._checkObjectHullWidth = checkObject.width + (org.flixel.system.FlxQuadTree._checkObjectHullWidth > 0?org.flixel.system.FlxQuadTree._checkObjectHullWidth:-org.flixel.system.FlxQuadTree._checkObjectHullWidth);
			org.flixel.system.FlxQuadTree._checkObjectHullHeight = checkObject.y - checkObject.last.y;
			org.flixel.system.FlxQuadTree._checkObjectHullHeight = checkObject.height + (org.flixel.system.FlxQuadTree._checkObjectHullHeight > 0?org.flixel.system.FlxQuadTree._checkObjectHullHeight:-org.flixel.system.FlxQuadTree._checkObjectHullHeight);
			if(org.flixel.system.FlxQuadTree._objectHullX + org.flixel.system.FlxQuadTree._objectHullWidth > org.flixel.system.FlxQuadTree._checkObjectHullX && org.flixel.system.FlxQuadTree._objectHullX < org.flixel.system.FlxQuadTree._checkObjectHullX + org.flixel.system.FlxQuadTree._checkObjectHullWidth && org.flixel.system.FlxQuadTree._objectHullY + org.flixel.system.FlxQuadTree._objectHullHeight > org.flixel.system.FlxQuadTree._checkObjectHullY && org.flixel.system.FlxQuadTree._objectHullY < org.flixel.system.FlxQuadTree._checkObjectHullY + org.flixel.system.FlxQuadTree._checkObjectHullHeight) {
				overlapProcessed = false;
				if(org.flixel.system.FlxQuadTree._processingCallback == null || org.flixel.system.FlxQuadTree._processingCallback(org.flixel.system.FlxQuadTree._object,checkObject)) overlapProcessed = true;
				if(overlapProcessed && org.flixel.system.FlxQuadTree._notifyCallback != null) org.flixel.system.FlxQuadTree._notifyCallback(org.flixel.system.FlxQuadTree._object,checkObject);
			}
			if(org.flixel.system.FlxQuadTree._iterator != null) org.flixel.system.FlxQuadTree._iterator = org.flixel.system.FlxQuadTree._iterator.next;
		}
		return overlapProcessed;
	}
	,execute: function() {
		var overlapProcessed = false;
		var iterator;
		if(this._headA.object != null) {
			iterator = this._headA;
			while(iterator != null) {
				org.flixel.system.FlxQuadTree._object = iterator.object;
				if(org.flixel.system.FlxQuadTree._useBothLists) org.flixel.system.FlxQuadTree._iterator = this._headB; else org.flixel.system.FlxQuadTree._iterator = iterator.next;
				if(org.flixel.system.FlxQuadTree._object.exists && org.flixel.system.FlxQuadTree._object.allowCollisions > 0 && org.flixel.system.FlxQuadTree._iterator != null && org.flixel.system.FlxQuadTree._iterator.object != null && org.flixel.system.FlxQuadTree._iterator.object.exists && this.overlapNode()) overlapProcessed = true;
				iterator = iterator.next;
			}
		}
		if(this._northWestTree != null && this._northWestTree.execute()) overlapProcessed = true;
		if(this._northEastTree != null && this._northEastTree.execute()) overlapProcessed = true;
		if(this._southEastTree != null && this._southEastTree.execute()) overlapProcessed = true;
		if(this._southWestTree != null && this._southWestTree.execute()) overlapProcessed = true;
		return overlapProcessed;
	}
	,addToList: function() {
		var ot;
		if(org.flixel.system.FlxQuadTree._list == 0) {
			if(this._tailA.object != null) {
				ot = this._tailA;
				this._tailA = org.flixel.system.FlxList.recycle();
				ot.next = this._tailA;
			}
			this._tailA.object = org.flixel.system.FlxQuadTree._object;
		} else {
			if(this._tailB.object != null) {
				ot = this._tailB;
				this._tailB = org.flixel.system.FlxList.recycle();
				ot.next = this._tailB;
			}
			this._tailB.object = org.flixel.system.FlxQuadTree._object;
		}
		if(!this._canSubdivide) return;
		if(this._northWestTree != null) this._northWestTree.addToList();
		if(this._northEastTree != null) this._northEastTree.addToList();
		if(this._southEastTree != null) this._southEastTree.addToList();
		if(this._southWestTree != null) this._southWestTree.addToList();
	}
	,addObject: function() {
		if(!this._canSubdivide || this._leftEdge >= org.flixel.system.FlxQuadTree._objectLeftEdge && this._rightEdge <= org.flixel.system.FlxQuadTree._objectRightEdge && this._topEdge >= org.flixel.system.FlxQuadTree._objectTopEdge && this._bottomEdge <= org.flixel.system.FlxQuadTree._objectBottomEdge) {
			this.addToList();
			return;
		}
		if(org.flixel.system.FlxQuadTree._objectLeftEdge > this._leftEdge && org.flixel.system.FlxQuadTree._objectRightEdge < this._midpointX) {
			if(org.flixel.system.FlxQuadTree._objectTopEdge > this._topEdge && org.flixel.system.FlxQuadTree._objectBottomEdge < this._midpointY) {
				if(this._northWestTree == null) this._northWestTree = org.flixel.system.FlxQuadTree.recycle(this._leftEdge,this._topEdge,this._halfWidth,this._halfHeight,this);
				this._northWestTree.addObject();
				return;
			}
			if(org.flixel.system.FlxQuadTree._objectTopEdge > this._midpointY && org.flixel.system.FlxQuadTree._objectBottomEdge < this._bottomEdge) {
				if(this._southWestTree == null) this._southWestTree = org.flixel.system.FlxQuadTree.recycle(this._leftEdge,this._midpointY,this._halfWidth,this._halfHeight,this);
				this._southWestTree.addObject();
				return;
			}
		}
		if(org.flixel.system.FlxQuadTree._objectLeftEdge > this._midpointX && org.flixel.system.FlxQuadTree._objectRightEdge < this._rightEdge) {
			if(org.flixel.system.FlxQuadTree._objectTopEdge > this._topEdge && org.flixel.system.FlxQuadTree._objectBottomEdge < this._midpointY) {
				if(this._northEastTree == null) this._northEastTree = org.flixel.system.FlxQuadTree.recycle(this._midpointX,this._topEdge,this._halfWidth,this._halfHeight,this);
				this._northEastTree.addObject();
				return;
			}
			if(org.flixel.system.FlxQuadTree._objectTopEdge > this._midpointY && org.flixel.system.FlxQuadTree._objectBottomEdge < this._bottomEdge) {
				if(this._southEastTree == null) this._southEastTree = org.flixel.system.FlxQuadTree.recycle(this._midpointX,this._midpointY,this._halfWidth,this._halfHeight,this);
				this._southEastTree.addObject();
				return;
			}
		}
		if(org.flixel.system.FlxQuadTree._objectRightEdge > this._leftEdge && org.flixel.system.FlxQuadTree._objectLeftEdge < this._midpointX && org.flixel.system.FlxQuadTree._objectBottomEdge > this._topEdge && org.flixel.system.FlxQuadTree._objectTopEdge < this._midpointY) {
			if(this._northWestTree == null) this._northWestTree = org.flixel.system.FlxQuadTree.recycle(this._leftEdge,this._topEdge,this._halfWidth,this._halfHeight,this);
			this._northWestTree.addObject();
		}
		if(org.flixel.system.FlxQuadTree._objectRightEdge > this._midpointX && org.flixel.system.FlxQuadTree._objectLeftEdge < this._rightEdge && org.flixel.system.FlxQuadTree._objectBottomEdge > this._topEdge && org.flixel.system.FlxQuadTree._objectTopEdge < this._midpointY) {
			if(this._northEastTree == null) this._northEastTree = org.flixel.system.FlxQuadTree.recycle(this._midpointX,this._topEdge,this._halfWidth,this._halfHeight,this);
			this._northEastTree.addObject();
		}
		if(org.flixel.system.FlxQuadTree._objectRightEdge > this._midpointX && org.flixel.system.FlxQuadTree._objectLeftEdge < this._rightEdge && org.flixel.system.FlxQuadTree._objectBottomEdge > this._midpointY && org.flixel.system.FlxQuadTree._objectTopEdge < this._bottomEdge) {
			if(this._southEastTree == null) this._southEastTree = org.flixel.system.FlxQuadTree.recycle(this._midpointX,this._midpointY,this._halfWidth,this._halfHeight,this);
			this._southEastTree.addObject();
		}
		if(org.flixel.system.FlxQuadTree._objectRightEdge > this._leftEdge && org.flixel.system.FlxQuadTree._objectLeftEdge < this._midpointX && org.flixel.system.FlxQuadTree._objectBottomEdge > this._midpointY && org.flixel.system.FlxQuadTree._objectTopEdge < this._bottomEdge) {
			if(this._southWestTree == null) this._southWestTree = org.flixel.system.FlxQuadTree.recycle(this._leftEdge,this._midpointY,this._halfWidth,this._halfHeight,this);
			this._southWestTree.addObject();
		}
	}
	,add: function(ObjectOrGroup,list) {
		org.flixel.system.FlxQuadTree._list = list;
		if(js.Boot.__instanceof(ObjectOrGroup,org.flixel.FlxTypedGroup)) {
			var i = 0;
			var basic;
			var group = ObjectOrGroup;
			var members = group.members;
			var l = group.length;
			while(i < l) {
				basic = members[i++];
				if(basic != null && basic.exists) {
					if(js.Boot.__instanceof(basic,org.flixel.FlxTypedGroup)) this.add(basic,list); else if(js.Boot.__instanceof(basic,org.flixel.FlxObject)) {
						org.flixel.system.FlxQuadTree._object = js.Boot.__cast(basic , org.flixel.FlxObject);
						if(org.flixel.system.FlxQuadTree._object.exists && org.flixel.system.FlxQuadTree._object.allowCollisions != 0) {
							org.flixel.system.FlxQuadTree._objectLeftEdge = org.flixel.system.FlxQuadTree._object.x;
							org.flixel.system.FlxQuadTree._objectTopEdge = org.flixel.system.FlxQuadTree._object.y;
							org.flixel.system.FlxQuadTree._objectRightEdge = org.flixel.system.FlxQuadTree._object.x + org.flixel.system.FlxQuadTree._object.width;
							org.flixel.system.FlxQuadTree._objectBottomEdge = org.flixel.system.FlxQuadTree._object.y + org.flixel.system.FlxQuadTree._object.height;
							this.addObject();
						}
					}
				}
			}
		} else {
			org.flixel.system.FlxQuadTree._object = js.Boot.__cast(ObjectOrGroup , org.flixel.FlxObject);
			if(org.flixel.system.FlxQuadTree._object.exists && org.flixel.system.FlxQuadTree._object.allowCollisions != 0) {
				org.flixel.system.FlxQuadTree._objectLeftEdge = org.flixel.system.FlxQuadTree._object.x;
				org.flixel.system.FlxQuadTree._objectTopEdge = org.flixel.system.FlxQuadTree._object.y;
				org.flixel.system.FlxQuadTree._objectRightEdge = org.flixel.system.FlxQuadTree._object.x + org.flixel.system.FlxQuadTree._object.width;
				org.flixel.system.FlxQuadTree._objectBottomEdge = org.flixel.system.FlxQuadTree._object.y + org.flixel.system.FlxQuadTree._object.height;
				this.addObject();
			}
		}
	}
	,load: function(ObjectOrGroup1,ObjectOrGroup2,NotifyCallback,ProcessCallback) {
		this.add(ObjectOrGroup1,0);
		if(ObjectOrGroup2 != null) {
			this.add(ObjectOrGroup2,1);
			org.flixel.system.FlxQuadTree._useBothLists = true;
		} else org.flixel.system.FlxQuadTree._useBothLists = false;
		org.flixel.system.FlxQuadTree._notifyCallback = NotifyCallback;
		org.flixel.system.FlxQuadTree._processingCallback = ProcessCallback;
	}
	,destroy: function() {
		if(this._headA != null) this._headA.destroy();
		this._headA = null;
		if(this._tailA != null) this._tailA.destroy();
		this._tailA = null;
		if(this._headB != null) this._headB.destroy();
		this._headB = null;
		if(this._tailB != null) this._tailB.destroy();
		this._tailB = null;
		if(this._northWestTree != null) this._northWestTree.destroy();
		this._northWestTree = null;
		if(this._northEastTree != null) this._northEastTree.destroy();
		this._northEastTree = null;
		if(this._southEastTree != null) this._southEastTree.destroy();
		this._southEastTree = null;
		if(this._southWestTree != null) this._southWestTree.destroy();
		this._southWestTree = null;
		org.flixel.system.FlxQuadTree._object = null;
		org.flixel.system.FlxQuadTree._processingCallback = null;
		org.flixel.system.FlxQuadTree._notifyCallback = null;
		this.exists = false;
		this.next = org.flixel.system.FlxQuadTree._cachedTreesHead;
		org.flixel.system.FlxQuadTree._cachedTreesHead = this;
		org.flixel.system.FlxQuadTree._NUM_CACHED_QUAD_TREES++;
	}
	,reset: function(X,Y,Width,Height,Parent) {
		this.exists = true;
		this.x = X;
		this.y = Y;
		this.width = Width;
		this.height = Height;
		this;
		this._headA = this._tailA = org.flixel.system.FlxList.recycle();
		this._headB = this._tailB = org.flixel.system.FlxList.recycle();
		if(Parent != null) {
			var iterator;
			var ot;
			if(Parent._headA.object != null) {
				iterator = Parent._headA;
				while(iterator != null) {
					if(this._tailA.object != null) {
						ot = this._tailA;
						this._tailA = org.flixel.system.FlxList.recycle();
						ot.next = this._tailA;
					}
					this._tailA.object = iterator.object;
					iterator = iterator.next;
				}
			}
			if(Parent._headB.object != null) {
				iterator = Parent._headB;
				while(iterator != null) {
					if(this._tailB.object != null) {
						ot = this._tailB;
						this._tailB = org.flixel.system.FlxList.recycle();
						ot.next = this._tailB;
					}
					this._tailB.object = iterator.object;
					iterator = iterator.next;
				}
			}
		} else org.flixel.system.FlxQuadTree._min = Math.floor((this.width + this.height) / (2 * org.flixel.system.FlxQuadTree.divisions));
		this._canSubdivide = this.width > org.flixel.system.FlxQuadTree._min || this.height > org.flixel.system.FlxQuadTree._min;
		this._northWestTree = null;
		this._northEastTree = null;
		this._southEastTree = null;
		this._southWestTree = null;
		this._leftEdge = this.x;
		this._rightEdge = this.x + this.width;
		this._halfWidth = this.width / 2;
		this._midpointX = this._leftEdge + this._halfWidth;
		this._topEdge = this.y;
		this._bottomEdge = this.y + this.height;
		this._halfHeight = this.height / 2;
		this._midpointY = this._topEdge + this._halfHeight;
	}
	,__class__: org.flixel.system.FlxQuadTree
});
org.flixel.system.FlxReplay = function() {
	this.seed = 0;
	this.frame = 0;
	this.frameCount = 0;
	this.finished = false;
	this._frames = null;
	this._capacity = 0;
	this._marker = 0;
};
$hxClasses["org.flixel.system.FlxReplay"] = org.flixel.system.FlxReplay;
org.flixel.system.FlxReplay.__name__ = ["org","flixel","system","FlxReplay"];
org.flixel.system.FlxReplay.prototype = {
	rewind: function() {
		this._marker = 0;
		this.frame = 0;
		this.finished = false;
	}
	,playNextFrame: function() {
		org.flixel.FlxG.resetInput();
		if(this._marker >= this.frameCount) {
			this.finished = true;
			return;
		}
		if(this._frames[this._marker].frame != this.frame++) return;
		var fr = this._frames[this._marker++];
		if(fr.keys != null) org.flixel.FlxG.keys.playback(fr.keys);
		if(fr.mouse != null) org.flixel.FlxG.mouse.playback(fr.mouse);
	}
	,recordFrame: function() {
		var continueFrame = true;
		var keysRecord = org.flixel.FlxG.keys.record();
		if(keysRecord == null) continueFrame = false;
		var mouseRecord = org.flixel.FlxG.mouse.record();
		if(mouseRecord == null) continueFrame = false;
		if(continueFrame) {
			this.frame++;
			return;
		}
		var frameRecorded = new org.flixel.system.replay.FrameRecord().create(this.frame++);
		frameRecorded.mouse = mouseRecord;
		frameRecorded.keys = keysRecord;
		this._frames[this.frameCount++] = frameRecorded;
		if(this.frameCount >= this._capacity) {
			this._capacity *= 2;
			org.flixel.util.FlxArray.setLength(this._frames,this._capacity);
		}
	}
	,save: function() {
		if(this.frameCount <= 0) return null;
		var output = this.seed + "\n";
		var i = 0;
		while(i < this.frameCount) output += this._frames[i++].save() + "\n";
		return output;
	}
	,init: function() {
		this._capacity = 100;
		this._frames = new Array();
		org.flixel.util.FlxArray.setLength(this._frames,this._capacity);
		this.frameCount = 0;
	}
	,load: function(FileContents) {
		this.init();
		var lines = FileContents.split("\n");
		this.seed = Std.parseFloat(lines[0]);
		var line;
		var i = 1;
		var l = lines.length;
		while(i < l) {
			line = lines[i++];
			if(line.length > 3) {
				this._frames[this.frameCount++] = new org.flixel.system.replay.FrameRecord().load(line);
				if(this.frameCount >= this._capacity) {
					this._capacity *= 2;
					org.flixel.util.FlxArray.setLength(this._frames,this._capacity);
				}
			}
		}
		this.rewind();
	}
	,create: function(Seed) {
		this.destroy();
		this.init();
		this.seed = Seed;
		this.rewind();
	}
	,destroy: function() {
		if(this._frames == null) return;
		var i = this.frameCount - 1;
		while(i >= 0) this._frames[i--].destroy();
		this._frames = null;
	}
	,__class__: org.flixel.system.FlxReplay
}
org.flixel.system.FlxTile = function(Tilemap,Index,Width,Height,Visible,AllowCollisions) {
	org.flixel.FlxObject.call(this,0,0,Width,Height);
	this.immovable = true;
	this.moves = false;
	this.callbackFunction = null;
	this.filter = null;
	this.tilemap = Tilemap;
	this.index = Index;
	this.visible = Visible;
	this.allowCollisions = AllowCollisions;
	this.mapIndex = 0;
};
$hxClasses["org.flixel.system.FlxTile"] = org.flixel.system.FlxTile;
org.flixel.system.FlxTile.__name__ = ["org","flixel","system","FlxTile"];
org.flixel.system.FlxTile.__super__ = org.flixel.FlxObject;
org.flixel.system.FlxTile.prototype = $extend(org.flixel.FlxObject.prototype,{
	destroy: function() {
		this.callbackFunction = null;
		this.tilemap = null;
		org.flixel.FlxObject.prototype.destroy.call(this);
	}
	,__class__: org.flixel.system.FlxTile
});
org.flixel.system.FlxTilemapBuffer = function(TileWidth,TileHeight,WidthInTiles,HeightInTiles,Camera) {
	this.forceComplexRender = false;
	if(WidthInTiles < 0) WidthInTiles = 0;
	if(HeightInTiles < 0) HeightInTiles = 0;
	if(Camera == null) Camera = org.flixel.FlxG.camera;
	this.columns = Math.ceil(Camera.width / TileWidth) + 1;
	if(this.columns > WidthInTiles) this.columns = WidthInTiles;
	this.rows = Math.ceil(Camera.height / TileHeight) + 1;
	if(this.rows > HeightInTiles) this.rows = HeightInTiles;
	this.width = this.columns * TileWidth | 0;
	this.height = this.rows * TileHeight | 0;
	this.dirty = true;
};
$hxClasses["org.flixel.system.FlxTilemapBuffer"] = org.flixel.system.FlxTilemapBuffer;
org.flixel.system.FlxTilemapBuffer.__name__ = ["org","flixel","system","FlxTilemapBuffer"];
org.flixel.system.FlxTilemapBuffer.prototype = {
	destroy: function() {
	}
	,__class__: org.flixel.system.FlxTilemapBuffer
}
org.flixel.system.FlxWindow = function(Title,Width,Height,Resizable,Bounds,BGColor,TopColor) {
	if(TopColor == null) TopColor = 2130706432;
	if(BGColor == null) BGColor = 2139062143;
	if(Resizable == null) Resizable = true;
	flash.display.Sprite.call(this);
	this._width = Math.abs(Width) | 0;
	this._height = Math.abs(Height) | 0;
	this._bounds = Bounds;
	this.minSize = new flash.geom.Point(50,30);
	if(this._bounds != null) this.maxSize = new flash.geom.Point(this._bounds.width,this._bounds.height); else this.maxSize = new flash.geom.Point(1.79e+308,1.79e+308);
	this._drag = new flash.geom.Point();
	this._resizable = Resizable;
	this._shadow = new flash.display.Bitmap(new flash.display.BitmapData(1,2,true,-16777216));
	this.addChild(this._shadow);
	this._background = new flash.display.Bitmap(new flash.display.BitmapData(1,1,true,BGColor));
	this._background.set_y(15);
	this.addChild(this._background);
	this._header = new flash.display.Bitmap(new flash.display.BitmapData(1,15,true,TopColor));
	this.addChild(this._header);
	this._title = new flash.text.TextField();
	this._title.set_x(2);
	this._title.set_height(16);
	this._title.selectable = false;
	this._title.multiline = false;
	this._title.set_defaultTextFormat(new flash.text.TextFormat(openfl.Assets.getFont(org.flixel.FlxAssets.debuggerFont).fontName,12,16777215));
	this._title.set_text(Title);
	this.addChild(this._title);
	if(this._resizable) {
		this._handle = new flash.display.Bitmap(org.flixel.FlxAssets.getBitmapData(org.flixel.FlxAssets.imgHandle));
		this.addChild(this._handle);
	}
	if(this._width != 0 || this._height != 0) this.updateSize();
	this.bound();
	this.addEventListener(flash.events.Event.ENTER_FRAME,$bind(this,this.init));
};
$hxClasses["org.flixel.system.FlxWindow"] = org.flixel.system.FlxWindow;
org.flixel.system.FlxWindow.__name__ = ["org","flixel","system","FlxWindow"];
org.flixel.system.FlxWindow.__super__ = flash.display.Sprite;
org.flixel.system.FlxWindow.prototype = $extend(flash.display.Sprite.prototype,{
	updateGUI: function() {
		if(this._overHeader || this._overHandle) {
			if(this._title.alpha != 1.0) this._title.alpha = 1.0;
		} else if(this._title.alpha != 0.65) this._title.alpha = 0.65;
	}
	,updateSize: function() {
		this._width = org.flixel.util.FlxMath.bound(this._width,this.minSize.x,this.maxSize.x) | 0;
		this._height = org.flixel.util.FlxMath.bound(this._height,this.minSize.y,this.maxSize.y) | 0;
		this._header.set_scaleX(this._width);
		this._background.set_scaleX(this._width);
		this._background.set_scaleY(this._height - 15);
		this._shadow.set_scaleX(this._width);
		this._shadow.set_y(this._height);
		this._title.set_width(this._width - 4);
		if(this._resizable) {
			this._handle.set_x(this._width - this._handle.get_width());
			this._handle.set_y(this._height - this._handle.get_height());
		}
	}
	,bound: function() {
		if(this._bounds != null) {
			this.set_x(org.flixel.util.FlxMath.bound(this.get_x(),this._bounds.get_left(),this._bounds.get_right() - this._width));
			this.set_y(org.flixel.util.FlxMath.bound(this.get_y(),this._bounds.get_top(),this._bounds.get_bottom() - this._height));
		}
	}
	,onMouseUp: function(E) {
		this._dragging = false;
		this._resizing = false;
	}
	,onMouseDown: function(E) {
		if(this._overHeader) {
			this.parent.addChild(this);
			this._dragging = true;
			this._drag.x = this.get_mouseX();
			this._drag.y = this.get_mouseY();
		} else if(this._overHandle) {
			this._resizing = true;
			this._drag.x = this._width - this.get_mouseX();
			this._drag.y = this._height - this.get_mouseY();
		}
	}
	,onMouseMove: function(E) {
		if(!this.parent.get_visible()) {
			this._overHandle = this._overHeader = false;
			return;
		}
		if(this._dragging) {
			this._overHeader = true;
			this.reposition(this.parent.get_mouseX() - this._drag.x,this.parent.get_mouseY() - this._drag.y);
		} else if(this._resizing) {
			this._overHandle = true;
			this.resize(this.get_mouseX() - this._drag.x,this.get_mouseY() - this._drag.y);
		} else if(this.get_mouseX() >= 0 && this.get_mouseX() <= this._width && this.get_mouseY() >= 0 && this.get_mouseY() <= this._height) {
			this._overHeader = this.get_mouseX() <= this._header.get_width() && this.get_mouseY() <= this._header.get_height();
			if(this._resizable) this._overHandle = this.get_mouseX() >= this._width - this._handle.get_width() && this.get_mouseY() >= this._height - this._handle.get_height();
		} else this._overHandle = this._overHeader = false;
		this.updateGUI();
	}
	,init: function(E) {
		if(this.get_stage() == null) return;
		this.removeEventListener(flash.events.Event.ENTER_FRAME,$bind(this,this.init));
		this.get_stage().addEventListener(flash.events.MouseEvent.MOUSE_MOVE,$bind(this,this.onMouseMove));
		this.addEventListener(flash.events.MouseEvent.MOUSE_DOWN,$bind(this,this.onMouseDown));
		this.get_stage().addEventListener(flash.events.MouseEvent.MOUSE_UP,$bind(this,this.onMouseUp));
	}
	,reposition: function(X,Y) {
		this.set_x(X);
		this.set_y(Y);
		this.bound();
	}
	,resize: function(Width,Height) {
		this._width = Math.abs(Width) | 0;
		this._height = Math.abs(Height) | 0;
		this.updateSize();
	}
	,destroy: function() {
		this.minSize = null;
		this.maxSize = null;
		this._bounds = null;
		if(this._shadow != null) this.removeChild(this._shadow);
		this._shadow = null;
		if(this._background != null) this.removeChild(this._background);
		this._background = null;
		if(this._header != null) this.removeChild(this._header);
		this._header = null;
		if(this._title != null) this.removeChild(this._title);
		this._title = null;
		if(this._handle != null) this.removeChild(this._handle);
		this._handle = null;
		this._drag = null;
	}
	,__class__: org.flixel.system.FlxWindow
});
org.flixel.system.debug = {}
org.flixel.system.debug.Console = function(Title,Width,Height,Resizable,Bounds,BGColor,TopColor) {
	if(TopColor == null) TopColor = 2130706432;
	if(BGColor == null) BGColor = -1442840576;
	if(Resizable == null) Resizable = true;
	this.defaultText = "(Click here / press [Tab] to enter command. Type 'help' for help.)";
	this.historyMax = 25;
	this.historyIndex = 0;
	this.autoPause = true;
	org.flixel.system.FlxWindow.call(this,Title,Width,Height,Resizable,Bounds,BGColor,TopColor);
	this.cmdFunctions = new haxe.ds.StringMap();
	this.cmdObjects = new haxe.ds.StringMap();
	this.registeredObjects = new haxe.ds.StringMap();
	this.registeredFunctions = new haxe.ds.StringMap();
	this.objectStack = new Array();
	this.cmdHistory = new Array();
	if(org.flixel.FlxG._game._prefsSave.data.history != null) {
		this.cmdHistory = org.flixel.FlxG._game._prefsSave.data.history;
		this.historyIndex = this.cmdHistory.length;
	} else {
		this.cmdHistory = new Array();
		org.flixel.FlxG._game._prefsSave.data.history = this.cmdHistory;
	}
	this._input = new flash.text.TextField();
	this._input.set_type(flash.text.TextFieldType.INPUT);
	this._input.set_defaultTextFormat(new flash.text.TextFormat(openfl.Assets.getFont(org.flixel.FlxAssets.debuggerFont).fontName,14,16777215,false,false,false));
	this._input.set_text(this.defaultText);
	this._input.set_width(this._width - 4);
	this._input.set_height(this._height - 15);
	this._input.set_x(2);
	this._input.set_y(15);
	this.addChild(this._input);
	this._input.addEventListener(flash.events.FocusEvent.FOCUS_IN,$bind(this,this.onFocus));
	this._input.addEventListener(flash.events.FocusEvent.FOCUS_OUT,$bind(this,this.onFocusLost));
	this._input.addEventListener(flash.events.KeyboardEvent.KEY_DOWN,$bind(this,this.onKeyPress));
	var commands = new org.flixel.system.debug.ConsoleCommands(this);
};
$hxClasses["org.flixel.system.debug.Console"] = org.flixel.system.debug.Console;
org.flixel.system.debug.Console.__name__ = ["org","flixel","system","debug","Console"];
org.flixel.system.debug.Console.__super__ = org.flixel.system.FlxWindow;
org.flixel.system.debug.Console.prototype = $extend(org.flixel.system.FlxWindow.prototype,{
	updateSize: function() {
		this._input.set_width(this._width - 4);
		this._input.set_height(this._height - 15);
		org.flixel.system.FlxWindow.prototype.updateSize.call(this);
	}
	,destroy: function() {
		this._input.removeEventListener(flash.events.FocusEvent.FOCUS_IN,$bind(this,this.onFocus));
		this._input.removeEventListener(flash.events.FocusEvent.FOCUS_OUT,$bind(this,this.onFocusLost));
		this._input.removeEventListener(flash.events.KeyboardEvent.KEY_DOWN,$bind(this,this.onKeyPress));
		if(this._input != null) this.removeChild(this._input);
		this._input = null;
		this.cmdFunctions = null;
		this.cmdObjects = null;
		this.registeredObjects = null;
		this.registeredFunctions = null;
		this.objectStack = null;
		org.flixel.system.FlxWindow.prototype.destroy.call(this);
	}
	,registerFunction: function(FunctionAlias,Function) {
		var value = Function;
		this.registeredFunctions.set(FunctionAlias,value);
	}
	,registerObject: function(ObjectAlias,AnyObject) {
		var value = AnyObject;
		this.registeredObjects.set(ObjectAlias,value);
	}
	,addCommand: function(Command,AnyObject,Function,Alt) {
		if(Alt == null) Alt = "";
		var value = Function;
		this.cmdFunctions.set(Command,value);
		var value = AnyObject;
		this.cmdObjects.set(Command,value);
		if(Alt != "") {
			var value = Function;
			this.cmdFunctions.set(Alt,value);
			var value = AnyObject;
			this.cmdObjects.set(Alt,value);
		}
	}
	,getNextCommand: function() {
		if(this.historyIndex < this.cmdHistory.length) this.historyIndex++;
		if(this.cmdHistory[this.historyIndex] != null) return this.cmdHistory[this.historyIndex]; else return "";
	}
	,getPreviousCommand: function() {
		if(this.historyIndex > 0) this.historyIndex--;
		return this.cmdHistory[this.historyIndex];
	}
	,filterDigits: function(str) {
		var out = new StringBuf();
		var _g1 = 0, _g = str.length;
		while(_g1 < _g) {
			var i = _g1++;
			var c = HxOverrides.cca(str,i);
			if(c >= 48 && c <= 57) out.b += String.fromCharCode(c);
		}
		return out.b;
	}
	,overrideDefaultSelection: function(e) {
		this._input.setSelection(this._input.get_text().length,this._input.get_text().length);
		this.removeEventListener(flash.events.Event.RENDER,$bind(this,this.overrideDefaultSelection));
	}
	,callFunction: function(obj,func,args) {
		try {
			func.apply(obj,args);
			return true;
		} catch( e ) {
			if( js.Boot.__instanceof(e,flash.errors.ArgumentError) ) {
				if(e.errorID == 1063) {
					var expected = Std.parseInt(this.filterDigits(e.message).charAt(4));
					if(expected < args.length) {
						var shortenedArgs = args.slice(0,expected);
						func.apply(obj,shortenedArgs);
					} else {
						org.flixel.FlxG.error("Console: Invalid number or parameters: " + expected + " expected, " + args.length + " passed");
						return false;
					}
					return true;
				}
				return false;
			} else throw(e);
		}
	}
	,processCommand: function() {
		var args = StringTools.rtrim(this._input.get_text()).split(" ");
		var command = args.shift();
		var obj = this.cmdObjects.get(command);
		var func = this.cmdFunctions.get(command);
		if(func != null) {
			if(this.getPreviousCommand() != this._input.get_text()) {
				this.cmdHistory.push(this._input.get_text());
				org.flixel.FlxG._game._prefsSave.flush();
				if(this.cmdHistory.length > this.historyMax) this.cmdHistory.shift();
			}
			this.historyIndex = this.cmdHistory.length;
			if(Reflect.isFunction(func)) {
				if(command == "log") args = [args.join(" ")]; else if(command == "call") args[1] = args.slice(1,args.length); else if(command == "create" || command == "cr") args[2] = args.slice(2,args.length);
				this.callFunction(obj,func,args);
			}
			this._input.set_text("");
		} else org.flixel.FlxG.error("Console: Invalid command: '" + command + "'");
	}
	,onKeyPress: function(e) {
		if(e.keyCode == 32 && this._input.get_text() == " ") this._input.set_text("");
		if(e.keyCode == 13 && this._input.get_text() != "") this.processCommand(); else if(e.keyCode == 27) org.flixel.FlxG.get_stage().set_focus(null); else if(e.keyCode == 46) this._input.set_text(""); else if(e.keyCode == 38) {
			if(this.cmdHistory.length == 0) return;
			this._input.set_text(this.getPreviousCommand());
			this.addEventListener(flash.events.Event.RENDER,$bind(this,this.overrideDefaultSelection),false,0,true);
			org.flixel.FlxG.get_stage().invalidate();
		} else if(e.keyCode == 40) {
			if(this.cmdHistory.length == 0) return;
			this._input.set_text(this.getNextCommand());
		}
	}
	,onFocusLost: function(e) {
		org.flixel.FlxG._game.tempDisableSoundHotKeys = false;
		if(this._input.get_text() == "") this._input.set_text(this.defaultText);
	}
	,onFocus: function(e) {
		org.flixel.FlxG._game.tempDisableSoundHotKeys = true;
		if(this._input.get_text() == this.defaultText) this._input.set_text("");
	}
	,__class__: org.flixel.system.debug.Console
});
org.flixel.system.debug.ConsoleCommands = function(console) {
	this.watchingMouse = false;
	this._console = console;
	console.addCommand("help",this,$bind(this,this.help),"h");
	console.addCommand("log",org.flixel.FlxG,org.flixel.FlxG.log);
	console.addCommand("clearLog",org.flixel.FlxG,org.flixel.FlxG.clearLog,"clear");
	console.addCommand("clearHistory",this,$bind(this,this.clearHistory),"ch");
	console.addCommand("resetState",this,$bind(this,this.resetState),"rs");
	console.addCommand("switchState",this,$bind(this,this.switchState),"ss");
	console.addCommand("resetGame",this,$bind(this,this.resetGame),"rg");
	console.addCommand("watchMouse",this,$bind(this,this.watchMouse),"wm");
	console.addCommand("visualDebug",this,$bind(this,this.visualDebug),"vd");
	console.addCommand("pause",this,$bind(this,this.pause),"p");
	console.addCommand("play",org.flixel.FlxG,org.flixel.FlxG.play);
	console.addCommand("playMusic",org.flixel.FlxG,org.flixel.FlxG.playMusic,"pm");
	console.addCommand("bgColor",this,$bind(this,this.bgColor),"bg");
	console.addCommand("shake",this,$bind(this,this.shake),"sh");
	console.addCommand("close",this,$bind(this,this.close),"cl");
	console.addCommand("create",this,$bind(this,this.create),"cr");
	console.addCommand("set",this,$bind(this,this.set));
	console.addCommand("call",this,$bind(this,this.call));
	console.addCommand("listObjects",this,$bind(this,this.listObjects),"lo");
	console.addCommand("listFunctions",this,$bind(this,this.listFunctions),"lf");
	console.addCommand("watch",this,$bind(this,this.watch),"w");
	console.addCommand("unwatch",this,$bind(this,this.unwatch),"uw");
	console.registerObject("FlxG",org.flixel.FlxG);
};
$hxClasses["org.flixel.system.debug.ConsoleCommands"] = org.flixel.system.debug.ConsoleCommands;
org.flixel.system.debug.ConsoleCommands.__name__ = ["org","flixel","system","debug","ConsoleCommands"];
org.flixel.system.debug.ConsoleCommands.prototype = {
	cLog: function(Text) {
		org.flixel.FlxG.advancedLog([Text],org.flixel.system.debug.Log.STYLE_CONSOLE);
	}
	,resolveObjectAndVariable: function(ObjectAndVariable,CommandName) {
		var searchArr = ObjectAndVariable.split(".");
		if(searchArr[0].length == ObjectAndVariable.length) {
			org.flixel.FlxG.error(CommandName + ": '" + ObjectAndVariable + "' does not refer to an object's field");
			return null;
		}
		var object = this._console.registeredObjects.get(searchArr.shift());
		var variableName = searchArr.join(".");
		if(!Reflect.isObject(object)) {
			org.flixel.FlxG.error(CommandName + ": '" + Std.string(object) + "' is not a valid Object");
			return null;
		}
		var l = searchArr.length;
		var tempObj = object;
		var tempVarName = "";
		var _g = 0;
		while(_g < l) {
			var i = _g++;
			tempVarName = searchArr[i];
			try {
				if(i < l - 1) tempObj = Reflect.getProperty(tempObj,tempVarName);
			} catch( e ) {
				org.flixel.FlxG.error(CommandName + ": " + Std.string(tempObj) + " does not have a field '" + tempVarName + "'");
				return null;
			}
		}
		return [tempObj,tempVarName];
	}
	,attemptToCreateInstance: function(ClassName,_Type,CommandName,Params) {
		if(Params == null) Params = [];
		var obj = Type.resolveClass(ClassName);
		if(!Reflect.isObject(obj)) {
			org.flixel.FlxG.error(CommandName + ": '" + ClassName + "' is not a valid class name. Try passing the full class path. Also make sure the class is being compiled.");
			return null;
		}
		var instance = Type.createInstance(obj,Params);
		if(!js.Boot.__instanceof(instance,_Type)) {
			org.flixel.FlxG.error(CommandName + ": '" + ClassName + "' is not a " + Type.getClassName(_Type));
			return null;
		}
		return instance;
	}
	,unwatch: function(ObjectAndVariable,VariableName) {
		var info = this.resolveObjectAndVariable(ObjectAndVariable,"watch");
		if(info == null) return;
		var object = info[0];
		var varName = info[1];
		org.flixel.FlxG.unwatch(object,varName);
	}
	,watch: function(ObjectAndVariable,DisplayName) {
		var info = this.resolveObjectAndVariable(ObjectAndVariable,"watch");
		if(info == null) return;
		var object = info[0];
		var varName = info[1];
		org.flixel.FlxG.watch(object,varName);
	}
	,listFunctions: function() {
		this.cLog("Functions registered: \n" + org.flixel.util.FlxString.formatStringMap(this._console.registeredFunctions));
	}
	,listObjects: function() {
		this.cLog("Objects registered: \n" + org.flixel.util.FlxString.formatStringMap(this._console.registeredObjects));
	}
	,call: function(FunctionAlias,Params) {
		if(Params == null) Params = [];
		var func = this._console.registeredFunctions.get(FunctionAlias);
		if(!Reflect.isFunction(func)) {
			var searchArr = FunctionAlias.split(".");
			var objectName = searchArr.shift();
			var object = this._console.registeredObjects.get(objectName);
			if(!Reflect.isObject(object)) {
				org.flixel.FlxG.error("call: '" + Std.string(object) + "' is not a valid Object to call function from");
				return;
			}
			var tempObj = object;
			var tempVarName = "";
			var funcName = "";
			var l = searchArr.length - 1;
			var _g = 0;
			while(_g < l) {
				var i = _g++;
				tempVarName = searchArr[i];
				try {
					var prop = Reflect.getProperty(tempObj,tempVarName);
				} catch( e ) {
					org.flixel.FlxG.error("call: " + Std.string(tempObj) + " does not have a field '" + tempVarName + "' to call function from");
					return;
				}
				tempObj = Reflect.getProperty(tempObj,tempVarName);
			}
			func = Reflect.field(tempObj,searchArr[l]);
			if(func == null) {
				org.flixel.FlxG.error("call: " + Std.string(tempObj) + " does not have a method '" + searchArr[l] + "' to call");
				return;
			}
		}
		if(Reflect.isFunction(func)) {
			var success = this._console.callFunction(null,func,Params);
			if(Params.length == 0 && success) this.cLog("call: Called '" + FunctionAlias + "'"); else if(success) this.cLog("call: Called '" + FunctionAlias + "' with params " + Std.string(Params));
		} else org.flixel.FlxG.error("call: '" + FunctionAlias + "' is not a valid function");
	}
	,set: function(ObjectAndVariable,NewVariableValue,WatchName) {
		var info = this.resolveObjectAndVariable(ObjectAndVariable,"set");
		if(info == null) return;
		var object = info[0];
		var varName = info[1];
		var variable = null;
		try {
			variable = Reflect.getProperty(object,varName);
		} catch( e ) {
			return;
		}
		if(js.Boot.__instanceof(variable,Bool)) {
			if(NewVariableValue == "false" || NewVariableValue == "0") NewVariableValue = false; else if(NewVariableValue == "true" || NewVariableValue == "1") NewVariableValue = true; else {
				org.flixel.FlxG.error("set: '" + Std.string(NewVariableValue) + "' is not a valid value for Booelan '" + varName + "'");
				return;
			}
		} else if(js.Boot.__instanceof(variable,Float) && Math.isNaN(Std.parseFloat(NewVariableValue))) {
			org.flixel.FlxG.error("set: '" + Std.string(NewVariableValue) + "' is not a valid value for number '" + varName + "'");
			return;
		} else if(!js.Boot.__instanceof(variable,Float) && !js.Boot.__instanceof(variable,Bool) && !js.Boot.__instanceof(variable,String)) {
			org.flixel.FlxG.error("set: '" + varName + ":" + Std.string(variable) + "' is not of a simple type (number, bool or string)");
			return;
		}
		Reflect.setProperty(object,varName,NewVariableValue);
		this.cLog("set: " + Std.string(object) + "." + varName + " is now " + Std.string(NewVariableValue));
		if(WatchName != null) org.flixel.FlxG.watch(object,varName,WatchName);
	}
	,create: function(ClassName,MousePos,Params) {
		if(MousePos == null) MousePos = true;
		if(Params == null) Params = [];
		var instance = this.attemptToCreateInstance(ClassName,org.flixel.FlxObject,"create",Params);
		if(instance == null) return;
		var obj = instance;
		if(MousePos) {
			obj.x = org.flixel.FlxG._game.get_mouseX();
			obj.y = org.flixel.FlxG._game.get_mouseY();
		}
		org.flixel.FlxG.get_state().add(instance);
		if(Params.length == 0) this.cLog("create: New " + ClassName + " created at X = " + obj.x + " Y = " + obj.y); else this.cLog("create: New " + ClassName + " created at X = " + obj.x + " Y = " + obj.y + " with params " + Std.string(Params));
		this._console.objectStack.push(instance);
		this._console.registerObject(Std.string(this._console.objectStack.length),instance);
		this.cLog("create: " + ClassName + " registered as object '" + this._console.objectStack.length);
	}
	,close: function() {
		org.flixel.FlxG._game._debugger.set_visible(false);
		org.flixel.FlxG._game._debugger.hasMouse = false;
	}
	,shake: function(Intensity,Duration) {
		if(Duration == null) Duration = 0.5;
		if(Intensity == null) Intensity = 0.05;
		if(Math.isNaN(Intensity)) {
			this.cLog("shake: Intensity is not a number");
			return;
		}
		if(Math.isNaN(Duration)) {
			this.cLog("shake: Duration is not a number");
			return;
		}
		org.flixel.FlxG.shake(Intensity,Duration);
		this.cLog("shake: Shake started, Intensity: " + Intensity + " Duration: " + Duration);
	}
	,bgColor: function(Color) {
		var colorString = Std.string(Color);
		var color = Std.parseInt(Color);
		if(colorString != null) switch(colorString) {
		case "red":
			color = -65536;
			break;
		case "green":
			color = -16744448;
			break;
		case "blue":
			color = -16776961;
			break;
		case "pink":
			color = -16181;
			break;
		case "white":
			color = -1;
			break;
		case "black":
			color = -16777216;
			break;
		}
		if(!Math.isNaN(color)) {
			org.flixel.FlxG.set_bgColor(color);
			this.cLog("bgColor: Changed background color to '" + Std.string(Color) + "'");
		} else this.cLog("bgColor: Invalid color '" + Std.string(Color) + "'");
	}
	,pause: function() {
		if(org.flixel.FlxG._game.get_debugger().vcr.paused) {
			org.flixel.FlxG._game.get_debugger().vcr.onPlay();
			this.cLog("pause: Game unpaused");
		} else {
			org.flixel.FlxG._game.get_debugger().vcr.onPause();
			this.cLog("pause: Game paused");
		}
	}
	,visualDebug: function() {
		org.flixel.FlxG.visualDebug = !org.flixel.FlxG.visualDebug;
		if(org.flixel.FlxG.visualDebug) this.cLog("visualDebug: Enbaled"); else this.cLog("visualDebug: Disabled");
	}
	,watchMouse: function() {
		if(!this.watchingMouse) {
			org.flixel.FlxG.watch(org.flixel.FlxG._game,"mouseX","Mouse.x");
			org.flixel.FlxG.watch(org.flixel.FlxG._game,"mouseY","Mouse.y");
			this.cLog("watchMouse: Mouse position added to watch window");
		} else {
			org.flixel.FlxG.unwatch(org.flixel.FlxG._game,"mouseX");
			org.flixel.FlxG.unwatch(org.flixel.FlxG._game,"mouseY");
			this.cLog("watchMouse: Mouse position removed from watch window");
		}
		this.watchingMouse = !this.watchingMouse;
	}
	,resetGame: function() {
		org.flixel.FlxG.resetGame();
		this.cLog("resetGame: Game has been reset");
	}
	,switchState: function(ClassName) {
		var instance = this.attemptToCreateInstance(ClassName,org.flixel.FlxState,"switchState");
		if(instance == null) return;
		org.flixel.FlxG.switchState(instance);
		this.cLog("switchState: New '" + ClassName + "' created");
	}
	,resetState: function() {
		org.flixel.FlxG.resetState();
		this.cLog("resetState: State has been reset");
	}
	,clearHistory: function() {
		this._console.cmdHistory = new Array();
		org.flixel.FlxG._game._prefsSave.flush();
		this.cLog("clearHistory: Command history cleared");
	}
	,help: function(Command) {
		if(Command == null) Command = "";
		if(Command == "") {
			var fs = "";
			this.cLog("System commands: \nlog, clearLog, clearHistory, help, resetState, switchState, resetGame, " + fs + " watchMouse, visualDebug, pause, play, playMusic, bgColor, shake, create, set, call, close, listObjects, listFunctions, watch, unwatch");
			this.cLog("help (Command) for more information about a specific command");
		} else {
			this.cLog("help: " + Command);
			switch(Command) {
			case "log":
				this.cLog("log: Calls FlxG.log() with the text you enter");
				this.cLog("log [Text]");
				break;
			case "clearLog":case "clear":
				this.cLog("clearLog: {clear} Clears the log window");
				break;
			case "clearHistory":case "ch":
				this.cLog("clearHistory: {ch} Clears the command history");
				break;
			case "help":case "h":
				this.cLog("help: {h} Lists all system commands or provides more info on a specified command");
				this.cLog("help (Command)");
				break;
			case "resetState":case "rs":
				this.cLog("resetState: {rs} Calls FlxG.resetState()");
				break;
			case "resetGame":case "rg":
				this.cLog("resetGame: {rg} Calls FlxG.resetGame()");
				break;
			case "switchState":case "ss":
				this.cLog("switchState: {ss} Calls FlxG.switchState() with specified FlxState");
				this.cLog("switchState [FlxState]");
				break;
			case "watchMouse":case "wm":
				this.cLog("watchMouse: {wm} Adds the x and y pos of the mosue to the watch window. Super useful for GUI-Building stuff.");
				break;
			case "visualDebug":case "vd":
				this.cLog("visualDebug: {vd} Toggles visual debugging");
				break;
			case "pause":case "p":
				this.cLog("pause: {p} Pauses / unpauses the game");
				break;
			case "play":
				this.cLog("play: Plays a sound");
				this.cLog("play [Sound] (Volume = 1)");
				break;
			case "playMusic":case "pm":
				this.cLog("playMusic: {pm} Sets up and plays a looping background soundtrack.");
				this.cLog("playMusic [Music] (Volume = 1)");
				break;
			case "bgColor":case "bg":
				this.cLog("bgColor: {bg} Changes the background color to a specified color. You can also pass the colors 'red, green, blue, pink, white,  and black'");
				this.cLog("bgColor [Color]");
				break;
			case "shake":case "sh":
				this.cLog("shake: {sh} Calls FlxG.shake()");
				this.cLog("shake (Intensity = 0.05) (Duration = 0.5)");
				break;
			case "close":case "cl":
				this.cLog("close: {cl} Close the debugger overlay");
				break;
			case "create":case "cr":
				this.cLog("create: {cr} Creates a new FlxObject and registers it - by default at the mouse position.");
				this.cLog("create [FlxObject] (MousePos = true) (param0...paramX)");
				break;
			case "set":
				this.cLog("set: Changes a var within a previosuly registered object via FlxG.console.registerObject(). Supports nesting (a field within an object within a registered object). Set a WatchName if you want to add the var to the watch window.");
				this.cLog("set [Object.VariableName] [NewValue] (WatchName)");
				break;
			case "call":
				this.cLog("call: Calls a function previously registered via FlxG.console.registerFunction() with a set of params (or a function of a registered object");
				this.cLog("call [(Object.)Function] [param0...paramX]");
				break;
			case "listObjects":case "lo":
				this.cLog("listObjects: {lo} Lists all the aliases of the objects registered");
				break;
			case "listFunctions":case "lf":
				this.cLog("listFunctions: {lf} Lists all the aliases of the functions registered");
				break;
			case "watch":case "w":
				this.cLog("watch: {w} Calls FlxG.watch()");
				this.cLog("watch [Object.VariableName] (DisplayName)");
				break;
			case "unwatch":case "uw":
				this.cLog("unwatch: {uw} Calls FlxG.unwatch()");
				this.cLog("unwatch [Object(.VariableName)]");
				break;
			default:
				this.cLog("help: Couldn't find command '" + Command + "'");
			}
			this.cLog("{shortcut} [required param] (optional param)");
		}
	}
	,__class__: org.flixel.system.debug.ConsoleCommands
}
org.flixel.system.debug.Log = function(Title,Width,Height,Resizable,Bounds,BGColor,TopColor) {
	if(TopColor == null) TopColor = 2130706432;
	if(BGColor == null) BGColor = 2139062143;
	if(Resizable == null) Resizable = true;
	org.flixel.system.FlxWindow.call(this,Title,Width,Height,Resizable,Bounds,BGColor,TopColor);
	this._text = new flash.text.TextField();
	this._text.set_x(2);
	this._text.set_y(15);
	this._text.multiline = true;
	this._text.set_wordWrap(true);
	this._text.selectable = true;
	this._text.set_defaultTextFormat(new flash.text.TextFormat(openfl.Assets.getFont(org.flixel.FlxAssets.debuggerFont).fontName,12,16777215));
	this.addChild(this._text);
	this._lines = new Array();
	org.flixel.system.debug.Log.STYLE_NORMAL = new org.flixel.system.debug.LogStyle();
	org.flixel.system.debug.Log.STYLE_WARNING = new org.flixel.system.debug.LogStyle("[WARNING] ","FFFF00",12,true,false,false,"Beep");
	org.flixel.system.debug.Log.STYLE_ERROR = new org.flixel.system.debug.LogStyle("[ERROR] ","FF0000",12,true,false,false,"Beep",true);
	org.flixel.system.debug.Log.STYLE_NOTICE = new org.flixel.system.debug.LogStyle("[NOTICE] ","008000",12,true);
	org.flixel.system.debug.Log.STYLE_CONSOLE = new org.flixel.system.debug.LogStyle("&#62; ","0000ff",12,true);
};
$hxClasses["org.flixel.system.debug.Log"] = org.flixel.system.debug.Log;
org.flixel.system.debug.Log.__name__ = ["org","flixel","system","debug","Log"];
org.flixel.system.debug.Log.__super__ = org.flixel.system.FlxWindow;
org.flixel.system.debug.Log.prototype = $extend(org.flixel.system.FlxWindow.prototype,{
	updateSize: function() {
		org.flixel.system.FlxWindow.prototype.updateSize.call(this);
		this._text.set_width(this._width - 10);
		this._text.set_height(this._height - 15);
	}
	,clear: function() {
		this._text.set_text("");
		this._lines.splice(0,this._lines.length);
	}
	,add: function(Data,Style) {
		if(Data == null) return;
		var texts = new Array();
		var _g1 = 0, _g = Data.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(js.Boot.__instanceof(Data[i],org.flixel.util.FlxPoint)) texts[i] = org.flixel.util.FlxString.formatFlxPoint(Data[i],org.flixel.system.FlxDebugger.pointPrecision); else if(js.Boot.__instanceof(Data[i],haxe.ds.StringMap)) texts[i] = org.flixel.util.FlxString.formatStringMap(Data[i]); else texts[i] = Std.string(Data[i]);
			texts[i] = StringTools.replace(texts[i],"<","");
			texts[i] = StringTools.replace(texts[i],">","");
		}
		var text = texts.join(" ");
		text = Style.prefix + text;
		if(this._lines.length <= 0) this._text.set_text("");
		this._lines.push(text);
		if(this._lines.length > org.flixel.system.debug.Log.MAX_LOG_LINES) {
			this._lines.shift();
			var newText = "";
			var _g1 = 0, _g = this._lines.length;
			while(_g1 < _g) {
				var i = _g1++;
				newText += this._lines[i] + "<br>";
			}
			this._text.set_text(newText);
		} else {
			var _g = this._text;
			_g.set_text(_g.get_text() + (text + "\n"));
		}
	}
	,destroy: function() {
		if(this._text != null) this.removeChild(this._text);
		this._text = null;
		this._lines = null;
		org.flixel.system.debug.Log.STYLE_NORMAL = null;
		org.flixel.system.debug.Log.STYLE_WARNING = null;
		org.flixel.system.debug.Log.STYLE_ERROR = null;
		org.flixel.system.debug.Log.STYLE_NOTICE = null;
		org.flixel.system.debug.Log.STYLE_CONSOLE = null;
		org.flixel.system.FlxWindow.prototype.destroy.call(this);
	}
	,__class__: org.flixel.system.debug.Log
});
org.flixel.system.debug.LogStyle = function(Prefix,Color,Size,Bold,Italic,Underlined,ErrorSound,OpenConsole,CallbackFunction) {
	if(OpenConsole == null) OpenConsole = false;
	if(Underlined == null) Underlined = false;
	if(Italic == null) Italic = false;
	if(Bold == null) Bold = false;
	if(Size == null) Size = 12;
	if(Color == null) Color = "FFFFFF";
	if(Prefix == null) Prefix = "";
	this.prefix = Prefix;
	this.color = Color;
	this.size = Size;
	this.bold = Bold;
	this.italic = Italic;
	this.underlined = Underlined;
	this.errorSound = ErrorSound;
	this.openConsole = OpenConsole;
	this.callbackFunction = CallbackFunction;
};
$hxClasses["org.flixel.system.debug.LogStyle"] = org.flixel.system.debug.LogStyle;
org.flixel.system.debug.LogStyle.__name__ = ["org","flixel","system","debug","LogStyle"];
org.flixel.system.debug.LogStyle.prototype = {
	__class__: org.flixel.system.debug.LogStyle
}
org.flixel.system.debug.Perf = function(Title,Width,Height,Resizable,Bounds,BGColor,TopColor) {
	if(TopColor == null) TopColor = 2130706432;
	if(BGColor == null) BGColor = 2139062143;
	if(Resizable == null) Resizable = true;
	org.flixel.system.FlxWindow.call(this,Title,Width,Height,Resizable,Bounds,BGColor,TopColor);
	this.resize(90,110);
	this._lastTime = 0;
	this._updateTimer = 0;
	this._text = new flash.text.TextField();
	this._text.set_width(this._width);
	this._text.set_x(2);
	this._text.set_y(15);
	this._text.multiline = true;
	this._text.set_wordWrap(true);
	this._text.selectable = true;
	this._text.set_defaultTextFormat(new flash.text.TextFormat(openfl.Assets.getFont(org.flixel.FlxAssets.debuggerFont).fontName,12,16777215));
	this.addChild(this._text);
	this._flixelUpdate = new Array();
	org.flixel.util.FlxArray.setLength(this._flixelUpdate,32);
	this._flixelUpdateMarker = 0;
	this._flixelDraw = new Array();
	org.flixel.util.FlxArray.setLength(this._flixelDraw,32);
	this._flixelDrawMarker = 0;
	this._flash = new Array();
	org.flixel.util.FlxArray.setLength(this._flash,32);
	this._flashMarker = 0;
	this._activeObject = new Array();
	org.flixel.util.FlxArray.setLength(this._activeObject,32);
	this._objectMarker = 0;
	this._visibleObject = new Array();
	org.flixel.util.FlxArray.setLength(this._visibleObject,32);
	this._visibleObjectMarker = 0;
	this._drawCalls = [];
	this._drawCallsMarker = 0;
};
$hxClasses["org.flixel.system.debug.Perf"] = org.flixel.system.debug.Perf;
org.flixel.system.debug.Perf.__name__ = ["org","flixel","system","debug","Perf"];
org.flixel.system.debug.Perf.__super__ = org.flixel.system.FlxWindow;
org.flixel.system.debug.Perf.prototype = $extend(org.flixel.system.FlxWindow.prototype,{
	drawCalls: function(Drawcalls) {
		this._drawCalls[this._drawCallsMarker++] = Drawcalls;
	}
	,visibleObjects: function(Count) {
		this._visibleObject[this._visibleObjectMarker++] = Count;
	}
	,activeObjects: function(Count) {
		this._activeObject[this._objectMarker++] = Count;
	}
	,flash: function(Time) {
		this._flash[this._flashMarker++] = Time;
	}
	,flixelDraw: function(Time) {
		this._flixelDraw[this._flixelDrawMarker++] = Time;
	}
	,flixelUpdate: function(Time) {
		this._flixelUpdate[this._flixelUpdateMarker++] = Time;
	}
	,update: function() {
		var time = flash.Lib.getTimer();
		var elapsed = time - this._lastTime;
		var updateEvery = 500;
		if(elapsed > updateEvery) elapsed = updateEvery;
		this._lastTime = time;
		this._updateTimer += elapsed;
		if(this._updateTimer > updateEvery) {
			var i;
			var output = "";
			var flashPlayerFramerate = 0;
			i = 0;
			while(i < this._flashMarker) flashPlayerFramerate += this._flash[i++];
			flashPlayerFramerate /= this._flashMarker;
			output += (1 / (flashPlayerFramerate / 1000) | 0) + "/" + org.flixel.FlxG.get_flashFramerate() + "fps\n";
			output += Math.round(flash.system.System.get_totalMemory() * 0.000000954 * 100) / 100 + "MB\n";
			var updateTime = 0;
			i = 0;
			while(i < this._flixelUpdateMarker) updateTime += this._flixelUpdate[i++];
			var activeCount = 0;
			i = 0;
			while(i < this._objectMarker) activeCount += this._activeObject[i++];
			activeCount = activeCount / this._objectMarker | 0;
			output += "U:" + activeCount + " " + (updateTime / this._flixelDrawMarker | 0) + "ms\n";
			var drawTime = 0;
			i = 0;
			while(i < this._flixelDrawMarker) drawTime += this._flixelDraw[i++];
			var visibleCount = 0;
			i = 0;
			while(i < this._visibleObjectMarker) visibleCount += this._visibleObject[i++];
			visibleCount = visibleCount / this._visibleObjectMarker | 0;
			output += "D:" + visibleCount + " " + (drawTime / this._flixelDrawMarker | 0) + "ms";
			var drawCallsCount = 0;
			i = 0;
			while(i < this._drawCallsMarker) drawCallsCount += this._drawCalls[i++];
			drawCallsCount = drawCallsCount / this._drawCallsMarker | 0;
			output += "\nDrwTls:" + drawCallsCount;
			this._drawCallsMarker = 0;
			output += "\nQuadTrees:" + org.flixel.system.FlxQuadTree._NUM_CACHED_QUAD_TREES;
			output += "\nLists:" + org.flixel.system.FlxList._NUM_CACHED_FLX_LIST;
			this._text.set_text(output);
			this._flixelUpdateMarker = 0;
			this._flixelDrawMarker = 0;
			this._flashMarker = 0;
			this._objectMarker = 0;
			this._visibleObjectMarker = 0;
			this._updateTimer -= updateEvery;
		}
	}
	,destroy: function() {
		if(this._text != null) this.removeChild(this._text);
		this._text = null;
		this._flixelUpdate = null;
		this._flixelDraw = null;
		this._flash = null;
		this._activeObject = null;
		this._visibleObject = null;
		this._drawCalls = null;
		org.flixel.system.FlxWindow.prototype.destroy.call(this);
	}
	,__class__: org.flixel.system.debug.Perf
});
org.flixel.system.debug.VCR = function() {
	flash.display.Sprite.call(this);
	var spacing = 7;
	this._open = new flash.display.Bitmap(org.flixel.FlxAssets.getBitmapData(org.flixel.FlxAssets.imgOpen));
	this.addChild(this._open);
	this._recordOff = new flash.display.Bitmap(org.flixel.FlxAssets.getBitmapData(org.flixel.FlxAssets.imgRecordOff));
	this._recordOff.set_x(this._open.get_x() + this._open.get_width() + spacing);
	this.addChild(this._recordOff);
	this._recordOn = new flash.display.Bitmap(org.flixel.FlxAssets.getBitmapData(org.flixel.FlxAssets.imgRecordOn));
	this._recordOn.set_x(this._recordOff.get_x());
	this._recordOn.set_visible(false);
	this.addChild(this._recordOn);
	this._stop = new flash.display.Bitmap(org.flixel.FlxAssets.getBitmapData(org.flixel.FlxAssets.imgStop));
	this._stop.set_x(this._recordOff.get_x());
	this._stop.set_visible(false);
	this.addChild(this._stop);
	this._flixel = new flash.display.Bitmap(org.flixel.FlxAssets.getBitmapData(org.flixel.FlxAssets.imgFlixel));
	this._flixel.set_x(this._recordOff.get_x() + this._recordOff.get_width() + spacing);
	this.addChild(this._flixel);
	this._restart = new flash.display.Bitmap(org.flixel.FlxAssets.getBitmapData(org.flixel.FlxAssets.imgRestart));
	this._restart.set_x(this._flixel.get_x() + this._flixel.get_width() + spacing);
	this.addChild(this._restart);
	this._pause = new flash.display.Bitmap(org.flixel.FlxAssets.getBitmapData(org.flixel.FlxAssets.imgPause));
	this._pause.set_x(this._restart.get_x() + this._restart.get_width() + spacing);
	this.addChild(this._pause);
	this._play = new flash.display.Bitmap(org.flixel.FlxAssets.getBitmapData(org.flixel.FlxAssets.imgPlay));
	this._play.set_x(this._pause.get_x());
	this._play.set_visible(false);
	this.addChild(this._play);
	this._step = new flash.display.Bitmap(org.flixel.FlxAssets.getBitmapData(org.flixel.FlxAssets.imgStep));
	this._step.set_x(this._pause.get_x() + this._pause.get_width() + spacing);
	this.addChild(this._step);
	this._runtimeDisplay = new flash.text.TextField();
	this._runtimeDisplay.set_width(this.get_width());
	this._runtimeDisplay.set_x(this.get_width());
	this._runtimeDisplay.set_y(-2);
	this._runtimeDisplay.multiline = false;
	this._runtimeDisplay.set_wordWrap(false);
	this._runtimeDisplay.selectable = false;
	var dtf = new flash.text.TextFormat(openfl.Assets.getFont(org.flixel.FlxAssets.debuggerFont).fontName,12,16777215);
	dtf.align = flash.text.TextFormatAlign.CENTER;
	this._runtimeDisplay.set_defaultTextFormat(dtf);
	this._runtimeDisplay.set_visible(false);
	this.addChild(this._runtimeDisplay);
	this._runtime = 0;
	this.stepRequested = false;
	this.unpress();
	this.checkOver();
	this.updateGUI();
	this.addEventListener(flash.events.Event.ENTER_FRAME,$bind(this,this.init));
};
$hxClasses["org.flixel.system.debug.VCR"] = org.flixel.system.debug.VCR;
org.flixel.system.debug.VCR.__name__ = ["org","flixel","system","debug","VCR"];
org.flixel.system.debug.VCR.__super__ = flash.display.Sprite;
org.flixel.system.debug.VCR.prototype = $extend(flash.display.Sprite.prototype,{
	updateGUI: function() {
		if(this._recordOn.get_visible()) {
			this._open.alpha = this._restart.alpha = this._pause.alpha = this._step.alpha = 0.35;
			this._recordOn.alpha = 1.0;
			return;
		}
		if(this._overOpen && this._open.alpha != 1.0) this._open.alpha = 1.0; else if(!this._overOpen && this._open.alpha != 0.8) this._open.alpha = 0.8;
		if(this._overRecord && this._recordOff.alpha != 1.0) this._recordOff.alpha = this._recordOn.alpha = this._stop.alpha = 1.0; else if(!this._overRecord && this._recordOff.alpha != 0.8) this._recordOff.alpha = this._recordOn.alpha = this._stop.alpha = 0.8;
		if(this._overRestart && this._restart.alpha != 1.0) this._restart.alpha = 1.0; else if(!this._overRestart && this._restart.alpha != 0.8) this._restart.alpha = 0.8;
		if(this._overPause && this._pause.alpha != 1.0) this._pause.alpha = this._play.alpha = 1.0; else if(!this._overPause && this._pause.alpha != 0.8) this._pause.alpha = this._play.alpha = 0.8;
		if(this._overStep && this._step.alpha != 1.0) this._step.alpha = 1.0; else if(!this._overStep && this._step.alpha != 0.8) this._step.alpha = 0.8;
	}
	,unpress: function() {
		this._pressingOpen = false;
		this._pressingRecord = false;
		this._pressingRestart = false;
		this._pressingPause = false;
		this._pressingStep = false;
	}
	,checkOver: function() {
		this._overOpen = this._overRecord = this._overRestart = this._overPause = this._overStep = false;
		if(this.get_mouseX() < 0 || this.get_mouseX() > this.get_width() || this.get_mouseY() < 0 || this.get_mouseY() > 15) return false;
		if(this.get_mouseX() >= this._recordOff.get_x() && this.get_mouseX() <= this._recordOff.get_x() + this._recordOff.get_width()) this._overRecord = true;
		if(!this._recordOn.get_visible() && !this._overRecord) {
			if(this.get_mouseX() >= this._open.get_x() && this.get_mouseX() <= this._open.get_x() + this._open.get_width()) this._overOpen = true; else if(this.get_mouseX() >= this._restart.get_x() && this.get_mouseX() <= this._restart.get_x() + this._restart.get_width()) this._overRestart = true; else if(this.get_mouseX() >= this._pause.get_x() && this.get_mouseX() <= this._pause.get_x() + this._pause.get_width()) this._overPause = true; else if(this.get_mouseX() >= this._step.get_x() && this.get_mouseX() <= this._step.get_x() + this._step.get_width()) this._overStep = true;
		}
		return true;
	}
	,onMouseUp: function(E) {
		if(this._overOpen && this._pressingOpen) this.onOpen(); else if(this._overRecord && this._pressingRecord) {
			if(this._stop.get_visible()) this.onStop(); else if(this._recordOn.get_visible()) this.stopRecording(); else this.onRecord(!E.altKey);
		} else if(this._overRestart && this._pressingRestart) this.onRestart(!E.altKey); else if(this._overPause && this._pressingPause) {
			if(this._play.get_visible()) this.onPlay(); else this.onPause();
		} else if(this._overStep && this._pressingStep) this.onStep();
		this.unpress();
		this.checkOver();
		this.updateGUI();
	}
	,onMouseDown: function(E) {
		this.unpress();
		if(this._overOpen) this._pressingOpen = true;
		if(this._overRecord) this._pressingRecord = true;
		if(this._overRestart) this._pressingRestart = true;
		if(this._overPause) this._pressingPause = true;
		if(this._overStep) this._pressingStep = true;
	}
	,onMouseMove: function(E) {
		if(!this.checkOver()) this.unpress();
		this.updateGUI();
	}
	,init: function(E) {
		if(this.get_stage() == null) return;
		this.removeEventListener(flash.events.Event.ENTER_FRAME,$bind(this,this.init));
		this.parent.addEventListener(flash.events.MouseEvent.MOUSE_MOVE,$bind(this,this.onMouseMove));
		this.parent.addEventListener(flash.events.MouseEvent.MOUSE_DOWN,$bind(this,this.onMouseDown));
		this.parent.addEventListener(flash.events.MouseEvent.MOUSE_UP,$bind(this,this.onMouseUp));
	}
	,onStep: function() {
		if(!this.paused) this.onPause();
		this.stepRequested = true;
	}
	,onPlay: function() {
		if(!org.flixel.FlxG.mouse.useSystemCursor) flash.ui.Mouse.hide();
		this.paused = false;
		this._play.set_visible(false);
		this._pause.set_visible(true);
	}
	,onPause: function() {
		if(!org.flixel.FlxG.mouse.useSystemCursor) flash.ui.Mouse.show();
		this.paused = true;
		this._pause.set_visible(false);
		this._play.set_visible(true);
	}
	,onRestart: function(StandardMode) {
		if(StandardMode == null) StandardMode = false;
		org.flixel.FlxG.reloadReplay(StandardMode);
	}
	,onStop: function() {
		org.flixel.FlxG.stopReplay();
	}
	,onSaveError: function(E) {
	}
	,onSaveCancel: function(E) {
	}
	,onSaveComplete: function(E) {
	}
	,stopRecording: function() {
		var data = org.flixel.FlxG.stopRecording();
		if(data != null && data.length > 0) {
		}
	}
	,onRecord: function(StandardMode) {
		if(StandardMode == null) StandardMode = false;
		if(this._play.get_visible()) this.onPlay();
		org.flixel.FlxG.recordReplay(StandardMode);
	}
	,onOpenError: function(E) {
	}
	,onOpenCancel: function(E) {
	}
	,onOpenComplete: function(E) {
	}
	,onOpenSelect: function(E) {
	}
	,onOpen: function() {
	}
	,updateRuntime: function(Time) {
		this._runtime += Time;
		this._runtimeDisplay.set_text(org.flixel.util.FlxString.formatTime(this._runtime / 1000 | 0,true));
		if(!this._runtimeDisplay.get_visible()) this._runtimeDisplay.set_visible(true);
	}
	,playing: function() {
		this._recordOff.set_visible(false);
		this._recordOn.set_visible(false);
		this._stop.set_visible(true);
	}
	,stopped: function() {
		this._stop.set_visible(false);
		this._recordOn.set_visible(false);
		this._recordOff.set_visible(true);
	}
	,recording: function() {
		this._stop.set_visible(false);
		this._recordOff.set_visible(false);
		this._recordOn.set_visible(true);
	}
	,destroy: function() {
		if(this._open != null) this.removeChild(this._open);
		this._open = null;
		if(this._recordOff != null) this.removeChild(this._recordOff);
		this._recordOff = null;
		if(this._recordOn != null) this.removeChild(this._recordOn);
		this._recordOn = null;
		if(this._stop != null) this.removeChild(this._stop);
		this._stop = null;
		if(this._flixel != null) this.removeChild(this._flixel);
		this._flixel = null;
		if(this._restart != null) this.removeChild(this._restart);
		this._restart = null;
		if(this._pause != null) this.removeChild(this._pause);
		this._pause = null;
		if(this._play != null) this.removeChild(this._play);
		this._play = null;
		if(this._step != null) this.removeChild(this._step);
		this._step = null;
		if(this.parent != null) {
			this.parent.removeEventListener(flash.events.MouseEvent.MOUSE_MOVE,$bind(this,this.onMouseMove));
			this.parent.removeEventListener(flash.events.MouseEvent.MOUSE_DOWN,$bind(this,this.onMouseDown));
			this.parent.removeEventListener(flash.events.MouseEvent.MOUSE_UP,$bind(this,this.onMouseUp));
		}
	}
	,__class__: org.flixel.system.debug.VCR
});
org.flixel.system.debug.Vis = function() {
	flash.display.Sprite.call(this);
	var spacing = 7;
	this._bounds = new flash.display.Bitmap(org.flixel.FlxAssets.getBitmapData(org.flixel.FlxAssets.imgBounds));
	this.addChild(this._bounds);
	this.unpress();
	this.checkOver();
	this.updateGUI();
	this.addEventListener(flash.events.Event.ENTER_FRAME,$bind(this,this.init));
};
$hxClasses["org.flixel.system.debug.Vis"] = org.flixel.system.debug.Vis;
org.flixel.system.debug.Vis.__name__ = ["org","flixel","system","debug","Vis"];
org.flixel.system.debug.Vis.__super__ = flash.display.Sprite;
org.flixel.system.debug.Vis.prototype = $extend(flash.display.Sprite.prototype,{
	updateGUI: function() {
		if(org.flixel.FlxG.visualDebug) {
			if(this._overBounds && this._bounds.alpha != 1.0) this._bounds.alpha = 1.0; else if(!this._overBounds && this._bounds.alpha != 0.9) this._bounds.alpha = 0.9;
		} else if(this._overBounds && this._bounds.alpha != 0.6) this._bounds.alpha = 0.6; else if(!this._overBounds && this._bounds.alpha != 0.5) this._bounds.alpha = 0.5;
	}
	,unpress: function() {
		this._pressingBounds = false;
	}
	,checkOver: function() {
		this._overBounds = false;
		if(this.get_mouseX() < 0 || this.get_mouseX() > this.get_width() || this.get_mouseY() < 0 || this.get_mouseY() > this.get_height()) return false;
		if(this.get_mouseX() > this._bounds.get_x() || this.get_mouseX() < this._bounds.get_x() + this._bounds.get_width()) this._overBounds = true;
		return true;
	}
	,onMouseUp: function(E) {
		if(this._overBounds && this._pressingBounds) this.onBounds();
		this.unpress();
		this.checkOver();
		this.updateGUI();
	}
	,onMouseDown: function(E) {
		this.unpress();
		if(this._overBounds) this._pressingBounds = true;
	}
	,onMouseMove: function(E) {
		if(!this.checkOver()) this.unpress();
		this.updateGUI();
	}
	,init: function(E) {
		if(this.get_stage() == null) return;
		this.removeEventListener(flash.events.Event.ENTER_FRAME,$bind(this,this.init));
		this.parent.addEventListener(flash.events.MouseEvent.MOUSE_MOVE,$bind(this,this.onMouseMove));
		this.parent.addEventListener(flash.events.MouseEvent.MOUSE_DOWN,$bind(this,this.onMouseDown));
		this.parent.addEventListener(flash.events.MouseEvent.MOUSE_UP,$bind(this,this.onMouseUp));
	}
	,onBounds: function() {
		org.flixel.FlxG.visualDebug = !org.flixel.FlxG.visualDebug;
	}
	,destroy: function() {
		if(this._bounds != null) this.removeChild(this._bounds);
		this._bounds = null;
		if(this.parent != null) {
			this.parent.removeEventListener(flash.events.MouseEvent.MOUSE_MOVE,$bind(this,this.onMouseMove));
			this.parent.removeEventListener(flash.events.MouseEvent.MOUSE_DOWN,$bind(this,this.onMouseDown));
			this.parent.removeEventListener(flash.events.MouseEvent.MOUSE_UP,$bind(this,this.onMouseUp));
		}
	}
	,__class__: org.flixel.system.debug.Vis
});
org.flixel.system.debug.Watch = function(Title,Width,Height,Resizable,Bounds,BGColor,TopColor) {
	if(TopColor == null) TopColor = 2130706432;
	if(BGColor == null) BGColor = 2139062143;
	if(Resizable == null) Resizable = true;
	org.flixel.system.FlxWindow.call(this,Title,Width,Height,Resizable,Bounds,BGColor,TopColor);
	this._names = new flash.display.Sprite();
	this._names.set_x(2);
	this._names.set_y(15);
	this.addChild(this._names);
	this._values = new flash.display.Sprite();
	this._values.set_x(2);
	this._values.set_y(15);
	this.addChild(this._values);
	this._watching = new Array();
	this._quickWatchList = new haxe.ds.StringMap();
	this.editing = false;
	this.removeAll();
};
$hxClasses["org.flixel.system.debug.Watch"] = org.flixel.system.debug.Watch;
org.flixel.system.debug.Watch.__name__ = ["org","flixel","system","debug","Watch"];
org.flixel.system.debug.Watch.__super__ = org.flixel.system.FlxWindow;
org.flixel.system.debug.Watch.prototype = $extend(org.flixel.system.FlxWindow.prototype,{
	updateSize: function() {
		if((this._height | 0) < this._watching.length * 15 + 17) this._height = this._watching.length * 15 + 17;
		org.flixel.system.FlxWindow.prototype.updateSize.call(this);
		this._values.set_x(this._width / 2 + 2);
		var i = 0;
		var l = this._watching.length;
		while(i < l) this._watching[i++].updateWidth(this._width / 2,this._width / 2 - 10);
	}
	,submit: function() {
		var i = 0;
		var l = this._watching.length;
		var watchEntry;
		while(i < l) {
			watchEntry = this._watching[i++];
			if(watchEntry.editing) watchEntry.submit();
		}
		this.editing = false;
	}
	,update: function() {
		this.editing = false;
		var i = 0;
		var l = this._watching.length;
		while(i < l) if(!this._watching[i++].updateValue()) this.editing = true;
	}
	,removeAll: function() {
		var watchEntry;
		var i = 0;
		var l = this._watching.length;
		while(i < l) {
			watchEntry = this._watching.pop();
			this._names.removeChild(watchEntry.nameDisplay);
			this._values.removeChild(watchEntry.valueDisplay);
			watchEntry.destroy();
			i++;
		}
		this._watching = [];
	}
	,removeEntry: function(Entry,Index) {
		this._watching[Index] = this._watching[this._watching.length - 1];
		this._watching.pop();
		this._names.removeChild(Entry.nameDisplay);
		this._values.removeChild(Entry.valueDisplay);
		Entry.destroy();
		var i = 0;
		var l = this._watching.length;
		while(i < l) {
			this._watching[i].setY(i * 15);
			i++;
		}
	}
	,remove: function(AnyObject,VariableName,QuickWatchName) {
		if(AnyObject == null && VariableName == null && QuickWatchName != null) {
			var quickWatch = this._quickWatchList.get(QuickWatchName);
			if(quickWatch != null) this.removeEntry(quickWatch,org.flixel.util.FlxArray.indexOf(this._watching,quickWatch,null));
			this._quickWatchList.remove(QuickWatchName);
			return;
		}
		var watchEntry;
		var i = this._watching.length - 1;
		while(i >= 0) {
			watchEntry = this._watching[i];
			if(watchEntry.object == AnyObject && (VariableName == null || watchEntry.field == VariableName)) this.removeEntry(watchEntry,i);
			i--;
		}
		watchEntry = null;
	}
	,updateQuickWatch: function(Name,NewValue) {
		if(this._quickWatchList.get(Name) == null) {
			var quickWatch = new org.flixel.system.debug.WatchEntry(this._watching.length * 15,this._width / 2,this._width / 2 - 10,null,null,Name);
			this._names.addChild(quickWatch.nameDisplay);
			this._values.addChild(quickWatch.valueDisplay);
			this._watching.push(quickWatch);
			this._quickWatchList.set(Name,quickWatch);
		} else {
			var quickWatch = this._quickWatchList.get(Name);
			if(quickWatch != null) {
				var text = Std.string(NewValue);
				if(js.Boot.__instanceof(NewValue,haxe.ds.StringMap)) text = org.flixel.util.FlxString.formatStringMap(NewValue); else if(js.Boot.__instanceof(NewValue,org.flixel.util.FlxPoint)) text = org.flixel.util.FlxString.formatFlxPoint(NewValue,org.flixel.system.FlxDebugger.pointPrecision);
				quickWatch.valueDisplay.set_text(text);
			}
		}
	}
	,add: function(AnyObject,VariableName,DisplayName) {
		var watchEntry;
		var i = 0;
		var l = this._watching.length;
		while(i < l) {
			watchEntry = this._watching[i++];
			if(watchEntry.object == AnyObject && watchEntry.field == VariableName) return;
		}
		watchEntry = new org.flixel.system.debug.WatchEntry(this._watching.length * 15,this._width / 2,this._width / 2 - 10,AnyObject,VariableName,DisplayName);
		if(watchEntry.field == null) {
			watchEntry.destroy();
			watchEntry = null;
			return;
		}
		this._names.addChild(watchEntry.nameDisplay);
		this._values.addChild(watchEntry.valueDisplay);
		this._watching.push(watchEntry);
	}
	,destroy: function() {
		if(this._names != null) this.removeChild(this._names);
		this._names = null;
		if(this._values != null) this.removeChild(this._values);
		this._values = null;
		if(this._watching != null) {
			var i = 0;
			var l = this._watching.length;
			while(i < l) this._watching[i++].destroy();
			this._watching = null;
		}
		this._quickWatchList = null;
		org.flixel.system.FlxWindow.prototype.destroy.call(this);
	}
	,__class__: org.flixel.system.debug.Watch
});
org.flixel.system.debug.WatchEntry = function(Y,NameWidth,ValueWidth,Obj,Field,Custom) {
	this.quickWatch = false;
	this.editing = false;
	if(Obj == null && Field == null && Custom != null) this.quickWatch = true;
	this.custom = Custom;
	if(!this.quickWatch) {
		this.object = Obj;
		this.field = Field;
		var tempArr = this.field.split(".");
		var l = tempArr.length;
		var tempObj = this.object;
		var tempVarName = "";
		var _g = 0;
		while(_g < l) {
			var i = _g++;
			tempVarName = tempArr[i];
			try {
				Reflect.getProperty(tempObj,tempVarName);
			} catch( e ) {
				org.flixel.FlxG.error("Watch: " + Std.string(tempObj) + " does not have a field '" + tempVarName + "'");
				tempVarName = null;
				break;
			}
			if(i < l - 1) tempObj = Reflect.getProperty(tempObj,tempVarName);
		}
		this.object = tempObj;
		this.field = tempVarName;
	}
	var fontName = openfl.Assets.getFont(org.flixel.FlxAssets.debuggerFont).fontName;
	var color = 16777215;
	if(this.quickWatch) color = 32768;
	this._whiteText = new flash.text.TextFormat(fontName,12,color);
	this._blackText = new flash.text.TextFormat(fontName,12,0);
	this.nameDisplay = new flash.text.TextField();
	this.nameDisplay.set_y(Y);
	this.nameDisplay.multiline = false;
	this.nameDisplay.selectable = true;
	this.nameDisplay.set_defaultTextFormat(this._whiteText);
	this.valueDisplay = new flash.text.TextField();
	this.valueDisplay.set_y(Y);
	this.valueDisplay.set_height(20);
	this.valueDisplay.multiline = false;
	this.valueDisplay.selectable = true;
	this.valueDisplay.doubleClickEnabled = true;
	if(!this.quickWatch) {
		this.valueDisplay.addEventListener(flash.events.KeyboardEvent.KEY_UP,$bind(this,this.onKeyUp));
		this.valueDisplay.addEventListener(flash.events.MouseEvent.MOUSE_UP,$bind(this,this.onMouseUp));
	}
	this.valueDisplay.set_background(false);
	this.valueDisplay.set_backgroundColor(16777215);
	this.valueDisplay.set_defaultTextFormat(this._whiteText);
	this.updateWidth(NameWidth,ValueWidth);
};
$hxClasses["org.flixel.system.debug.WatchEntry"] = org.flixel.system.debug.WatchEntry;
org.flixel.system.debug.WatchEntry.__name__ = ["org","flixel","system","debug","WatchEntry"];
org.flixel.system.debug.WatchEntry.prototype = {
	doneEditing: function() {
		this.valueDisplay.set_type(flash.text.TextFieldType.DYNAMIC);
		this.valueDisplay.setTextFormat(this._whiteText);
		this.valueDisplay.set_defaultTextFormat(this._whiteText);
		this.valueDisplay.set_background(false);
		this.editing = false;
	}
	,submit: function() {
		var property = Reflect.getProperty(this.object,this.field);
		if(js.Boot.__instanceof(property,org.flixel.util.FlxPoint)) {
			var xString = this.valueDisplay.get_text().split(" |")[0];
			xString = xString.substring(3,xString.length);
			var xValue = Std.parseFloat(xString);
			var yString = this.valueDisplay.get_text().split("| ")[1];
			yString = yString.substring(3,yString.length);
			var yValue = Std.parseFloat(yString);
			if(!Math.isNaN(xValue)) property.x = xValue;
			if(!Math.isNaN(yValue)) property.y = yValue;
		} else Reflect.setProperty(this.object,this.field,this.valueDisplay.get_text());
		this.doneEditing();
	}
	,cancel: function() {
		this.valueDisplay.set_text(this.oldValue.toString());
		this.doneEditing();
	}
	,onKeyUp: function(FlashEvent) {
		if(FlashEvent.keyCode == 13 || FlashEvent.keyCode == 9 || FlashEvent.keyCode == 27) {
			if(FlashEvent.keyCode == 27) this.cancel(); else this.submit();
		}
	}
	,onMouseUp: function(FlashEvent) {
		this.editing = true;
		this.oldValue = Reflect.getProperty(this.object,this.field);
		this.valueDisplay.set_type(flash.text.TextFieldType.INPUT);
		this.valueDisplay.setTextFormat(this._blackText);
		this.valueDisplay.set_background(true);
	}
	,updateValue: function() {
		if(this.editing || this.quickWatch) return false;
		var property = Reflect.getProperty(this.object,this.field);
		if(js.Boot.__instanceof(property,org.flixel.util.FlxPoint)) this.valueDisplay.set_text(org.flixel.util.FlxString.formatFlxPoint(property,org.flixel.system.FlxDebugger.pointPrecision)); else this.valueDisplay.set_text(Std.string(property));
		return true;
	}
	,updateWidth: function(NameWidth,ValueWidth) {
		this.nameDisplay.set_width(NameWidth);
		this.valueDisplay.set_width(ValueWidth);
		if(this.custom != null) this.nameDisplay.set_text(this.custom); else if(this.field != null) {
			this.nameDisplay.set_text("");
			if(NameWidth > 120) this.nameDisplay.appendText((function($this) {
				var $r;
				var s = Type.getClassName(Type.getClass($this.object));
				if(s != null) {
					s = StringTools.replace(s,"::",".");
					if(NameWidth < 240) s = HxOverrides.substr(s,s.lastIndexOf(".") + 1,null);
				}
				$r = s;
				return $r;
			}(this)) + ".");
			this.nameDisplay.appendText(this.field);
		}
	}
	,setY: function(Y) {
		this.nameDisplay.set_y(Y);
		this.valueDisplay.set_y(Y);
	}
	,destroy: function() {
		this.object = null;
		this.oldValue = null;
		this.nameDisplay = null;
		this.field = null;
		this.custom = null;
		if(this.valueDisplay != null) {
			this.valueDisplay.removeEventListener(flash.events.MouseEvent.MOUSE_UP,$bind(this,this.onMouseUp));
			this.valueDisplay.removeEventListener(flash.events.KeyboardEvent.KEY_UP,$bind(this,this.onKeyUp));
			this.valueDisplay = null;
		}
	}
	,__class__: org.flixel.system.debug.WatchEntry
}
org.flixel.system.input = {}
org.flixel.system.input.FlxInputStates = function() {
	this._total = 256;
	this._keyLookup = new haxe.ds.StringMap();
	this._keyBools = new haxe.ds.StringMap();
	this._keyMap = new Array();
	org.flixel.util.FlxArray.setLength(this._keyMap,this._total);
};
$hxClasses["org.flixel.system.input.FlxInputStates"] = org.flixel.system.input.FlxInputStates;
org.flixel.system.input.FlxInputStates.__name__ = ["org","flixel","system","input","FlxInputStates"];
org.flixel.system.input.FlxInputStates.prototype = {
	destroy: function() {
		this._keyMap = null;
		this._keyBools = null;
		this._keyLookup = null;
	}
	,addKey: function(KeyName,KeyCode) {
		this._keyLookup.set(KeyName,KeyCode);
		this._keyMap[KeyCode] = new org.flixel.system.input.FlxMapObject(KeyName,0,0);
	}
	,getIsDown: function() {
		var keysdown = new Array();
		var i = 0;
		while(i < this._total) {
			var o = this._keyMap[i++];
			if(o != null && o.current > 0) keysdown.push(o);
		}
		return keysdown;
	}
	,any: function() {
		var i = 0;
		while(i < this._total) {
			var o = this._keyMap[i++];
			if(o != null && o.current > 0) return true;
		}
		return false;
	}
	,getKeyCode: function(KeyName) {
		return this._keyLookup.get(KeyName);
	}
	,playback: function(Record) {
		var i = 0;
		var l = Record.length;
		var o;
		var o2;
		while(i < l) {
			o = Record[i++];
			o2 = this._keyMap[o.code];
			o2.current = o.value;
			if(o.value > 0) this._keyBools.set(o2.name,true);
		}
	}
	,record: function() {
		var data = null;
		var i = 0;
		while(i < this._total) {
			var o = this._keyMap[i++];
			if(o == null || o.current == 0) continue;
			if(data == null) data = new Array();
			data.push(new org.flixel.system.replay.CodeValuePair(i - 1,o.current));
		}
		return data;
	}
	,justReleased: function(Key) {
		if(this._keyMap[this._keyLookup.get(Key)] != null) return this._keyMap[this._keyLookup.get(Key)].current == -1; else {
			org.flixel.FlxG.error("Invalid Key: `" + Key + "`. Note that function and numpad keys can only be used in flash and js.");
			return false;
		}
	}
	,justPressed: function(Key) {
		if(this._keyMap[this._keyLookup.get(Key)] != null) return this._keyMap[this._keyLookup.get(Key)].current == 2; else {
			org.flixel.FlxG.error("Invalid Key: `" + Key + "`. Note that function and numpad keys can only be used in flash and js.");
			return false;
		}
	}
	,pressed: function(Key) {
		if(this._keyBools.exists(Key)) return this._keyBools.get(Key);
		org.flixel.FlxG.error("Invalid Key: `" + Key + "`. Note that function and numpad keys can only be used in flash and js.");
		return false;
	}
	,reset: function() {
		var _g1 = 0, _g = this._total;
		while(_g1 < _g) {
			var i = _g1++;
			if(this._keyMap[i] == null) continue;
			var o = this._keyMap[i];
			this._keyBools.set(o.name,false);
			o.current = 0;
			o.last = 0;
		}
	}
	,update: function() {
		var i = 0;
		while(i < this._total) {
			var o = this._keyMap[i++];
			if(o == null) continue;
			if(o.last == -1 && o.current == -1) o.current = 0; else if(o.last == 2 && o.current == 2) o.current = 1;
			o.last = o.current;
		}
	}
	,__class__: org.flixel.system.input.FlxInputStates
}
org.flixel.system.input.FlxInputs = function() {
};
$hxClasses["org.flixel.system.input.FlxInputs"] = org.flixel.system.input.FlxInputs;
org.flixel.system.input.FlxInputs.__name__ = ["org","flixel","system","input","FlxInputs"];
org.flixel.system.input.FlxInputs.init = function() {
	org.flixel.system.input.FlxInputs.inputs = null;
	org.flixel.system.input.FlxInputs.inputs = new Array();
	org.flixel.system.input.FlxInputs.initKeyboard();
	org.flixel.system.input.FlxInputs.initMouse();
	org.flixel.system.input.FlxInputs.initTouch();
}
org.flixel.system.input.FlxInputs.addInput = function(input) {
	var l = org.flixel.system.input.FlxInputs.inputs.length;
	var _g = 0;
	while(_g < l) {
		var i = _g++;
		if(org.flixel.system.input.FlxInputs.inputs[i].toString() == org.flixel.system.input.FlxInputs.inputs.toString()) return input;
	}
	org.flixel.system.input.FlxInputs.inputs.push(input);
	return input;
}
org.flixel.system.input.FlxInputs.updateInputs = function() {
	var i = 0;
	var l = org.flixel.system.input.FlxInputs.inputs.length;
	while(i < l) {
		var input = org.flixel.system.input.FlxInputs.inputs[i++];
		input.update();
	}
}
org.flixel.system.input.FlxInputs.onFocusLost = function() {
	var i = 0;
	var l = org.flixel.system.input.FlxInputs.inputs.length;
	while(i < l) {
		var input = org.flixel.system.input.FlxInputs.inputs[i++];
		input.onFocusLost();
	}
}
org.flixel.system.input.FlxInputs.onFocus = function() {
	var i = 0;
	var l = org.flixel.system.input.FlxInputs.inputs.length;
	while(i < l) {
		var input = org.flixel.system.input.FlxInputs.inputs[i++];
		input.onFocus();
	}
}
org.flixel.system.input.FlxInputs.resetInputs = function() {
	var i = 0;
	var l = org.flixel.system.input.FlxInputs.inputs.length;
	while(i < l) {
		var input = org.flixel.system.input.FlxInputs.inputs[i++];
		input.reset();
	}
}
org.flixel.system.input.FlxInputs.initKeyboard = function() {
	var key = new org.flixel.system.input.FlxKeyboard();
	org.flixel.FlxG.keys = key;
	org.flixel.system.input.FlxInputs.inputs.push(key);
}
org.flixel.system.input.FlxInputs.initMouse = function() {
	var mouse = new org.flixel.system.input.FlxMouse(org.flixel.FlxG._game._inputContainer);
	org.flixel.FlxG.mouse = mouse;
	org.flixel.system.input.FlxInputs.inputs.push(mouse);
}
org.flixel.system.input.FlxInputs.initTouch = function() {
	var touch = new org.flixel.system.input.FlxTouchManager();
	org.flixel.FlxG.touchManager = touch;
	org.flixel.system.input.FlxInputs.inputs.push(touch);
}
org.flixel.system.input.FlxInputs.prototype = {
	destroy: function() {
		var i = 0;
		var l = org.flixel.system.input.FlxInputs.inputs.length;
		while(i < l) {
			var input = org.flixel.system.input.FlxInputs.inputs[i++];
			input.destroy();
			input = null;
		}
	}
	,__class__: org.flixel.system.input.FlxInputs
}
org.flixel.system.input.IFlxInput = function() { }
$hxClasses["org.flixel.system.input.IFlxInput"] = org.flixel.system.input.IFlxInput;
org.flixel.system.input.IFlxInput.__name__ = ["org","flixel","system","input","IFlxInput"];
org.flixel.system.input.IFlxInput.prototype = {
	__class__: org.flixel.system.input.IFlxInput
}
org.flixel.system.input.FlxKeyboard = function() {
	org.flixel.system.input.FlxInputStates.call(this);
	var i;
	i = 65;
	while(i <= 90) {
		this.addKey(String.fromCharCode(i),i);
		i++;
	}
	i = 48;
	this.addKey("ZERO",i++);
	this.addKey("ONE",i++);
	this.addKey("TWO",i++);
	this.addKey("THREE",i++);
	this.addKey("FOUR",i++);
	this.addKey("FIVE",i++);
	this.addKey("SIX",i++);
	this.addKey("SEVEN",i++);
	this.addKey("EIGHT",i++);
	this.addKey("NINE",i++);
	i = 96;
	this.addKey("NUMPADZERO",i++);
	this.addKey("NUMPADONE",i++);
	this.addKey("NUMPADTWO",i++);
	this.addKey("NUMPADTHREE",i++);
	this.addKey("NUMPADFOUR",i++);
	this.addKey("NUMPADFIVE",i++);
	this.addKey("NUMPADSIX",i++);
	this.addKey("NUMPADSEVEN",i++);
	this.addKey("NUMPADEIGHT",i++);
	this.addKey("NUMPADNINE",i++);
	this.addKey("PAGEUP",33);
	this.addKey("PAGEDOWN",34);
	this.addKey("HOME",36);
	this.addKey("END",35);
	this.addKey("INSERT",45);
	i = 1;
	while(i <= 12) this.addKey("F" + i,111 + i++);
	this.addKey("ESCAPE",27);
	this.addKey("MINUS",189);
	this.addKey("PLUS",187);
	this.addKey("DELETE",46);
	this.addKey("BACKSPACE",8);
	this.addKey("LBRACKET",219);
	this.addKey("RBRACKET",221);
	this.addKey("BACKSLASH",220);
	this.addKey("CAPSLOCK",20);
	this.addKey("SEMICOLON",186);
	this.addKey("QUOTE",222);
	this.addKey("ENTER",13);
	this.addKey("SHIFT",16);
	this.addKey("COMMA",188);
	this.addKey("PERIOD",190);
	this.addKey("SLASH",191);
	this.addKey("NUMPADSLASH",191);
	this.addKey("CONTROL",17);
	this.addKey("ALT",18);
	this.addKey("SPACE",32);
	this.addKey("UP",38);
	this.addKey("DOWN",40);
	this.addKey("LEFT",37);
	this.addKey("RIGHT",39);
	this.addKey("TAB",9);
	this.addKey("NUMPADMINUS",109);
	this.addKey("NUMPADPLUS",107);
	this.addKey("NUMPADPERIOD",110);
	flash.Lib.get_current().get_stage().addEventListener(flash.events.KeyboardEvent.KEY_DOWN,$bind(this,this.onKeyDown));
	flash.Lib.get_current().get_stage().addEventListener(flash.events.KeyboardEvent.KEY_UP,$bind(this,this.onKeyUp));
};
$hxClasses["org.flixel.system.input.FlxKeyboard"] = org.flixel.system.input.FlxKeyboard;
org.flixel.system.input.FlxKeyboard.__name__ = ["org","flixel","system","input","FlxKeyboard"];
org.flixel.system.input.FlxKeyboard.__interfaces__ = [org.flixel.system.input.IFlxInput];
org.flixel.system.input.FlxKeyboard.__super__ = org.flixel.system.input.FlxInputStates;
org.flixel.system.input.FlxKeyboard.prototype = $extend(org.flixel.system.input.FlxInputStates.prototype,{
	toString: function() {
		return "Keyboard";
	}
	,onFocusLost: function() {
		this.reset();
	}
	,onFocus: function() {
	}
	,onKeyDown: function(FlashEvent) {
		if(org.flixel.FlxG._game._debuggerUp && org.flixel.FlxG._game._debugger.watch.editing) return;
		if(org.flixel.FlxG._game._replaying && org.flixel.FlxG._game._replayCancelKeys != null && org.flixel.FlxG._game._debugger == null && FlashEvent.keyCode != 192 && FlashEvent.keyCode != 220) {
			var cancel = false;
			var replayCancelKey;
			var i = 0;
			var l = org.flixel.FlxG._game._replayCancelKeys.length;
			while(i < l) {
				replayCancelKey = org.flixel.FlxG._game._replayCancelKeys[i++];
				if(replayCancelKey == "ANY" || this.getKeyCode(replayCancelKey) == (FlashEvent.keyCode | 0)) {
					if(org.flixel.FlxG._game._replayCallback != null) {
						org.flixel.FlxG._game._replayCallback();
						org.flixel.FlxG._game._replayCallback = null;
					} else org.flixel.FlxG.stopReplay();
					break;
				}
			}
			return;
		}
		var o = this._keyMap[FlashEvent.keyCode];
		if(o == null) return;
		if(o.current > 0) o.current = 1; else o.current = 2;
		this._keyBools.set(o.name,true);
	}
	,onKeyUp: function(FlashEvent) {
		if(org.flixel.FlxG._game._debuggerUp && org.flixel.FlxG._game._debugger.watch.editing) return;
		if(!org.flixel.FlxG.mobile) {
			var c = FlashEvent.keyCode;
			if(org.flixel.FlxG._game._debugger != null && (org.flixel.FlxG.keyDebugger != null && Lambda.indexOf(org.flixel.FlxG.keyDebugger,c) != -1)) {
				org.flixel.FlxG._game._debugger.set_visible(!org.flixel.FlxG._game._debugger.get_visible());
				org.flixel.FlxG._game._debuggerUp = org.flixel.FlxG._game._debugger.get_visible();
				return;
			}
			if(!org.flixel.FlxG._game.tempDisableSoundHotKeys) {
				var code = String.fromCharCode(FlashEvent.charCode);
				if(org.flixel.FlxG.keyMute != null && Lambda.indexOf(org.flixel.FlxG.keyMute,c) != -1) {
					org.flixel.FlxG.mute = !org.flixel.FlxG.mute;
					if(org.flixel.FlxG.volumeHandler != null) org.flixel.FlxG.volumeHandler(org.flixel.FlxG.mute?0:org.flixel.FlxG.volume);
					org.flixel.FlxG._game.showSoundTray();
					return;
				} else if(org.flixel.FlxG.keyVolumeDown != null && Lambda.indexOf(org.flixel.FlxG.keyVolumeDown,c) != -1) {
					org.flixel.FlxG.mute = false;
					org.flixel.FlxG.set_volume(org.flixel.FlxG.volume - 0.1);
					org.flixel.FlxG._game.showSoundTray();
					return;
				} else if(org.flixel.FlxG.keyVolumeUp != null && Lambda.indexOf(org.flixel.FlxG.keyVolumeUp,c) != -1) {
					org.flixel.FlxG.mute = false;
					org.flixel.FlxG.set_volume(org.flixel.FlxG.volume + 0.1);
					org.flixel.FlxG._game.showSoundTray();
					return;
				} else {
				}
			}
		}
		if(org.flixel.FlxG._game._replaying) return;
		var object = this._keyMap[FlashEvent.keyCode];
		if(object == null) return;
		if(object.current > 0) object.current = -1; else object.current = 0;
		this._keyBools.set(object.name,false);
	}
	,get_RIGHT: function() {
		return this.pressed("RIGHT");
	}
	,get_LEFT: function() {
		return this.pressed("LEFT");
	}
	,get_DOWN: function() {
		return this.pressed("DOWN");
	}
	,get_UP: function() {
		return this.pressed("UP");
	}
	,get_SPACE: function() {
		return this.pressed("SPACE");
	}
	,get_ALT: function() {
		return this.pressed("ALT");
	}
	,get_CONTROL: function() {
		return this.pressed("CONTROL");
	}
	,get_NUMPADSLASH: function() {
		return this.pressed("NUMPADSLASH");
	}
	,get_SLASH: function() {
		return this.pressed("SLASH");
	}
	,get_NUMPADPERIOD: function() {
		return this.pressed("NUMPADPERIOD");
	}
	,get_PERIOD: function() {
		return this.pressed("PERIOD");
	}
	,get_COMMA: function() {
		return this.pressed("COMMA");
	}
	,get_M: function() {
		return this.pressed("M");
	}
	,get_N: function() {
		return this.pressed("N");
	}
	,get_B: function() {
		return this.pressed("B");
	}
	,get_V: function() {
		return this.pressed("V");
	}
	,get_C: function() {
		return this.pressed("C");
	}
	,get_X: function() {
		return this.pressed("X");
	}
	,get_Z: function() {
		return this.pressed("Z");
	}
	,get_SHIFT: function() {
		return this.pressed("SHIFT");
	}
	,get_ENTER: function() {
		return this.pressed("ENTER");
	}
	,get_QUOTE: function() {
		return this.pressed("QUOTE");
	}
	,get_SEMICOLON: function() {
		return this.pressed("SEMICOLON");
	}
	,get_L: function() {
		return this.pressed("L");
	}
	,get_K: function() {
		return this.pressed("K");
	}
	,get_J: function() {
		return this.pressed("J");
	}
	,get_H: function() {
		return this.pressed("H");
	}
	,get_G: function() {
		return this.pressed("G");
	}
	,get_F: function() {
		return this.pressed("F");
	}
	,get_D: function() {
		return this.pressed("D");
	}
	,get_S: function() {
		return this.pressed("S");
	}
	,get_A: function() {
		return this.pressed("A");
	}
	,get_CAPSLOCK: function() {
		return this.pressed("CAPSLOCK");
	}
	,get_BACKSLASH: function() {
		return this.pressed("BACKSLASH");
	}
	,get_RBRACKET: function() {
		return this.pressed("RBRACKET");
	}
	,get_LBRACKET: function() {
		return this.pressed("LBRACKET");
	}
	,get_P: function() {
		return this.pressed("P");
	}
	,get_O: function() {
		return this.pressed("O");
	}
	,get_I: function() {
		return this.pressed("I");
	}
	,get_U: function() {
		return this.pressed("U");
	}
	,get_Y: function() {
		return this.pressed("Y");
	}
	,get_T: function() {
		return this.pressed("T");
	}
	,get_R: function() {
		return this.pressed("R");
	}
	,get_E: function() {
		return this.pressed("E");
	}
	,get_W: function() {
		return this.pressed("W");
	}
	,get_Q: function() {
		return this.pressed("Q");
	}
	,get_TAB: function() {
		return this.pressed("TAB");
	}
	,get_BACKSPACE: function() {
		return this.pressed("BACKSPACE");
	}
	,get_DELETE: function() {
		return this.pressed("DELETE");
	}
	,get_NUMPADPLUS: function() {
		return this.pressed("NUMPADPLUS");
	}
	,get_PLUS: function() {
		return this.pressed("PLUS");
	}
	,get_NUMPADMINUS: function() {
		return this.pressed("NUMPADMINUS");
	}
	,get_MINUS: function() {
		return this.pressed("MINUS");
	}
	,get_INSERT: function() {
		return this.pressed("INSERT");
	}
	,get_END: function() {
		return this.pressed("END");
	}
	,get_HOME: function() {
		return this.pressed("HOME");
	}
	,get_PAGEDOWN: function() {
		return this.pressed("PAGEDOWN");
	}
	,get_PAGEUP: function() {
		return this.pressed("PAGEUP");
	}
	,get_NUMPADZERO: function() {
		return this.pressed("NUMPADZERO");
	}
	,get_NUMPADNINE: function() {
		return this.pressed("NUMPADNINE");
	}
	,get_NUMPADEIGHT: function() {
		return this.pressed("NUMPADEIGHT");
	}
	,get_NUMPADSEVEN: function() {
		return this.pressed("NUMPADSEVEN");
	}
	,get_NUMPADSIX: function() {
		return this.pressed("NUMPADSIX");
	}
	,get_NUMPADFIVE: function() {
		return this.pressed("NUMPADFIVE");
	}
	,get_NUMPADFOUR: function() {
		return this.pressed("NUMPADFOUR");
	}
	,get_NUMPADTHREE: function() {
		return this.pressed("NUMPADTHREE");
	}
	,get_NUMPADTWO: function() {
		return this.pressed("NUMPADTWO");
	}
	,get_NUMPADONE: function() {
		return this.pressed("NUMPADONE");
	}
	,get_ZERO: function() {
		return this.pressed("ZERO");
	}
	,get_NINE: function() {
		return this.pressed("NINE");
	}
	,get_EIGHT: function() {
		return this.pressed("EIGHT");
	}
	,get_SEVEN: function() {
		return this.pressed("SEVEN");
	}
	,get_SIX: function() {
		return this.pressed("SIX");
	}
	,get_FIVE: function() {
		return this.pressed("FIVE");
	}
	,get_FOUR: function() {
		return this.pressed("FOUR");
	}
	,get_THREE: function() {
		return this.pressed("THREE");
	}
	,get_TWO: function() {
		return this.pressed("TWO");
	}
	,get_ONE: function() {
		return this.pressed("ONE");
	}
	,get_F12: function() {
		return this.pressed("F12");
	}
	,get_F11: function() {
		return this.pressed("F11");
	}
	,get_F10: function() {
		return this.pressed("F10");
	}
	,get_F9: function() {
		return this.pressed("F9");
	}
	,get_F8: function() {
		return this.pressed("F8");
	}
	,get_F7: function() {
		return this.pressed("F7");
	}
	,get_F6: function() {
		return this.pressed("F6");
	}
	,get_F5: function() {
		return this.pressed("F5");
	}
	,get_F4: function() {
		return this.pressed("F4");
	}
	,get_F3: function() {
		return this.pressed("F3");
	}
	,get_F2: function() {
		return this.pressed("F2");
	}
	,get_F1: function() {
		return this.pressed("F1");
	}
	,get_ESCAPE: function() {
		return this.pressed("ESCAPE");
	}
	,__class__: org.flixel.system.input.FlxKeyboard
	,__properties__: {get_ESCAPE:"get_ESCAPE",get_F1:"get_F1",get_F2:"get_F2",get_F3:"get_F3",get_F4:"get_F4",get_F5:"get_F5",get_F6:"get_F6",get_F7:"get_F7",get_F8:"get_F8",get_F9:"get_F9",get_F10:"get_F10",get_F11:"get_F11",get_F12:"get_F12",get_ONE:"get_ONE",get_TWO:"get_TWO",get_THREE:"get_THREE",get_FOUR:"get_FOUR",get_FIVE:"get_FIVE",get_SIX:"get_SIX",get_SEVEN:"get_SEVEN",get_EIGHT:"get_EIGHT",get_NINE:"get_NINE",get_ZERO:"get_ZERO",get_NUMPADONE:"get_NUMPADONE",get_NUMPADTWO:"get_NUMPADTWO",get_NUMPADTHREE:"get_NUMPADTHREE",get_NUMPADFOUR:"get_NUMPADFOUR",get_NUMPADFIVE:"get_NUMPADFIVE",get_NUMPADSIX:"get_NUMPADSIX",get_NUMPADSEVEN:"get_NUMPADSEVEN",get_NUMPADEIGHT:"get_NUMPADEIGHT",get_NUMPADNINE:"get_NUMPADNINE",get_NUMPADZERO:"get_NUMPADZERO",get_PAGEUP:"get_PAGEUP",get_PAGEDOWN:"get_PAGEDOWN",get_HOME:"get_HOME",get_END:"get_END",get_INSERT:"get_INSERT",get_MINUS:"get_MINUS",get_NUMPADMINUS:"get_NUMPADMINUS",get_PLUS:"get_PLUS",get_NUMPADPLUS:"get_NUMPADPLUS",get_DELETE:"get_DELETE",get_BACKSPACE:"get_BACKSPACE",get_TAB:"get_TAB",get_Q:"get_Q",get_W:"get_W",get_E:"get_E",get_R:"get_R",get_T:"get_T",get_Y:"get_Y",get_U:"get_U",get_I:"get_I",get_O:"get_O",get_P:"get_P",get_LBRACKET:"get_LBRACKET",get_RBRACKET:"get_RBRACKET",get_BACKSLASH:"get_BACKSLASH",get_CAPSLOCK:"get_CAPSLOCK",get_A:"get_A",get_S:"get_S",get_D:"get_D",get_F:"get_F",get_G:"get_G",get_H:"get_H",get_J:"get_J",get_K:"get_K",get_L:"get_L",get_SEMICOLON:"get_SEMICOLON",get_QUOTE:"get_QUOTE",get_ENTER:"get_ENTER",get_SHIFT:"get_SHIFT",get_Z:"get_Z",get_X:"get_X",get_C:"get_C",get_V:"get_V",get_B:"get_B",get_N:"get_N",get_M:"get_M",get_COMMA:"get_COMMA",get_PERIOD:"get_PERIOD",get_NUMPADPERIOD:"get_NUMPADPERIOD",get_SLASH:"get_SLASH",get_NUMPADSLASH:"get_NUMPADSLASH",get_CONTROL:"get_CONTROL",get_ALT:"get_ALT",get_SPACE:"get_SPACE",get_UP:"get_UP",get_DOWN:"get_DOWN",get_LEFT:"get_LEFT",get_RIGHT:"get_RIGHT"}
});
org.flixel.system.input.FlxMapObject = function(name,current,last) {
	this.name = name;
	this.current = current;
	this.last = last;
};
$hxClasses["org.flixel.system.input.FlxMapObject"] = org.flixel.system.input.FlxMapObject;
org.flixel.system.input.FlxMapObject.__name__ = ["org","flixel","system","input","FlxMapObject"];
org.flixel.system.input.FlxMapObject.prototype = {
	__class__: org.flixel.system.input.FlxMapObject
}
org.flixel.system.input.FlxMouse = function(CursorContainer) {
	org.flixel.util.FlxPoint.call(this);
	this.cursorContainer = CursorContainer;
	this.cursorContainer.mouseChildren = false;
	this.cursorContainer.mouseEnabled = false;
	this._lastX = this.screenX = 0;
	this._lastY = this.screenY = 0;
	this._lastWheel = this.wheel = 0;
	this._current = 0;
	this._last = 0;
	this._cursor = null;
	this._point = new org.flixel.util.FlxPoint();
	this._globalScreenPosition = new org.flixel.util.FlxPoint();
	this.set_useSystemCursor(false);
	flash.Lib.get_current().get_stage().addEventListener(flash.events.MouseEvent.MOUSE_DOWN,$bind(this,this.onMouseDown));
	flash.Lib.get_current().get_stage().addEventListener(flash.events.MouseEvent.MOUSE_UP,$bind(this,this.onMouseUp));
	flash.Lib.get_current().get_stage().addEventListener(flash.events.MouseEvent.MOUSE_WHEEL,$bind(this,this.onMouseWheel));
};
$hxClasses["org.flixel.system.input.FlxMouse"] = org.flixel.system.input.FlxMouse;
org.flixel.system.input.FlxMouse.__name__ = ["org","flixel","system","input","FlxMouse"];
org.flixel.system.input.FlxMouse.__interfaces__ = [org.flixel.system.input.IFlxInput];
org.flixel.system.input.FlxMouse.__super__ = org.flixel.util.FlxPoint;
org.flixel.system.input.FlxMouse.prototype = $extend(org.flixel.util.FlxPoint.prototype,{
	set_useSystemCursor: function(value) {
		this.useSystemCursor = value;
		if(!this.useSystemCursor) flash.ui.Mouse.hide(); else flash.ui.Mouse.show();
		return value;
	}
	,onFocusLost: function() {
		flash.ui.Mouse.show();
	}
	,onFocus: function() {
		if(!org.flixel.FlxG._game._debuggerUp && !this.useSystemCursor) flash.ui.Mouse.hide();
		this.reset();
	}
	,playback: function(Record) {
		this._current = Record.button;
		this.wheel = Record.wheel;
		this._globalScreenPosition.x = Record.x;
		this._globalScreenPosition.y = Record.y;
		this.updateCursor();
	}
	,record: function() {
		if(this._lastX == this._globalScreenPosition.x && this._lastY == this._globalScreenPosition.y && this._current == 0 && this._lastWheel == this.wheel) return null;
		this._lastX = Math.floor(this._globalScreenPosition.x);
		this._lastY = Math.floor(this._globalScreenPosition.y);
		this._lastWheel = this.wheel;
		return new org.flixel.system.replay.MouseRecord(this._lastX,this._lastY,this._current,this._lastWheel);
	}
	,justReleased: function() {
		return this._current == -1 || this._current == -2;
	}
	,justPressed: function() {
		return this._current == 2 || this._current == -2;
	}
	,pressed: function() {
		return this._current > 0;
	}
	,reset: function() {
		this._current = 0;
		this._last = 0;
	}
	,getScreenPosition: function(Camera,point) {
		if(Camera == null) Camera = org.flixel.FlxG.camera;
		if(point == null) point = new org.flixel.util.FlxPoint();
		point.x = (this._globalScreenPosition.x - Camera.x) / Camera.zoom;
		point.y = (this._globalScreenPosition.y - Camera.y) / Camera.zoom;
		return point;
	}
	,getWorldPosition: function(Camera,point) {
		if(Camera == null) Camera = org.flixel.FlxG.camera;
		if(point == null) point = new org.flixel.util.FlxPoint();
		this.getScreenPosition(Camera,this._point);
		point.x = this._point.x + Camera.scroll.x;
		point.y = this._point.y + Camera.scroll.y;
		return point;
	}
	,updateCursor: function() {
		if(this._updateCursorContainer) {
			this.cursorContainer.set_x(this._globalScreenPosition.x);
			this.cursorContainer.set_y(this._globalScreenPosition.y);
		}
		var camera = org.flixel.FlxG.camera;
		this.screenX = Math.floor((this._globalScreenPosition.x - camera.x) / camera.zoom);
		this.screenY = Math.floor((this._globalScreenPosition.y - camera.y) / camera.zoom);
		this.x = this.screenX + camera.scroll.x;
		this.y = this.screenY + camera.scroll.y;
	}
	,update: function() {
		var X = Math.floor(org.flixel.FlxG._game.get_mouseX());
		var Y = Math.floor(org.flixel.FlxG._game.get_mouseY());
		this._globalScreenPosition.x = X;
		this._globalScreenPosition.y = Y;
		this.updateCursor();
		if(this._last == -1 && this._current == -1) this._current = 0; else if(this._last == 2 && this._current == 2) this._current = 1; else if(this._last == -2 && this._current == -2) this._current = 0;
		this._last = this._current;
	}
	,unload: function() {
		if(this._cursor != null) {
			if(this.cursorContainer.get_visible()) this.load(); else {
				this.cursorContainer.removeChild(this._cursor);
				this._cursor = null;
			}
		}
	}
	,load: function(Graphic,Scale,XOffset,YOffset) {
		if(YOffset == null) YOffset = 0;
		if(XOffset == null) XOffset = 0;
		if(Scale == null) Scale = 1;
		if(this._cursor != null) this.cursorContainer.removeChild(this._cursor);
		if(Graphic == null) Graphic = org.flixel.FlxAssets.imgDefaultCursor;
		if(js.Boot.__instanceof(Graphic,Class)) this._cursor = Type.createInstance(Graphic,[]); else if(js.Boot.__instanceof(Graphic,flash.display.BitmapData)) this._cursor = new flash.display.Bitmap(js.Boot.__cast(Graphic , flash.display.BitmapData)); else if(js.Boot.__instanceof(Graphic,String)) this._cursor = new flash.display.Bitmap(org.flixel.FlxAssets.getBitmapData(Graphic)); else this._cursor = new flash.display.Bitmap(org.flixel.FlxAssets.getBitmapData(org.flixel.FlxAssets.imgDefaultCursor));
		this._cursor.set_x(XOffset);
		this._cursor.set_y(YOffset);
		this._cursor.set_scaleX(Scale);
		this._cursor.set_scaleY(Scale);
		this.cursorContainer.addChild(this._cursor);
	}
	,get_visible: function() {
		return this._updateCursorContainer;
	}
	,hide: function() {
		this._updateCursorContainer = false;
		this.cursorContainer.set_visible(false);
	}
	,show: function(Graphic,Scale,XOffset,YOffset) {
		if(YOffset == null) YOffset = 0;
		if(XOffset == null) XOffset = 0;
		if(Scale == null) Scale = 1;
		this._updateCursorContainer = true;
		this.cursorContainer.set_visible(true);
		if(Graphic != null) this.load(Graphic,Scale,XOffset,YOffset); else if(this._cursor == null) this.load();
		if(this.useSystemCursor) flash.ui.Mouse.show();
	}
	,destroy: function() {
		this.cursorContainer = null;
		this._cursor = null;
		this._point = null;
		this._globalScreenPosition = null;
		if(this._cursorBitmapData != null) {
			this._cursorBitmapData.dispose();
			this._cursorBitmapData = null;
		}
	}
	,onMouseWheel: function(FlashEvent) {
		if(org.flixel.FlxG._game._debuggerUp && org.flixel.FlxG._game._debugger.hasMouse || org.flixel.FlxG._game._replaying) return;
		this.wheel = FlashEvent.delta;
	}
	,onMouseUp: function(FlashEvent) {
		if(org.flixel.FlxG._game._debuggerUp && org.flixel.FlxG._game._debugger.hasMouse || org.flixel.FlxG._game._replaying) return;
		if(this._current > 0) this._current = -1; else if(this._current == -2) this._current == -2; else this._current = 0;
	}
	,onMouseDown: function(FlashEvent) {
		if(org.flixel.FlxG._game._debuggerUp) {
			if(org.flixel.FlxG._game._debugger.hasMouse) return;
			if(org.flixel.FlxG._game._debugger.watch.editing) org.flixel.FlxG._game._debugger.watch.submit();
		}
		if(org.flixel.FlxG._game._replaying && org.flixel.FlxG._game._replayCancelKeys != null) {
			var replayCancelKey;
			var i = 0;
			var l = org.flixel.FlxG._game._replayCancelKeys.length;
			while(i < l) {
				replayCancelKey = org.flixel.FlxG._game._replayCancelKeys[i++];
				if(replayCancelKey == "MOUSE" || replayCancelKey == "ANY") {
					if(org.flixel.FlxG._game._replayCallback != null) {
						org.flixel.FlxG._game._replayCallback();
						org.flixel.FlxG._game._replayCallback = null;
					} else org.flixel.FlxG.stopReplay();
					break;
				}
			}
			return;
		}
		if(this._current > 0) this._current = 1; else this._current = 2;
	}
	,__class__: org.flixel.system.input.FlxMouse
	,__properties__: {get_visible:"get_visible",set_useSystemCursor:"set_useSystemCursor"}
});
org.flixel.system.input.FlxTouch = function(X,Y,PointID) {
	if(PointID == null) PointID = 0;
	if(Y == null) Y = 0;
	if(X == null) X = 0;
	org.flixel.util.FlxPoint.call(this);
	this.screenX = 0;
	this.screenY = 0;
	this._current = 0;
	this._last = 0;
	this._point = new org.flixel.util.FlxPoint();
	this._globalScreenPosition = new org.flixel.util.FlxPoint();
	this._flashPoint = new flash.geom.Point();
	this.updateTouchPosition(X,Y);
	this._touchPointID = PointID;
};
$hxClasses["org.flixel.system.input.FlxTouch"] = org.flixel.system.input.FlxTouch;
org.flixel.system.input.FlxTouch.__name__ = ["org","flixel","system","input","FlxTouch"];
org.flixel.system.input.FlxTouch.__super__ = org.flixel.util.FlxPoint;
org.flixel.system.input.FlxTouch.prototype = $extend(org.flixel.util.FlxPoint.prototype,{
	isActive: function() {
		return this._current != 0;
	}
	,justReleased: function() {
		return this._current == -1;
	}
	,justPressed: function() {
		return this._current == 2;
	}
	,pressed: function() {
		return this._current > 0;
	}
	,deactivate: function() {
		this._current = 0;
		this._last = 0;
	}
	,reset: function(X,Y,PointID) {
		this.updateTouchPosition(X,Y);
		this._touchPointID = PointID;
		this._current = 0;
		this._last = 0;
	}
	,overlaps: function(ObjectOrGroup,Camera) {
		if(js.Boot.__instanceof(ObjectOrGroup,org.flixel.FlxTypedGroup)) {
			var i = 0;
			var results = false;
			var basic;
			var grp = ObjectOrGroup;
			var members = grp.members;
			while(i < grp.length) {
				basic = members[i++];
				if(basic != null && basic.exists && this.overlaps(basic,Camera)) {
					results = true;
					break;
				}
			}
			return results;
		}
		return (js.Boot.__cast(ObjectOrGroup , org.flixel.FlxObject)).overlapsPoint(this,false,Camera);
	}
	,getScreenPosition: function(Camera,point) {
		if(Camera == null) Camera = org.flixel.FlxG.camera;
		if(point == null) point = new org.flixel.util.FlxPoint();
		point.x = (this._globalScreenPosition.x - Camera.x) / Camera.zoom;
		point.y = (this._globalScreenPosition.y - Camera.y) / Camera.zoom;
		return point;
	}
	,getWorldPosition: function(Camera,point) {
		if(Camera == null) Camera = org.flixel.FlxG.camera;
		if(point == null) point = new org.flixel.util.FlxPoint();
		this.getScreenPosition(Camera,this._point);
		point.x = this._point.x + Camera.scroll.x;
		point.y = this._point.y + Camera.scroll.y;
		return point;
	}
	,updateCursor: function() {
		var camera = org.flixel.FlxG.camera;
		this.screenX = Math.floor((this._globalScreenPosition.x - camera.x) / camera.zoom);
		this.screenY = Math.floor((this._globalScreenPosition.y - camera.y) / camera.zoom);
		this.x = this.screenX + camera.scroll.x;
		this.y = this.screenY + camera.scroll.y;
	}
	,updateTouchPosition: function(X,Y) {
		this._flashPoint.x = X;
		this._flashPoint.y = Y;
		this._flashPoint = org.flixel.FlxG._game.globalToLocal(this._flashPoint);
		this._globalScreenPosition.x = this._flashPoint.x;
		this._globalScreenPosition.y = this._flashPoint.y;
		this.updateCursor();
	}
	,update: function() {
		if(this._last == -1 && this._current == -1) this._current = 0; else if(this._last == 2 && this._current == 2) this._current = 1;
		this._last = this._current;
	}
	,get_touchPointID: function() {
		return this._touchPointID;
	}
	,destroy: function() {
		this._point = null;
		this._globalScreenPosition = null;
		this._flashPoint = null;
	}
	,__class__: org.flixel.system.input.FlxTouch
	,__properties__: {get_touchPointID:"get_touchPointID"}
});
org.flixel.system.input.FlxTouchManager = function() {
	this.touches = new Array();
	this._inactiveTouches = new Array();
	this._touchesCache = new haxe.ds.IntMap();
	org.flixel.system.input.FlxTouchManager.maxTouchPoints = flash.ui.Multitouch.maxTouchPoints;
	flash.ui.Multitouch.set_inputMode(flash.ui.MultitouchInputMode.TOUCH_POINT);
	org.flixel.FlxG.supportsTouchEvents = true;
	flash.Lib.get_current().get_stage().addEventListener("touchBegin",$bind(this,this.handleTouchBegin));
	flash.Lib.get_current().get_stage().addEventListener("touchEnd",$bind(this,this.handleTouchEnd));
	flash.Lib.get_current().get_stage().addEventListener("touchMove",$bind(this,this.handleTouchMove));
};
$hxClasses["org.flixel.system.input.FlxTouchManager"] = org.flixel.system.input.FlxTouchManager;
org.flixel.system.input.FlxTouchManager.__name__ = ["org","flixel","system","input","FlxTouchManager"];
org.flixel.system.input.FlxTouchManager.__interfaces__ = [org.flixel.system.input.IFlxInput];
org.flixel.system.input.FlxTouchManager.prototype = {
	toString: function() {
		return "FlxTouchManager";
	}
	,onFocusLost: function() {
		this.reset();
	}
	,onFocus: function() {
	}
	,recycle: function(X,Y,PointID) {
		if(this._inactiveTouches.length > 0) {
			var touch = this._inactiveTouches.pop();
			touch.reset(X,Y,PointID);
			return this.add(touch);
		}
		return this.add(new org.flixel.system.input.FlxTouch(X,Y,PointID));
	}
	,add: function(touch) {
		this.touches.push(touch);
		this._touchesCache.set(touch.get_touchPointID(),touch);
		return touch;
	}
	,justReleasedTouches: function(TouchArray) {
		if(TouchArray == null) TouchArray = new Array();
		var touchLen = TouchArray.length;
		if(touchLen > 0) TouchArray.splice(0,touchLen);
		var _g = 0, _g1 = this.touches;
		while(_g < _g1.length) {
			var touch = _g1[_g];
			++_g;
			if(touch._current == -1) TouchArray.push(touch);
		}
		return TouchArray;
	}
	,justStartedTouches: function(TouchArray) {
		if(TouchArray == null) TouchArray = new Array();
		var touchLen = TouchArray.length;
		if(touchLen > 0) TouchArray.splice(0,touchLen);
		var _g = 0, _g1 = this.touches;
		while(_g < _g1.length) {
			var touch = _g1[_g];
			++_g;
			if(touch._current == 2) TouchArray.push(touch);
		}
		return TouchArray;
	}
	,handleTouchMove: function(FlashEvent) {
		var touch = this._touchesCache.get(FlashEvent.touchPointID);
		if(touch != null) touch.updateTouchPosition(FlashEvent.stageX,FlashEvent.stageY);
	}
	,handleTouchEnd: function(FlashEvent) {
		var touch = this._touchesCache.get(FlashEvent.touchPointID);
		if(touch != null) {
			if(touch._current > 0) touch._current = -1; else touch._current = 0;
		}
	}
	,handleTouchBegin: function(FlashEvent) {
		var touch = this._touchesCache.get(FlashEvent.touchPointID);
		if(touch != null) {
			if(touch._current > 0) touch._current = 1; else touch._current = 2;
		} else {
			touch = this.recycle(FlashEvent.stageX,FlashEvent.stageY,FlashEvent.touchPointID);
			touch._current = 2;
		}
	}
	,reset: function() {
		var $it0 = this._touchesCache.keys();
		while( $it0.hasNext() ) {
			var key = $it0.next();
			this._touchesCache.remove(key);
		}
		var _g = 0, _g1 = this.touches;
		while(_g < _g1.length) {
			var touch = _g1[_g];
			++_g;
			touch.deactivate();
			this._inactiveTouches.push(touch);
		}
		this.touches.splice(0,this.touches.length);
	}
	,update: function() {
		var i = this.touches.length - 1;
		var touch;
		while(i >= 0) {
			touch = this.touches[i];
			if(touch._current == 0) {
				touch.deactivate();
				this._touchesCache.remove(touch.get_touchPointID());
				this.touches.splice(i,1);
				this._inactiveTouches.push(touch);
			} else touch.update();
			i--;
		}
	}
	,destroy: function() {
		var _g = 0, _g1 = this.touches;
		while(_g < _g1.length) {
			var touch = _g1[_g];
			++_g;
			touch.destroy();
		}
		this.touches = null;
		var _g = 0, _g1 = this._inactiveTouches;
		while(_g < _g1.length) {
			var touch = _g1[_g];
			++_g;
			touch.destroy();
		}
		this._inactiveTouches = null;
		this._touchesCache = null;
	}
	,getFirstTouch: function() {
		if(this.touches[0] != null) return this.touches[0]; else return null;
	}
	,__class__: org.flixel.system.input.FlxTouchManager
}
org.flixel.system.layer = {}
org.flixel.system.layer.Atlas = function(name,width,height,borderX,borderY,bitmapData) {
	if(borderY == null) borderY = 1;
	if(borderX == null) borderX = 1;
	this.nodes = new haxe.ds.StringMap();
	this.name = name;
	if(bitmapData == null) {
		this.root = new org.flixel.system.layer.Node(this,new flash.geom.Rectangle(0,0,width,height));
		this.atlasBitmapData = new flash.display.BitmapData(width,height,true,0);
		this._fromBitmapData = false;
	} else {
		this.root = new org.flixel.system.layer.Node(this,bitmapData.rect,bitmapData,name);
		this.atlasBitmapData = bitmapData;
		this.nodes.set(name,this.root);
		this._fromBitmapData = true;
	}
	this.borderX = borderX;
	this.borderY = borderY;
	this._tileSheetData = this.createTileSheetData(this.atlasBitmapData);
	org.flixel.system.layer.Atlas._atlasCache.set(name,this);
	this._useCount = 0;
};
$hxClasses["org.flixel.system.layer.Atlas"] = org.flixel.system.layer.Atlas;
org.flixel.system.layer.Atlas.__name__ = ["org","flixel","system","layer","Atlas"];
org.flixel.system.layer.Atlas.isExists = function(key) {
	return org.flixel.system.layer.Atlas._atlasCache.exists(key);
}
org.flixel.system.layer.Atlas.getAtlas = function(Key,BmData,Unique,Width,Height) {
	if(Height == null) Height = 0;
	if(Width == null) Width = 0;
	if(Unique == null) Unique = false;
	if(BmData == null && Width <= 0 && Height <= 0) return null;
	var alreadyExist = org.flixel.system.layer.Atlas.isExists(Key);
	if(!Unique && alreadyExist) return org.flixel.system.layer.Atlas._atlasCache.get(Key);
	var AtlasWidth = Width;
	var AtlasHeight = Height;
	if(BmData != null) {
		AtlasWidth = BmData._nmeTextureBuffer != null?BmData._nmeTextureBuffer.width:0;
		AtlasHeight = BmData._nmeTextureBuffer != null?BmData._nmeTextureBuffer.height:0;
	}
	var AtlasKey = Key;
	if(Unique && alreadyExist) AtlasKey = org.flixel.system.layer.Atlas.getUniqueKey(Key);
	var atlas = new org.flixel.system.layer.Atlas(AtlasKey,AtlasWidth,AtlasHeight,1,1,BmData);
	return atlas;
}
org.flixel.system.layer.Atlas.getAtlasByKey = function(Key) {
	return org.flixel.system.layer.Atlas._atlasCache.get(Key);
}
org.flixel.system.layer.Atlas.getUniqueKey = function(Key) {
	if(!org.flixel.system.layer.Atlas._atlasCache.exists(Key)) return Key;
	var AtlasKey = Key;
	var i = 1;
	while(org.flixel.system.layer.Atlas._atlasCache.exists(Key + i)) i++;
	AtlasKey = Key + i;
	return AtlasKey;
}
org.flixel.system.layer.Atlas.removeAtlas = function(atlas,destroy) {
	if(destroy == null) destroy = false;
	var currAtlas;
	var $it0 = org.flixel.system.layer.Atlas._atlasCache.keys();
	while( $it0.hasNext() ) {
		var key = $it0.next();
		currAtlas = org.flixel.system.layer.Atlas._atlasCache.get(key);
		if(currAtlas == atlas) {
			org.flixel.system.layer.Atlas._atlasCache.remove(key);
			if(destroy) atlas.destroy();
			return;
		}
	}
}
org.flixel.system.layer.Atlas.clearAtlasCache = function() {
	var atlas;
	var $it0 = org.flixel.system.layer.Atlas._atlasCache.keys();
	while( $it0.hasNext() ) {
		var key = $it0.next();
		atlas = org.flixel.system.layer.Atlas._atlasCache.get(key);
		org.flixel.system.layer.Atlas._atlasCache.remove(key);
		atlas.destroy();
	}
}
org.flixel.system.layer.Atlas.prototype = {
	findNodeToInsert: function(insertWidth,insertHeight) {
		var stack = new Array();
		var current = this.root;
		while(true) {
			if(current.get_isEmpty() && current.canPlace(insertWidth,insertHeight)) return current;
			if(current.right != null && current.right.canPlace(insertWidth,insertHeight) && current.left != null && current.left.canPlace(insertWidth,insertHeight)) {
				stack.push(current.right);
				current = current.left;
			} else if(current.left != null && current.left.canPlace(insertWidth,insertHeight)) current = current.left; else if(current.right != null && current.right.canPlace(insertWidth,insertHeight)) current = current.right; else if(stack.length > 0) current = stack.pop(); else return null;
		}
		return null;
	}
	,deleteSubtree: function(node) {
		if(node != null) {
			if(node.left != null) this.deleteSubtree(node.left);
			if(node.right != null) this.deleteSubtree(node.right);
			node.destroy();
		}
	}
	,clone: function(cloneName) {
		if(this._fromBitmapData) return null;
		var atlasKey = org.flixel.system.layer.Atlas.getUniqueKey(cloneName);
		var cloneAtlas = new org.flixel.system.layer.Atlas(cloneName,this.get_width(),this.get_height(),this.borderX,this.borderY);
		cloneAtlas.createQueue();
		var $it0 = ((function(_e) {
			return function() {
				return _e.iterator();
			};
		})(this.nodes))();
		while( $it0.hasNext() ) {
			var node = $it0.next();
			cloneAtlas.addToQueue(node.item,node.key);
		}
		cloneAtlas.generateAtlasFromQueue();
		return cloneAtlas;
	}
	,clearAndFillWith: function(bmd) {
		this.deleteSubtree(this.root);
		this.nodes = new haxe.ds.StringMap();
		org.flixel.system.layer.TileSheetData.removeTileSheet(this._tileSheetData);
		if(!this._fromBitmapData) this.atlasBitmapData.dispose();
		this.root = new org.flixel.system.layer.Node(this,bmd.rect,bmd,this.name);
		this.atlasBitmapData = bmd;
		this.nodes.set(this.name,this.root);
		this._fromBitmapData = true;
		this._tileSheetData = org.flixel.system.layer.TileSheetData.addTileSheet(this.atlasBitmapData);
		return this.root;
	}
	,clear: function() {
		var rootWidth = this.root.get_width();
		var rootHeight = this.root.get_height();
		this.deleteSubtree(this.root);
		this.root = new org.flixel.system.layer.Node(this,new flash.geom.Rectangle(0,0,rootWidth,rootHeight));
		this.atlasBitmapData.fillRect(this.root.rect,0);
		this.nodes = new haxe.ds.StringMap();
	}
	,destroy: function() {
		this.tempStorage = null;
		this.deleteSubtree(this.root);
		this.root = null;
		if(!this._fromBitmapData && this.atlasBitmapData != null) this.atlasBitmapData.dispose();
		this.atlasBitmapData = null;
		this._tileSheetData = null;
		this.nodes = null;
	}
	,generateAtlasFromQueue: function() {
		if(this.tempStorage != null) {
			var bitmaps = new Array();
			var keys = new Array();
			var _g = 0, _g1 = this.tempStorage;
			while(_g < _g1.length) {
				var obj = _g1[_g];
				++_g;
				bitmaps.push(obj.bmd);
				keys.push(obj.keyStr);
			}
			this.addNodes(bitmaps,keys);
			this.tempStorage = null;
		}
	}
	,addToQueue: function(data,key) {
		if(this.tempStorage == null) this.tempStorage = new Array();
		this.tempStorage.push({ bmd : data, keyStr : key});
	}
	,createQueue: function() {
		this.tempStorage = new Array();
	}
	,bitmapSorter: function(bmd1,bmd2) {
		if((bmd2._nmeTextureBuffer != null?bmd2._nmeTextureBuffer.width:0) == (bmd1._nmeTextureBuffer != null?bmd1._nmeTextureBuffer.width:0)) {
			if((bmd2._nmeTextureBuffer != null?bmd2._nmeTextureBuffer.height:0) == (bmd1._nmeTextureBuffer != null?bmd1._nmeTextureBuffer.height:0)) return 0; else if((bmd2._nmeTextureBuffer != null?bmd2._nmeTextureBuffer.height:0) > (bmd1._nmeTextureBuffer != null?bmd1._nmeTextureBuffer.height:0)) return 1; else return -1;
		}
		if((bmd2._nmeTextureBuffer != null?bmd2._nmeTextureBuffer.width:0) > (bmd1._nmeTextureBuffer != null?bmd1._nmeTextureBuffer.width:0)) return 1;
		return -1;
	}
	,indexOf: function(bitmaps,bmd) {
		var _g1 = 0, _g = bitmaps.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(bitmaps[i] == bmd) return i;
		}
		return -1;
	}
	,addNodes: function(bitmaps,keys) {
		var numKeys = keys.length;
		var numBitmaps = bitmaps.length;
		if(numBitmaps != numKeys) return false;
		var sortedBitmaps = bitmaps.slice(0,bitmaps.length);
		sortedBitmaps.sort($bind(this,this.bitmapSorter));
		var node;
		var result = true;
		var index;
		var _g1 = 0, _g = numBitmaps;
		while(_g1 < _g) {
			var i = _g1++;
			index = this.indexOf(bitmaps,sortedBitmaps[i]);
			node = this.addNode(sortedBitmaps[i],keys[index]);
			if(node == null) result = false;
		}
		return result;
	}
	,getNodeByBitmap: function(bitmap) {
		var $it0 = ((function(_e) {
			return function() {
				return _e.iterator();
			};
		})(this.nodes))();
		while( $it0.hasNext() ) {
			var node = $it0.next();
			if(node.item == bitmap) return node;
		}
		return null;
	}
	,getNodeByKey: function(key) {
		if(this.hasNodeWithName(key) == true) return this.nodes.get(key);
		return null;
	}
	,hasNodeWithName: function(nodeName) {
		return this.nodes.exists(nodeName);
	}
	,get_height: function() {
		return this.root.get_height();
	}
	,get_width: function() {
		return this.root.get_width();
	}
	,addNode: function(data,key) {
		if(this.hasNodeWithName(key) == true) return this.nodes.get(key);
		if(this.root.canPlace(data._nmeTextureBuffer != null?data._nmeTextureBuffer.width:0,data._nmeTextureBuffer != null?data._nmeTextureBuffer.height:0) == false) return null;
		var insertWidth = (data._nmeTextureBuffer != null?data._nmeTextureBuffer.width:0) == this.get_width()?data._nmeTextureBuffer != null?data._nmeTextureBuffer.width:0:(data._nmeTextureBuffer != null?data._nmeTextureBuffer.width:0) + this.borderX;
		var insertHeight = (data._nmeTextureBuffer != null?data._nmeTextureBuffer.height:0) == this.get_height()?data._nmeTextureBuffer != null?data._nmeTextureBuffer.height:0:(data._nmeTextureBuffer != null?data._nmeTextureBuffer.height:0) + this.borderY;
		var nodeToInsert = this.findNodeToInsert(insertWidth,insertHeight);
		if(nodeToInsert != null) {
			var firstChild;
			var secondChild;
			var firstGrandChild;
			var secondGrandChild;
			var dw = nodeToInsert.get_width() - insertWidth;
			var dh = nodeToInsert.get_height() - insertHeight;
			if(dw > dh) {
				firstChild = new org.flixel.system.layer.Node(this,new flash.geom.Rectangle(nodeToInsert.get_x(),nodeToInsert.get_y(),insertWidth,nodeToInsert.get_height()));
				secondChild = new org.flixel.system.layer.Node(this,new flash.geom.Rectangle(nodeToInsert.get_x() + insertWidth,nodeToInsert.get_y(),nodeToInsert.get_width() - insertWidth,nodeToInsert.get_height()));
				firstGrandChild = new org.flixel.system.layer.Node(this,new flash.geom.Rectangle(firstChild.get_x(),firstChild.get_y(),insertWidth,insertHeight),data,key);
				secondGrandChild = new org.flixel.system.layer.Node(this,new flash.geom.Rectangle(firstChild.get_x(),firstChild.get_y() + insertHeight,insertWidth,firstChild.get_height() - insertHeight));
			} else {
				firstChild = new org.flixel.system.layer.Node(this,new flash.geom.Rectangle(nodeToInsert.get_x(),nodeToInsert.get_y(),nodeToInsert.get_width(),insertHeight));
				secondChild = new org.flixel.system.layer.Node(this,new flash.geom.Rectangle(nodeToInsert.get_x(),nodeToInsert.get_y() + insertHeight,nodeToInsert.get_width(),nodeToInsert.get_height() - insertHeight));
				firstGrandChild = new org.flixel.system.layer.Node(this,new flash.geom.Rectangle(firstChild.get_x(),firstChild.get_y(),insertWidth,insertHeight),data,key);
				secondGrandChild = new org.flixel.system.layer.Node(this,new flash.geom.Rectangle(firstChild.get_x() + insertWidth,firstChild.get_y(),firstChild.get_width() - insertWidth,insertHeight));
			}
			firstChild.left = firstGrandChild;
			firstChild.right = secondGrandChild;
			nodeToInsert.left = firstChild;
			nodeToInsert.right = secondChild;
			this.atlasBitmapData.copyPixels(data,data.rect,firstGrandChild.point);
			this.nodes.set(key,firstGrandChild);
			return firstGrandChild;
		}
		return null;
	}
	,resize: function(newWidth,newHeight) {
		this.root.rect.width = newWidth;
		this.root.rect.height = newHeight;
		this.atlasBitmapData.dispose();
		this.atlasBitmapData = new flash.display.BitmapData(newWidth,newHeight,true,0);
		this.rebuildAtlas();
	}
	,redrawAll: function() {
		this.atlasBitmapData.fillRect(this.atlasBitmapData.rect,0);
		var $it0 = ((function(_e) {
			return function() {
				return _e.iterator();
			};
		})(this.nodes))();
		while( $it0.hasNext() ) {
			var node = $it0.next();
			this.atlasBitmapData.copyPixels(node.item,node.rect,node.point);
		}
	}
	,redrawNode: function(node) {
		if(this.hasNodeWithName(node.key) && this.atlasBitmapData != node.item) {
			this.atlasBitmapData.fillRect(node.rect,0);
			this.atlasBitmapData.copyPixels(node.item,node.rect,node.point);
		}
	}
	,rebuildAtlas: function() {
		this.createQueue();
		var $it0 = ((function(_e) {
			return function() {
				return _e.iterator();
			};
		})(this.nodes))();
		while( $it0.hasNext() ) {
			var node = $it0.next();
			this.addToQueue(node.item,node.key);
		}
		this.clear();
		this.generateAtlasFromQueue();
	}
	,createTileSheetData: function(bitmapData) {
		return org.flixel.system.layer.TileSheetData.addTileSheet(bitmapData);
	}
	,__class__: org.flixel.system.layer.Atlas
	,__properties__: {get_width:"get_width",get_height:"get_height"}
}
org.flixel.system.layer.DrawStackItem = function() {
	this.initialized = false;
	this.useAlpha = false;
	this.position = 0;
	this.drawData = new Array();
};
$hxClasses["org.flixel.system.layer.DrawStackItem"] = org.flixel.system.layer.DrawStackItem;
org.flixel.system.layer.DrawStackItem.__name__ = ["org","flixel","system","layer","DrawStackItem"];
org.flixel.system.layer.DrawStackItem.prototype = {
	dispose: function() {
		this.atlas = null;
		this.drawData = null;
		this.next = null;
	}
	,reset: function() {
		this.atlas = null;
		this.initialized = false;
		this.position = 0;
	}
	,__class__: org.flixel.system.layer.DrawStackItem
}
org.flixel.system.layer.Node = function(atlas,rect,item,key) {
	if(key == null) key = "";
	this.atlas = atlas;
	this.item = item;
	this.left = null;
	this.right = null;
	this.rect = rect;
	this.point = new flash.geom.Point(rect.x,rect.y);
	this.key = key;
};
$hxClasses["org.flixel.system.layer.Node"] = org.flixel.system.layer.Node;
org.flixel.system.layer.Node.__name__ = ["org","flixel","system","layer","Node"];
org.flixel.system.layer.Node.prototype = {
	destroy: function() {
		this.atlas = null;
		this.item = null;
		this.left = null;
		this.right = null;
		this.rect = null;
		this.point = null;
	}
	,addTileRect: function(tileRect,point) {
		tileRect.x += this.get_x();
		tileRect.y += this.get_y();
		return this.atlas._tileSheetData.addTileRect(tileRect,point);
	}
	,getTexturePackerFrames: function(data) {
		return this.atlas._tileSheetData.getTexturePackerFrames(data,this.get_x(),this.get_y());
	}
	,getSpriteSheetFrames: function(frameWidth,frameHeight,origin,startX,startY,endX,endY,xSpacing,ySpacing) {
		if(ySpacing == null) ySpacing = 0;
		if(xSpacing == null) xSpacing = 0;
		if(endY == null) endY = 0;
		if(endX == null) endX = 0;
		if(startY == null) startY = 0;
		if(startX == null) startX = 0;
		if(endX == 0) endX += this.item.get_width();
		if(endY == 0) endY += this.item.get_height();
		return this.atlas._tileSheetData.getSpriteSheetFrames(frameWidth,frameHeight,origin,startX + this.get_x(),startY + this.get_y(),endX + this.get_x(),endY + this.get_y(),xSpacing,ySpacing);
	}
	,get_height: function() {
		return this.rect.height | 0;
	}
	,get_width: function() {
		return this.rect.width | 0;
	}
	,get_y: function() {
		return this.rect.y | 0;
	}
	,get_x: function() {
		return this.rect.x | 0;
	}
	,canPlace: function(width,height) {
		return this.rect.width >= width && this.rect.height >= height;
	}
	,get_isEmpty: function() {
		return this.item == null && this.left == null && this.right == null;
	}
	,__class__: org.flixel.system.layer.Node
	,__properties__: {get_isEmpty:"get_isEmpty",get_x:"get_x",get_y:"get_y",get_width:"get_width",get_height:"get_height"}
}
org.flixel.system.layer.TileSheetData = function(tileSheet) {
	this.tileSheet = tileSheet;
	this.flxSpriteFrames = new haxe.ds.StringMap();
	this.flxFrames = new haxe.ds.StringMap();
};
$hxClasses["org.flixel.system.layer.TileSheetData"] = org.flixel.system.layer.TileSheetData;
org.flixel.system.layer.TileSheetData.__name__ = ["org","flixel","system","layer","TileSheetData"];
org.flixel.system.layer.TileSheetData.addTileSheet = function(bitmapData) {
	if(org.flixel.system.layer.TileSheetData.containsTileSheet(bitmapData)) return org.flixel.system.layer.TileSheetData.getTileSheet(bitmapData);
	var tilesheet = org.flixel.system.layer.TileSheetExt.addTileSheet(bitmapData);
	var tempTileSheetData = new org.flixel.system.layer.TileSheetData(tilesheet);
	org.flixel.system.layer.TileSheetData.tileSheetData.push(tempTileSheetData);
	return tempTileSheetData;
}
org.flixel.system.layer.TileSheetData.containsTileSheet = function(bitmapData) {
	var _g = 0, _g1 = org.flixel.system.layer.TileSheetData.tileSheetData;
	while(_g < _g1.length) {
		var tsd = _g1[_g];
		++_g;
		if(tsd.tileSheet.nmeBitmap == bitmapData) return true;
	}
	return false;
}
org.flixel.system.layer.TileSheetData.getTileSheet = function(bitmapData) {
	var _g = 0, _g1 = org.flixel.system.layer.TileSheetData.tileSheetData;
	while(_g < _g1.length) {
		var tsd = _g1[_g];
		++_g;
		if(tsd.tileSheet.nmeBitmap == bitmapData) return tsd;
	}
	return null;
}
org.flixel.system.layer.TileSheetData.removeTileSheet = function(tileSheetObj) {
	var _g1 = 0, _g = org.flixel.system.layer.TileSheetData.tileSheetData.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(org.flixel.system.layer.TileSheetData.tileSheetData[i] == tileSheetObj) {
			org.flixel.system.layer.TileSheetData.tileSheetData[i] = org.flixel.system.layer.TileSheetData.tileSheetData[org.flixel.system.layer.TileSheetData.tileSheetData.length - 1];
			org.flixel.system.layer.TileSheetData.tileSheetData.pop();
			tileSheetObj.destroy();
			return;
		}
	}
}
org.flixel.system.layer.TileSheetData.clear = function() {
	var _g = 0, _g1 = org.flixel.system.layer.TileSheetData.tileSheetData;
	while(_g < _g1.length) {
		var dataObject = _g1[_g];
		++_g;
		dataObject.destroy();
	}
	org.flixel.system.layer.TileSheetData.tileSheetData = new Array();
	org.flixel.system.layer.TileSheetExt.clear();
}
org.flixel.system.layer.TileSheetData.prototype = {
	destroyFrameBitmapDatas: function() {
		var $it0 = ((function(_e) {
			return function() {
				return _e.iterator();
			};
		})(this.flxFrames))();
		while( $it0.hasNext() ) {
			var frame = $it0.next();
			frame.destroyBitmapDatas();
		}
	}
	,addTexturePackerFrame: function(frameData,startX,startY) {
		if(startY == null) startY = 0;
		if(startX == null) startX = 0;
		var key = frameData.name;
		if(this.containsFrame(key)) return this.flxFrames.get(key);
		var texFrame = new org.flixel.system.layer.frames.FlxFrame(this);
		texFrame.trimmed = frameData.trimmed;
		texFrame.rotated = frameData.rotated;
		texFrame.name = key;
		texFrame.sourceSize = new org.flixel.util.FlxPoint().copyFrom(frameData.sourceSize);
		texFrame.offset = new org.flixel.util.FlxPoint().copyFrom(frameData.offset);
		texFrame.center = new org.flixel.util.FlxPoint(0,0);
		texFrame.frame = frameData.frame.clone();
		if(frameData.rotated) {
			texFrame.center.make(texFrame.frame.height * 0.5 + texFrame.offset.x,texFrame.frame.width * 0.5 + texFrame.offset.y);
			texFrame.additionalAngle = -90.0;
		} else texFrame.center.make(texFrame.frame.width * 0.5 + texFrame.offset.x,texFrame.frame.height * 0.5 + texFrame.offset.y);
		texFrame.tileID = this.addTileRect(texFrame.frame,new flash.geom.Point(0.5 * texFrame.frame.width,0.5 * texFrame.frame.height));
		this.flxFrames.set(key,texFrame);
		return texFrame;
	}
	,getTexturePackerFrames: function(data,startX,startY) {
		if(startY == null) startY = 0;
		if(startX == null) startX = 0;
		if(this.flxSpriteFrames.exists(data.assetName)) return this.flxSpriteFrames.get(data.assetName);
		data.parseData();
		var packerFrames = new org.flixel.system.layer.frames.FlxSpriteFrames(data.assetName);
		var l = data.frames.length;
		var _g = 0;
		while(_g < l) {
			var i = _g++;
			var frame = this.addTexturePackerFrame(data.frames[i],startX,startY);
			packerFrames.addFrame(frame);
		}
		this.flxSpriteFrames.set(data.assetName,packerFrames);
		return packerFrames;
	}
	,destroy: function() {
		org.flixel.system.layer.TileSheetExt.removeTileSheet(this.tileSheet);
		this.tileSheet = null;
		var $it0 = ((function(_e) {
			return function() {
				return _e.iterator();
			};
		})(this.flxSpriteFrames))();
		while( $it0.hasNext() ) {
			var spriteData = $it0.next();
			spriteData.destroy();
		}
		var $it1 = ((function(_e1) {
			return function() {
				return _e1.iterator();
			};
		})(this.flxSpriteFrames))();
		while( $it1.hasNext() ) {
			var frames = $it1.next();
			frames.destroy();
		}
		this.flxSpriteFrames = null;
		var $it2 = ((function(_e2) {
			return function() {
				return _e2.iterator();
			};
		})(this.flxFrames))();
		while( $it2.hasNext() ) {
			var frame = $it2.next();
			frame.destroy();
		}
		this.flxFrames = null;
	}
	,addTileRect: function(tileRect,point) {
		return this.tileSheet.addTileRectID(tileRect,point);
	}
	,containsFrame: function(key) {
		return this.flxFrames.exists(key);
	}
	,addSpriteSheetFrame: function(rect,point) {
		var key = this.getSpriteSheetFrameKey(rect,point);
		if(this.containsFrame(key)) return this.flxFrames.get(key);
		var frame = new org.flixel.system.layer.frames.FlxFrame(this);
		frame.tileID = this.addTileRect(rect,point);
		frame.name = key;
		frame.frame = rect;
		frame.rotated = false;
		frame.trimmed = false;
		frame.sourceSize = new org.flixel.util.FlxPoint(rect.width,rect.height);
		frame.offset = new org.flixel.util.FlxPoint(0,0);
		frame.center = new org.flixel.util.FlxPoint(0.5 * rect.width,0.5 * rect.height);
		this.flxFrames.set(key,frame);
		return frame;
	}
	,getSpriteSheetFrameKey: function(rect,point) {
		return rect.x + "_" + rect.y + "_" + rect.width + "_" + rect.height + "_" + point.x + "_" + point.y;
	}
	,getKeyForSpriteSheetFrames: function(width,height,startX,startY,endX,endY,xSpacing,ySpacing,pointX,pointY) {
		return width + "_" + height + "_" + startX + "_" + startY + "_" + endX + "_" + endY + "_" + xSpacing + "_" + ySpacing + "_" + pointX + "_" + pointY;
	}
	,containsSpriteSheetFrames: function(width,height,startX,startY,endX,endY,xSpacing,ySpacing,pointX,pointY) {
		var key = this.getKeyForSpriteSheetFrames(width,height,startX,startY,endX,endY,xSpacing,ySpacing,pointX,pointY);
		return this.flxSpriteFrames.exists(key);
	}
	,getSpriteSheetFrames: function(width,height,origin,startX,startY,endX,endY,xSpacing,ySpacing) {
		if(ySpacing == null) ySpacing = 0;
		if(xSpacing == null) xSpacing = 0;
		if(endY == null) endY = 0;
		if(endX == null) endX = 0;
		if(startY == null) startY = 0;
		if(startX == null) startX = 0;
		var bitmapWidth = this.tileSheet.nmeBitmap.get_width();
		var bitmapHeight = this.tileSheet.nmeBitmap.get_height();
		if(endX == 0) endX = bitmapWidth;
		if(endY == 0) endY = bitmapHeight;
		var pointX = 0.5 * width;
		var pointY = 0.5 * height;
		if(origin != null) {
			pointX = origin.x;
			pointY = origin.y;
		}
		var key = this.getKeyForSpriteSheetFrames(width,height,startX,startY,endX,endY,xSpacing,ySpacing,pointX,pointY);
		if(this.flxSpriteFrames.exists(key)) return this.flxSpriteFrames.get(key);
		var numRows = (endY - startY) / (height + ySpacing) | 0;
		var numCols = (endX - startX) / (width + xSpacing) | 0;
		var tempPoint = origin;
		if(origin == null) tempPoint = new flash.geom.Point(pointX,pointY);
		var spriteData = new org.flixel.system.layer.frames.FlxSpriteFrames(key);
		var tempRect;
		var frame;
		var spacedWidth = width + xSpacing;
		var spacedHeight = height + ySpacing;
		var _g1 = 0, _g = numRows;
		while(_g1 < _g) {
			var j = _g1++;
			var _g3 = 0, _g2 = numCols;
			while(_g3 < _g2) {
				var i = _g3++;
				tempRect = new flash.geom.Rectangle(startX + i * spacedWidth,startY + j * spacedHeight,width,height);
				frame = this.addSpriteSheetFrame(tempRect,tempPoint);
				spriteData.addFrame(frame);
			}
		}
		this.flxSpriteFrames.set(key,spriteData);
		return spriteData;
	}
	,getFrame: function(name) {
		return this.flxFrames.get(name);
	}
	,__class__: org.flixel.system.layer.TileSheetData
}
org.flixel.system.layer.TileSheetExt = function(bitmap) {
	openfl.display.Tilesheet.call(this,bitmap);
	this._tileIDs = new haxe.ds.StringMap();
	this._numTiles = 0;
};
$hxClasses["org.flixel.system.layer.TileSheetExt"] = org.flixel.system.layer.TileSheetExt;
org.flixel.system.layer.TileSheetExt.__name__ = ["org","flixel","system","layer","TileSheetExt"];
org.flixel.system.layer.TileSheetExt.addTileSheet = function(bitmapData) {
	if(org.flixel.system.layer.TileSheetExt.containsTileSheet(bitmapData)) return org.flixel.system.layer.TileSheetExt.getTileSheet(bitmapData);
	var tempTileSheetData = new org.flixel.system.layer.TileSheetExt(bitmapData);
	org.flixel.system.layer.TileSheetExt._tileSheetCache.set(bitmapData,tempTileSheetData);
	return tempTileSheetData;
}
org.flixel.system.layer.TileSheetExt.containsTileSheet = function(bitmapData) {
	return org.flixel.system.layer.TileSheetExt._tileSheetCache.h.hasOwnProperty(bitmapData.__id__);
}
org.flixel.system.layer.TileSheetExt.getTileSheet = function(bitmapData) {
	return org.flixel.system.layer.TileSheetExt._tileSheetCache.h[bitmapData.__id__];
}
org.flixel.system.layer.TileSheetExt.removeTileSheet = function(tileSheetObj) {
	var key = tileSheetObj.nmeBitmap;
	if(org.flixel.system.layer.TileSheetExt.containsTileSheet(key)) {
		var temp = org.flixel.system.layer.TileSheetExt._tileSheetCache.h[key.__id__];
		org.flixel.system.layer.TileSheetExt._tileSheetCache.remove(key);
		temp.destroy();
	}
}
org.flixel.system.layer.TileSheetExt.clear = function() {
	var $it0 = org.flixel.system.layer.TileSheetExt._tileSheetCache.keys();
	while( $it0.hasNext() ) {
		var key = $it0.next();
		if(key != null) {
			var temp = org.flixel.system.layer.TileSheetExt._tileSheetCache.h[key.__id__];
			org.flixel.system.layer.TileSheetExt._tileSheetCache.remove(key);
			temp.destroy();
		}
	}
	org.flixel.system.layer.TileSheetExt._tileSheetCache = new haxe.ds.ObjectMap();
}
org.flixel.system.layer.TileSheetExt.__super__ = openfl.display.Tilesheet;
org.flixel.system.layer.TileSheetExt.prototype = $extend(openfl.display.Tilesheet.prototype,{
	destroy: function() {
		this.nmeBitmap = null;
		this._tileIDs = null;
	}
	,addTileRectID: function(rect,point) {
		var key = this.getKey(rect,point);
		if(this._tileIDs.exists(key)) return this._tileIDs.get(key);
		this.addTileRect(rect,point);
		var tileID = this._numTiles;
		this._numTiles++;
		this._tileIDs.set(key,tileID);
		return tileID;
	}
	,getKey: function(rect,point) {
		var key = rect.x + "_" + rect.y + "_" + rect.width + "_" + rect.height + "_";
		if(point != null) key = key + point.x + "_" + point.y;
		return key;
	}
	,__class__: org.flixel.system.layer.TileSheetExt
});
org.flixel.system.layer.frames = {}
org.flixel.system.layer.frames.FlxFrame = function(tileSheet) {
	this.center = null;
	this.additionalAngle = 0;
	this.tileID = -1;
	this.offset = null;
	this.sourceSize = null;
	this.trimmed = false;
	this.rotated = false;
	this.frame = null;
	this.name = null;
	this._tileSheet = tileSheet;
	this.additionalAngle = 0;
};
$hxClasses["org.flixel.system.layer.frames.FlxFrame"] = org.flixel.system.layer.frames.FlxFrame;
org.flixel.system.layer.frames.FlxFrame.__name__ = ["org","flixel","system","layer","frames","FlxFrame"];
org.flixel.system.layer.frames.FlxFrame.prototype = {
	destroyBitmapDatas: function() {
		if(this._bitmapData != null) {
			this._bitmapData.dispose();
			this._bitmapData = null;
		}
		if(this._reversedBitmapData != null) {
			this._reversedBitmapData.dispose();
			this._reversedBitmapData = null;
		}
	}
	,getReversedBitmap: function() {
		if(this._reversedBitmapData != null) return this._reversedBitmapData;
		var normalFrame = this.getBitmap();
		org.flixel.system.layer.frames.FlxFrame.MATRIX.identity();
		org.flixel.system.layer.frames.FlxFrame.MATRIX.scale(-1,1);
		org.flixel.system.layer.frames.FlxFrame.MATRIX.translate(this.sourceSize.x | 0,0);
		this._reversedBitmapData = new flash.display.BitmapData(this.sourceSize.x | 0,this.sourceSize.y | 0,true,0);
		this._reversedBitmapData.draw(normalFrame,org.flixel.system.layer.frames.FlxFrame.MATRIX);
		return this._reversedBitmapData;
	}
	,getBitmap: function() {
		if(this._bitmapData != null) return this._bitmapData;
		this._bitmapData = new flash.display.BitmapData(this.sourceSize.x | 0,this.sourceSize.y | 0,true,0);
		if(this.rotated) {
			var temp = new flash.display.BitmapData(this.frame.width | 0,this.frame.height | 0,true,0);
			org.flixel.system.layer.frames.FlxFrame.POINT.x = org.flixel.system.layer.frames.FlxFrame.POINT.y = 0;
			temp.copyPixels(this._tileSheet.tileSheet.nmeBitmap,this.frame,org.flixel.system.layer.frames.FlxFrame.POINT);
			org.flixel.system.layer.frames.FlxFrame.MATRIX.identity();
			org.flixel.system.layer.frames.FlxFrame.MATRIX.translate(-0.5 * this.frame.width,-0.5 * this.frame.height);
			org.flixel.system.layer.frames.FlxFrame.MATRIX.rotate(-90. * org.flixel.util.FlxAngle.RAD);
			org.flixel.system.layer.frames.FlxFrame.MATRIX.translate(this.offset.x + 0.5 * this.frame.height,this.offset.y + 0.5 * this.frame.width);
			this._bitmapData.draw(temp,org.flixel.system.layer.frames.FlxFrame.MATRIX);
		} else {
			org.flixel.system.layer.frames.FlxFrame.POINT.x = this.offset.x;
			org.flixel.system.layer.frames.FlxFrame.POINT.y = this.offset.y;
			this._bitmapData.copyPixels(this._tileSheet.tileSheet.nmeBitmap,this.frame,org.flixel.system.layer.frames.FlxFrame.POINT);
		}
		return this._bitmapData;
	}
	,destroy: function() {
		this.name = null;
		this.frame = null;
		this.sourceSize = null;
		this.offset = null;
		this.center = null;
		this._tileSheet = null;
		this.destroyBitmapDatas();
	}
	,__class__: org.flixel.system.layer.frames.FlxFrame
}
org.flixel.system.layer.frames.FlxSpriteFrames = function(name) {
	this.name = name;
	this.frames = [];
	this.framesHash = new haxe.ds.StringMap();
};
$hxClasses["org.flixel.system.layer.frames.FlxSpriteFrames"] = org.flixel.system.layer.frames.FlxSpriteFrames;
org.flixel.system.layer.frames.FlxSpriteFrames.__name__ = ["org","flixel","system","layer","frames","FlxSpriteFrames"];
org.flixel.system.layer.frames.FlxSpriteFrames.prototype = {
	destroy: function() {
		this.frames = null;
		this.framesHash = null;
		this.name = null;
	}
	,addFrame: function(frame) {
		this.frames.push(frame);
		this.framesHash.set(frame.name,frame);
	}
	,__class__: org.flixel.system.layer.frames.FlxSpriteFrames
}
org.flixel.system.replay = {}
org.flixel.system.replay.CodeValuePair = function(code,value) {
	if(value == null) value = 0;
	if(code == null) code = 0;
	this.code = code;
	this.value = value;
};
$hxClasses["org.flixel.system.replay.CodeValuePair"] = org.flixel.system.replay.CodeValuePair;
org.flixel.system.replay.CodeValuePair.__name__ = ["org","flixel","system","replay","CodeValuePair"];
org.flixel.system.replay.CodeValuePair.prototype = {
	__class__: org.flixel.system.replay.CodeValuePair
}
org.flixel.system.replay.FrameRecord = function() {
	this.frame = 0;
	this.keys = null;
	this.mouse = null;
};
$hxClasses["org.flixel.system.replay.FrameRecord"] = org.flixel.system.replay.FrameRecord;
org.flixel.system.replay.FrameRecord.__name__ = ["org","flixel","system","replay","FrameRecord"];
org.flixel.system.replay.FrameRecord.prototype = {
	load: function(Data) {
		var i;
		var l;
		var array = Data.split("k");
		this.frame = Std.parseInt(array[0]);
		array = array[1].split("m");
		var keyData = array[0];
		var mouseData = array[1];
		if(keyData.length > 0) {
			array = keyData.split(",");
			var keyPair;
			i = 0;
			l = array.length;
			while(i < l) {
				keyPair = array[i++].split(":");
				if(keyPair.length == 2) {
					if(this.keys == null) this.keys = new Array();
					this.keys.push(new org.flixel.system.replay.CodeValuePair(Std.parseInt(keyPair[0]),Std.parseInt(keyPair[1])));
				}
			}
		}
		if(mouseData.length > 0) {
			array = mouseData.split(",");
			if(array.length >= 4) this.mouse = new org.flixel.system.replay.MouseRecord(Std.parseInt(array[0]),Std.parseInt(array[1]),Std.parseInt(array[2]),Std.parseInt(array[3]));
		}
		return this;
	}
	,save: function() {
		var output = this.frame + "k";
		if(this.keys != null) {
			var object;
			var i = 0;
			var l = this.keys.length;
			while(i < l) {
				if(i > 0) output += ",";
				object = this.keys[i++];
				output += object.code + ":" + object.value;
			}
		}
		output += "m";
		if(this.mouse != null) output += this.mouse.x + "," + this.mouse.y + "," + this.mouse.button + "," + this.mouse.wheel;
		return output;
	}
	,destroy: function() {
		this.keys = null;
		this.mouse = null;
	}
	,create: function(Frame,Keys,Mouse) {
		this.frame = Math.floor(Frame);
		this.keys = Keys;
		this.mouse = Mouse;
		return this;
	}
	,__class__: org.flixel.system.replay.FrameRecord
}
org.flixel.system.replay.MouseRecord = function(X,Y,Button,Wheel) {
	this.x = X;
	this.y = Y;
	this.button = Button;
	this.wheel = Wheel;
};
$hxClasses["org.flixel.system.replay.MouseRecord"] = org.flixel.system.replay.MouseRecord;
org.flixel.system.replay.MouseRecord.__name__ = ["org","flixel","system","replay","MouseRecord"];
org.flixel.system.replay.MouseRecord.prototype = {
	__class__: org.flixel.system.replay.MouseRecord
}
org.flixel.tweens = {}
org.flixel.tweens.FlxTween = function(duration,type,complete,ease) {
	if(type == null) type = 0;
	this._target = duration;
	if(type == 0) type = 1; else if(type == 16) type = 17;
	this._type = type;
	this.complete = complete;
	this._ease = ease;
	this._t = 0;
	this._backward = (this._type & 16) > 0;
};
$hxClasses["org.flixel.tweens.FlxTween"] = org.flixel.tweens.FlxTween;
org.flixel.tweens.FlxTween.__name__ = ["org","flixel","tweens","FlxTween"];
org.flixel.tweens.FlxTween.prototype = {
	get_scale: function() {
		return this._t;
	}
	,set_percent: function(value) {
		this._time = this._target * value;
		return this._time;
	}
	,get_percent: function() {
		return this._time / this._target;
	}
	,finish: function() {
		if(this.complete != null) this.complete();
		var _g = this._type & -17;
		switch(_g) {
		case 1:
			this._time = this._target;
			this.active = false;
			break;
		case 2:
			this._time %= this._target;
			this._t = this._time / this._target;
			if(this._ease != null && this._t > 0 && this._t < 1) this._t = this._ease(this._t);
			this.start();
			break;
		case 4:
			this._time %= this._target;
			this._t = this._time / this._target;
			if(this._ease != null && this._t > 0 && this._t < 1) this._t = this._ease(this._t);
			if(this._backward) this._t = 1 - this._t;
			this._backward = !this._backward;
			this.start();
			break;
		case 8:
			this._time = this._target;
			this.active = false;
			this._parent.removeTween(this,true);
			break;
		}
		this._finish = false;
	}
	,cancel: function() {
		this.active = false;
		if(this._parent != null) this._parent.removeTween(this);
	}
	,start: function() {
		this._time = 0;
		if(this._target == 0) {
			this.active = false;
			return;
		}
		this.active = true;
	}
	,update: function() {
		this._time += org.flixel.FlxG.elapsed;
		this._t = this._time / this._target;
		if(this._ease != null) this._t = this._ease(this._t);
		if(this._backward) this._t = 1 - this._t;
		if(this._time >= this._target) {
			if(!this._backward) this._t = 1; else this._t = 0;
			this._finish = true;
		}
	}
	,destroy: function() {
		this.complete = null;
		this._parent = null;
		this._ease = null;
	}
	,__class__: org.flixel.tweens.FlxTween
	,__properties__: {set_percent:"set_percent",get_percent:"get_percent",get_scale:"get_scale"}
}
org.flixel.tweens.misc = {}
org.flixel.tweens.misc.MultiVarTween = function(complete,type) {
	if(type == null) type = 0;
	this._vars = new Array();
	this._start = new Array();
	this._range = new Array();
	org.flixel.tweens.FlxTween.call(this,0,type,complete);
};
$hxClasses["org.flixel.tweens.misc.MultiVarTween"] = org.flixel.tweens.misc.MultiVarTween;
org.flixel.tweens.misc.MultiVarTween.__name__ = ["org","flixel","tweens","misc","MultiVarTween"];
org.flixel.tweens.misc.MultiVarTween.__super__ = org.flixel.tweens.FlxTween;
org.flixel.tweens.misc.MultiVarTween.prototype = $extend(org.flixel.tweens.FlxTween.prototype,{
	update: function() {
		org.flixel.tweens.FlxTween.prototype.update.call(this);
		var i = this._vars.length;
		while(i-- > 0) Reflect.setProperty(this._object,this._vars[i],this._start[i] + this._range[i] * this._t);
	}
	,tween: function(object,properties,duration,ease) {
		this._object = object;
		org.flixel.util.FlxArray.setLength(this._vars,0);
		org.flixel.util.FlxArray.setLength(this._start,0);
		org.flixel.util.FlxArray.setLength(this._range,0);
		this._target = duration;
		this._ease = ease;
		var p;
		var fields = null;
		if(Reflect.isObject(properties)) fields = Reflect.fields(properties); else throw "Unsupported MultiVar properties container - use Object containing key/value pairs.";
		var _g = 0;
		while(_g < fields.length) {
			var p1 = fields[_g];
			++_g;
			if(Reflect.getProperty(object,p1) == null) throw "The Object does not have the property \"" + p1 + "\", or it is not accessible.";
			var a = Reflect.getProperty(object,p1);
			if(Math.isNaN(a)) throw "The property \"" + p1 + "\" is not numeric.";
			this._vars.push(p1);
			this._start.push(a);
			this._range.push(Reflect.getProperty(properties,p1) - a);
		}
		this.start();
	}
	,destroy: function() {
		org.flixel.tweens.FlxTween.prototype.destroy.call(this);
		this._object = null;
	}
	,__class__: org.flixel.tweens.misc.MultiVarTween
});
org.flixel.tweens.util = {}
org.flixel.tweens.util.Ease = function() { }
$hxClasses["org.flixel.tweens.util.Ease"] = org.flixel.tweens.util.Ease;
org.flixel.tweens.util.Ease.__name__ = ["org","flixel","tweens","util","Ease"];
org.flixel.tweens.util.Ease.quadIn = function(t) {
	return t * t;
}
org.flixel.tweens.util.Ease.quadOut = function(t) {
	return -t * (t - 2);
}
org.flixel.tweens.util.Ease.quadInOut = function(t) {
	return t <= .5?t * t * 2:1 - --t * t * 2;
}
org.flixel.tweens.util.Ease.cubeIn = function(t) {
	return t * t * t;
}
org.flixel.tweens.util.Ease.cubeOut = function(t) {
	return 1 + --t * t * t;
}
org.flixel.tweens.util.Ease.cubeInOut = function(t) {
	return t <= .5?t * t * t * 4:1 + --t * t * t * 4;
}
org.flixel.tweens.util.Ease.quartIn = function(t) {
	return t * t * t * t;
}
org.flixel.tweens.util.Ease.quartOut = function(t) {
	return 1 - (t -= 1) * t * t * t;
}
org.flixel.tweens.util.Ease.quartInOut = function(t) {
	return t <= .5?t * t * t * t * 8:(1 - (t = t * 2 - 2) * t * t * t) / 2 + .5;
}
org.flixel.tweens.util.Ease.quintIn = function(t) {
	return t * t * t * t * t;
}
org.flixel.tweens.util.Ease.quintOut = function(t) {
	return (t = t - 1) * t * t * t * t + 1;
}
org.flixel.tweens.util.Ease.quintInOut = function(t) {
	return (t *= 2) < 1?t * t * t * t * t / 2:((t -= 2) * t * t * t * t + 2) / 2;
}
org.flixel.tweens.util.Ease.sineIn = function(t) {
	return -Math.cos(org.flixel.tweens.util.Ease.PI2 * t) + 1;
}
org.flixel.tweens.util.Ease.sineOut = function(t) {
	return Math.sin(org.flixel.tweens.util.Ease.PI2 * t);
}
org.flixel.tweens.util.Ease.sineInOut = function(t) {
	return -Math.cos(org.flixel.tweens.util.Ease.PI * t) / 2 + .5;
}
org.flixel.tweens.util.Ease.bounceIn = function(t) {
	t = 1 - t;
	if(t < org.flixel.tweens.util.Ease.B1) return 1 - 7.5625 * t * t;
	if(t < org.flixel.tweens.util.Ease.B2) return 1 - (7.5625 * (t - org.flixel.tweens.util.Ease.B3) * (t - org.flixel.tweens.util.Ease.B3) + .75);
	if(t < org.flixel.tweens.util.Ease.B4) return 1 - (7.5625 * (t - org.flixel.tweens.util.Ease.B5) * (t - org.flixel.tweens.util.Ease.B5) + .9375);
	return 1 - (7.5625 * (t - org.flixel.tweens.util.Ease.B6) * (t - org.flixel.tweens.util.Ease.B6) + .984375);
}
org.flixel.tweens.util.Ease.bounceOut = function(t) {
	if(t < org.flixel.tweens.util.Ease.B1) return 7.5625 * t * t;
	if(t < org.flixel.tweens.util.Ease.B2) return 7.5625 * (t - org.flixel.tweens.util.Ease.B3) * (t - org.flixel.tweens.util.Ease.B3) + .75;
	if(t < org.flixel.tweens.util.Ease.B4) return 7.5625 * (t - org.flixel.tweens.util.Ease.B5) * (t - org.flixel.tweens.util.Ease.B5) + .9375;
	return 7.5625 * (t - org.flixel.tweens.util.Ease.B6) * (t - org.flixel.tweens.util.Ease.B6) + .984375;
}
org.flixel.tweens.util.Ease.bounceInOut = function(t) {
	if(t < .5) {
		t = 1 - t * 2;
		if(t < org.flixel.tweens.util.Ease.B1) return (1 - 7.5625 * t * t) / 2;
		if(t < org.flixel.tweens.util.Ease.B2) return (1 - (7.5625 * (t - org.flixel.tweens.util.Ease.B3) * (t - org.flixel.tweens.util.Ease.B3) + .75)) / 2;
		if(t < org.flixel.tweens.util.Ease.B4) return (1 - (7.5625 * (t - org.flixel.tweens.util.Ease.B5) * (t - org.flixel.tweens.util.Ease.B5) + .9375)) / 2;
		return (1 - (7.5625 * (t - org.flixel.tweens.util.Ease.B6) * (t - org.flixel.tweens.util.Ease.B6) + .984375)) / 2;
	}
	t = t * 2 - 1;
	if(t < org.flixel.tweens.util.Ease.B1) return 7.5625 * t * t / 2 + .5;
	if(t < org.flixel.tweens.util.Ease.B2) return (7.5625 * (t - org.flixel.tweens.util.Ease.B3) * (t - org.flixel.tweens.util.Ease.B3) + .75) / 2 + .5;
	if(t < org.flixel.tweens.util.Ease.B4) return (7.5625 * (t - org.flixel.tweens.util.Ease.B5) * (t - org.flixel.tweens.util.Ease.B5) + .9375) / 2 + .5;
	return (7.5625 * (t - org.flixel.tweens.util.Ease.B6) * (t - org.flixel.tweens.util.Ease.B6) + .984375) / 2 + .5;
}
org.flixel.tweens.util.Ease.circIn = function(t) {
	return -(Math.sqrt(1 - t * t) - 1);
}
org.flixel.tweens.util.Ease.circOut = function(t) {
	return Math.sqrt(1 - (t - 1) * (t - 1));
}
org.flixel.tweens.util.Ease.circInOut = function(t) {
	return t <= .5?(Math.sqrt(1 - t * t * 4) - 1) / -2:(Math.sqrt(1 - (t * 2 - 2) * (t * 2 - 2)) + 1) / 2;
}
org.flixel.tweens.util.Ease.expoIn = function(t) {
	return Math.pow(2,10 * (t - 1));
}
org.flixel.tweens.util.Ease.expoOut = function(t) {
	return -Math.pow(2,-10 * t) + 1;
}
org.flixel.tweens.util.Ease.expoInOut = function(t) {
	return t < .5?Math.pow(2,10 * (t * 2 - 1)) / 2:(-Math.pow(2,-10 * (t * 2 - 1)) + 2) / 2;
}
org.flixel.tweens.util.Ease.backIn = function(t) {
	return t * t * (2.70158 * t - 1.70158);
}
org.flixel.tweens.util.Ease.backOut = function(t) {
	return 1 - --t * t * (-2.70158 * t - 1.70158);
}
org.flixel.tweens.util.Ease.backInOut = function(t) {
	t *= 2;
	if(t < 1) return t * t * (2.70158 * t - 1.70158) / 2;
	t--;
	return (1 - --t * t * (-2.70158 * t - 1.70158)) / 2 + .5;
}
org.flixel.util.FlxAngle = function() { }
$hxClasses["org.flixel.util.FlxAngle"] = org.flixel.util.FlxAngle;
org.flixel.util.FlxAngle.__name__ = ["org","flixel","util","FlxAngle"];
org.flixel.util.FlxAngle.rotatePoint = function(X,Y,PivotX,PivotY,Angle,point) {
	var sin = 0;
	var cos = 0;
	var radians = Angle * -0.017453293;
	while(radians < -3.14159265) radians += 6.28318531;
	while(radians > 3.14159265) radians = radians - 6.28318531;
	if(radians < 0) {
		sin = 1.27323954 * radians + .405284735 * radians * radians;
		if(sin < 0) sin = .225 * (sin * -sin - sin) + sin; else sin = .225 * (sin * sin - sin) + sin;
	} else {
		sin = 1.27323954 * radians - 0.405284735 * radians * radians;
		if(sin < 0) sin = .225 * (sin * -sin - sin) + sin; else sin = .225 * (sin * sin - sin) + sin;
	}
	radians += 1.57079632;
	if(radians > 3.14159265) radians = radians - 6.28318531;
	if(radians < 0) {
		cos = 1.27323954 * radians + 0.405284735 * radians * radians;
		if(cos < 0) cos = .225 * (cos * -cos - cos) + cos; else cos = .225 * (cos * cos - cos) + cos;
	} else {
		cos = 1.27323954 * radians - 0.405284735 * radians * radians;
		if(cos < 0) cos = .225 * (cos * -cos - cos) + cos; else cos = .225 * (cos * cos - cos) + cos;
	}
	var dx = X - PivotX;
	var dy = Y - PivotY;
	if(point == null) point = new org.flixel.util.FlxPoint();
	point.x = PivotX + cos * dx - sin * dy;
	point.y = PivotY - sin * dx - cos * dy;
	return point;
}
org.flixel.util.FlxAngle.getAngle = function(Point1,Point2) {
	var x = Point2.x - Point1.x;
	var y = Point2.y - Point1.y;
	var angle = 0;
	if(x != 0 || y != 0) {
		var c1 = 0.7853981625;
		var c2 = 3 * c1;
		var ay = y < 0?-y:y;
		if(x >= 0) angle = c1 - c1 * ((x - ay) / (x + ay)); else angle = c2 - c1 * ((x + ay) / (ay - x));
		angle = (y < 0?-angle:angle) * 57.2957796;
		if(angle > 90) angle = angle - 270; else angle += 90;
	}
	return angle;
}
org.flixel.util.FlxAngle.atan2 = function(y,x) {
	var absY = y;
	var coefficient2 = 3 * org.flixel.util.FlxAngle.coefficient1;
	var r;
	var angle;
	if(absY < 0) absY = -absY;
	if(x >= 0) {
		r = (x - absY) / (x + absY);
		angle = org.flixel.util.FlxAngle.coefficient1 - org.flixel.util.FlxAngle.coefficient1 * r;
	} else {
		r = (x + absY) / (absY - x);
		angle = coefficient2 - org.flixel.util.FlxAngle.coefficient1 * r;
	}
	return y < 0?-angle:angle;
}
org.flixel.util.FlxAngle.sinCosGenerator = function(length,sinAmplitude,cosAmplitude,frequency) {
	if(frequency == null) frequency = 1.0;
	if(cosAmplitude == null) cosAmplitude = 1.0;
	if(sinAmplitude == null) sinAmplitude = 1.0;
	var sin = sinAmplitude;
	var cos = cosAmplitude;
	var frq = frequency * Math.PI / length;
	org.flixel.util.FlxAngle.cosTable = new Array();
	org.flixel.util.FlxAngle.sinTable = new Array();
	var _g = 0;
	while(_g < length) {
		var c = _g++;
		cos -= sin * frq;
		sin += cos * frq;
		org.flixel.util.FlxAngle.cosTable[c] = cos;
		org.flixel.util.FlxAngle.sinTable[c] = sin;
	}
	return org.flixel.util.FlxAngle.sinTable;
}
org.flixel.util.FlxAngle.getSinTable = function() {
	return org.flixel.util.FlxAngle.sinTable;
}
org.flixel.util.FlxAngle.getCosTable = function() {
	return org.flixel.util.FlxAngle.cosTable;
}
org.flixel.util.FlxAngle.wrapAngle = function(angle) {
	var result = angle | 0;
	if(angle > 180) result = -180; else if(angle < -180) result = 180;
	return result;
}
org.flixel.util.FlxAngle.angleLimit = function(angle,min,max) {
	var result = angle;
	if(angle > max) result = max; else if(angle < min) result = min;
	return result;
}
org.flixel.util.FlxAngle.asDegrees = function(radians) {
	return radians * org.flixel.util.FlxAngle.DEG;
}
org.flixel.util.FlxAngle.asRadians = function(degrees) {
	return degrees * org.flixel.util.FlxAngle.RAD;
}
org.flixel.util.FlxAngle.angleBetween = function(SpriteA,SpriteB,AsDegrees) {
	if(AsDegrees == null) AsDegrees = false;
	var dx = SpriteB.x + SpriteB.origin.x - (SpriteA.x + SpriteA.origin.x);
	var dy = SpriteB.y + SpriteB.origin.y - (SpriteA.y + SpriteA.origin.y);
	if(AsDegrees) return Math.atan2(dy,dx) * org.flixel.util.FlxAngle.DEG; else return Math.atan2(dy,dx);
}
org.flixel.util.FlxAngle.angleBetweenPoint = function(Sprite,Target,AsDegrees) {
	if(AsDegrees == null) AsDegrees = false;
	var dx = Target.x - (Sprite.x + Sprite.origin.x);
	var dy = Target.y - (Sprite.y + Sprite.origin.y);
	if(AsDegrees) return Math.atan2(dy,dx) * org.flixel.util.FlxAngle.DEG; else return Math.atan2(dy,dx);
}
org.flixel.util.FlxAngle.angleBetweenMouse = function(Object,AsDegrees) {
	if(AsDegrees == null) AsDegrees = false;
	if(Object == null) return 0;
	var p = Object.getScreenXY(null,null);
	var dx = org.flixel.FlxG.mouse.screenX - p.x;
	var dy = org.flixel.FlxG.mouse.screenY - p.y;
	if(AsDegrees) return Math.atan2(dy,dx) * org.flixel.util.FlxAngle.DEG; else return Math.atan2(dy,dx);
}
org.flixel.util.FlxAngle.angleBetweenTouch = function(Object,Touch,AsDegrees) {
	if(AsDegrees == null) AsDegrees = false;
	var p = Object.getScreenXY(null,null);
	var dx = Touch.screenX - p.x;
	var dy = Touch.screenY - p.y;
	if(AsDegrees) return Math.atan2(dy,dx) * org.flixel.util.FlxAngle.DEG; else return Math.atan2(dy,dx);
}
org.flixel.util.FlxArray = function() { }
$hxClasses["org.flixel.util.FlxArray"] = org.flixel.util.FlxArray;
org.flixel.util.FlxArray.__name__ = ["org","flixel","util","FlxArray"];
org.flixel.util.FlxArray.indexOf = function(array,whatToFind,fromIndex) {
	if(fromIndex == null) fromIndex = 0;
	var len = array.length;
	var index = -1;
	var _g = fromIndex;
	while(_g < len) {
		var i = _g++;
		if(array[i] == whatToFind) {
			index = i;
			break;
		}
	}
	return index;
}
org.flixel.util.FlxArray.setLength = function(array,newLength) {
	if(newLength < 0) return;
	var oldLength = array.length;
	var diff = newLength - oldLength;
	if(diff < 0) {
		diff = -diff;
		var _g = 0;
		while(_g < diff) {
			var i = _g++;
			array.pop();
		}
	}
}
org.flixel.util.FlxArray.shuffle = function(Objects,HowManyTimes) {
	HowManyTimes = Math.max(HowManyTimes,0) | 0;
	var i = 0;
	var index1;
	var index2;
	var object;
	while(i < HowManyTimes) {
		index1 = (function($this) {
			var $r;
			org.flixel.util.FlxRandom.globalSeed = 69621 * (org.flixel.util.FlxRandom.globalSeed * 2147483647 | 0) % 2147483647 / 2147483647;
			if(org.flixel.util.FlxRandom.globalSeed <= 0) org.flixel.util.FlxRandom.globalSeed += 1;
			$r = org.flixel.util.FlxRandom.globalSeed;
			return $r;
		}(this)) * Objects.length | 0;
		index2 = (function($this) {
			var $r;
			org.flixel.util.FlxRandom.globalSeed = 69621 * (org.flixel.util.FlxRandom.globalSeed * 2147483647 | 0) % 2147483647 / 2147483647;
			if(org.flixel.util.FlxRandom.globalSeed <= 0) org.flixel.util.FlxRandom.globalSeed += 1;
			$r = org.flixel.util.FlxRandom.globalSeed;
			return $r;
		}(this)) * Objects.length | 0;
		object = Objects[index2];
		Objects[index2] = Objects[index1];
		Objects[index1] = object;
		i++;
	}
	return Objects;
}
org.flixel.util.FlxArray.getRandom = function(Objects,StartIndex,Length) {
	if(Length == null) Length = 0;
	if(StartIndex == null) StartIndex = 0;
	if(Objects != null) {
		if(StartIndex < 0) StartIndex = 0;
		if(Length < 0) Length = 0;
		var l = Length;
		if(l == 0 || l > Objects.length - StartIndex) l = Objects.length - StartIndex;
		if(l > 0) return Objects[StartIndex + ((function($this) {
			var $r;
			org.flixel.util.FlxRandom.globalSeed = 69621 * (org.flixel.util.FlxRandom.globalSeed * 2147483647 | 0) % 2147483647 / 2147483647;
			if(org.flixel.util.FlxRandom.globalSeed <= 0) org.flixel.util.FlxRandom.globalSeed += 1;
			$r = org.flixel.util.FlxRandom.globalSeed;
			return $r;
		}(this)) * l | 0)];
	}
	return null;
}
org.flixel.util.FlxColor = function() { }
$hxClasses["org.flixel.util.FlxColor"] = org.flixel.util.FlxColor;
org.flixel.util.FlxColor.__name__ = ["org","flixel","util","FlxColor"];
org.flixel.util.FlxColor.makeFromRGBA = function(Red,Green,Blue,Alpha) {
	if(Alpha == null) Alpha = 1.0;
	return (((Alpha > 1?Alpha:Alpha * 255) | 0) & 255) << 24 | (Red & 255) << 16 | (Green & 255) << 8 | Blue & 255;
}
org.flixel.util.FlxColor.makeFromHSBA = function(Hue,Saturation,Brightness,Alpha) {
	if(Alpha == null) Alpha = 1.0;
	var red;
	var green;
	var blue;
	if(Saturation == 0.0) {
		red = Brightness;
		green = Brightness;
		blue = Brightness;
	} else {
		if(Hue == 360) Hue = 0;
		var slice = Hue / 60 | 0;
		var hf = Hue / 60 - slice;
		var aa = Brightness * (1 - Saturation);
		var bb = Brightness * (1 - Saturation * hf);
		var cc = Brightness * (1 - Saturation * (1.0 - hf));
		switch(slice) {
		case 0:
			red = Brightness;
			green = cc;
			blue = aa;
			break;
		case 1:
			red = bb;
			green = Brightness;
			blue = aa;
			break;
		case 2:
			red = aa;
			green = Brightness;
			blue = cc;
			break;
		case 3:
			red = aa;
			green = bb;
			blue = Brightness;
			break;
		case 4:
			red = cc;
			green = aa;
			blue = Brightness;
			break;
		case 5:
			red = Brightness;
			green = aa;
			blue = bb;
			break;
		default:
			red = 0;
			green = 0;
			blue = 0;
		}
	}
	return (((Alpha > 1?Alpha:Alpha * 255) | 0) & 255) << 24 | (red * 255 | 0) << 16 | (green * 255 | 0) << 8 | (blue * 255 | 0);
}
org.flixel.util.FlxColor.getRGBA = function(Color,Results) {
	var red = Color >> 16 & 255;
	var green = Color >> 8 & 255;
	var blue = Color & 255;
	var alpha = org.flixel.util.FlxMath.roundDecimal((Color >> 24 & 255) / 255,4);
	if(Results != null) Results = { red : red, green : green, blue : blue, alpha : alpha};
	return { red : red, green : green, blue : blue, alpha : alpha};
}
org.flixel.util.FlxColor.getHSBA = function(Color,Results) {
	var hue;
	var saturation;
	var brightness;
	var alpha;
	var red = (Color >> 16 & 255) / 255;
	var green = (Color >> 8 & 255) / 255;
	var blue = (Color & 255) / 255;
	var m = red > green?red:green;
	var dmax = m > blue?m:blue;
	m = red > green?green:red;
	var dmin = m > blue?blue:m;
	var range = dmax - dmin;
	brightness = org.flixel.util.FlxMath.roundDecimal(dmax,4);
	saturation = 0;
	hue = 0;
	if(dmax != 0) saturation = org.flixel.util.FlxMath.roundDecimal(range / dmax,4);
	if(saturation != 0) {
		if(red == dmax) hue = (green - blue) / range; else if(green == dmax) hue = 2 + (blue - red) / range; else if(blue == dmax) hue = 4 + (red - green) / range;
		hue *= 60;
		if(hue < 0) hue += 360;
	}
	alpha = org.flixel.util.FlxMath.roundDecimal((Color >> 24 & 255) / 255,4);
	if(Results != null) Results = { hue : hue | 0, brightness : brightness, saturation : saturation, alpha : alpha};
	return { hue : hue | 0, brightness : brightness, saturation : saturation, alpha : alpha};
}
org.flixel.util.FlxColor.getAlpha = function(color) {
	return color >> 24 & 255;
}
org.flixel.util.FlxColor.getAlphaFloat = function(color) {
	var f = color >> 24 & 255;
	return f / 255;
}
org.flixel.util.FlxColor.getRed = function(color) {
	return color >> 16 & 255;
}
org.flixel.util.FlxColor.getGreen = function(color) {
	return color >> 8 & 255;
}
org.flixel.util.FlxColor.getBlue = function(color) {
	return color & 255;
}
org.flixel.util.FlxColor.getRandomColor = function(min,max,alpha) {
	if(alpha == null) alpha = 255;
	if(max == null) max = 255;
	if(min == null) min = 0;
	if(max > 255) {
		org.flixel.FlxG.warn("FlxColor: getRandomColor - max value too high");
		return 16777215;
	}
	if(min > max) {
		org.flixel.FlxG.warn("FlxColor: getRandomColor - min value higher than max");
		return 16777215;
	}
	var red = min + (Math.random() * (max - min) | 0);
	var green = min + (Math.random() * (max - min) | 0);
	var blue = min + (Math.random() * (max - min) | 0);
	return alpha << 24 | red << 16 | green << 8 | blue;
}
org.flixel.util.FlxColor.getColor32 = function(alpha,red,green,blue) {
	return alpha << 24 | red << 16 | green << 8 | blue;
}
org.flixel.util.FlxColor.getColor24 = function(red,green,blue) {
	return red << 16 | green << 8 | blue;
}
org.flixel.util.FlxColor.getHSVColorWheel = function(Alpha) {
	if(Alpha == null) Alpha = 255;
	var colors = new Array();
	var _g = 0;
	while(_g < 360) {
		var c = _g++;
		colors[c] = org.flixel.util.FlxColor.HSVtoRGB(c,1.0,1.0,Alpha);
	}
	return colors;
}
org.flixel.util.FlxColor.getComplementHarmony = function(Color) {
	var hsv = org.flixel.util.FlxColor.RGBtoHSV(Color);
	var opposite = org.flixel.util.FlxMath.wrapValue(hsv.hue | 0,180,359);
	return org.flixel.util.FlxColor.HSVtoRGB(opposite,1.0,1.0);
}
org.flixel.util.FlxColor.getAnalogousHarmony = function(Color,Threshold) {
	if(Threshold == null) Threshold = 30;
	var hsv = org.flixel.util.FlxColor.RGBtoHSV(Color);
	if(Threshold > 359 || Threshold < 0) org.flixel.FlxG.warn("FlxColor Warning: Invalid threshold given to getAnalogousHarmony()");
	var warmer = org.flixel.util.FlxMath.wrapValue(hsv.hue | 0,359 - Threshold,359);
	var colder = org.flixel.util.FlxMath.wrapValue(hsv.hue | 0,Threshold,359);
	return { color1 : Color, color2 : org.flixel.util.FlxColor.HSVtoRGB(warmer,1.0,1.0), color3 : org.flixel.util.FlxColor.HSVtoRGB(colder,1.0,1.0), hue1 : hsv.hue | 0, hue2 : warmer, hue3 : colder};
}
org.flixel.util.FlxColor.getSplitComplementHarmony = function(Color,Threshold) {
	if(Threshold == null) Threshold = 30;
	var hsv = org.flixel.util.FlxColor.RGBtoHSV(Color);
	if(Threshold >= 359 || Threshold <= 0) org.flixel.FlxG.warn("FlxColor: Invalid threshold given to getSplitComplementHarmony()");
	var opposite = org.flixel.util.FlxMath.wrapValue(hsv.hue | 0,180,359);
	var warmer = org.flixel.util.FlxMath.wrapValue(hsv.hue | 0,opposite - Threshold,359);
	var colder = org.flixel.util.FlxMath.wrapValue(hsv.hue | 0,opposite + Threshold,359);
	org.flixel.FlxG.notice("hue: " + hsv.hue + " opposite: " + opposite + " warmer: " + warmer + " colder: " + colder);
	return { color1 : Color, color2 : org.flixel.util.FlxColor.HSVtoRGB(warmer,hsv.saturation,hsv.value), color3 : org.flixel.util.FlxColor.HSVtoRGB(colder,hsv.saturation,hsv.value), hue1 : hsv.hue | 0, hue2 : warmer, hue3 : colder};
}
org.flixel.util.FlxColor.getTriadicHarmony = function(Color) {
	var hsv = org.flixel.util.FlxColor.RGBtoHSV(Color);
	var triadic1 = org.flixel.util.FlxMath.wrapValue(hsv.hue | 0,120,359);
	var triadic2 = org.flixel.util.FlxMath.wrapValue(triadic1,120,359);
	return { color1 : Color, color2 : org.flixel.util.FlxColor.HSVtoRGB(triadic1,1.0,1.0), color3 : org.flixel.util.FlxColor.HSVtoRGB(triadic2,1.0,1.0)};
}
org.flixel.util.FlxColor.getColorInfo = function(Color) {
	var argb = org.flixel.util.FlxColor.getRGB(Color);
	var hsl = org.flixel.util.FlxColor.RGBtoHSV(Color);
	var result = org.flixel.util.FlxColor.RGBtoHexString(Color) + "\n";
	result += "Alpha: " + argb.alpha + " Red: " + argb.red + " Green: " + argb.green + " Blue: " + argb.blue + "\n";
	result += "Hue: " + hsl.hue + " Saturation: " + hsl.saturation + " Lightnes: " + hsl.lightness;
	return result;
}
org.flixel.util.FlxColor.RGBtoHexString = function(Color) {
	var argb = org.flixel.util.FlxColor.getRGB(Color);
	return "0x" + org.flixel.util.FlxColor.colorToHexString(argb.alpha | 0) + org.flixel.util.FlxColor.colorToHexString(argb.red) + org.flixel.util.FlxColor.colorToHexString(argb.green) + org.flixel.util.FlxColor.colorToHexString(argb.blue);
}
org.flixel.util.FlxColor.RGBtoWebString = function(Color) {
	var argb = org.flixel.util.FlxColor.getRGB(Color);
	return "#" + org.flixel.util.FlxColor.colorToHexString(argb.red) + org.flixel.util.FlxColor.colorToHexString(argb.green) + org.flixel.util.FlxColor.colorToHexString(argb.blue);
}
org.flixel.util.FlxColor.colorToHexString = function(Color) {
	var digits = "0123456789ABCDEF";
	var lsd = Color % 16;
	var msd = (Color - lsd) / 16;
	return digits.charAt(msd | 0) + digits.charAt(lsd | 0);
}
org.flixel.util.FlxColor.HSVtoRGB = function(H,S,V,Alpha) {
	if(Alpha == null) Alpha = 255;
	var result = 0;
	if(S == 0.0) result = Alpha << 24 | (V * 255 | 0) << 16 | (V * 255 | 0) << 8 | (V * 255 | 0); else {
		H = H / 60.0;
		var f = H - (H | 0);
		var p = V * (1.0 - S);
		var q = V * (1.0 - S * f);
		var t = V * (1.0 - S * (1.0 - f));
		var _g = H | 0;
		switch(_g) {
		case 0:
			result = Alpha << 24 | (V * 255 | 0) << 16 | (t * 255 | 0) << 8 | (p * 255 | 0);
			break;
		case 1:
			result = Alpha << 24 | (q * 255 | 0) << 16 | (V * 255 | 0) << 8 | (p * 255 | 0);
			break;
		case 2:
			result = Alpha << 24 | (p * 255 | 0) << 16 | (V * 255 | 0) << 8 | (t * 255 | 0);
			break;
		case 3:
			result = Alpha << 24 | (p * 255 | 0) << 16 | (q * 255 | 0) << 8 | (V * 255 | 0);
			break;
		case 4:
			result = Alpha << 24 | (t * 255 | 0) << 16 | (p * 255 | 0) << 8 | (V * 255 | 0);
			break;
		case 5:
			result = Alpha << 24 | (V * 255 | 0) << 16 | (p * 255 | 0) << 8 | (q * 255 | 0);
			break;
		default:
			org.flixel.FlxG.warn("FlxColor: HSVtoRGB: Unknown color");
		}
	}
	return result;
}
org.flixel.util.FlxColor.RGBtoHSV = function(Color) {
	var rgb = org.flixel.util.FlxColor.getRGB(Color);
	var red = rgb.red / 255;
	var green = rgb.green / 255;
	var blue = rgb.blue / 255;
	var min = Math.min(red,Math.min(green,blue));
	var max = Math.max(red,Math.max(green,blue));
	var delta = max - min;
	var lightness = (max + min) / 2;
	var hue = 0;
	var saturation;
	if(delta == 0) {
		hue = 0;
		saturation = 0;
	} else {
		if(lightness < 0.5) saturation = delta / (max + min); else saturation = delta / (2 - max - min);
		var delta_r = ((max - red) / 6 + delta / 2) / delta;
		var delta_g = ((max - green) / 6 + delta / 2) / delta;
		var delta_b = ((max - blue) / 6 + delta / 2) / delta;
		if(red == max) hue = delta_b - delta_g; else if(green == max) hue = 1 / 3 + delta_r - delta_b; else if(blue == max) hue = 2 / 3 + delta_g - delta_r;
		if(hue < 0) hue += 1;
		if(hue > 1) hue -= 1;
	}
	hue *= 360;
	hue = Math.round(hue);
	return { hue : hue, saturation : saturation, lightness : lightness, value : lightness};
}
org.flixel.util.FlxColor.interpolateColor = function(Color1,Color2,Steps,CurrentStep,Alpha) {
	if(Alpha == null) Alpha = 255;
	var src1 = org.flixel.util.FlxColor.getRGB(Color1);
	var src2 = org.flixel.util.FlxColor.getRGB(Color2);
	var r = (src2.red - src1.red) * CurrentStep / Steps + src1.red | 0;
	var g = (src2.green - src1.green) * CurrentStep / Steps + src1.green | 0;
	var b = (src2.blue - src1.blue) * CurrentStep / Steps + src1.blue | 0;
	return Alpha << 24 | r << 16 | g << 8 | b;
}
org.flixel.util.FlxColor.interpolateColorWithRGB = function(Color,R2,G2,B2,Steps,CurrentStep) {
	var src = org.flixel.util.FlxColor.getRGB(Color);
	var r = (R2 - src.red) * CurrentStep / Steps + src.red | 0;
	var g = (G2 - src.green) * CurrentStep / Steps + src.green | 0;
	var b = (B2 - src.blue) * CurrentStep / Steps + src.blue | 0;
	return r << 16 | g << 8 | b;
}
org.flixel.util.FlxColor.interpolateRGB = function(R1,G1,B1,R2,G2,B2,Steps,CurrentStep) {
	var r = (R2 - R1) * CurrentStep / Steps + R1 | 0;
	var g = (G2 - G1) * CurrentStep / Steps + G1 | 0;
	var b = (B2 - B1) * CurrentStep / Steps + B1 | 0;
	return r << 16 | g << 8 | b;
}
org.flixel.util.FlxColor.getRGB = function(Color) {
	var alpha = Color >> 24 & 255;
	var red = Color >> 16 & 255;
	var green = Color >> 8 & 255;
	var blue = Color & 255;
	return { alpha : alpha, red : red, green : green, blue : blue};
}
org.flixel.util.FlxMath = function() { }
$hxClasses["org.flixel.util.FlxMath"] = org.flixel.util.FlxMath;
org.flixel.util.FlxMath.__name__ = ["org","flixel","util","FlxMath"];
org.flixel.util.FlxMath.roundDecimal = function(Value,Precision) {
	var num = Value * Math.pow(10,Precision);
	return Math.round(num) / Math.pow(10,Precision);
}
org.flixel.util.FlxMath.bound = function(Value,Min,Max) {
	var lowerBound = Value < Min?Min:Value;
	return lowerBound > Max?Max:lowerBound;
}
org.flixel.util.FlxMath.computeVelocity = function(Velocity,Acceleration,Drag,Max) {
	if(Acceleration != 0) Velocity += Acceleration * org.flixel.FlxG.elapsed; else if(Drag != 0) {
		var drag = Drag * org.flixel.FlxG.elapsed;
		if(Velocity - drag > 0) Velocity = Velocity - drag; else if(Velocity + drag < 0) Velocity += drag; else Velocity = 0;
	}
	if(Velocity != 0 && Max != 0) {
		if(Velocity > Max) Velocity = Max; else if(Velocity < -Max) Velocity = -Max;
	}
	return Velocity;
}
org.flixel.util.FlxMath.getDistance = function(Point1,Point2) {
	var dx = Point1.x - Point2.x;
	var dy = Point1.y - Point2.y;
	return Math.sqrt(dx * dx + dy * dy);
}
org.flixel.util.FlxMath.isOdd = function(n) {
	if(((n | 0) & 1) != 0) return true; else return false;
}
org.flixel.util.FlxMath.isEven = function(n) {
	if(((n | 0) & 1) != 0) return false; else return true;
}
org.flixel.util.FlxMath.numericComparison = function(num1,num2) {
	if(num2 > num1) return -1; else if(num1 > num2) return 1;
	return 0;
}
org.flixel.util.FlxMath.pointInCoordinates = function(pointX,pointY,rectX,rectY,rectWidth,rectHeight) {
	if(pointX >= rectX && pointX <= rectX + rectWidth) {
		if(pointY >= rectY && pointY <= rectY + rectHeight) return true;
	}
	return false;
}
org.flixel.util.FlxMath.pointInFlxRect = function(pointX,pointY,rect) {
	if(pointX >= rect.x && pointX <= rect.get_right() && pointY >= rect.y && pointY <= rect.get_bottom()) return true;
	return false;
}
org.flixel.util.FlxMath.mouseInFlxRect = function(useWorldCoords,rect) {
	if(rect == null) return true;
	if(useWorldCoords) return org.flixel.util.FlxMath.pointInFlxRect(Math.floor(org.flixel.FlxG.mouse.x),Math.floor(org.flixel.FlxG.mouse.y),rect); else return org.flixel.util.FlxMath.pointInFlxRect(org.flixel.FlxG.mouse.screenX,org.flixel.FlxG.mouse.screenY,rect);
}
org.flixel.util.FlxMath.pointInRectangle = function(pointX,pointY,rect) {
	if(pointX >= rect.x && pointX <= rect.get_right() && pointY >= rect.y && pointY <= rect.get_bottom()) return true;
	return false;
}
org.flixel.util.FlxMath.maxAdd = function(value,amount,max) {
	value += amount;
	if(value > max) value = max;
	return value;
}
org.flixel.util.FlxMath.wrapValue = function(value,amount,max) {
	var diff;
	value = Math.abs(value) | 0;
	amount = Math.abs(amount) | 0;
	max = Math.abs(max) | 0;
	diff = (value + amount) % max;
	return diff;
}
org.flixel.util.FlxMath.dotProduct = function(ax,ay,bx,by) {
	return ax * bx + ay * by;
}
org.flixel.util.FlxMath.vectorLength = function(dx,dy) {
	return Math.sqrt(dx * dx + dy * dy);
}
org.flixel.util.FlxMath.distanceBetween = function(SpriteA,SpriteB) {
	var dx = SpriteA.x + SpriteA.origin.x - (SpriteB.x + SpriteB.origin.x);
	var dy = SpriteA.y + SpriteA.origin.y - (SpriteB.y + SpriteB.origin.y);
	return Math.sqrt(dx * dx + dy * dy) | 0;
}
org.flixel.util.FlxMath.distanceToPoint = function(Sprite,Target) {
	var dx = Sprite.x + Sprite.origin.x - Target.x;
	var dy = Sprite.y + Sprite.origin.y - Target.y;
	return Math.sqrt(dx * dx + dy * dy) | 0;
}
org.flixel.util.FlxMath.distanceToMouse = function(Sprite) {
	var dx = Sprite.x + Sprite.origin.x - org.flixel.FlxG.mouse.screenX;
	var dy = Sprite.y + Sprite.origin.y - org.flixel.FlxG.mouse.screenY;
	return Math.sqrt(dx * dx + dy * dy) | 0;
}
org.flixel.util.FlxMath.distanceToTouch = function(Sprite,Touch) {
	var dx = Sprite.x + Sprite.origin.x - Touch.screenX;
	var dy = Sprite.y + Sprite.origin.y - Touch.screenY;
	return Math.sqrt(dx * dx + dy * dy) | 0;
}
org.flixel.util.FlxMisc = function() { }
$hxClasses["org.flixel.util.FlxMisc"] = org.flixel.util.FlxMisc;
org.flixel.util.FlxMisc.__name__ = ["org","flixel","util","FlxMisc"];
org.flixel.util.FlxMisc.openURL = function(URL) {
	flash.Lib.getURL(new flash.net.URLRequest(URL),"_blank");
}
org.flixel.util.FlxMisc.getTicks = function() {
	return org.flixel.FlxGame._mark;
}
org.flixel.util.FlxRandom = function() { }
$hxClasses["org.flixel.util.FlxRandom"] = org.flixel.util.FlxRandom;
org.flixel.util.FlxRandom.__name__ = ["org","flixel","util","FlxRandom"];
org.flixel.util.FlxRandom["int"] = function() {
	var result = org.flixel.util.FlxRandom.intHelper | 0;
	result++;
	result *= 75;
	result %= 65537;
	result--;
	org.flixel.util.FlxRandom.intHelper++;
	if(org.flixel.util.FlxRandom.intHelper == 65536) org.flixel.util.FlxRandom.intHelper = 0;
	return result;
}
org.flixel.util.FlxRandom.intRanged = function(min,max,excludes) {
	if(min == null) min = 0;
	if(max == null) max = 16777215;
	if(min == max) return Math.floor(min);
	if(excludes != null) {
		excludes.sort(org.flixel.util.FlxMath.numericComparison);
		var result;
		do if(min < max) result = Math.floor(min + Math.random() * (max + 1 - min)); else result = Math.floor(max + Math.random() * (min + 1 - max)); while(org.flixel.util.FlxArray.indexOf(excludes,result,null) >= 0);
		return result;
	} else if(min < max) return Math.floor(min + Math.random() * (max + 1 - min)); else return Math.floor(max + Math.random() * (min + 1 - max));
}
org.flixel.util.FlxRandom["float"] = function() {
	org.flixel.util.FlxRandom.globalSeed = 69621 * (org.flixel.util.FlxRandom.globalSeed * 2147483647 | 0) % 2147483647 / 2147483647;
	if(org.flixel.util.FlxRandom.globalSeed <= 0) org.flixel.util.FlxRandom.globalSeed += 1;
	return org.flixel.util.FlxRandom.globalSeed;
}
org.flixel.util.FlxRandom.floatRanged = function(min,max) {
	if(min == null) min = 0;
	if(max == null) max = 16777215;
	if(min == max) return min; else if(min < max) return min + Math.random() * (max - min + 1); else return max + Math.random() * (min - max + 1);
}
org.flixel.util.FlxRandom.srand = function(Seed) {
	return 69621 * (Seed * 2147483647 | 0) % 2147483647 / 2147483647;
}
org.flixel.util.FlxRandom.chanceRoll = function(chance) {
	if(chance == null) chance = 50;
	if(chance <= 0) return false; else if(chance >= 100) return true; else if(Math.random() * 100 >= chance) return false; else return true;
}
org.flixel.util.FlxRandom.sign = function() {
	return Math.random() > 0.5?1:-1;
}
org.flixel.util.FlxRandom.color = function(min,max,alpha) {
	if(alpha == null) alpha = 255;
	if(max == null) max = 255;
	if(min == null) min = 0;
	return org.flixel.util.FlxColor.getRandomColor(min,max,alpha);
}
org.flixel.util.FlxString = function() { }
$hxClasses["org.flixel.util.FlxString"] = org.flixel.util.FlxString;
org.flixel.util.FlxString.__name__ = ["org","flixel","util","FlxString"];
org.flixel.util.FlxString.formatTicks = function(StartTicks,EndTicks) {
	return Math.abs(EndTicks - StartTicks) / 1000 + "s";
}
org.flixel.util.FlxString.formatTime = function(Seconds,ShowMS) {
	if(ShowMS == null) ShowMS = false;
	var timeString = (Seconds / 60 | 0) + ":";
	var timeStringHelper = (Seconds | 0) % 60;
	if(timeStringHelper < 10) timeString += "0";
	timeString += timeStringHelper;
	if(ShowMS) {
		timeString += ".";
		timeStringHelper = (Seconds - (Seconds | 0)) * 100 | 0;
		if(timeStringHelper < 10) timeString += "0";
		timeString += timeStringHelper;
	}
	return timeString;
}
org.flixel.util.FlxString.formatArray = function(AnyArray) {
	var string = "";
	if(AnyArray != null && AnyArray.length > 0) {
		string = Std.string(AnyArray[0]);
		var i = 1;
		var l = AnyArray.length;
		while(i < l) string += ", " + Std.string(AnyArray[i++]);
	}
	return string;
}
org.flixel.util.FlxString.formatFlxPoint = function(Point,Precision) {
	var string = "";
	if(Point != null) {
		var xValue = org.flixel.util.FlxMath.roundDecimal(Point.x,Precision);
		var yValue = org.flixel.util.FlxMath.roundDecimal(Point.y,Precision);
		string = "x: " + xValue + " | y: " + yValue;
	}
	return string;
}
org.flixel.util.FlxString.formatStringMap = function(AnyMap) {
	var string = "";
	var $it0 = AnyMap.keys();
	while( $it0.hasNext() ) {
		var key = $it0.next();
		string += Std.string(key);
		string += ", ";
	}
	return string.substring(0,string.length - 2);
}
org.flixel.util.FlxString.formatMoney = function(Amount,ShowDecimal,EnglishStyle) {
	if(EnglishStyle == null) EnglishStyle = true;
	if(ShowDecimal == null) ShowDecimal = true;
	var helper;
	var amount = Math.floor(Amount);
	var string = "";
	var comma = "";
	var zeroes = "";
	while(amount > 0) {
		if(string.length > 0 && comma.length <= 0) {
			if(EnglishStyle) comma = ","; else comma = ".";
		}
		zeroes = "";
		helper = amount - Math.floor(amount / 1000) * 1000;
		amount = Math.floor(amount / 1000);
		if(amount > 0) {
			if(helper < 100) zeroes += "0";
			if(helper < 10) zeroes += "0";
		}
		string = zeroes + helper + comma + string;
	}
	if(ShowDecimal) {
		amount = (Amount * 100 | 0) - (Amount | 0) * 100;
		string += (EnglishStyle?".":",") + amount;
		if(amount < 10) string += "0";
	}
	return string;
}
org.flixel.util.FlxTimer = function() {
	this.time = 0;
	this.loops = 0;
	this._callback = null;
	this._timeCounter = 0;
	this._loopsCounter = 0;
	this.paused = false;
	this.finished = false;
};
$hxClasses["org.flixel.util.FlxTimer"] = org.flixel.util.FlxTimer;
org.flixel.util.FlxTimer.__name__ = ["org","flixel","util","FlxTimer"];
org.flixel.util.FlxTimer.__properties__ = {get_manager:"get_manager"}
org.flixel.util.FlxTimer.get_manager = function() {
	return js.Boot.__cast(org.flixel.FlxG.getPlugin(org.flixel.plugin.TimerManager) , org.flixel.plugin.TimerManager);
}
org.flixel.util.FlxTimer.prototype = {
	get_progress: function() {
		if(this.time > 0) return this._timeCounter / this.time; else return 0;
	}
	,get_loopsLeft: function() {
		return this.loops - this._loopsCounter;
	}
	,get_timeLeft: function() {
		return this.time - this._timeCounter;
	}
	,stop: function() {
		this.finished = true;
		var timerManager = org.flixel.util.FlxTimer.get_manager();
		if(timerManager != null) timerManager.remove(this);
	}
	,start: function(Time,Loops,Callback) {
		if(Loops == null) Loops = 1;
		if(Time == null) Time = 1;
		var timerManager = org.flixel.util.FlxTimer.get_manager();
		if(timerManager != null) timerManager.add(this);
		if(this.paused) {
			this.paused = false;
			return this;
		}
		this.paused = false;
		this.finished = false;
		this.time = Time;
		if(Loops < 1) Loops = 1;
		this.loops = Loops;
		this._callback = Callback;
		this._timeCounter = 0;
		this._loopsCounter = 0;
		return this;
	}
	,update: function() {
		this._timeCounter += org.flixel.FlxG.elapsed;
		while(this._timeCounter >= this.time && !this.paused && !this.finished) {
			this._timeCounter -= this.time;
			this._loopsCounter++;
			if(this.loops > 0 && this._loopsCounter >= this.loops) this.stop();
			if(this._callback != null) this._callback(this);
		}
	}
	,destroy: function() {
		this.stop();
		this._callback = null;
	}
	,__class__: org.flixel.util.FlxTimer
	,__properties__: {get_timeLeft:"get_timeLeft",get_loopsLeft:"get_loopsLeft",get_progress:"get_progress"}
}
function $iterator(o) { if( o instanceof Array ) return function() { return HxOverrides.iter(o); }; return typeof(o.iterator) == 'function' ? $bind(o,o.iterator) : o.iterator; };
var $_, $fid = 0;
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $fid++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = function(){ return f.method.apply(f.scope, arguments); }; f.scope = o; f.method = m; o.hx__closures__[m.__id__] = f; } return f; };
if(Array.prototype.indexOf) HxOverrides.remove = function(a,o) {
	var i = a.indexOf(o);
	if(i == -1) return false;
	a.splice(i,1);
	return true;
};
Math.__name__ = ["Math"];
Math.NaN = Number.NaN;
Math.NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY;
Math.POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
$hxClasses.Math = Math;
Math.isFinite = function(i) {
	return isFinite(i);
};
Math.isNaN = function(i) {
	return isNaN(i);
};
String.prototype.__class__ = $hxClasses.String = String;
String.__name__ = ["String"];
Array.prototype.__class__ = $hxClasses.Array = Array;
Array.__name__ = ["Array"];
Date.prototype.__class__ = $hxClasses.Date = Date;
Date.__name__ = ["Date"];
var Int = $hxClasses.Int = { __name__ : ["Int"]};
var Dynamic = $hxClasses.Dynamic = { __name__ : ["Dynamic"]};
var Float = $hxClasses.Float = Number;
Float.__name__ = ["Float"];
var Bool = $hxClasses.Bool = Boolean;
Bool.__ename__ = ["Bool"];
var Class = $hxClasses.Class = { __name__ : ["Class"]};
var Enum = { };
Xml.Element = "element";
Xml.PCData = "pcdata";
Xml.CData = "cdata";
Xml.Comment = "comment";
Xml.DocType = "doctype";
Xml.ProcessingInstruction = "processingInstruction";
Xml.Document = "document";
flash.ui.Multitouch.maxTouchPoints = 2;
flash.ui.Multitouch.supportedGestures = [];
flash.ui.Multitouch.supportsGestureEvents = false;
if(typeof(JSON) != "undefined") haxe.Json = JSON;
flash.display.DisplayObject.GRAPHICS_INVALID = 2;
flash.display.DisplayObject.MATRIX_INVALID = 4;
flash.display.DisplayObject.MATRIX_CHAIN_INVALID = 8;
flash.display.DisplayObject.MATRIX_OVERRIDDEN = 16;
flash.display.DisplayObject.TRANSFORM_INVALID = 32;
flash.display.DisplayObject.BOUNDS_INVALID = 64;
flash.display.DisplayObject.RENDER_VALIDATE_IN_PROGRESS = 1024;
flash.display.DisplayObject.ALL_RENDER_FLAGS = 98;
org.flixel.FlxObject.SEPARATE_BIAS = 4;
org.flixel.FlxObject.LEFT = 1;
org.flixel.FlxObject.RIGHT = 16;
org.flixel.FlxObject.UP = 256;
org.flixel.FlxObject.DOWN = 4096;
org.flixel.FlxObject.NONE = 0;
org.flixel.FlxObject.CEILING = 256;
org.flixel.FlxObject.FLOOR = 4096;
org.flixel.FlxObject.WALL = 17;
org.flixel.FlxObject.ANY = 4369;
org.flixel.FlxObject.PATH_FORWARD = 0;
org.flixel.FlxObject.PATH_BACKWARD = 1;
org.flixel.FlxObject.PATH_LOOP_FORWARD = 16;
org.flixel.FlxObject.PATH_LOOP_BACKWARD = 256;
org.flixel.FlxObject.PATH_YOYO = 4096;
org.flixel.FlxObject.PATH_HORIZONTAL_ONLY = 65536;
org.flixel.FlxObject.PATH_VERTICAL_ONLY = 1048576;
org.flixel.FlxObject._firstSeparateFlxRect = new org.flixel.util.FlxRect();
org.flixel.FlxObject._secondSeparateFlxRect = new org.flixel.util.FlxRect();
org.flixel.FlxObject._pZero = new org.flixel.util.FlxPoint();
org.flixel.FlxSprite.prefixLength = 0;
org.flixel.FlxSprite.postfixLength = 0;
org.flixel.FlxTypedGroup.ASCENDING = -1;
org.flixel.FlxTypedGroup.DESCENDING = 1;
flash.Lib.HTML_ACCELEROMETER_EVENT_TYPE = "devicemotion";
flash.Lib.HTML_ORIENTATION_EVENT_TYPE = "orientationchange";
flash.Lib.DEFAULT_HEIGHT = 500;
flash.Lib.DEFAULT_WIDTH = 500;
flash.Lib.HTML_DIV_EVENT_TYPES = ["resize","mouseover","mouseout","mousewheel","dblclick","click"];
flash.Lib.HTML_TOUCH_EVENT_TYPES = ["touchstart","touchmove","touchend"];
flash.Lib.HTML_TOUCH_ALT_EVENT_TYPES = ["mousedown","mousemove","mouseup"];
flash.Lib.HTML_WINDOW_EVENT_TYPES = ["keyup","keypress","keydown","resize","blur","focus"];
flash.Lib.NME_IDENTIFIER = "haxe:jeash";
flash.Lib.VENDOR_HTML_TAG = "data-";
flash.Lib.starttime = haxe.Timer.stamp();
flash.display._BitmapData.MinstdGenerator.a = 16807;
flash.display._BitmapData.MinstdGenerator.m = -2147483648 - 1;
flash.display.BitmapDataChannel.ALPHA = 8;
flash.display.BitmapDataChannel.BLUE = 4;
flash.display.BitmapDataChannel.GREEN = 2;
flash.display.BitmapDataChannel.RED = 1;
flash.display.Graphics.TILE_SCALE = 1;
flash.display.Graphics.TILE_ROTATION = 2;
flash.display.Graphics.TILE_RGB = 4;
flash.display.Graphics.TILE_ALPHA = 8;
flash.display.Graphics.TILE_TRANS_2x2 = 16;
flash.display.Graphics.TILE_BLEND_NORMAL = 0;
flash.display.Graphics.TILE_BLEND_ADD = 65536;
flash.display.Graphics.BMP_REPEAT = 16;
flash.display.Graphics.BMP_SMOOTH = 65536;
flash.display.Graphics.CORNER_ROUND = 0;
flash.display.Graphics.CORNER_MITER = 4096;
flash.display.Graphics.CORNER_BEVEL = 8192;
flash.display.Graphics.CURVE = 2;
flash.display.Graphics.END_NONE = 0;
flash.display.Graphics.END_ROUND = 256;
flash.display.Graphics.END_SQUARE = 512;
flash.display.Graphics.LINE = 1;
flash.display.Graphics.MOVE = 0;
flash.display.Graphics.NME_MAX_DIM = 5000;
flash.display.Graphics.PIXEL_HINTING = 16384;
flash.display.Graphics.RADIAL = 1;
flash.display.Graphics.SCALE_HORIZONTAL = 2;
flash.display.Graphics.SCALE_NONE = 0;
flash.display.Graphics.SCALE_NORMAL = 3;
flash.display.Graphics.SCALE_VERTICAL = 1;
flash.display.Graphics.SPREAD_REPEAT = 2;
flash.display.Graphics.SPREAD_REFLECT = 4;
flash.display.GraphicsPathCommand.LINE_TO = 2;
flash.display.GraphicsPathCommand.MOVE_TO = 1;
flash.display.GraphicsPathCommand.CURVE_TO = 3;
flash.display.GraphicsPathCommand.WIDE_LINE_TO = 5;
flash.display.GraphicsPathCommand.WIDE_MOVE_TO = 4;
flash.display.GraphicsPathCommand.NO_OP = 0;
flash.display.GraphicsPathCommand.CUBIC_CURVE_TO = 6;
flash.events.Event.ACTIVATE = "activate";
flash.events.Event.ADDED = "added";
flash.events.Event.ADDED_TO_STAGE = "addedToStage";
flash.events.Event.CANCEL = "cancel";
flash.events.Event.CHANGE = "change";
flash.events.Event.CLOSE = "close";
flash.events.Event.COMPLETE = "complete";
flash.events.Event.CONNECT = "connect";
flash.events.Event.CONTEXT3D_CREATE = "context3DCreate";
flash.events.Event.DEACTIVATE = "deactivate";
flash.events.Event.ENTER_FRAME = "enterFrame";
flash.events.Event.ID3 = "id3";
flash.events.Event.INIT = "init";
flash.events.Event.MOUSE_LEAVE = "mouseLeave";
flash.events.Event.OPEN = "open";
flash.events.Event.REMOVED = "removed";
flash.events.Event.REMOVED_FROM_STAGE = "removedFromStage";
flash.events.Event.RENDER = "render";
flash.events.Event.RESIZE = "resize";
flash.events.Event.SCROLL = "scroll";
flash.events.Event.SELECT = "select";
flash.events.Event.TAB_CHILDREN_CHANGE = "tabChildrenChange";
flash.events.Event.TAB_ENABLED_CHANGE = "tabEnabledChange";
flash.events.Event.TAB_INDEX_CHANGE = "tabIndexChange";
flash.events.Event.UNLOAD = "unload";
flash.events.Event.SOUND_COMPLETE = "soundComplete";
flash.events.MouseEvent.CLICK = "click";
flash.events.MouseEvent.DOUBLE_CLICK = "doubleClick";
flash.events.MouseEvent.MOUSE_DOWN = "mouseDown";
flash.events.MouseEvent.MOUSE_MOVE = "mouseMove";
flash.events.MouseEvent.MOUSE_OUT = "mouseOut";
flash.events.MouseEvent.MOUSE_OVER = "mouseOver";
flash.events.MouseEvent.MOUSE_UP = "mouseUp";
flash.events.MouseEvent.MOUSE_WHEEL = "mouseWheel";
flash.events.MouseEvent.RIGHT_CLICK = "rightClick";
flash.events.MouseEvent.RIGHT_MOUSE_DOWN = "rightMouseDown";
flash.events.MouseEvent.RIGHT_MOUSE_UP = "rightMouseUp";
flash.events.MouseEvent.ROLL_OUT = "rollOut";
flash.events.MouseEvent.ROLL_OVER = "rollOver";
flash.display.Stage.NAME = "Stage";
flash.display.Stage.nmeAcceleration = { x : 0.0, y : 1.0, z : 0.0};
flash.display.Stage.OrientationPortrait = 1;
flash.display.Stage.OrientationPortraitUpsideDown = 2;
flash.display.Stage.OrientationLandscapeRight = 3;
flash.display.Stage.OrientationLandscapeLeft = 4;
flash.display.Stage.DEFAULT_FRAMERATE = 0.0;
flash.display.Stage.UI_EVENTS_QUEUE_MAX = 1000;
flash.display.Stage.nmeMouseChanges = [flash.events.MouseEvent.MOUSE_OUT,flash.events.MouseEvent.MOUSE_OVER,flash.events.MouseEvent.ROLL_OUT,flash.events.MouseEvent.ROLL_OVER];
flash.display.Stage.nmeTouchChanges = ["touchOut","touchOver","touchRollOut","touchRollOver"];
flash.display.StageQuality.BEST = "best";
flash.display.StageQuality.HIGH = "high";
flash.display.StageQuality.MEDIUM = "medium";
flash.display.StageQuality.LOW = "low";
flash.errors.Error.DEFAULT_TO_STRING = "Error";
flash.events.TextEvent.LINK = "link";
flash.events.TextEvent.TEXT_INPUT = "textInput";
flash.events.ErrorEvent.ERROR = "error";
flash.events.Listener.sIDs = 1;
flash.events.EventPhase.CAPTURING_PHASE = 0;
flash.events.EventPhase.AT_TARGET = 1;
flash.events.EventPhase.BUBBLING_PHASE = 2;
flash.events.FocusEvent.FOCUS_IN = "focusIn";
flash.events.FocusEvent.FOCUS_OUT = "focusOut";
flash.events.FocusEvent.KEY_FOCUS_CHANGE = "keyFocusChange";
flash.events.FocusEvent.MOUSE_FOCUS_CHANGE = "mouseFocusChange";
flash.events.HTTPStatusEvent.HTTP_RESPONSE_STATUS = "httpResponseStatus";
flash.events.HTTPStatusEvent.HTTP_STATUS = "httpStatus";
flash.events.IOErrorEvent.IO_ERROR = "ioError";
flash.events.KeyboardEvent.KEY_DOWN = "keyDown";
flash.events.KeyboardEvent.KEY_UP = "keyUp";
flash.events.ProgressEvent.PROGRESS = "progress";
flash.events.ProgressEvent.SOCKET_DATA = "socketData";
flash.events.SecurityErrorEvent.SECURITY_ERROR = "securityError";
flash.events.TouchEvent.TOUCH_BEGIN = "touchBegin";
flash.events.TouchEvent.TOUCH_END = "touchEnd";
flash.events.TouchEvent.TOUCH_MOVE = "touchMove";
flash.events.TouchEvent.TOUCH_OUT = "touchOut";
flash.events.TouchEvent.TOUCH_OVER = "touchOver";
flash.events.TouchEvent.TOUCH_ROLL_OUT = "touchRollOut";
flash.events.TouchEvent.TOUCH_ROLL_OVER = "touchRollOver";
flash.events.TouchEvent.TOUCH_TAP = "touchTap";
flash.filters.DropShadowFilter.DEGREES_FULL_RADIUS = 360.0;
flash.geom.Transform.DEG_TO_RAD = Math.PI / 180.0;
flash.media.Sound.EXTENSION_MP3 = "mp3";
flash.media.Sound.EXTENSION_OGG = "ogg";
flash.media.Sound.EXTENSION_WAV = "wav";
flash.media.Sound.EXTENSION_AAC = "aac";
flash.media.Sound.MEDIA_TYPE_MP3 = "audio/mpeg";
flash.media.Sound.MEDIA_TYPE_OGG = "audio/ogg; codecs=\"vorbis\"";
flash.media.Sound.MEDIA_TYPE_WAV = "audio/wav; codecs=\"1\"";
flash.media.Sound.MEDIA_TYPE_AAC = "audio/mp4; codecs=\"mp4a.40.2\"";
flash.net.URLRequestMethod.DELETE = "DELETE";
flash.net.URLRequestMethod.GET = "GET";
flash.net.URLRequestMethod.HEAD = "HEAD";
flash.net.URLRequestMethod.OPTIONS = "OPTIONS";
flash.net.URLRequestMethod.POST = "POST";
flash.net.URLRequestMethod.PUT = "PUT";
flash.system.ApplicationDomain.currentDomain = new flash.system.ApplicationDomain(null);
flash.system.SecurityDomain.currentDomain = new flash.system.SecurityDomain();
flash.system.System.useCodePage = false;
flash.text.Font.DEFAULT_FONT_DATA = "q:55oy6:ascentd950.5y4:dataad84d277.5d564d277.5d564d320.5d293d1024d187.5d1024d442.5d362.5d84d362.5d84d277.5hy6:_widthd651.5y4:xMaxd564y4:xMind84y4:yMaxd746.5y4:yMind0y7:_heightd662.5y7:leadingd168y7:descentd241.5y8:charCodei55y15:leftsideBearingd84y12:advanceWidthd651.5y8:commandsai1i2i2i2i2i2i2i2hg:111oR0d950.5R1ad313.5d528.5d239.5d528.5d196.5d586.25d153.5d644d153.5d744.5d153.5d845d196.25d902.75d239d960.5d313.5d960.5d387d960.5d430d902.5d473d844.5d473d744.5d473d645d430d586.75d387d528.5d313.5d528.5d313.5d450.5d433.5d450.5d502d528.5d570.5d606.5d570.5d744.5d570.5d882d502d960.25d433.5d1038.5d313.5d1038.5d193d1038.5d124.75d960.25d56.5d882d56.5d744.5d56.5d606.5d124.75d528.5d193d450.5d313.5d450.5hR2d626.5R3d570.5R4d56.5R5d573.5R6d-14.5R7d517R8d168R9d241.5R10i111R11d56.5R12d626.5R13ai1i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3hg:54oR0d950.5R1ad338d610.5d270d610.5d230.25d657d190.5d703.5d190.5d784.5d190.5d865d230.25d911.75d270d958.5d338d958.5d406d958.5d445.75d911.75d485.5d865d485.5d784.5d485.5d703.5d445.75d657d406d610.5d338d610.5d538.5d294d538.5d386d500.5d368d461.75d358.5d423d349d385d349d285d349d232.25d416.5d179.5d484d172d620.5d201.5d577d246d553.75d290.5d530.5d344d530.5d456.5d530.5d521.75d598.75d587d667d587d784.5d587d899.5d519d969d451d1038.5d338d1038.5d208.5d1038.5d140d939.25d71.5d840d71.5d651.5d71.5d474.5d155.5d369.25d239.5d264d381d264d419d264d457.75d271.5d496.5d279d538.5d294hR2d651.5R3d587R4d71.5R5d760R6d-14.5R7d688.5R8d168R9d241.5R10i54R11d71.5R12d651.5R13ai1i3i3i3i3i3i3i3i3i1i2i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3hg:110oR0d950.5R1ad562d686d562d1024d470d1024d470d689d470d609.5d439d570d408d530.5d346d530.5d271.5d530.5d228.5d578d185.5d625.5d185.5d707.5d185.5d1024d93d1024d93d464d185.5d464d185.5d551d218.5d500.5d263.25d475.5d308d450.5d366.5d450.5d463d450.5d512.5d510.25d562d570d562d686hR2d649R3d562R4d93R5d573.5R6d0R7d480.5R8d168R9d241.5R10i110R11d93R12d649R13ai1i2i2i2i3i3i3i3i2i2i2i2i2i3i3i3i3hg:53oR0d950.5R1ad110.5d277.5d507d277.5d507d362.5d203d362.5d203d545.5d225d538d247d534.25d269d530.5d291d530.5d416d530.5d489d599d562d667.5d562d784.5d562d905d487d971.75d412d1038.5d275.5d1038.5d228.5d1038.5d179.75d1030.5d131d1022.5d79d1006.5d79d905d124d929.5d172d941.5d220d953.5d273.5d953.5d360d953.5d410.5d908d461d862.5d461d784.5d461d706.5d410.5d661d360d615.5d273.5d615.5d233d615.5d192.75d624.5d152.5d633.5d110.5d652.5d110.5d277.5hR2d651.5R3d562R4d79R5d746.5R6d-14.5R7d667.5R8d168R9d241.5R10i53R11d79R12d651.5R13ai1i2i2i2i2i3i3i3i3i3i3i3i3i2i3i3i3i3i3i3i3i3i2hg:109oR0d950.5R1ad532.5d571.5d567d509.5d615d480d663d450.5d728d450.5d815.5d450.5d863d511.75d910.5d573d910.5d686d910.5d1024d818d1024d818d689d818d608.5d789.5d569.5d761d530.5d702.5d530.5d631d530.5d589.5d578d548d625.5d548d707.5d548d1024d455.5d1024d455.5d689d455.5d608d427d569.25d398.5d530.5d339d530.5d268.5d530.5d227d578.25d185.5d626d185.5d707.5d185.5d1024d93d1024d93d464d185.5d464d185.5d551d217d499.5d261d475d305d450.5d365.5d450.5d426.5d450.5d469.25d481.5d512d512.5d532.5d571.5hR2d997.5R3d910.5R4d93R5d573.5R6d0R7d480.5R8d168R9d241.5R10i109R11d93R12d997.5R13ai1i3i3i3i3i2i2i2i3i3i3i3i2i2i2i3i3i3i3i2i2i2i2i2i3i3i3i3hg:52oR0d950.5R1ad387d365.5d132d764d387d764d387d365.5d360.5d277.5d487.5d277.5d487.5d764d594d764d594d848d487.5d848d487.5d1024d387d1024d387d848d50d848d50d750.5d360.5d277.5hR2d651.5R3d594R4d50R5d746.5R6d0R7d696.5R8d168R9d241.5R10i52R11d50R12d651.5R13ai1i2i2i2i1i2i2i2i2i2i2i2i2i2i2i2hg:108oR0d950.5R1ad96.5d246d188.5d246d188.5d1024d96.5d1024d96.5d246hR2d284.5R3d188.5R4d96.5R5d778R6d0R7d681.5R8d168R9d241.5R10i108R11d96.5R12d284.5R13ai1i2i2i2i2hg:51oR0d950.5R1ad415.5d621.5d488d637d528.75d686d569.5d735d569.5d807d569.5d917.5d493.5d978d417.5d1038.5d277.5d1038.5d230.5d1038.5d180.75d1029.25d131d1020d78d1001.5d78d904d120d928.5d170d941d220d953.5d274.5d953.5d369.5d953.5d419.25d916d469d878.5d469d807d469d741d422.75d703.75d376.5d666.5d294d666.5d207d666.5d207d583.5d298d583.5d372.5d583.5d412d553.75d451.5d524d451.5d468d451.5d410.5d410.75d379.75d370d349d294d349d252.5d349d205d358d157.5d367d100.5d386d100.5d296d158d280d208.25d272d258.5d264d303d264d418d264d485d316.25d552d368.5d552d457.5d552d519.5d516.5d562.25d481d605d415.5d621.5hR2d651.5R3d569.5R4d78R5d760R6d-14.5R7d682R8d168R9d241.5R10i51R11d78R12d651.5R13ai1i3i3i3i3i3i3i2i3i3i3i3i3i3i2i2i2i3i3i3i3i3i3i2i3i3i3i3i3i3hg:107oR0d950.5R1ad93d246d185.5d246d185.5d705.5d460d464d577.5d464d280.5d726d590d1024d470d1024d185.5d750.5d185.5d1024d93d1024d93d246hR2d593R3d590R4d93R5d778R6d0R7d685R8d168R9d241.5R10i107R11d93R12d593R13ai1i2i2i2i2i2i2i2i2i2i2i2hg:50oR0d950.5R1ad196.5d939d549d939d549d1024d75d1024d75d939d132.5d879.5d231.75d779.25d331d679d356.5d650d405d595.5d424.25d557.75d443.5d520d443.5d483.5d443.5d424d401.75d386.5d360d349d293d349d245.5d349d192.75d365.5d140d382d80d415.5d80d313.5d141d289d194d276.5d247d264d291d264d407d264d476d322d545d380d545d477d545d523d527.75d564.25d510.5d605.5d465d661.5d452.5d676d385.5d745.25d318.5d814.5d196.5d939hR2d651.5R3d549R4d75R5d760R6d0R7d685R8d168R9d241.5R10i50R11d75R12d651.5R13ai1i2i2i2i2i3i3i3i3i3i3i3i3i2i3i3i3i3i3i3i3i3hg:106oR0d950.5R1ad96.5d464d188.5d464d188.5d1034d188.5d1141d147.75d1189d107d1237d16.5d1237d-18.5d1237d-18.5d1159d6d1159d58.5d1159d77.5d1134.75d96.5d1110.5d96.5d1034d96.5d464d96.5d246d188.5d246d188.5d362.5d96.5d362.5d96.5d246hR2d284.5R3d188.5R4d-18.5R5d778R6d-213R7d796.5R8d168R9d241.5R10i106R11d-18.5R12d284.5R13ai1i2i2i3i3i2i2i2i3i3i2i1i2i2i2i2hg:49oR0d950.5R1ad127d939d292d939d292d369.5d112.5d405.5d112.5d313.5d291d277.5d392d277.5d392d939d557d939d557d1024d127d1024d127d939hR2d651.5R3d557R4d112.5R5d746.5R6d0R7d634R8d168R9d241.5R10i49R11d112.5R12d651.5R13ai1i2i2i2i2i2i2i2i2i2i2i2hg:105oR0d950.5R1ad96.5d464d188.5d464d188.5d1024d96.5d1024d96.5d464d96.5d246d188.5d246d188.5d362.5d96.5d362.5d96.5d246hR2d284.5R3d188.5R4d96.5R5d778R6d0R7d681.5R8d168R9d241.5R10i105R11d96.5R12d284.5R13ai1i2i2i2i2i1i2i2i2i2hg:48oR0d950.5R1ad325.5d344d247.5d344d208.25d420.75d169d497.5d169d651.5d169d805d208.25d881.75d247.5d958.5d325.5d958.5d404d958.5d443.25d881.75d482.5d805d482.5d651.5d482.5d497.5d443.25d420.75d404d344d325.5d344d325.5d264d451d264d517.25d363.25d583.5d462.5d583.5d651.5d583.5d840d517.25d939.25d451d1038.5d325.5d1038.5d200d1038.5d133.75d939.25d67.5d840d67.5d651.5d67.5d462.5d133.75d363.25d200d264d325.5d264hR2d651.5R3d583.5R4d67.5R5d760R6d-14.5R7d692.5R8d168R9d241.5R10i48R11d67.5R12d651.5R13ai1i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3hg:104oR0d950.5R1ad562d686d562d1024d470d1024d470d689d470d609.5d439d570d408d530.5d346d530.5d271.5d530.5d228.5d578d185.5d625.5d185.5d707.5d185.5d1024d93d1024d93d246d185.5d246d185.5d551d218.5d500.5d263.25d475.5d308d450.5d366.5d450.5d463d450.5d512.5d510.25d562d570d562d686hR2d649R3d562R4d93R5d778R6d0R7d685R8d168R9d241.5R10i104R11d93R12d649R13ai1i2i2i2i3i3i3i3i2i2i2i2i2i3i3i3i3hg:47oR0d950.5R1ad260d277.5d345d277.5d85d1119d0d1119d260d277.5hR2d345R3d345R4d0R5d746.5R6d-95R7d746.5R8d168R9d241.5R10i47R11d0R12d345R13ai1i2i2i2i2hg:103oR0d950.5R1ad465d737.5d465d637.5d423.75d582.5d382.5d527.5d308d527.5d234d527.5d192.75d582.5d151.5d637.5d151.5d737.5d151.5d837d192.75d892d234d947d308d947d382.5d947d423.75d892d465d837d465d737.5d557d954.5d557d1097.5d493.5d1167.25d430d1237d299d1237d250.5d1237d207.5d1229.75d164.5d1222.5d124d1207.5d124d1118d164.5d1140d204d1150.5d243.5d1161d284.5d1161d375d1161d420d1113.75d465d1066.5d465d971d465d925.5d436.5d975d392d999.5d347.5d1024d285.5d1024d182.5d1024d119.5d945.5d56.5d867d56.5d737.5d56.5d607.5d119.5d529d182.5d450.5d285.5d450.5d347.5d450.5d392d475d436.5d499.5d465d549d465d464d557d464d557d954.5hR2d650R3d557R4d56.5R5d573.5R6d-213R7d517R8d168R9d241.5R10i103R11d56.5R12d650R13ai1i3i3i3i3i3i3i3i3i1i3i3i3i3i2i3i3i3i3i2i3i3i3i3i3i3i3i3i2i2i2hg:46oR0d950.5R1ad109.5d897d215d897d215d1024d109.5d1024d109.5d897hR2d325.5R3d215R4d109.5R5d127R6d0R7d17.5R8d168R9d241.5R10i46R11d109.5R12d325.5R13ai1i2i2i2i2hg:102oR0d950.5R1ad380d246d380d322.5d292d322.5d242.5d322.5d223.25d342.5d204d362.5d204d414.5d204d464d355.5d464d355.5d535.5d204d535.5d204d1024d111.5d1024d111.5d535.5d23.5d535.5d23.5d464d111.5d464d111.5d425d111.5d331.5d155d288.75d198.5d246d293d246d380d246hR2d360.5R3d380R4d23.5R5d778R6d0R7d754.5R8d168R9d241.5R10i102R11d23.5R12d360.5R13ai1i2i2i3i3i2i2i2i2i2i2i2i2i2i2i2i3i3i2hg:45oR0d950.5R1ad50d702.5d319.5d702.5d319.5d784.5d50d784.5d50d702.5hR2d369.5R3d319.5R4d50R5d321.5R6d239.5R7d271.5R8d168R9d241.5R10i45R11d50R12d369.5R13ai1i2i2i2i2hg:101oR0d950.5R1ad575.5d721d575.5d766d152.5d766d158.5d861d209.75d910.75d261d960.5d352.5d960.5d405.5d960.5d455.25d947.5d505d934.5d554d908.5d554d995.5d504.5d1016.5d452.5d1027.5d400.5d1038.5d347d1038.5d213d1038.5d134.75d960.5d56.5d882.5d56.5d749.5d56.5d612d130.75d531.25d205d450.5d331d450.5d444d450.5d509.75d523.25d575.5d596d575.5d721d483.5d694d482.5d618.5d441.25d573.5d400d528.5d332d528.5d255d528.5d208.75d572d162.5d615.5d155.5d694.5d483.5d694hR2d630R3d575.5R4d56.5R5d573.5R6d-14.5R7d517R8d168R9d241.5R10i101R11d56.5R12d630R13ai1i2i2i3i3i3i3i2i3i3i3i3i3i3i3i3i1i3i3i3i3i2hg:44oR0d950.5R1ad120d897d225.5d897d225.5d983d143.5d1143d79d1143d120d983d120d897hR2d325.5R3d225.5R4d79R5d127R6d-119R7d48R8d168R9d241.5R10i44R11d79R12d325.5R13ai1i2i2i2i2i2i2hg:100oR0d950.5R1ad465d549d465d246d557d246d557d1024d465d1024d465d940d436d990d391.75d1014.25d347.5d1038.5d285.5d1038.5d184d1038.5d120.25d957.5d56.5d876.5d56.5d744.5d56.5d612.5d120.25d531.5d184d450.5d285.5d450.5d347.5d450.5d391.75d474.75d436d499d465d549d151.5d744.5d151.5d846d193.25d903.75d235d961.5d308d961.5d381d961.5d423d903.75d465d846d465d744.5d465d643d423d585.25d381d527.5d308d527.5d235d527.5d193.25d585.25d151.5d643d151.5d744.5hR2d650R3d557R4d56.5R5d778R6d-14.5R7d721.5R8d168R9d241.5R10i100R11d56.5R12d650R13ai1i2i2i2i2i2i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3hg:43oR0d950.5R1ad471d382d471d660.5d749.5d660.5d749.5d745.5d471d745.5d471d1024d387d1024d387d745.5d108.5d745.5d108.5d660.5d387d660.5d387d382d471d382hR2d858R3d749.5R4d108.5R5d642R6d0R7d533.5R8d168R9d241.5R10i43R11d108.5R12d858R13ai1i2i2i2i2i2i2i2i2i2i2i2i2hg:99oR0d950.5R1ad499.5d485.5d499.5d571.5d460.5d550d421.25d539.25d382d528.5d342d528.5d252.5d528.5d203d585.25d153.5d642d153.5d744.5d153.5d847d203d903.75d252.5d960.5d342d960.5d382d960.5d421.25d949.75d460.5d939d499.5d917.5d499.5d1002.5d461d1020.5d419.75d1029.5d378.5d1038.5d332d1038.5d205.5d1038.5d131d959d56.5d879.5d56.5d744.5d56.5d607.5d131.75d529d207d450.5d338d450.5d380.5d450.5d421d459.25d461.5d468d499.5d485.5hR2d563R3d499.5R4d56.5R5d573.5R6d-14.5R7d517R8d168R9d241.5R10i99R11d56.5R12d563R13ai1i2i3i3i3i3i3i3i3i3i2i3i3i3i3i3i3i3i3hg:42oR0d950.5R1ad481.5d400.5d302d497.5d481.5d595d452.5d644d284.5d542.5d284.5d731d227.5d731d227.5d542.5d59.5d644d30.5d595d210d497.5d30.5d400.5d59.5d351d227.5d452.5d227.5d264d284.5d264d284.5d452.5d452.5d351d481.5d400.5hR2d512R3d481.5R4d30.5R5d760R6d293R7d729.5R8d168R9d241.5R10i42R11d30.5R12d512R13ai1i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2hg:98oR0d950.5R1ad498.5d744.5d498.5d643d456.75d585.25d415d527.5d342d527.5d269d527.5d227.25d585.25d185.5d643d185.5d744.5d185.5d846d227.25d903.75d269d961.5d342d961.5d415d961.5d456.75d903.75d498.5d846d498.5d744.5d185.5d549d214.5d499d258.75d474.75d303d450.5d364.5d450.5d466.5d450.5d530.25d531.5d594d612.5d594d744.5d594d876.5d530.25d957.5d466.5d1038.5d364.5d1038.5d303d1038.5d258.75d1014.25d214.5d990d185.5d940d185.5d1024d93d1024d93d246d185.5d246d185.5d549hR2d650R3d594R4d93R5d778R6d-14.5R7d685R8d168R9d241.5R10i98R11d93R12d650R13ai1i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3i2i2i2i2i2hg:41oR0d950.5R1ad82d247d162d247d237d365d274.25d478d311.5d591d311.5d702.5d311.5d814.5d274.25d928d237d1041.5d162d1159d82d1159d148.5d1044.5d181.25d931.25d214d818d214d702.5d214d587d181.25d474.5d148.5d362d82d247hR2d399.5R3d311.5R4d82R5d777R6d-135R7d695R8d168R9d241.5R10i41R11d82R12d399.5R13ai1i2i3i3i3i3i2i3i3i3i3hg:97oR0d950.5R1ad351d742.5d239.5d742.5d196.5d768d153.5d793.5d153.5d855d153.5d904d185.75d932.75d218d961.5d273.5d961.5d350d961.5d396.25d907.25d442.5d853d442.5d763d442.5d742.5d351d742.5d534.5d704.5d534.5d1024d442.5d1024d442.5d939d411d990d364d1014.25d317d1038.5d249d1038.5d163d1038.5d112.25d990.25d61.5d942d61.5d861d61.5d766.5d124.75d718.5d188d670.5d313.5d670.5d442.5d670.5d442.5d661.5d442.5d598d400.75d563.25d359d528.5d283.5d528.5d235.5d528.5d190d540d144.5d551.5d102.5d574.5d102.5d489.5d153d470d200.5d460.25d248d450.5d293d450.5d414.5d450.5d474.5d513.5d534.5d576.5d534.5d704.5hR2d627.5R3d534.5R4d61.5R5d573.5R6d-14.5R7d512R8d168R9d241.5R10i97R11d61.5R12d627.5R13ai1i3i3i3i3i3i3i2i2i1i2i2i2i3i3i3i3i3i3i2i2i3i3i3i3i2i3i3i3i3hg:40oR0d950.5R1ad317.5d247d250.5d362d218d474.5d185.5d587d185.5d702.5d185.5d818d218.25d931.25d251d1044.5d317.5d1159d237.5d1159d162.5d1041.5d125.25d928d88d814.5d88d702.5d88d591d125d478d162d365d237.5d247d317.5d247hR2d399.5R3d317.5R4d88R5d777R6d-135R7d689R8d168R9d241.5R10i40R11d88R12d399.5R13ai1i3i3i3i3i2i3i3i3i3i2hg:96oR0d950.5R1ad183.5d205d324.5d392d248d392d85d205d183.5d205hR2d512R3d324.5R4d85R5d819R6d632R7d734R8d168R9d241.5R10i96R11d85R12d512R13ai1i2i2i2i2hg:39oR0d950.5R1ad183.5d277.5d183.5d555d98.5d555d98.5d277.5d183.5d277.5hR2d281.5R3d183.5R4d98.5R5d746.5R6d469R7d648R8d168R9d241.5R10i39R11d98.5R12d281.5R13ai1i2i2i2i2hg:95oR0d950.5R1ad522d1194d522d1265.5d-10d1265.5d-10d1194d522d1194hR2d512R3d522R4d-10R5d-170R6d-241.5R7d-160R8d168R9d241.5R10i95R11d-10R12d512R13ai1i2i2i2i2hg:38oR0d950.5R1ad249d622.5d203.5d663d182.25d703.25d161d743.5d161d787.5d161d860.5d214d909d267d957.5d347d957.5d394.5d957.5d436d941.75d477.5d926d514d894d249d622.5d319.5d566.5d573.5d826.5d603d782d619.5d731.25d636d680.5d639d623.5d732d623.5d726d689.5d700d754d674d818.5d627.5d881.5d767d1024d641d1024d569.5d950.5d517.5d995d460.5d1016.75d403.5d1038.5d338d1038.5d217.5d1038.5d141d969.75d64.5d901d64.5d793.5d64.5d729.5d98d673.25d131.5d617d198.5d567.5d174.5d536d162d504.75d149.5d473.5d149.5d443.5d149.5d362.5d205d313.25d260.5d264d352.5d264d394d264d435.25d273d476.5d282d519d300d519d391d475.5d367.5d436d355.25d396.5d343d362.5d343d310d343d277.25d370.75d244.5d398.5d244.5d442.5d244.5d468d259.25d493.75d274d519.5d319.5d566.5hR2d798.5R3d767R4d64.5R5d760R6d-14.5R7d695.5R8d168R9d241.5R10i38R11d64.5R12d798.5R13ai1i3i3i3i3i3i3i2i1i2i3i3i2i3i3i2i2i2i3i3i3i3i3i3i3i3i3i3i3i3i2i3i3i3i3i3i3hg:94oR0d950.5R1ad478d277.5d749.5d556d649d556d429d358.5d209d556d108.5d556d380d277.5d478d277.5hR2d858R3d749.5R4d108.5R5d746.5R6d468R7d638R8d168R9d241.5R10i94R11d108.5R12d858R13ai1i2i2i2i2i2i2i2hg:37oR0d950.5R1ad744.5d695.5d701d695.5d676.25d732.5d651.5d769.5d651.5d835.5d651.5d900.5d676.25d937.75d701d975d744.5d975d787d975d811.75d937.75d836.5d900.5d836.5d835.5d836.5d770d811.75d732.75d787d695.5d744.5d695.5d744.5d632d823.5d632d870d687d916.5d742d916.5d835.5d916.5d929d869.75d983.75d823d1038.5d744.5d1038.5d664.5d1038.5d618d983.75d571.5d929d571.5d835.5d571.5d741.5d618.25d686.75d665d632d744.5d632d228.5d327.5d185.5d327.5d160.75d364.75d136d402d136d467d136d533d160.5d570d185d607d228.5d607d272d607d296.75d570d321.5d533d321.5d467d321.5d402.5d296.5d365d271.5d327.5d228.5d327.5d680d264d760d264d293d1038.5d213d1038.5d680d264d228.5d264d307.5d264d354.5d318.75d401.5d373.5d401.5d467d401.5d561.5d354.75d616d308d670.5d228.5d670.5d149d670.5d102.75d615.75d56.5d561d56.5d467d56.5d374d103d319d149.5d264d228.5d264hR2d973R3d916.5R4d56.5R5d760R6d-14.5R7d703.5R8d168R9d241.5R10i37R11d56.5R12d973R13ai1i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3i1i2i2i2i2i1i3i3i3i3i3i3i3i3hg:93oR0d950.5R1ad311.5d246d311.5d1159d99.5d1159d99.5d1087.5d219d1087.5d219d317.5d99.5d317.5d99.5d246d311.5d246hR2d399.5R3d311.5R4d99.5R5d778R6d-135R7d678.5R8d168R9d241.5R10i93R11d99.5R12d399.5R13ai1i2i2i2i2i2i2i2i2hg:36oR0d950.5R1ad346d1174.5d296d1174.5d295.5d1024d243d1023d190.5d1011.75d138d1000.5d85d978d85d888d136d920d188.25d936.25d240.5d952.5d296d953d296d725d185.5d707d135.25d664d85d621d85d546d85d464.5d139.5d417.5d194d370.5d296d363.5d296d246d346d246d346d362d392.5d364d436d371.75d479.5d379.5d521d393d521d480.5d479.5d459.5d435.75d448d392d436.5d346d434.5d346d648d459.5d665.5d513d710.5d566.5d755.5d566.5d833.5d566.5d918d509.75d966.75d453d1015.5d346d1023d346d1174.5d296d639d296d434d238d440.5d207.5d467d177d493.5d177d537.5d177d580.5d205.25d604.5d233.5d628.5d296d639d346d735d346d951.5d409.5d943d441.75d915.5d474d888d474d843d474d799d443.25d773d412.5d747d346d735hR2d651.5R3d566.5R4d85R5d778R6d-150.5R7d693R8d168R9d241.5R10i36R11d85R12d651.5R13ai1i2i2i3i3i2i3i3i2i3i3i3i3i2i2i2i3i3i2i3i3i2i3i3i3i3i2i1i2i3i3i3i3i1i2i3i3i3i3hg:92oR0d950.5R1ad85d277.5d345d1119d260d1119d0d277.5d85d277.5hR2d345R3d345R4d0R5d746.5R6d-95R7d746.5R8d168R9d241.5R10i92R11d0R12d345R13ai1i2i2i2i2hg:35oR0d950.5R1ad523.5d573.5d378d573.5d336d740.5d482.5d740.5d523.5d573.5d448.5d289d396.5d496.5d542.5d496.5d595d289d675d289d623.5d496.5d779.5d496.5d779.5d573.5d604d573.5d563d740.5d722d740.5d722d817d543.5d817d491.5d1024d411.5d1024d463d817d316.5d817d265d1024d184.5d1024d236.5d817d79d817d79d740.5d255d740.5d297d573.5d136d573.5d136d496.5d316.5d496.5d367.5d289d448.5d289hR2d858R3d779.5R4d79R5d735R6d0R7d656R8d168R9d241.5R10i35R11d79R12d858R13ai1i2i2i2i2i1i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2i2hg:91oR0d950.5R1ad88d246d300d246d300d317.5d180d317.5d180d1087.5d300d1087.5d300d1159d88d1159d88d246hR2d399.5R3d300R4d88R5d778R6d-135R7d690R8d168R9d241.5R10i91R11d88R12d399.5R13ai1i2i2i2i2i2i2i2i2hg:34oR0d950.5R1ad183.5d277.5d183.5d555d98.5d555d98.5d277.5d183.5d277.5d372.5d277.5d372.5d555d287.5d555d287.5d277.5d372.5d277.5hR2d471R3d372.5R4d98.5R5d746.5R6d469R7d648R8d168R9d241.5R10i34R11d98.5R12d471R13ai1i2i2i2i2i1i2i2i2i2hg:90oR0d950.5R1ad57.5d277.5d644d277.5d644d354.5d172d939d655.5d939d655.5d1024d46d1024d46d947d518d362.5d57.5d362.5d57.5d277.5hR2d701.5R3d655.5R4d46R5d746.5R6d0R7d700.5R8d168R9d241.5R10i90R11d46R12d701.5R13ai1i2i2i2i2i2i2i2i2i2i2hg:33oR0d950.5R1ad154.5d897d256d897d256d1024d154.5d1024d154.5d897d154.5d277.5d256d277.5d256d605d246d783.5d165d783.5d154.5d605d154.5d277.5hR2d410.5R3d256R4d154.5R5d746.5R6d0R7d592R8d168R9d241.5R10i33R11d154.5R12d410.5R13ai1i2i2i2i2i1i2i2i2i2i2i2hg:89oR0d950.5R1ad-2d277.5d106.5d277.5d313.5d584.5d519d277.5d627.5d277.5d363.5d668.5d363.5d1024d262d1024d262d668.5d-2d277.5hR2d625.5R3d627.5R4d-2R5d746.5R6d0R7d748.5R8d168R9d241.5R10i89R11d-2R12d625.5R13ai1i2i2i2i2i2i2i2i2i2hg:32oR0d950.5R1ahR2d325.5R3d0R4d0R5d0R6d0R7d0R8d168R9d241.5R10i32R11d0R12d325.5R13ahg:88oR0d950.5R1ad64.5d277.5d173d277.5d358.5d555d545d277.5d653.5d277.5d413.5d636d669.5d1024d561d1024d351d706.5d139.5d1024d30.5d1024d297d625.5d64.5d277.5hR2d701.5R3d669.5R4d30.5R5d746.5R6d0R7d716R8d168R9d241.5R10i88R11d30.5R12d701.5R13ai1i2i2i2i2i2i2i2i2i2i2i2i2hg:87oR0d950.5R1ad34d277.5d136d277.5d293d908.5d449.5d277.5d563d277.5d720d908.5d876.5d277.5d979d277.5d791.5d1024d664.5d1024d507d376d348d1024d221d1024d34d277.5hR2d1012.5R3d979R4d34R5d746.5R6d0R7d712.5R8d168R9d241.5R10i87R11d34R12d1012.5R13ai1i2i2i2i2i2i2i2i2i2i2i2i2i2hg:86oR0d950.5R1ad293d1024d8d277.5d113.5d277.5d350d906d587d277.5d692d277.5d407.5d1024d293d1024hR2d700.5R3d692R4d8R5d746.5R6d0R7d738.5R8d168R9d241.5R10i86R11d8R12d700.5R13ai1i2i2i2i2i2i2i2hg:85oR0d950.5R1ad89d277.5d190.5d277.5d190.5d731d190.5d851d234d903.75d277.5d956.5d375d956.5d472d956.5d515.5d903.75d559d851d559d731d559d277.5d660.5d277.5d660.5d743.5d660.5d889.5d588.25d964d516d1038.5d375d1038.5d233.5d1038.5d161.25d964d89d889.5d89d743.5d89d277.5hR2d749.5R3d660.5R4d89R5d746.5R6d-14.5R7d657.5R8d168R9d241.5R10i85R11d89R12d749.5R13ai1i2i2i3i3i3i3i2i2i2i3i3i3i3i2hg:84oR0d950.5R1ad-3d277.5d628.5d277.5d628.5d362.5d363.5d362.5d363.5d1024d262d1024d262d362.5d-3d362.5d-3d277.5hR2d625.5R3d628.5R4d-3R5d746.5R6d0R7d749.5R8d168R9d241.5R10i84R11d-3R12d625.5R13ai1i2i2i2i2i2i2i2i2hg:83oR0d950.5R1ad548d302d548d400.5d490.5d373d439.5d359.5d388.5d346d341d346d258.5d346d213.75d378d169d410d169d469d169d518.5d198.75d543.75d228.5d569d311.5d584.5d372.5d597d485.5d618.5d539.25d672.75d593d727d593d818d593d926.5d520.25d982.5d447.5d1038.5d307d1038.5d254d1038.5d194.25d1026.5d134.5d1014.5d70.5d991d70.5d887d132d921.5d191d939d250d956.5d307d956.5d393.5d956.5d440.5d922.5d487.5d888.5d487.5d825.5d487.5d770.5d453.75d739.5d420d708.5d343d693d281.5d681d168.5d658.5d118d610.5d67.5d562.5d67.5d477d67.5d378d137.25d321d207d264d329.5d264d382d264d436.5d273.5d491d283d548d302hR2d650R3d593R4d67.5R5d760R6d-14.5R7d692.5R8d168R9d241.5R10i83R11d67.5R12d650R13ai1i2i3i3i3i3i3i3i2i3i3i3i3i3i3i2i3i3i3i3i3i3i2i3i3i3i3i3i3hg:82oR0d950.5R1ad454.5d674d487d685d517.75d721d548.5d757d579.5d820d682d1024d573.5d1024d478d832.5d441d757.5d406.25d733d371.5d708.5d311.5d708.5d201.5d708.5d201.5d1024d100.5d1024d100.5d277.5d328.5d277.5d456.5d277.5d519.5d331d582.5d384.5d582.5d492.5d582.5d563d549.75d609.5d517d656d454.5d674d201.5d360.5d201.5d625.5d328.5d625.5d401.5d625.5d438.75d591.75d476d558d476d492.5d476d427d438.75d393.75d401.5d360.5d328.5d360.5d201.5d360.5hR2d711.5R3d682R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i82R11d100.5R12d711.5R13ai1i3i3i2i2i2i3i3i2i2i2i2i2i3i3i3i3i1i2i2i3i3i3i3i2hg:81oR0d950.5R1ad403.5d346d293.5d346d228.75d428d164d510d164d651.5d164d792.5d228.75d874.5d293.5d956.5d403.5d956.5d513.5d956.5d577.75d874.5d642d792.5d642d651.5d642d510d577.75d428d513.5d346d403.5d346d545d1010.5d678d1156d556d1156d445.5d1036.5d429d1037.5d420.25d1038d411.5d1038.5d403.5d1038.5d246d1038.5d151.75d933.25d57.5d828d57.5d651.5d57.5d474.5d151.75d369.25d246d264d403.5d264d560.5d264d654.5d369.25d748.5d474.5d748.5d651.5d748.5d781.5d696.25d874d644d966.5d545d1010.5hR2d806R3d748.5R4d57.5R5d760R6d-132R7d702.5R8d168R9d241.5R10i81R11d57.5R12d806R13ai1i3i3i3i3i3i3i3i3i1i2i2i2i3i3i3i3i3i3i3i3i3i3hg:80oR0d950.5R1ad201.5d360.5d201.5d641d328.5d641d399d641d437.5d604.5d476d568d476d500.5d476d433.5d437.5d397d399d360.5d328.5d360.5d201.5d360.5d100.5d277.5d328.5d277.5d454d277.5d518.25d334.25d582.5d391d582.5d500.5d582.5d611d518.25d667.5d454d724d328.5d724d201.5d724d201.5d1024d100.5d1024d100.5d277.5hR2d617.5R3d582.5R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i80R11d100.5R12d617.5R13ai1i2i2i3i3i3i3i2i1i2i3i3i3i3i2i2i2i2hg:79oR0d950.5R1ad403.5d346d293.5d346d228.75d428d164d510d164d651.5d164d792.5d228.75d874.5d293.5d956.5d403.5d956.5d513.5d956.5d577.75d874.5d642d792.5d642d651.5d642d510d577.75d428d513.5d346d403.5d346d403.5d264d560.5d264d654.5d369.25d748.5d474.5d748.5d651.5d748.5d828d654.5d933.25d560.5d1038.5d403.5d1038.5d246d1038.5d151.75d933.5d57.5d828.5d57.5d651.5d57.5d474.5d151.75d369.25d246d264d403.5d264hR2d806R3d748.5R4d57.5R5d760R6d-14.5R7d702.5R8d168R9d241.5R10i79R11d57.5R12d806R13ai1i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3hg:78oR0d950.5R1ad100.5d277.5d236.5d277.5d567.5d902d567.5d277.5d665.5d277.5d665.5d1024d529.5d1024d198.5d399.5d198.5d1024d100.5d1024d100.5d277.5hR2d766R3d665.5R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i78R11d100.5R12d766R13ai1i2i2i2i2i2i2i2i2i2i2hg:77oR0d950.5R1ad100.5d277.5d251d277.5d441.5d785.5d633d277.5d783.5d277.5d783.5d1024d685d1024d685d368.5d492.5d880.5d391d880.5d198.5d368.5d198.5d1024d100.5d1024d100.5d277.5hR2d883.5R3d783.5R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i77R11d100.5R12d883.5R13ai1i2i2i2i2i2i2i2i2i2i2i2i2i2hg:76oR0d950.5R1ad100.5d277.5d201.5d277.5d201.5d939d565d939d565d1024d100.5d1024d100.5d277.5hR2d570.5R3d565R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i76R11d100.5R12d570.5R13ai1i2i2i2i2i2i2hg:75oR0d950.5R1ad100.5d277.5d201.5d277.5d201.5d593d536.5d277.5d666.5d277.5d296d625.5d693d1024d560d1024d201.5d664.5d201.5d1024d100.5d1024d100.5d277.5hR2d671.5R3d693R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i75R11d100.5R12d671.5R13ai1i2i2i2i2i2i2i2i2i2i2i2hg:74oR0d950.5R1ad100.5d277.5d201.5d277.5d201.5d972d201.5d1107d150.25d1168d99d1229d-14.5d1229d-53d1229d-53d1144d-21.5d1144d45.5d1144d73d1106.5d100.5d1069d100.5d972d100.5d277.5hR2d302R3d201.5R4d-53R5d746.5R6d-205R7d799.5R8d168R9d241.5R10i74R11d-53R12d302R13ai1i2i2i3i3i2i2i2i3i3i2hg:73oR0d950.5R1ad100.5d277.5d201.5d277.5d201.5d1024d100.5d1024d100.5d277.5hR2d302R3d201.5R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i73R11d100.5R12d302R13ai1i2i2i2i2hg:72oR0d950.5R1ad100.5d277.5d201.5d277.5d201.5d583.5d568.5d583.5d568.5d277.5d669.5d277.5d669.5d1024d568.5d1024d568.5d668.5d201.5d668.5d201.5d1024d100.5d1024d100.5d277.5hR2d770R3d669.5R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i72R11d100.5R12d770R13ai1i2i2i2i2i2i2i2i2i2i2i2i2hg:71oR0d950.5R1ad609.5d917.5d609.5d717d444.5d717d444.5d634d709.5d634d709.5d954.5d651d996d580.5d1017.25d510d1038.5d430d1038.5d255d1038.5d156.25d936.25d57.5d834d57.5d651.5d57.5d468.5d156.25d366.25d255d264d430d264d503d264d568.75d282d634.5d300d690d335d690d442.5d634d395d571d371d508d347d438.5d347d301.5d347d232.75d423.5d164d500d164d651.5d164d802.5d232.75d879d301.5d955.5d438.5d955.5d492d955.5d534d946.25d576d937d609.5d917.5hR2d793.5R3d709.5R4d57.5R5d760R6d-14.5R7d702.5R8d168R9d241.5R10i71R11d57.5R12d793.5R13ai1i2i2i2i2i2i3i3i3i3i3i3i3i3i2i3i3i3i3i3i3i3i3hg:70oR0d950.5R1ad100.5d277.5d529.5d277.5d529.5d362.5d201.5d362.5d201.5d582.5d497.5d582.5d497.5d667.5d201.5d667.5d201.5d1024d100.5d1024d100.5d277.5hR2d589R3d529.5R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i70R11d100.5R12d589R13ai1i2i2i2i2i2i2i2i2i2i2hg:126oR0d950.5R1ad749.5d615.5d749.5d704.5d697d744d652.25d761d607.5d778d559d778d504d778d431d748.5d425.5d746.5d423d745.5d419.5d744d412d741.5d334.5d710.5d287.5d710.5d243.5d710.5d200.5d729.75d157.5d749d108.5d790.5d108.5d701.5d161d662d205.75d644.75d250.5d627.5d299d627.5d354d627.5d427.5d657.5d432.5d659.5d435d660.5d439d662d446d664.5d523.5d695.5d570.5d695.5d613.5d695.5d655.75d676.5d698d657.5d749.5d615.5hR2d858R3d749.5R4d108.5R5d408.5R6d233.5R7d300R8d168R9d241.5R10i126R11d108.5R12d858R13ai1i2i3i3i3i3i3i3i3i3i2i3i3i3i3i3i3i3i3hg:69oR0d950.5R1ad100.5d277.5d572.5d277.5d572.5d362.5d201.5d362.5d201.5d583.5d557d583.5d557d668.5d201.5d668.5d201.5d939d581.5d939d581.5d1024d100.5d1024d100.5d277.5hR2d647R3d581.5R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i69R11d100.5R12d647R13ai1i2i2i2i2i2i2i2i2i2i2i2i2hg:125oR0d950.5R1ad128d1119d163d1119d233d1119d254.25d1097.5d275.5d1076d275.5d1004.5d275.5d880.5d275.5d802.5d298d767d320.5d731.5d376d718d320.5d705.5d298d670d275.5d634.5d275.5d556d275.5d432d275.5d361d254.25d339.25d233d317.5d163d317.5d128d317.5d128d246d159.5d246d284d246d325.75d282.75d367.5d319.5d367.5d430d367.5d550d367.5d624.5d394.5d653.25d421.5d682d492.5d682d523.5d682d523.5d753.5d492.5d753.5d421.5d753.5d394.5d782.5d367.5d811.5d367.5d887d367.5d1006.5d367.5d1117d325.75d1154d284d1191d159.5d1191d128d1191d128d1119hR2d651.5R3d523.5R4d128R5d778R6d-167R7d650R8d168R9d241.5R10i125R11d128R12d651.5R13ai1i2i3i3i2i3i3i3i3i2i3i3i2i2i2i3i3i2i3i3i2i2i2i3i3i2i3i3i2i2hg:68oR0d950.5R1ad201.5d360.5d201.5d941d323.5d941d478d941d549.75d871d621.5d801d621.5d650d621.5d500d549.75d430.25d478d360.5d323.5d360.5d201.5d360.5d100.5d277.5d308d277.5d525d277.5d626.5d367.75d728d458d728d650d728d843d626d933.5d524d1024d308d1024d100.5d1024d100.5d277.5hR2d788.5R3d728R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i68R11d100.5R12d788.5R13ai1i2i2i3i3i3i3i2i1i2i3i3i3i3i2i2hg:124oR0d950.5R1ad215d241.5d215d1265.5d130d1265.5d130d241.5d215d241.5hR2d345R3d215R4d130R5d782.5R6d-241.5R7d652.5R8d168R9d241.5R10i124R11d130R12d345R13ai1i2i2i2i2hg:67oR0d950.5R1ad659.5d335d659.5d441.5d608.5d394d550.75d370.5d493d347d428d347d300d347d232d425.25d164d503.5d164d651.5d164d799d232d877.25d300d955.5d428d955.5d493d955.5d550.75d932d608.5d908.5d659.5d861d659.5d966.5d606.5d1002.5d547.25d1020.5d488d1038.5d422d1038.5d252.5d1038.5d155d934.75d57.5d831d57.5d651.5d57.5d471.5d155d367.75d252.5d264d422d264d489d264d548.25d281.75d607.5d299.5d659.5d335hR2d715R3d659.5R4d57.5R5d760R6d-14.5R7d702.5R8d168R9d241.5R10i67R11d57.5R12d715R13ai1i2i3i3i3i3i3i3i3i3i2i3i3i3i3i3i3i3i3hg:123oR0d950.5R1ad523.5d1119d523.5d1191d492.5d1191d368d1191d325.75d1154d283.5d1117d283.5d1006.5d283.5d887d283.5d811.5d256.5d782.5d229.5d753.5d158.5d753.5d128d753.5d128d682d158.5d682d230d682d256.75d653.25d283.5d624.5d283.5d550d283.5d430d283.5d319.5d325.75d282.75d368d246d492.5d246d523.5d246d523.5d317.5d489.5d317.5d419d317.5d397.5d339.5d376d361.5d376d432d376d556d376d634.5d353.25d670d330.5d705.5d275.5d718d331d731.5d353.5d767d376d802.5d376d880.5d376d1004.5d376d1075d397.5d1097d419d1119d489.5d1119d523.5d1119hR2d651.5R3d523.5R4d128R5d778R6d-167R7d650R8d168R9d241.5R10i123R11d128R12d651.5R13ai1i2i2i3i3i2i3i3i2i2i2i3i3i2i3i3i2i2i2i3i3i2i3i3i3i3i2i3i3i2hg:66oR0d950.5R1ad201.5d667.5d201.5d941d363.5d941d445d941d484.25d907.25d523.5d873.5d523.5d804d523.5d734d484.25d700.75d445d667.5d363.5d667.5d201.5d667.5d201.5d360.5d201.5d585.5d351d585.5d425d585.5d461.25d557.75d497.5d530d497.5d473d497.5d416.5d461.25d388.5d425d360.5d351d360.5d201.5d360.5d100.5d277.5d358.5d277.5d474d277.5d536.5d325.5d599d373.5d599d462d599d530.5d567d571d535d611.5d473d621.5d547.5d637.5d588.75d688.25d630d739d630d815d630d915d562d969.5d494d1024d368.5d1024d100.5d1024d100.5d277.5hR2d702.5R3d630R4d100.5R5d746.5R6d0R7d646R8d168R9d241.5R10i66R11d100.5R12d702.5R13ai1i2i2i3i3i3i3i2i1i2i2i3i3i3i3i2i1i2i3i3i3i3i3i3i3i3i2i2hg:122oR0d950.5R1ad56.5d464d493.5d464d493.5d548d147.5d950.5d493.5d950.5d493.5d1024d44d1024d44d940d390d537.5d56.5d537.5d56.5d464hR2d537.5R3d493.5R4d44R5d560R6d0R7d516R8d168R9d241.5R10i122R11d44R12d537.5R13ai1i2i2i2i2i2i2i2i2i2i2hg:65oR0d950.5R1ad350d377d213d748.5d487.5d748.5d350d377d293d277.5d407.5d277.5d692d1024d587d1024d519d832.5d182.5d832.5d114.5d1024d8d1024d293d277.5hR2d700.5R3d692R4d8R5d746.5R6d0R7d738.5R8d168R9d241.5R10i65R11d8R12d700.5R13ai1i2i2i2i1i2i2i2i2i2i2i2i2hg:121oR0d950.5R1ad329.5d1076d290.5d1176d253.5d1206.5d216.5d1237d154.5d1237d81d1237d81d1160d135d1160d173d1160d194d1142d215d1124d240.5d1057d257d1015d30.5d464d128d464d303d902d478d464d575.5d464d329.5d1076hR2d606R3d575.5R4d30.5R5d560R6d-213R7d529.5R8d168R9d241.5R10i121R11d30.5R12d606R13ai1i3i3i2i2i2i3i3i2i2i2i2i2i2i2hg:64oR0d950.5R1ad381d755.5d381d827d416.5d867.75d452d908.5d514d908.5d575.5d908.5d610.75d867.5d646d826.5d646d755.5d646d685.5d610d644.25d574d603d513d603d452.5d603d416.75d644d381d685d381d755.5d653.5d905d623.5d943.5d584.75d961.75d546d980d494.5d980d408.5d980d354.75d917.75d301d855.5d301d755.5d301d655.5d355d593d409d530.5d494.5d530.5d546d530.5d585d549.25d624d568d653.5d606d653.5d540.5d725d540.5d725d908.5d798d897.5d839.25d841.75d880.5d786d880.5d697.5d880.5d644d864.75d597d849d550d817d510d765d444.5d690.25d409.75d615.5d375d527.5d375d466d375d409.5d391.25d353d407.5d305d439.5d226.5d490.5d182.25d573.25d138d656d138d752.5d138d832d166.75d901.5d195.5d971d250d1024d302.5d1076d371.5d1103.25d440.5d1130.5d519d1130.5d583.5d1130.5d645.75d1108.75d708d1087d760d1046.5d805d1102d742.5d1150.5d668.75d1176.25d595d1202d519d1202d426.5d1202d344.5d1169.25d262.5d1136.5d198.5d1074d134.5d1011.5d101d929.25d67.5d847d67.5d752.5d67.5d661.5d101.5d579d135.5d496.5d198.5d434d263d370.5d347.5d336.75d432d303d526.5d303d632.5d303d723.25d346.5d814d390d875.5d470d913d519d932.75d576.5d952.5d634d952.5d695.5d952.5d827d873d903d793.5d979d653.5d982d653.5d905hR2d1024R3d952.5R4d67.5R5d721R6d-178R7d653.5R8d168R9d241.5R10i64R11d67.5R12d1024R13ai1i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3i2i2i2i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3i2i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3i2hg:120oR0d950.5R1ad562d464d359.5d736.5d572.5d1024d464d1024d301d804d138d1024d29.5d1024d247d731d48d464d156.5d464d305d663.5d453.5d464d562d464hR2d606R3d572.5R4d29.5R5d560R6d0R7d530.5R8d168R9d241.5R10i120R11d29.5R12d606R13ai1i2i2i2i2i2i2i2i2i2i2i2i2hg:63oR0d950.5R1ad195.5d897d297d897d297d1024d195.5d1024d195.5d897d294d823.5d198.5d823.5d198.5d746.5d198.5d696d212.5d663.5d226.5d631d271.5d588d316.5d543.5d345d517d357.75d493.5d370.5d470d370.5d445.5d370.5d401d337.75d373.5d305d346d251d346d211.5d346d166.75d363.5d122d381d73.5d414.5d73.5d320.5d120.5d292d168.75d278d217d264d268.5d264d360.5d264d416.25d312.5d472d361d472d440.5d472d478.5d454d512.75d436d547d391d590d347d633d323.5d656.5d313.75d669.75d304d683d300d695.5d297d706d295.5d721d294d736d294d762d294d823.5hR2d543.5R3d472R4d73.5R5d760R6d0R7d686.5R8d168R9d241.5R10i63R11d73.5R12d543.5R13ai1i2i2i2i2i1i2i2i3i3i2i3i3i3i3i3i3i2i3i3i3i3i3i3i2i3i3i3i3i2hg:119oR0d950.5R1ad43d464d135d464d250d901d364.5d464d473d464d588d901d702.5d464d794.5d464d648d1024d539.5d1024d419d565d298d1024d189.5d1024d43d464hR2d837.5R3d794.5R4d43R5d560R6d0R7d517R8d168R9d241.5R10i119R11d43R12d837.5R13ai1i2i2i2i2i2i2i2i2i2i2i2i2i2hg:62oR0d950.5R1ad108.5d520d108.5d429d749.5d661.5d749.5d744.5d108.5d977d108.5d886d623.5d703.5d108.5d520hR2d858R3d749.5R4d108.5R5d595R6d47R7d486.5R8d168R9d241.5R10i62R11d108.5R12d858R13ai1i2i2i2i2i2i2i2hg:118oR0d950.5R1ad30.5d464d128d464d303d934d478d464d575.5d464d365.5d1024d240.5d1024d30.5d464hR2d606R3d575.5R4d30.5R5d560R6d0R7d529.5R8d168R9d241.5R10i118R11d30.5R12d606R13ai1i2i2i2i2i2i2i2hg:61oR0d950.5R1ad108.5d559d749.5d559d749.5d643d108.5d643d108.5d559d108.5d763d749.5d763d749.5d848d108.5d848d108.5d763hR2d858R3d749.5R4d108.5R5d465R6d176R7d356.5R8d168R9d241.5R10i61R11d108.5R12d858R13ai1i2i2i2i2i1i2i2i2i2hg:117oR0d950.5R1ad87d803d87d464d179d464d179d799.5d179d879d210d918.75d241d958.5d303d958.5d377.5d958.5d420.75d911d464d863.5d464d781.5d464d464d556d464d556d1024d464d1024d464d938d430.5d989d386.25d1013.75d342d1038.5d283.5d1038.5d187d1038.5d137d978.5d87d918.5d87d803hR2d649R3d556R4d87R5d560R6d-14.5R7d473R8d168R9d241.5R10i117R11d87R12d649R13ai1i2i2i2i3i3i3i3i2i2i2i2i2i3i3i3i3hg:60oR0d950.5R1ad749.5d520d233.5d703.5d749.5d886d749.5d977d108.5d744.5d108.5d661.5d749.5d429d749.5d520hR2d858R3d749.5R4d108.5R5d595R6d47R7d486.5R8d168R9d241.5R10i60R11d108.5R12d858R13ai1i2i2i2i2i2i2i2hg:116oR0d950.5R1ad187.5d305d187.5d464d377d464d377d535.5d187.5d535.5d187.5d839.5d187.5d908d206.25d927.5d225d947d282.5d947d377d947d377d1024d282.5d1024d176d1024d135.5d984.25d95d944.5d95d839.5d95d535.5d27.5d535.5d27.5d464d95d464d95d305d187.5d305hR2d401.5R3d377R4d27.5R5d719R6d0R7d691.5R8d168R9d241.5R10i116R11d27.5R12d401.5R13ai1i2i2i2i2i2i3i3i2i2i2i3i3i2i2i2i2i2i2hg:59oR0d950.5R1ad120d494.5d225.5d494.5d225.5d621.5d120d621.5d120d494.5d120d897d225.5d897d225.5d983d143.5d1143d79d1143d120d983d120d897hR2d345R3d225.5R4d79R5d529.5R6d-119R7d450.5R8d168R9d241.5R10i59R11d79R12d345R13ai1i2i2i2i2i1i2i2i2i2i2i2hg:115oR0d950.5R1ad453.5d480.5d453.5d567.5d414.5d547.5d372.5d537.5d330.5d527.5d285.5d527.5d217d527.5d182.75d548.5d148.5d569.5d148.5d611.5d148.5d643.5d173d661.75d197.5d680d271.5d696.5d303d703.5d401d724.5d442.25d762.75d483.5d801d483.5d869.5d483.5d947.5d421.75d993d360d1038.5d252d1038.5d207d1038.5d158.25d1029.75d109.5d1021d55.5d1003.5d55.5d908.5d106.5d935d156d948.25d205.5d961.5d254d961.5d319d961.5d354d939.25d389d917d389d876.5d389d839d363.75d819d338.5d799d253d780.5d221d773d135.5d755d97.5d717.75d59.5d680.5d59.5d615.5d59.5d536.5d115.5d493.5d171.5d450.5d274.5d450.5d325.5d450.5d370.5d458d415.5d465.5d453.5d480.5hR2d533.5R3d483.5R4d55.5R5d573.5R6d-14.5R7d518R8d168R9d241.5R10i115R11d55.5R12d533.5R13ai1i2i3i3i3i3i3i3i2i3i3i3i3i3i3i2i3i3i3i3i3i3i2i3i3i3i3i3i3hg:58oR0d950.5R1ad120d897d225.5d897d225.5d1024d120d1024d120d897d120d494.5d225.5d494.5d225.5d621.5d120d621.5d120d494.5hR2d345R3d225.5R4d120R5d529.5R6d0R7d409.5R8d168R9d241.5R10i58R11d120R12d345R13ai1i2i2i2i2i1i2i2i2i2hg:114oR0d950.5R1ad421d550d405.5d541d387.25d536.75d369d532.5d347d532.5d269d532.5d227.25d583.25d185.5d634d185.5d729d185.5d1024d93d1024d93d464d185.5d464d185.5d551d214.5d500d261d475.25d307.5d450.5d374d450.5d383.5d450.5d395d451.75d406.5d453d420.5d455.5d421d550hR2d421R3d421R4d93R5d573.5R6d0R7d480.5R8d168R9d241.5R10i114R11d93R12d421R13ai1i3i3i3i3i2i2i2i2i2i3i3i3i3i2hg:57oR0d950.5R1ad112.5d1008.5d112.5d916.5d150.5d934.5d189.5d944d228.5d953.5d266d953.5d366d953.5d418.75d886.25d471.5d819d479d682d450d725d405.5d748d361d771d307d771d195d771d129.75d703.25d64.5d635.5d64.5d518d64.5d403d132.5d333.5d200.5d264d313.5d264d443d264d511.25d363.25d579.5d462.5d579.5d651.5d579.5d828d495.75d933.25d412d1038.5d270.5d1038.5d232.5d1038.5d193.5d1031d154.5d1023.5d112.5d1008.5d313.5d692d381.5d692d421.25d645.5d461d599d461d518d461d437.5d421.25d390.75d381.5d344d313.5d344d245.5d344d205.75d390.75d166d437.5d166d518d166d599d205.75d645.5d245.5d692d313.5d692hR2d651.5R3d579.5R4d64.5R5d760R6d-14.5R7d695.5R8d168R9d241.5R10i57R11d64.5R12d651.5R13ai1i2i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3hg:113oR0d950.5R1ad151.5d744.5d151.5d846d193.25d903.75d235d961.5d308d961.5d381d961.5d423d903.75d465d846d465d744.5d465d643d423d585.25d381d527.5d308d527.5d235d527.5d193.25d585.25d151.5d643d151.5d744.5d465d940d436d990d391.75d1014.25d347.5d1038.5d285.5d1038.5d184d1038.5d120.25d957.5d56.5d876.5d56.5d744.5d56.5d612.5d120.25d531.5d184d450.5d285.5d450.5d347.5d450.5d391.75d474.75d436d499d465d549d465d464d557d464d557d1237d465d1237d465d940hR2d650R3d557R4d56.5R5d573.5R6d-213R7d517R8d168R9d241.5R10i113R11d56.5R12d650R13ai1i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3i2i2i2i2i2hg:56oR0d950.5R1ad325.5d669.5d253.5d669.5d212.25d708d171d746.5d171d814d171d881.5d212.25d920d253.5d958.5d325.5d958.5d397.5d958.5d439d919.75d480.5d881d480.5d814d480.5d746.5d439.25d708d398d669.5d325.5d669.5d224.5d626.5d159.5d610.5d123.25d566d87d521.5d87d457.5d87d368d150.75d316d214.5d264d325.5d264d437d264d500.5d316d564d368d564d457.5d564d521.5d527.75d566d491.5d610.5d427d626.5d500d643.5d540.75d693d581.5d742.5d581.5d814d581.5d922.5d515.25d980.5d449d1038.5d325.5d1038.5d202d1038.5d135.75d980.5d69.5d922.5d69.5d814d69.5d742.5d110.5d693d151.5d643.5d224.5d626.5d187.5d467d187.5d525d223.75d557.5d260d590d325.5d590d390.5d590d427.25d557.5d464d525d464d467d464d409d427.25d376.5d390.5d344d325.5d344d260d344d223.75d376.5d187.5d409d187.5d467hR2d651.5R3d581.5R4d69.5R5d760R6d-14.5R7d690.5R8d168R9d241.5R10i56R11d69.5R12d651.5R13ai1i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3hg:112oR0d950.5R1ad185.5d940d185.5d1237d93d1237d93d464d185.5d464d185.5d549d214.5d499d258.75d474.75d303d450.5d364.5d450.5d466.5d450.5d530.25d531.5d594d612.5d594d744.5d594d876.5d530.25d957.5d466.5d1038.5d364.5d1038.5d303d1038.5d258.75d1014.25d214.5d990d185.5d940d498.5d744.5d498.5d643d456.75d585.25d415d527.5d342d527.5d269d527.5d227.25d585.25d185.5d643d185.5d744.5d185.5d846d227.25d903.75d269d961.5d342d961.5d415d961.5d456.75d903.75d498.5d846d498.5d744.5hR2d650R3d594R4d93R5d573.5R6d-213R7d480.5R8d168R9d241.5R10i112R11d93R12d650R13ai1i2i2i2i2i2i3i3i3i3i3i3i3i3i1i3i3i3i3i3i3i3i3hgh";
flash.text.Font.DEFAULT_FONT_SCALE = 9.0;
flash.text.Font.DEFAULT_FONT_NAME = "Bitstream_Vera_Sans";
flash.text.Font.DEFAULT_CLASS_NAME = "flash.text.Font";
flash.text.Font.nmeRegisteredFonts = new Array();
flash.text.TextField.mDefaultFont = "Bitstream_Vera_Sans";
flash.text.FontInstance.mSolidFonts = new haxe.ds.StringMap();
flash.text.TextFieldAutoSize.CENTER = "CENTER";
flash.text.TextFieldAutoSize.LEFT = "LEFT";
flash.text.TextFieldAutoSize.NONE = "NONE";
flash.text.TextFieldAutoSize.RIGHT = "RIGHT";
flash.text.TextFieldType.DYNAMIC = "DYNAMIC";
flash.text.TextFieldType.INPUT = "INPUT";
flash.ui.Keyboard.NUMBER_0 = 48;
flash.ui.Keyboard.NUMBER_1 = 49;
flash.ui.Keyboard.NUMBER_2 = 50;
flash.ui.Keyboard.NUMBER_3 = 51;
flash.ui.Keyboard.NUMBER_4 = 52;
flash.ui.Keyboard.NUMBER_5 = 53;
flash.ui.Keyboard.NUMBER_6 = 54;
flash.ui.Keyboard.NUMBER_7 = 55;
flash.ui.Keyboard.NUMBER_8 = 56;
flash.ui.Keyboard.NUMBER_9 = 57;
flash.ui.Keyboard.A = 65;
flash.ui.Keyboard.B = 66;
flash.ui.Keyboard.C = 67;
flash.ui.Keyboard.D = 68;
flash.ui.Keyboard.E = 69;
flash.ui.Keyboard.F = 70;
flash.ui.Keyboard.G = 71;
flash.ui.Keyboard.H = 72;
flash.ui.Keyboard.I = 73;
flash.ui.Keyboard.J = 74;
flash.ui.Keyboard.K = 75;
flash.ui.Keyboard.L = 76;
flash.ui.Keyboard.M = 77;
flash.ui.Keyboard.N = 78;
flash.ui.Keyboard.O = 79;
flash.ui.Keyboard.P = 80;
flash.ui.Keyboard.Q = 81;
flash.ui.Keyboard.R = 82;
flash.ui.Keyboard.S = 83;
flash.ui.Keyboard.T = 84;
flash.ui.Keyboard.U = 85;
flash.ui.Keyboard.V = 86;
flash.ui.Keyboard.W = 87;
flash.ui.Keyboard.X = 88;
flash.ui.Keyboard.Y = 89;
flash.ui.Keyboard.Z = 90;
flash.ui.Keyboard.NUMPAD_0 = 96;
flash.ui.Keyboard.NUMPAD_1 = 97;
flash.ui.Keyboard.NUMPAD_2 = 98;
flash.ui.Keyboard.NUMPAD_3 = 99;
flash.ui.Keyboard.NUMPAD_4 = 100;
flash.ui.Keyboard.NUMPAD_5 = 101;
flash.ui.Keyboard.NUMPAD_6 = 102;
flash.ui.Keyboard.NUMPAD_7 = 103;
flash.ui.Keyboard.NUMPAD_8 = 104;
flash.ui.Keyboard.NUMPAD_9 = 105;
flash.ui.Keyboard.NUMPAD_MULTIPLY = 106;
flash.ui.Keyboard.NUMPAD_ADD = 107;
flash.ui.Keyboard.NUMPAD_ENTER = 108;
flash.ui.Keyboard.NUMPAD_SUBTRACT = 109;
flash.ui.Keyboard.NUMPAD_DECIMAL = 110;
flash.ui.Keyboard.NUMPAD_DIVIDE = 111;
flash.ui.Keyboard.F1 = 112;
flash.ui.Keyboard.F2 = 113;
flash.ui.Keyboard.F3 = 114;
flash.ui.Keyboard.F4 = 115;
flash.ui.Keyboard.F5 = 116;
flash.ui.Keyboard.F6 = 117;
flash.ui.Keyboard.F7 = 118;
flash.ui.Keyboard.F8 = 119;
flash.ui.Keyboard.F9 = 120;
flash.ui.Keyboard.F10 = 121;
flash.ui.Keyboard.F11 = 122;
flash.ui.Keyboard.F12 = 123;
flash.ui.Keyboard.F13 = 124;
flash.ui.Keyboard.F14 = 125;
flash.ui.Keyboard.F15 = 126;
flash.ui.Keyboard.BACKSPACE = 8;
flash.ui.Keyboard.TAB = 9;
flash.ui.Keyboard.ENTER = 13;
flash.ui.Keyboard.SHIFT = 16;
flash.ui.Keyboard.CONTROL = 17;
flash.ui.Keyboard.CAPS_LOCK = 18;
flash.ui.Keyboard.ESCAPE = 27;
flash.ui.Keyboard.SPACE = 32;
flash.ui.Keyboard.PAGE_UP = 33;
flash.ui.Keyboard.PAGE_DOWN = 34;
flash.ui.Keyboard.END = 35;
flash.ui.Keyboard.HOME = 36;
flash.ui.Keyboard.LEFT = 37;
flash.ui.Keyboard.RIGHT = 39;
flash.ui.Keyboard.UP = 38;
flash.ui.Keyboard.DOWN = 40;
flash.ui.Keyboard.INSERT = 45;
flash.ui.Keyboard.DELETE = 46;
flash.ui.Keyboard.NUMLOCK = 144;
flash.ui.Keyboard.BREAK = 19;
flash.ui.Keyboard.SEMICOLON = 186;
flash.ui.Keyboard.EQUAL = 187;
flash.ui.Keyboard.COMMA = 188;
flash.ui.Keyboard.MINUS = 189;
flash.ui.Keyboard.PERIOD = 190;
flash.ui.Keyboard.SLASH = 191;
flash.ui.Keyboard.BACKQUOTE = 192;
flash.ui.Keyboard.LEFTBRACKET = 219;
flash.ui.Keyboard.BACKSLASH = 220;
flash.ui.Keyboard.RIGHTBRACKET = 221;
flash.ui.Keyboard.DOM_VK_CANCEL = 3;
flash.ui.Keyboard.DOM_VK_HELP = 6;
flash.ui.Keyboard.DOM_VK_BACK_SPACE = 8;
flash.ui.Keyboard.DOM_VK_TAB = 9;
flash.ui.Keyboard.DOM_VK_CLEAR = 12;
flash.ui.Keyboard.DOM_VK_RETURN = 13;
flash.ui.Keyboard.DOM_VK_ENTER = 14;
flash.ui.Keyboard.DOM_VK_SHIFT = 16;
flash.ui.Keyboard.DOM_VK_CONTROL = 17;
flash.ui.Keyboard.DOM_VK_ALT = 18;
flash.ui.Keyboard.DOM_VK_PAUSE = 19;
flash.ui.Keyboard.DOM_VK_CAPS_LOCK = 20;
flash.ui.Keyboard.DOM_VK_ESCAPE = 27;
flash.ui.Keyboard.DOM_VK_SPACE = 32;
flash.ui.Keyboard.DOM_VK_PAGE_UP = 33;
flash.ui.Keyboard.DOM_VK_PAGE_DOWN = 34;
flash.ui.Keyboard.DOM_VK_END = 35;
flash.ui.Keyboard.DOM_VK_HOME = 36;
flash.ui.Keyboard.DOM_VK_LEFT = 37;
flash.ui.Keyboard.DOM_VK_UP = 38;
flash.ui.Keyboard.DOM_VK_RIGHT = 39;
flash.ui.Keyboard.DOM_VK_DOWN = 40;
flash.ui.Keyboard.DOM_VK_PRINTSCREEN = 44;
flash.ui.Keyboard.DOM_VK_INSERT = 45;
flash.ui.Keyboard.DOM_VK_DELETE = 46;
flash.ui.Keyboard.DOM_VK_0 = 48;
flash.ui.Keyboard.DOM_VK_1 = 49;
flash.ui.Keyboard.DOM_VK_2 = 50;
flash.ui.Keyboard.DOM_VK_3 = 51;
flash.ui.Keyboard.DOM_VK_4 = 52;
flash.ui.Keyboard.DOM_VK_5 = 53;
flash.ui.Keyboard.DOM_VK_6 = 54;
flash.ui.Keyboard.DOM_VK_7 = 55;
flash.ui.Keyboard.DOM_VK_8 = 56;
flash.ui.Keyboard.DOM_VK_9 = 57;
flash.ui.Keyboard.DOM_VK_SEMICOLON = 59;
flash.ui.Keyboard.DOM_VK_EQUALS = 61;
flash.ui.Keyboard.DOM_VK_A = 65;
flash.ui.Keyboard.DOM_VK_B = 66;
flash.ui.Keyboard.DOM_VK_C = 67;
flash.ui.Keyboard.DOM_VK_D = 68;
flash.ui.Keyboard.DOM_VK_E = 69;
flash.ui.Keyboard.DOM_VK_F = 70;
flash.ui.Keyboard.DOM_VK_G = 71;
flash.ui.Keyboard.DOM_VK_H = 72;
flash.ui.Keyboard.DOM_VK_I = 73;
flash.ui.Keyboard.DOM_VK_J = 74;
flash.ui.Keyboard.DOM_VK_K = 75;
flash.ui.Keyboard.DOM_VK_L = 76;
flash.ui.Keyboard.DOM_VK_M = 77;
flash.ui.Keyboard.DOM_VK_N = 78;
flash.ui.Keyboard.DOM_VK_O = 79;
flash.ui.Keyboard.DOM_VK_P = 80;
flash.ui.Keyboard.DOM_VK_Q = 81;
flash.ui.Keyboard.DOM_VK_R = 82;
flash.ui.Keyboard.DOM_VK_S = 83;
flash.ui.Keyboard.DOM_VK_T = 84;
flash.ui.Keyboard.DOM_VK_U = 85;
flash.ui.Keyboard.DOM_VK_V = 86;
flash.ui.Keyboard.DOM_VK_W = 87;
flash.ui.Keyboard.DOM_VK_X = 88;
flash.ui.Keyboard.DOM_VK_Y = 89;
flash.ui.Keyboard.DOM_VK_Z = 90;
flash.ui.Keyboard.DOM_VK_CONTEXT_MENU = 93;
flash.ui.Keyboard.DOM_VK_NUMPAD0 = 96;
flash.ui.Keyboard.DOM_VK_NUMPAD1 = 97;
flash.ui.Keyboard.DOM_VK_NUMPAD2 = 98;
flash.ui.Keyboard.DOM_VK_NUMPAD3 = 99;
flash.ui.Keyboard.DOM_VK_NUMPAD4 = 100;
flash.ui.Keyboard.DOM_VK_NUMPAD5 = 101;
flash.ui.Keyboard.DOM_VK_NUMPAD6 = 102;
flash.ui.Keyboard.DOM_VK_NUMPAD7 = 103;
flash.ui.Keyboard.DOM_VK_NUMPAD8 = 104;
flash.ui.Keyboard.DOM_VK_NUMPAD9 = 105;
flash.ui.Keyboard.DOM_VK_MULTIPLY = 106;
flash.ui.Keyboard.DOM_VK_ADD = 107;
flash.ui.Keyboard.DOM_VK_SEPARATOR = 108;
flash.ui.Keyboard.DOM_VK_SUBTRACT = 109;
flash.ui.Keyboard.DOM_VK_DECIMAL = 110;
flash.ui.Keyboard.DOM_VK_DIVIDE = 111;
flash.ui.Keyboard.DOM_VK_F1 = 112;
flash.ui.Keyboard.DOM_VK_F2 = 113;
flash.ui.Keyboard.DOM_VK_F3 = 114;
flash.ui.Keyboard.DOM_VK_F4 = 115;
flash.ui.Keyboard.DOM_VK_F5 = 116;
flash.ui.Keyboard.DOM_VK_F6 = 117;
flash.ui.Keyboard.DOM_VK_F7 = 118;
flash.ui.Keyboard.DOM_VK_F8 = 119;
flash.ui.Keyboard.DOM_VK_F9 = 120;
flash.ui.Keyboard.DOM_VK_F10 = 121;
flash.ui.Keyboard.DOM_VK_F11 = 122;
flash.ui.Keyboard.DOM_VK_F12 = 123;
flash.ui.Keyboard.DOM_VK_F13 = 124;
flash.ui.Keyboard.DOM_VK_F14 = 125;
flash.ui.Keyboard.DOM_VK_F15 = 126;
flash.ui.Keyboard.DOM_VK_F16 = 127;
flash.ui.Keyboard.DOM_VK_F17 = 128;
flash.ui.Keyboard.DOM_VK_F18 = 129;
flash.ui.Keyboard.DOM_VK_F19 = 130;
flash.ui.Keyboard.DOM_VK_F20 = 131;
flash.ui.Keyboard.DOM_VK_F21 = 132;
flash.ui.Keyboard.DOM_VK_F22 = 133;
flash.ui.Keyboard.DOM_VK_F23 = 134;
flash.ui.Keyboard.DOM_VK_F24 = 135;
flash.ui.Keyboard.DOM_VK_NUM_LOCK = 144;
flash.ui.Keyboard.DOM_VK_SCROLL_LOCK = 145;
flash.ui.Keyboard.DOM_VK_COMMA = 188;
flash.ui.Keyboard.DOM_VK_PERIOD = 190;
flash.ui.Keyboard.DOM_VK_SLASH = 191;
flash.ui.Keyboard.DOM_VK_BACK_QUOTE = 192;
flash.ui.Keyboard.DOM_VK_OPEN_BRACKET = 219;
flash.ui.Keyboard.DOM_VK_BACK_SLASH = 220;
flash.ui.Keyboard.DOM_VK_CLOSE_BRACKET = 221;
flash.ui.Keyboard.DOM_VK_QUOTE = 222;
flash.ui.Keyboard.DOM_VK_META = 224;
flash.ui.Keyboard.DOM_VK_KANA = 21;
flash.ui.Keyboard.DOM_VK_HANGUL = 21;
flash.ui.Keyboard.DOM_VK_JUNJA = 23;
flash.ui.Keyboard.DOM_VK_FINAL = 24;
flash.ui.Keyboard.DOM_VK_HANJA = 25;
flash.ui.Keyboard.DOM_VK_KANJI = 25;
flash.ui.Keyboard.DOM_VK_CONVERT = 28;
flash.ui.Keyboard.DOM_VK_NONCONVERT = 29;
flash.ui.Keyboard.DOM_VK_ACEPT = 30;
flash.ui.Keyboard.DOM_VK_MODECHANGE = 31;
flash.ui.Keyboard.DOM_VK_SELECT = 41;
flash.ui.Keyboard.DOM_VK_PRINT = 42;
flash.ui.Keyboard.DOM_VK_EXECUTE = 43;
flash.ui.Keyboard.DOM_VK_SLEEP = 95;
flash.utils.Endian.BIG_ENDIAN = "bigEndian";
flash.utils.Endian.LITTLE_ENDIAN = "littleEndian";
flash.utils.Uuid.UID_CHARS = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
haxe.Serializer.USE_CACHE = false;
haxe.Serializer.USE_ENUM_INDEX = false;
haxe.Serializer.BASE64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%:";
haxe.Template.splitter = new EReg("(::[A-Za-z0-9_ ()&|!+=/><*.\"-]+::|\\$\\$([A-Za-z0-9_-]+)\\()","");
haxe.Template.expr_splitter = new EReg("(\\(|\\)|[ \r\n\t]*\"[^\"]*\"[ \r\n\t]*|[!+=/><*.&|-]+)","");
haxe.Template.expr_trim = new EReg("^[ ]*([^ ]+)[ ]*$","");
haxe.Template.expr_int = new EReg("^[0-9]+$","");
haxe.Template.expr_float = new EReg("^([+-]?)(?=\\d|,\\d)\\d*(,\\d*)?([Ee]([+-]?\\d+))?$","");
haxe.Template.globals = { };
haxe.Unserializer.DEFAULT_RESOLVER = Type;
haxe.Unserializer.BASE64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%:";
haxe.ds.ObjectMap.count = 0;
js.Browser.window = typeof window != "undefined" ? window : null;
js.Browser.document = typeof window != "undefined" ? window.document : null;
nme.AssetData.className = new haxe.ds.StringMap();
nme.AssetData.library = new haxe.ds.StringMap();
nme.AssetData.path = new haxe.ds.StringMap();
nme.AssetData.type = new haxe.ds.StringMap();
nme.AssetData.initialized = false;
openfl.Assets.cachedBitmapData = new haxe.ds.StringMap();
openfl.Assets.initialized = false;
openfl.display.Tilesheet.TILE_SCALE = 1;
openfl.display.Tilesheet.TILE_ROTATION = 2;
openfl.display.Tilesheet.TILE_RGB = 4;
openfl.display.Tilesheet.TILE_ALPHA = 8;
openfl.display.Tilesheet.TILE_TRANS_2x2 = 16;
openfl.display.Tilesheet.TILE_BLEND_NORMAL = 0;
openfl.display.Tilesheet.TILE_BLEND_ADD = 65536;
openfl.display.Tilesheet.TILE_BLEND_MULTIPLY = 131072;
openfl.display.Tilesheet.TILE_BLEND_SCREEN = 262144;
org.flixel.FlxAssets.imgDefaultButton = "assets/data/button.png";
org.flixel.FlxAssets.imgLogo = "assets/data/logo.png";
org.flixel.FlxAssets.imgDefault = "assets/data/default.png";
org.flixel.FlxAssets.imgAuto = "assets/data/autotiles.png";
org.flixel.FlxAssets.imgAutoAlt = "assets/data/autotiles_alt.png";
org.flixel.FlxAssets.imgLogoCorners = "assets/data/logo_corners.png";
org.flixel.FlxAssets.imgLogoLight = "assets/data/logo_light.png";
org.flixel.FlxAssets.imgHandle = "assets/data/handle.png";
org.flixel.FlxAssets.imgDefaultCursor = "assets/data/cursor.png";
org.flixel.FlxAssets.imgBounds = "assets/data/vis/bounds.png";
org.flixel.FlxAssets.imgOpen = "assets/data/vcr/open.png";
org.flixel.FlxAssets.imgRecordOff = "assets/data/vcr/record_off.png";
org.flixel.FlxAssets.imgRecordOn = "assets/data/vcr/record_on.png";
org.flixel.FlxAssets.imgStop = "assets/data/vcr/stop.png";
org.flixel.FlxAssets.imgFlixel = "assets/data/vcr/flixel.png";
org.flixel.FlxAssets.imgRestart = "assets/data/vcr/restart.png";
org.flixel.FlxAssets.imgPause = "assets/data/vcr/pause.png";
org.flixel.FlxAssets.imgPlay = "assets/data/vcr/play.png";
org.flixel.FlxAssets.imgStep = "assets/data/vcr/step.png";
org.flixel.FlxAssets.imgBase = "assets/data/base.png";
org.flixel.FlxAssets.imgStick = "assets/data/stick.png";
org.flixel.FlxAssets.imgButtonA = "assets/data/button_a.png";
org.flixel.FlxAssets.imgButtonB = "assets/data/button_b.png";
org.flixel.FlxAssets.imgButtonC = "assets/data/button_c.png";
org.flixel.FlxAssets.imgButtonX = "assets/data/button_x.png";
org.flixel.FlxAssets.imgButtonY = "assets/data/button_y.png";
org.flixel.FlxAssets.imgButtonUp = "assets/data/button_up.png";
org.flixel.FlxAssets.imgButtonDown = "assets/data/button_down.png";
org.flixel.FlxAssets.imgButtonLeft = "assets/data/button_left.png";
org.flixel.FlxAssets.imgButtonRight = "assets/data/button_right.png";
org.flixel.FlxAssets.debuggerFont = "assets/data/courier.ttf";
org.flixel.FlxAssets.defaultFont = "assets/data/nokiafc22.ttf";
org.flixel.FlxAssets.sndBeep = "Beep";
org.flixel.FlxCamera.STYLE_LOCKON = 0;
org.flixel.FlxCamera.STYLE_PLATFORMER = 1;
org.flixel.FlxCamera.STYLE_TOPDOWN = 2;
org.flixel.FlxCamera.STYLE_TOPDOWN_TIGHT = 3;
org.flixel.FlxCamera.STYLE_SCREEN_BY_SCREEN = 4;
org.flixel.FlxCamera.STYLE_NO_DEAD_ZONE = 5;
org.flixel.FlxCamera.SHAKE_BOTH_AXES = 0;
org.flixel.FlxCamera.SHAKE_HORIZONTAL_ONLY = 1;
org.flixel.FlxCamera.SHAKE_VERTICAL_ONLY = 2;
org.flixel.FlxG.supportsTouchEvents = false;
org.flixel.FlxG.tweener = new org.flixel.FlxBasic();
org.flixel.FlxG.LIBRARY_NAME = "HaxeFlixel";
org.flixel.FlxG.LIBRARY_MAJOR_VERSION = "2";
org.flixel.FlxG.LIBRARY_MINOR_VERSION = "0.0-alpha.3";
org.flixel.FlxG.DEBUGGER_STANDARD = 0;
org.flixel.FlxG.DEBUGGER_MICRO = 1;
org.flixel.FlxG.DEBUGGER_BIG = 2;
org.flixel.FlxG.DEBUGGER_TOP = 3;
org.flixel.FlxG.DEBUGGER_LEFT = 4;
org.flixel.FlxG.DEBUGGER_RIGHT = 5;
org.flixel.FlxSave.SUCCESS = 0;
org.flixel.FlxSave.PENDING = 1;
org.flixel.FlxSave.ERROR = 2;
org.flixel.FlxTilemap.imgAuto = org.flixel.FlxAssets.imgAuto;
org.flixel.FlxTilemap.imgAutoAlt = org.flixel.FlxAssets.imgAutoAlt;
org.flixel.FlxTilemap.OFF = 0;
org.flixel.FlxTilemap.AUTO = 1;
org.flixel.FlxTilemap.ALT = 2;
org.flixel.plugin.pxText.PxBitmapFont._storedFonts = new haxe.ds.StringMap();
org.flixel.plugin.pxText.PxBitmapFont.ZERO_POINT = new flash.geom.Point();
org.flixel.system.FlxDebugger.pointPrecision = 3;
org.flixel.system.FlxList._NUM_CACHED_FLX_LIST = 0;
org.flixel.system.FlxQuadTree.A_LIST = 0;
org.flixel.system.FlxQuadTree.B_LIST = 1;
org.flixel.system.FlxQuadTree._NUM_CACHED_QUAD_TREES = 0;
org.flixel.system.FlxWindow.BG_COLOR = 2139062143;
org.flixel.system.FlxWindow.TOP_COLOR = 2130706432;
org.flixel.system.debug.Log.MAX_LOG_LINES = 200;
org.flixel.system.debug.VCR.DEFAULT_FILE_NAME = "replay.fgr";
org.flixel.system.debug.Watch.MAX_LOG_LINES = 1024;
org.flixel.system.debug.Watch.LINE_HEIGHT = 15;
org.flixel.system.input.FlxTouchManager.maxTouchPoints = 0;
org.flixel.system.layer.Atlas._atlasCache = new haxe.ds.StringMap();
org.flixel.system.layer.TileSheetData.tileSheetData = new Array();
org.flixel.system.layer.TileSheetExt._tileSheetCache = new haxe.ds.ObjectMap();
org.flixel.system.layer.TileSheetExt._DRAWCALLS = 0;
org.flixel.system.layer.frames.FlxFrame.POINT = new flash.geom.Point();
org.flixel.system.layer.frames.FlxFrame.MATRIX = new flash.geom.Matrix();
org.flixel.tweens.FlxTween.PERSIST = 1;
org.flixel.tweens.FlxTween.LOOPING = 2;
org.flixel.tweens.FlxTween.PINGPONG = 4;
org.flixel.tweens.FlxTween.ONESHOT = 8;
org.flixel.tweens.FlxTween.BACKWARD = 16;
org.flixel.tweens.util.Ease.PI = Math.PI;
org.flixel.tweens.util.Ease.PI2 = Math.PI / 2;
org.flixel.tweens.util.Ease.EL = 2 * org.flixel.tweens.util.Ease.PI / .45;
org.flixel.tweens.util.Ease.B1 = 1 / 2.75;
org.flixel.tweens.util.Ease.B2 = 2 / 2.75;
org.flixel.tweens.util.Ease.B3 = 1.5 / 2.75;
org.flixel.tweens.util.Ease.B4 = 2.5 / 2.75;
org.flixel.tweens.util.Ease.B5 = 2.25 / 2.75;
org.flixel.tweens.util.Ease.B6 = 2.625 / 2.75;
org.flixel.util.FlxAngle.cosTable = new Array();
org.flixel.util.FlxAngle.sinTable = new Array();
org.flixel.util.FlxAngle.DEG = 180 / Math.PI;
org.flixel.util.FlxAngle.RAD = Math.PI / 180;
org.flixel.util.FlxAngle.coefficient1 = Math.PI / 4;
org.flixel.util.FlxColor.RED = -65536;
org.flixel.util.FlxColor.YELLOW = -256;
org.flixel.util.FlxColor.GREEN = -16744448;
org.flixel.util.FlxColor.BLUE = -16776961;
org.flixel.util.FlxColor.PINK = -16181;
org.flixel.util.FlxColor.PURPLE = -8388480;
org.flixel.util.FlxColor.WHITE = -1;
org.flixel.util.FlxColor.BLACK = -16777216;
org.flixel.util.FlxColor.GRAY = -8355712;
org.flixel.util.FlxColor.TRANSPARENT = 0;
org.flixel.util.FlxColor.IVORY = -16;
org.flixel.util.FlxColor.BEIGE = -657956;
org.flixel.util.FlxColor.WHEAT = -663885;
org.flixel.util.FlxColor.TAN = -2968436;
org.flixel.util.FlxColor.KHAKI = -3952495;
org.flixel.util.FlxColor.SILVER = -4144960;
org.flixel.util.FlxColor.CHARCOAL = -12171706;
org.flixel.util.FlxColor.NAVY_BLUE = -16777088;
org.flixel.util.FlxColor.ROYAL_BLUE = -16233314;
org.flixel.util.FlxColor.MEDIUM_BLUE = -16777011;
org.flixel.util.FlxColor.AZURE = -16744449;
org.flixel.util.FlxColor.CYAN = -16711681;
org.flixel.util.FlxColor.AQUAMARINE = -8388652;
org.flixel.util.FlxColor.TEAL = -16744320;
org.flixel.util.FlxColor.FOREST_GREEN = -14513374;
org.flixel.util.FlxColor.OLIVE = -8355840;
org.flixel.util.FlxColor.CHARTREUSE = -8388864;
org.flixel.util.FlxColor.LIME = -4194560;
org.flixel.util.FlxColor.GOLDEN = -10496;
org.flixel.util.FlxColor.GOLDENROD = -2448096;
org.flixel.util.FlxColor.CORAL = -32944;
org.flixel.util.FlxColor.SALMON = -360334;
org.flixel.util.FlxColor.HOT_PINK = -258112;
org.flixel.util.FlxColor.FUCHSIA = -34817;
org.flixel.util.FlxColor.PUCE = -3372903;
org.flixel.util.FlxColor.MAUVE = -2051841;
org.flixel.util.FlxColor.LAVENDER = -4882724;
org.flixel.util.FlxColor.PLUM = -8113799;
org.flixel.util.FlxColor.INDIGO = -11861886;
org.flixel.util.FlxColor.MAROON = -8388608;
org.flixel.util.FlxColor.CRIMSON = -2354116;
org.flixel.util.FlxMath.MIN_VALUE = 0.0000000000000001;
org.flixel.util.FlxMath.MAX_VALUE = 1.79e+308;
org.flixel.util.FlxRandom.intHelper = 0;
org.flixel.util.FlxRandom.MAX_RANGE = 16777215;
ApplicationMain.main();
})();