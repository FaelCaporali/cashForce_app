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
  width: 20%;
  margin: 1% 2%;
}

.content-title {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  margin: 0;
}

img {
  margin-right: 3%;
}

h3 {
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 700;

  color: #021b51;
}

p {
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 400;
  margin: 0;

  color: #727d94;
}
</style>
