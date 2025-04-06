<script >
import { QrcodeStream, QrcodeDropZone, QrcodeCapture } from 'vue-qrcode-reader'

  export default {
    data() {
      return {
        debugInfo: "degubingfo: pls scan a qr-code",
      }
    },
    methods: {
      onDetect (detectedCodes) {
        // detectedCodes is a Proxy Array
        this.debugInfo = JSON.parse(detectedCodes[0].rawValue);
        console.log(JSON.stringify(this.debugInfo, null, 2));
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

  <h2>Scan Tournament QR-Code</h2>
  <qrcode-stream @detect="onDetect"></qrcode-stream>



<!-- ausgabe der qr code daten -->
  <p>
    {{ debugInfo }}
  </p>


  <input id="enterCode" type="text" placeholder="Turnier-Code eingeben...">
  <RouterLink class="router-link" to="/tournament-home">Beitreten</RouterLink>
</template>


