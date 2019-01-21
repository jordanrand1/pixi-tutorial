function Scroller(stage) {
    this.far = new Far();
    stage.addChild(this.far);

    this.mid = new Mid();
    stage.addChild(this.mid);
}

Scroller.prototype.setViewportX = function(viewportX) {
    this.far.setViewportX(viewportX);
    this.mid.setViewportX(viewportX);
}