import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

const DemoNote = defineNoteConfig({
  dir: 'demo',
  link: '/demo',
  sidebar: ['', 'foo', 'bar'],
})

const CoreUseNote = defineNoteConfig({
  dir: 'core/use',
  link: '/notes/core/use',
  sidebar: 'auto',
})

const CoreDevNote = defineNoteConfig({
  dir: 'core/dev',
  link: '/notes/core/dev',
  sidebar: 'auto',
})

const BenchNote = defineNoteConfig({
  dir: 'bench',
  link: '/notes/bench',
  sidebar: 'auto',
})

const MarketNote = defineNoteConfig({
  dir: 'market',
  link: '/notes/market',
  sidebar: 'auto',
})

const nodeList = [DemoNote, CoreUseNote, CoreDevNote, BenchNote, MarketNote]

/* =================== locale: zh-CN ======================= */

export const zhNotes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: nodeList,
})


/* =================== locale: en-US ======================= */

export const enNotes = defineNotesConfig({
  dir: 'en/notes',
  link: '/en/',
  notes: nodeList,
})

