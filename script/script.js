new Vue({
    el: "#root",
    data: {
        title: "Email Generator Api",
        emailsList: [],
        pendingCounter: 0
    },
    methods: {
        emailsGenerator()
        {
            for (let i = 0; i < 10; i++) {
                this.emailsList = [];
                axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((ajaxResp) =>
                {
                    this.emailsList.push(ajaxResp.data.response);
                });

            }
        }
    }
})