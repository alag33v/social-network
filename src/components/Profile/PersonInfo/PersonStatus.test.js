import React from 'react'
import {create} from 'react-test-renderer'
import PersonStatus from './PersonStatus'

describe("PersonStatus Component", () => {
  test("status from props should be in the state", () => {
    const component = create(<PersonStatus status="alageev"/>)
    const instance = component.getInstance()
    expect(instance.state.status).toBe("alageev")
  })

  test("after creation p with status should be displayed", () => {
    const component = create(<PersonStatus status="alageev"/>)
    const root = component.root
    const p = root.findByType("p")
    expect(p.innerText).not.toBeNull()
  })

  test("after creation p with status should contains correct status", () => {
    const component = create(<PersonStatus status="alageev"/>)
    const root = component.root
    const p = root.findByType("p")
    expect(p.children[0]).toBe("alageev")
  })

  test("input should be displayed in editMode instead of p", () => {
    const component = create(<PersonStatus status="alageev"/>)
    const root = component.root
    const p = root.findByType("p")
    p.props.onDoubleClick()
    const input = root.findByType("input")
    expect(input.props.value).toBe("alageev")
  })

  test("callback should be called", () => {
    const mockCallback = jest.fn()
    const component = create(<PersonStatus status="alageev" updateStatus={mockCallback}/>)
    const instance = component.getInstance()
    instance.deactivateEditMode()

    expect(mockCallback.mock.calls.length).toBe(1)
  })
})