<script lang="ts" setup>
import resume from './resume.json';
const { personal_info, work_experience, abilities, about, stack } = resume;
</script>
<template>
  <main font-serif w-200 m-auto my-10>
    <div text-center>
      <h1 m-0>
        {{ personal_info.name }}
      </h1>
      <p text-slate-500 m-0 text-sm>{{ personal_info.position }}</p>
      <address>
        <span
          mx-3
          v-for="[label, contact] in Object.entries(personal_info.contacts)"
          :key="label"
        >
          <label> {{ label }}: </label>
          <span>
            {{ contact }}
          </span>
        </span>
      </address>
    </div>
    <h3 inline-block border-b-3>技能</h3>
    <ul m-0>
      <li v-for="i in abilities" :key="i">
        {{ i || 'todo...' }}
      </li>
    </ul>
    <h3 inline-block border-b-3>工作经历</h3>
    <div v-for="(work, i) in work_experience" :key="i">
      <h4 m-0>{{ work.company.name }} - {{ work.position }}</h4>
      <p text-sm m-2 text-slate-500 border-l-3 border-slate-300 pl-3>
        {{ work.company.description }}
      </p>
      <p>
        {{ work.date[0] }} - {{ work.date[1] || '至今' }} ({{ work.position }})
      </p>
      <p>{{ work.responsibility }}</p>
      <ul>
        <li v-for="i in work.works" :key="i" my-2>
          {{ i || 'todo...' }}
        </li>
      </ul>
    </div>
    <h3 inline-block border-b-3>技术栈</h3>
    <div flex flew-row flex-wrap>
      <ul my-1 w-35 v-for="stk in stack" :key="stk.key">
        <div style="margin-left: -30px" text-lg>{{ stk.label }}</div>
        <li text-slate-400 v-for="i in stk.items" :key="i">
          {{ i || 'todo...' }}
        </li>
      </ul>
    </div>
    <h3 inline-block border-b-3>关于我</h3>
    <p v-for="i in about" :key="i">
      {{ i || 'todo...' }}
    </p>
  </main>
</template>
