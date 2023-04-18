import { useState, useEffect } from 'react'
import { Form, FormControl, Dropdown, Button } from 'react-bootstrap'
import useMouseOver from '../hooks/useMouseOver'
import useMouseOut from '../hooks/useMouseOut'
import useFetchDataToJSON from '../hooks/useFetchDataToJSON'
import useDebounce from '../hooks/useDebounce'
import data from '../data.json'
//1.根据输入前缀进行检索数据，并展示在下拉菜单中
//2.如果没有检索词，不显示下拉菜单
//3.点击检索出来的文字，可以把这个文字放进input中
//4.点击右侧的 「x」按钮，可清除输入框内的文本并隐藏下拉框；

export default function SearchBoard() {
  const [search, setSearch] = useState('')
  const [filterData, setFilterData] = useState([])
  const [index, setIndex] = useState(0)

  const debouncedSearch = useDebounce(search, 500)

  // useFetchDataToJSON()
  useMouseOver()
  useMouseOut()
  useEffect(filterItems, [debouncedSearch])

  function filterItems() {
    const filterArr = data.filter(d => d.text.startsWith(debouncedSearch))
    setFilterData(filterArr)
  }

  // 根据你的输入，去遍历数组每个的开头有没有它。
  // 有的话,就放进过滤后的数组中
  function handleInputChange(e) {
    const currentValue = e.target.value
    setSearch(currentValue)

    setIndex(-1)
  }

  function handleClick(clickId) {
    // 选中那个对象,把对象.text更新到search状态
    const clickObj = data.find(d => d.id === clickId)
    setSearch(clickObj.text)
    setIndex(-1)
  }

  function handleKeyDown(e) {
    // 拿到索引号，用索引号找到filterData里的那个对象，把他的text更新到表单去
    const KEY_DOWN = e.keyCode === 38 && index > 0
    const KEY_UP = e.keyCode === 40 && index < filterData.length - 1

    if (KEY_DOWN) setIndex(preIndex => preIndex - 1)

    if (KEY_UP) setIndex(preIndex => preIndex + 1)

    if (e.keyCode === 13 && index !== -1) {
      setSearch(filterData[index].text)
      setIndex(-1)
    }
  }

  return (
    <Form>
      <FormControl
        type='search'
        className='form-control'
        placeholder='Search'
        value={search}
        onChange={handleInputChange}
      />
      <Button>百度一下</Button>
      <Dropdown show={filterData.length > 0}>
        <Dropdown.Menu className='drop-down'>
          {search
            ? filterData.map(f => (
                <Dropdown.Item
                  key={f.id}
                  tabIndex={f.id}
                  onClick={e => handleClick(e.target.tabIndex)}
                  onKeyDown={handleKeyDown}
                >
                  {f.text}
                </Dropdown.Item>
              ))
            : ''}
        </Dropdown.Menu>
      </Dropdown>
    </Form>
  )
}
