<template>
  <section class="orders-header">
    <div class="content-title">
      <img src="../../assets/PageIcon_Hands.svg" />
      <h3>Notas fiscais</h3>
    </div>
    <p class="content-subtitle">Visualize as notas fiscais que você tem.</p>
  </section>
</template>

<style scoped>
.orders-header {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;

  position: absolute;
  width: 255px;
  height: 53px;
  left: 336px;
  top: 104px;
}

.content-title {
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: flex-start;
  padding: 0px;

  width: 255px;
  height: 53px;
}

h3 {
  width: 149px;
  height: 28px;

  font-family: "DM Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;

  color: #021b51;
}

p {
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;

  color: #727d94;
}
</style>
