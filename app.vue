<script lang="ts" setup>
import resume from "./resume.json";
const { educations, personal_info, work_experience, abilities, about } = resume;
</script>

<template>
  <main
    card
    style="
      font-family: Noto Sans Traditional Chinese, sans-serif;
      font-weight: 400;
    "
    lg:w-240
    m-auto
  >
    <div text-center>
      <h1 m-0>
        {{ personal_info.name }}
      </h1>
      <p text-slate-500 m-0 text-sm>个人简历 / Resume</p>
    </div>
    <section space-x-10 flex justify-center flex-wrap flex-row>
      <div>
        <label>面试职位: </label> <span>{{ personal_info.position }}</span>
      </div>
      <div>
        <label>年龄: </label> <span>{{ personal_info.age }}</span>
      </div>
      <div>
        <label>工作年限: </label> <span>{{ personal_info.work_age }}</span>
      </div>
      <div>
        <label>状态: </label> <span>{{ personal_info.status }}</span>
      </div>
    </section>

    <address flex flex-row items-center flex-warp justify-center>
      <span
        mx-3
        my-1
        v-for="[label, contact] in Object.entries(personal_info.contacts)"
        :key="label"
      >
        <label> {{ label }}: </label>
        <span>
          {{ contact }}
        </span>
      </span>
    </address>
    <h3 header inline-block>技能</h3>
    <ul m-0>
      <li v-for="i in abilities" :key="i">
        {{ i || "todo..." }}
      </li>
    </ul>
    <!-- <h3 header inline-block>技术栈</h3>
    <div flex flew-row flex-wrap>
      <ul p-0 pl-4 my-1 w-25 sm:w-35 v-for="stk in stack" :key="stk.key">
        <div style="margin-left: -1rem;">{{ stk.label }}</div>
        <li my-1 text-slate-500 v-for="i in stk.items" :key="i">
          {{ i || "todo..." }}
        </li>
      </ul>
    </div> -->
    <h3 header inline-block>工作经历</h3>
    <div v-for="(work, i) in work_experience" :key="i" mb-4>
      <h4 m-0>
        {{ work.company.name }} - {{ work.position }} (<span>
          {{ work.date[0] }} - {{ work.date[1] || "至今" }} </span
        >)
      </h4>
      <p text-sm m-2 text-slate-500 border-l-3 border-slate-300 pl-3>
        {{ work.company.description }}
      </p>
      <h4>职责:</h4>
      <template v-for="i in work.responsibilities" :key="i">
        <p>{{ i }}</p>
      </template>
      <h4>工作:</h4>
      <ul>
        <li v-for="i in work.works" :key="i" my-2>
          {{ i || "todo..." }}
        </li>
      </ul>
    </div>

    <section>
      <h3 inline-block>教育经历</h3>
      <div v-for="education in educations" :key="education.academy_name">
        <span>{{ education.academy_name }}</span>
        -
        <span>{{ education.level }}</span>
        (<span>{{ education.category }}</span
        >)
        <span text-gray-400 ml-4>{{ education.date }}</span>
      </div>
    </section>
    <h3 header mt-10 inline-block>关于我</h3>
    <p v-for="i in about" :key="i">
      {{ i || "todo..." }}
    </p>
  </main>
</template>

<style lang="scss">
h3 {
  border-width: 0;
  border-bottom-width: 3px;
  @apply border-blue-400;
  border-style: solid;
}

body {
  @apply bg-gray-100;
}

[card] {
  // border-style: solid;
  // @apply border-gray-300 border p-6 px-10 rounded bg-white;
  // &:hover {
  //   @apply shadow-lg;
  // }
}

@media (max-width: 500px) {
  [card] {
    @apply p-4 m-0;
  }
}

h4 {
  margin: 0;
}

p {
  margin: 0.4em 0;
}
</style>
