import 'mocha'
import * as chai from 'chai'
const dirtyChai: any = require('dirty-chai') // Turns chai expectations into functions instead of property access
chai.use(dirtyChai)
const { expect } = chai

import { hello } from './index'

describe('Hello function', () => {

  it('should return hello world', () => {
    const result = hello()
    expect(result).to.equal('Hello world!')
  })

})
