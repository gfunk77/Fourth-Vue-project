const app = Vue.createApp({
  data() {
    return {
      boxContainerIsVisible: true,
      inlineStyle: "",
      userInput: "",
      box1: false,
      box2: false,
      box3: false,
      box4: false,
      box5: false,
    };
  },
  computed: {
    visible() {
      return {
        visible: this.boxContainerIsVisible,
        hidden: !this.boxContainerIsVisible,
      };
    },
    boxClasses() {
      return ["default", { active: this.box5 }];
    },
  },
  methods: {
    toggleVisibility() {
      this.boxContainerIsVisible = !this.boxContainerIsVisible;
    },
    boxSelected(box) {
      if (box === 1) {
        this.box1 = !this.box1;
      } else if (box === 2) {
        this.box2 = !this.box2;
      } else if (box === 3) {
        this.box3 = !this.box3;
      } else if (box === 4) {
        this.box4 = !this.box4;
      } else if (box === 5) {
        this.box5 = !this.box5;
      }
    },
  },
});
app.mount("#styling");
