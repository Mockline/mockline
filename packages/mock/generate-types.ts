import { $ } from 'bun'

// type wanted
/*
type ThemeOptions = {
  light: string;
  dark: string;
};

export type Company = {
  title: string;
  logo: ThemeOptions;
  wordmark: ThemeOptions;
}
*/

const files = await $`ls public/library/*.svg`.text()

const companies = files.split('\n').filter(Boolean).map(file => {
  return file.replace(/^public\/library\//, '').replace(/\.svg$/, '')
})

// with this type i want to know using autocomplete for example
