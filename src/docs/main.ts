import { observable, html, map } from 'naiv'

const Header = html`
<div class='text-center'>
  <span class='text-4xl'>hashnum</span>
  <a class='align-text-bottom ml-3' href='#'>
    <img class='inline h-8' src='GitHub-Mark-64px.png'>
  </a>
</div>
`

const nums = observable([12, 23, 445])

const InputNums = map(
  nums,
  (e, i) => i,
  html`<div></div>`,
  (e, i) => html`
    <div 
      class='px-1 my-1 inline-block'
      
      contenteditable>
      ${e}
    </div>
  `
)

const InputContainer = (content = '') => html`
  <div class='
    m-5
    w-5/6 sm:w-4/6 md:w-3/6 lg:w-2/6 h-40
    border-2 bg-white rounded-lg border-black'>
    ${content}
  </div> 
`

const App = html`
  <div class='flex flex-col font-mono min-h-screen bg-gray-300 '>
    ${Header}
    <div class='my-10 flex flex-col items-center'>
      ${InputContainer(InputNums)}
      ${InputContainer()}
    </div>
  </div>
`

document.body.append(App)
