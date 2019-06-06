export default (items, label) => {
  let body = ''
  let head = Object.keys(items[0])

  head.reduce((prev, current) => (
    head = prev + `<th>${current.toUpperCase().replace(/_/g, ' ')}</th>`
  ), '')

  items.forEach((item) => {
    let row = Object.values(item)
    row.reduce((prev, current) => (row = prev + `<td>${current}</td>`), '')
    body += `<tr>${row}</tr>`
  })

  return `
    <div class="src-components-Table-container-3ImG">
      <label class="src-components-Table-label-3GH2">
        ${label}
      </label>
      <div class="src-components-Table-contents-2Hzm">
        <table class="src-components-Table-table-3VHw">
          <thead>
            <tr>
              ${head}
            </tr>
          </thead>
          <tbody>
            ${body}
          </tbody>
        </table>
      </div>
    </div>
  `
}
