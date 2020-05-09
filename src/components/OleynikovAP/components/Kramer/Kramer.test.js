import Kramer from './Kramer'
import { shallow, mount } from 'enzyme'
import React from 'react'

describe('The first test', () => {
    it('1 it', () => {
        const wrapper = shallow(<Kramer />)
        expect(wrapper.state('matrix')).toStrictEqual({
            matr: [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
            res: [0, 0, 0],
            type: 3
        })
    })

    it('2 it', () => {
        const wrapper = mount(<Kramer />)
        expect(wrapper.find('.det').length).toBe(0)
        expect(wrapper.find('.res').length).toBe(0)
        wrapper.find('.resultt').simulate('click')
        expect(wrapper.find('.det').length).toBe(1)
        expect(wrapper.find('.res').length).toBe(1)


        expect(wrapper.state('matrix')).toStrictEqual({
            matr: [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
            res: [0, 0, 0],
            type: 3
        })
    })

    it('3 it', () => {
        const wrapper = mount(<Kramer />)
        expect(wrapper.find('.countMinus').length).toBe(1)
        expect(wrapper.find('.countPlus').length).toBe(1)
        wrapper.find('.countMinus').simulate('click')

        expect(wrapper.state('matrix')).toStrictEqual({
            matr: [[0, 0], [0, 0]],
            res: [0, 0],
            type: 2
        })

        wrapper.find('.countPlus').simulate('click')

        expect(wrapper.state('matrix')).toStrictEqual({
            matr: [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
            res: [0, 0, 0],
            type: 3
        })
    })

    it('4 it', () => {
        const wrapper = shallow(<Kramer />)

        expect(wrapper.state('matrix')).toStrictEqual({
            matr: [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
            res: [0, 0, 0],
            type: 3
        })

        wrapper.setState({
            matrix: {
                matr: [[1, 2], [3, 4]],
                res: [5, 6],
                type: 2
            }
        })

        wrapper.find('.resultt').simulate('click')

        expect(wrapper.state('result')).toStrictEqual([-4, 4.5])
        expect(wrapper.state('determinant')).toBe(-2)

    })

    it('5 it', () => {
        const wrapper = shallow(<Kramer />)

        expect(wrapper.state('matrix')).toStrictEqual({
            matr: [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
            res: [0, 0, 0],
            type: 3
        })

        wrapper.setState({
            matrix: {
                matr: [[1, 2, 1], [3, 4, 1], [3, -2, 2]],
                res: [2, -2, 2],
                type: 3
            }
        })

        wrapper.find('.resultt').simulate('click')

        expect(wrapper.state('result')).toStrictEqual([-1.33333333333333, -0.666666666666667, 4.66666666666667])
        expect(wrapper.state('determinant')).toBe(-12)

    })
})