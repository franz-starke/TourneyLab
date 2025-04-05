<script > 
 import QrcodeVue, { QrcodeCanvas, QrcodeSvg } from 'qrcode.vue'
 import { QrcodeStream, QrcodeDropZone, QrcodeCapture } from 'vue-qrcode-reader'


export default {
  data() {
    return {
      value: JSON.stringify({Team: 1, Spiel: "Hannes"}),
      size: 300,
    }
  },
  methods: {
    onDetect (detectedCodes) {
      this.debugInfo = JSON.parse(detectedCodes.get())
      console.log(this.debugInfo)
    }
  },
  components: {
    QrcodeVue,
    QrcodeCanvas,
    QrcodeSvg,
    QrcodeStream,
    QrcodeDropZone,
    QrcodeCapture
  },
}
</script>

<template>


  <h1>Dashboard</h1>
  <qrcode-stream @detect="onDetect"></qrcode-stream>
  <qrcode-vue :value="value" :size="size" level="H" render-as="svg" />
  <!-- <qrcode-vue :value="value" :size="size" level="H" render-as="svg" /> -->

</template>
