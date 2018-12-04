<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>Survey</h3>
    <survey :survey="survey"></survey>
    <h3>Modal</h3>
    <modal :value="true">
      <div slot="modal-header">This is the header</div>
      This is the modal body.
    </modal>
  </div>
</template>

<script>
  import { modal } from 'vue2-strap3';

  import * as SurveyJS from 'survey-vue';

  var surveyJSON = { title: "Tell us, what technologies do you use?", pages: [
    { name:"page1", questions: [ 
        { type: "radiogroup", choices: [ "Yes", "No" ], isRequired: true, name: "frameworkUsing",title: "Do you use any front-end framework like Bootstrap?" },
        { type: "checkbox", choices: ["Bootstrap","Foundation"], hasOther: true, isRequired: true, name: "framework", title: "What front-end framework do you use?", visibleIf: "{frameworkUsing} = 'Yes'" }
     ]},
    { name: "page2", questions: [
      { type: "radiogroup", choices: ["Yes","No"],isRequired: true, name: "mvvmUsing", title: "Do you use any MVVM framework?" },
      { type: "checkbox", choices: [ "AngularJS", "KnockoutJS", "React" ], hasOther: true, isRequired: true, name: "mvvm", title: "What MVVM framework do you use?", visibleIf: "{mvvmUsing} = 'Yes'" } ] },
    { name: "page3",questions: [
      { type: "comment", name: "about", title: "Please tell us about your main requirements for Survey library" } ] }
   ]
  };
export default {
  name: 'HelloWorld',
  components: {
    modal,
    survey: SurveyJS.Survey
  },
  props: {
    msg: String
  },
  data() {
    return {
      survey: new SurveyJS.Model(surveyJSON)
    };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
