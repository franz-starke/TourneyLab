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

  <h2>QR-Scanner for offline updating Tournament Data:</h2>
  <qrcode-stream class="qr-code" @detect="onDetect"></qrcode-stream>

  <h2>QR-Generator for current Tournament Data:</h2>
  <qrcode-vue class="qr-code" :value="value" :size="size" level="H" render-as="svg" />
  <!-- <qrcode-vue :value="value" :size="size" level="H" render-as="svg" /> -->

</template>

<style scoped>

.qr-code {
  width: 100%;
}

</style>
