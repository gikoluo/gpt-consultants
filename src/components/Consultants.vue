<template>
    <div class="container">
        <b-card-group>
            <template v-for="(consultant, index) in consultants">
            <b-card v-bind:class="[(selectedConsultant == null) ? '' : 'inchat']" v-if="selectedConsultant == null || consultant==this.selectedConsultant" :header="consultant.name"  :key="index" header-tag="h5">
                <b-card-header></b-card-header>
                <template #header>
                    <h5 class="card-title">{{ consultant.name }}</h5>
                </template>

                <b-card-img :src="consultant.image" :alt="consultant.title" class="avatar rounded-0"></b-card-img>
                <b-card-text>
                    <p class="card-text">{{ consultant.job }}</p>
                    <a v-show="selectedConsultant == null" :href="consultant.link" class="btn btn-primary" @click="selectConsultant(consultant)">{{ consultant.buttonText }}</a>
                    <a v-show="selectedConsultant != null" class="btn btn-warning" @click="selectConsultant(null)">返回</a>
                </b-card-text>

                <b-card-foot>
                    <b-embed
                        v-if="selectedConsultant == consultant"
                        type="iframe"
                        aspect="1by1"
                        :src="get_url(selectedConsultant)"
                        allowfullscreen
                        width="560" height="600"
                    ></b-embed>
                </b-card-foot>
            </b-card>
        </template>
        </b-card-group>
    </div>
</template>

<style scoped>
/* header {
  line-height: 1.5;
  max-height: 100vh;
} */

.inchat .avatar {
    width:50px;
}
</style>

<script>
export default {
    mounted() {
      let recaptchaScript = document.createElement('script')
      recaptchaScript.setAttribute('src', 'https://gradio.s3-us-west-2.amazonaws.com/3.23.0/gradio.js')
      document.head.appendChild(recaptchaScript)
    },
    computed: {
      publishedBooksMessage() {
        return this.consultant.name
      }
    },
    methods: {
      selectConsultant(consultant) {
        this.selectedConsultant = consultant
        this.$emit('inchat', this.selectedConsultant)
      },    
      showModal() {
        this.$refs['modal-gradio'].show()
      },

      get_url(consultant) {
        const consultantUrl = new URL("http://127.0.0.1:7860/");
        consultantUrl.searchParams.append("name", consultant.name);
        consultantUrl.searchParams.append("position", consultant.position);
        consultantUrl.searchParams.append("job", consultant.job);
        return consultantUrl.href; 
      },
      hideModal() {
        this.$refs['my-modal'].hide()
      },
      toggleModal() {
        // We pass the ID of the button that we want to return focus to
        // when the modal has hidden
        this.$refs['my-modal'].toggle('#toggle-btn')
      }
    },
    data() {
        return {
            selectedConsultant: null,
            consultants: [
                {
                    image: "/consultants/sirry/0.png",
                    name: "Sirry",
                    position: "Richmond,BC",
                    job: "Housing Agent",
                    link: "#",
                    buttonText: "Start chat"
                },
                {
                    image: "/consultants/frank/0.png",
                    name: "Frank",
                    position: "Richmond,BC",
                    job: "insurance agent",
                    link: "#",
                    buttonText: "Start chat"
                },
                {
                    image: "/consultants/bella/0.png",
                    name: "Bella",
                    position: "Richmond,BC",
                    job: "fitness coach",
                    link: "#",
                    buttonText: "Start chat"
                }
            ]
        };
    }
};
</script>
  