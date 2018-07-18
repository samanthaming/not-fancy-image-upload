const BORDER_SIZE = 10;
const BORDER_COLOR = '#000000';

new Vue({
  el: '#app',
  data: {
    imageUrl: '',
    imageStyle: {},
    border: BORDER_SIZE,
    borderColor: BORDER_COLOR,
    pickedColor: BORDER_COLOR,
    colors: [
      '#4286f4',
      '#23d160',
      '#FF8600',
      '#ff3860'
    ]
  },
  methods: {
    validateImageFile(fileList = {}) {
      if(!fileList.length) {
        this.error = 'Invalid File';
        return
      }
      const [file] = fileList;
      if(!file['type'].includes('image/')) {
        this.error = 'Invalid Image File'
        return
      }
      this.createImage(file);
    },
    onFileChange(e) {
      this.validateImageFile(e.target.files)
    },
    dropImage(e) {
      this.validateImageFile(e.dataTransfer.files);
    },
    createImage(file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = (e) => {
        this.imageUrl = e.target.result;
      }
    },
    clickColor(color) {
      this.borderColor = color;
    },
    removeImage() {
      this.imageUrl = '';
      this.border = BORDER_SIZE;
      this.borderColor = BORDER_COLOR;
    }
  },
  computed: {
    style() {
      return this.imageStyle = {
        borderWidth: `${this.border}px`,
        borderColor: `${this.borderColor}`,
      }
    }
  }
})
