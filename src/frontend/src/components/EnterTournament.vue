<script >
import { QrcodeStream, QrcodeDropZone, QrcodeCapture } from 'vue-qrcode-reader'

  export default {
    data() {
      return {
        debugInfo: "degubingfo",
      }
    },
    methods: {
      onDetect (detectedCodes) {
        this.debugInfo = JSON.parse(detectedCodes.get())
        console.log(this.debugInfo)
      }
    },
    components: {
      QrcodeStream,
      QrcodeDropZone,
      QrcodeCapture
    }
  }
 



</script>

<template>
  <qrcode-stream @detect="onDetect"></qrcode-stream>

  <p>
    {{ debugInfo }}
  </p>



  <RouterLink class="router-link" to="/tournament-home">Beitreten</RouterLink>
</template>


