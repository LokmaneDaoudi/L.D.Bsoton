<template>
  <div class="container py-5">
    <div class="row md:pt-3">
      <div class="col-12 md:mb-5">
        <h1 class="f-alegreya f-bold op-80 m-0">Let's get in touch</h1>
      </div>
      <div class="col-12 md:col-6">
        <form id="contact-form">
          <div class="input-container">
            <input
              name="name"
              type="text"
              class="input"
              placeholder=" "
              required
            />
            <label class="input-label">Name</label>
          </div>

          <div class="input-container">
            <input
              name="email"
              type="text"
              class="input"
              placeholder=" "
              required
            />
            <label class="input-label">Email</label>
          </div>

          <div class="input-container">
            <textarea
              name="message"
              type="text"
              class="input"
              placeholder=" "
              required
            ></textarea>
            <label class="input-label">Message</label>
          </div>

          <p class="f-alegreya f-14px md:f-25px op-30 text-center md:text-left">
            Set your mind at rest, we will not spam your inbox
          </p>

          <div class="text-center mt-5">
            <button class="btn btn-primary py-3 px-7">Send</button>
          </div>
        </form>
      </div>
      <div class="col-12 md:col-6 info mt-6 md:mt-10 text-center md:text-left">
        <h2 class="md:f-54px op-80">Additional Information</h2>
        <div class="mt-5">
          <div class="f-30px md:f-39px op-60">Email</div>
          <a class="f-27px md:f-35px mt-3" href="mailto:ldwrites@something.com">
            Ldwrites@something.com
          </a>
        </div>
        <div>
          <div class="f-30px md:f-39px op-60">Phone</div>
          <a class="f-27px md:f-35px mt-3" href="tel:+213248209360">
            +213 24 820 93 60
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
h1 {
  font-size: 227px;
  @media screen and (max-width: 768px) {
    font-size: 64px;
  }
}
.info {
  > h2 {
    margin: 0;
  }
  > div {
    margin: 25px 0 0;
  }
  a {
    display: inline-block;
    color: var(--light);

    transition: color 0.3s ease-in-out;
    &:hover {
      color: var(--primary);
    }
  }
}

#contact-form {
  max-width: 612px;

  .input-container {
    font-size: 25px;
    font-family: 'AlegreyaSans', Arial, sans-serif;

    @media screen and (max-width: 768px) {
      font-size: 18px;
    }

    label {
      opacity: 0.3;
    }
  }
}

textarea {
  min-height: 100px;
  height: 228px;
}
</style>

<script lang="ts" setup>
const route = useRoute();

useMeta({
  bodyAttrs: {
    class: route.meta?.animationDir,
  },
});
</script>
