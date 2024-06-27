
<template>
  <div class="MatcWidget MatchWidgetTypeButton MatcEventedWidget MatcSimulatorClickable">
      <div data-dojo-attach-point="labelNode"><a   class="MatcInlineEditable" :href="url" :target="target">{{label}}</a></div>
  </div>
</template>
<script>
import DojoWidget from "dojo/DojoWidget";
import lang from "dojo/_base/lang";
import UIWidget from "core/widgets/UIWidget";

export default {
  name: "LinkexternalWidget",
  mixins: [UIWidget, DojoWidget],
  data: function() {
    return {
      value: this.value,
      style: {},
      model: {},
      url:'',
      target:"blank"
    };
  },
  components: {},
  computed: {
      label () {
        if (this.model && this.model.props && this.model.props.label) {
            return this.model.props.label
        }
        return ''
      }
  },
  methods: {
    getName () {
      return 'Linkexternal'
    },
    postCreate() {
      this._borderNodes = [this.domNode];
      this._backgroundNodes = [this.domNode];
      this._shadowNodes = [this.domNode];
      this._paddingNodes = [this.domNode];
      this._labelNodes = [this.labelNode];
    },

    wireEvents() {
      this.own(this.addClickListener(this.domNode, lang.hitch(this, "onClick")));
      this.wireHover()
    },

    getLabelNode() {
      return this.labelNode;
    },

    render(model, style, scaleX, scaleY) {
      this.model = model;
      this.url = ""
      this.target="blank"
      this.style = style;
      this._scaleX = scaleX;
      this._scaleY = scaleY;
      if (model.props && model.props.url  ) {
        const url = model.props.url    
        this.url = url         
      }
      if (model.props && model.props.url  ) {
        const target = model.props.target    
        this.target = target         
      }
      this.setStyle(style, model);
    },

    updateScale (model, style, scaleX, scaleY) {
      this._scaleX = scaleX;
      this._scaleY = scaleY;
      this.setStyle(style, model);
    },

    getValue () {
      return this.value;
    },
    setValue (value) {
      this.value = value;
    },
    getState () {
    },
    setState () {
    },

    onClick(e) {
      this.stopEvent(e);
      this.emitClick(e);
    }
  },
  mounted() {}
};
</script>