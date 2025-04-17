<script>
import { QrcodeStream, QrcodeDropZone, QrcodeCapture } from "vue-qrcode-reader";

export default {
  data() {
    return {
      debugInfo: "degubingfo: pls scan a qr-code",
    };
  },
  methods: {
    onDetect(detectedCodes) {
      // detectedCodes is a Proxy Array
      this.debugInfo = JSON.parse(detectedCodes[0].rawValue);
      console.log(JSON.stringify(this.debugInfo, null, 2));
    },
  },
  components: {
    QrcodeStream,
    QrcodeDropZone,
    QrcodeCapture,
  },
};
</script>

<template>
  <h2>Scan Tournament QR-Code</h2>
  <div class="flex-container">
    <div id="qr-code-wrapper">
      <qrcode-stream @detect="onDetect"></qrcode-stream>
    </div>

    <!-- ausgabe der qr code daten -->
    <p>
      {{ debugInfo }}
    </p>

    <input id="enter-code" type="text" placeholder="Turnier-Code eingeben..." />
    <RouterLink class="router-link" to="/tournament-home">Beitreten</RouterLink>
  </div>
</template>

<style scoped>
#qr-code-wrapper {
  width: 30%; /* Set the width you desire */
  height: 30%; /* Set the height you desire */
  overflow: hidden; /* Prevent the content from spilling out */
}

div.flex-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

input.enter-code {
  display: block;
  flex-shrink: 0;
  width: 70%;
}

a.router-link {
  width: 100%;
}
</style>
