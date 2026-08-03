<template>
  <div :class="{ 'bg-white': !nightMode, 'bg-dark': nightMode }" class="p-st">
    <div class="container py-4">
      <div
        class="text-center"
        data-aos="fade"
        data-aos-once="true"
        data-aos-duration="1000"
      >
        <h2
          class="title text-center"
          :class="{ pgray: !nightMode, 'text-light': nightMode }"
          >achievements &amp; awards.</h2
        >
      </div>
      <hr
        width="50%"
        :class="{ pgray: !nightMode, 'bg-secondary': nightMode }"
      />
      <div class="row">
        <div
          class="col-xl-6 col-bg-6 col-md-6 col-sm-12 py-3 px-5"
          v-for="d in data"
          :key="d.issuer + d.year"
        >
          <div
            class="d-flex align-items-start"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
          >
            <i
              class="fas fa-trophy mt-1 mr-3"
              :class="{ pgray: !nightMode, 'text-light': nightMode }"
            ></i>
            <div>
              <div class="title2">
                {{ d.issuer }} — {{ d.type }}, {{ d.year
                }}{{ d.location ? `, ${d.location}` : "" }}
              </div>
              <div class="title3 mt-1">{{ d.description }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import info from "../../info";

export default {
  name: "Achievements",
  props: {
    nightMode: {
      type: Boolean,
    },
  },
  data() {
    return {
      data: info.achievements,
    };
  },
};
</script>

<style scoped>
.title {
  display: block;
  margin: 0;
  font-size: 30px;
  font-weight: 500;
}

.title2 {
  font-size: 18px;
  font-weight: 500;
}

.title3 {
  opacity: 0.85;
  font-size: 15px;
  font-weight: 400;
  text-align: left;
}

.fa-trophy {
  font-size: 20px;
  opacity: 0.8;
}
</style>
