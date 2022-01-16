import {mount} from '@vue/test-utils'
import RegisterPage from '@/views/RegisterPage'

describe('RegisterPage.vue', () => {
  let wrapper
  let fieldUsername
  let fieldEmailAddress
  let fieldPassword
  let buttonSubmit

  beforeEach(() => {
    wrapper = mount(RegisterPage)
    fieldUsername = wrapper.find('#username')
    fieldEmailAddress = wrapper.find('#emailAddress')
    fieldPassword = wrapper.find('#password')
    buttonSubmit = wrapper.find('form button[type="submit"]')
  })

  it('should render register', () => {
    expect(fieldUsername.element.value).toEqual('')
    expect(fieldEmailAddress.element.value).toEqual('')
    expect(fieldPassword.element.value).toEqual('')
    //expect(buttonSubmit.text()).toEqual('Create account')
  })
/*
  it('should bound data model', () => {
    const username = 'sunny'
    const emailAddress = 'sunny@local'
    const password = 'VueJsRosk!'

    wrapper.vm.form.username = username
    wrapper.vm.form.emailAddress = emailAddress
    wrapper.vm.form.password = password
    expect(fieldUsername.element.value).toEqual(username)
    expect(fieldEmailAddress.element.value).toEqual(emailAddress)
    expect(fieldPassword.element.value).toEqual(password)

  })
*/
  it('shoud evnet submitForm', () => {
    const stub = jest.fn()
    wrapper.setMethods({submitForm: stub})
    buttonSubmit.trigger('submit')
    expect(stub).toBeCalled()
  })

})
