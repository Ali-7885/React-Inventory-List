import C from '../public_html/_/components/js/constants'
import {
    addItem,
    removeItem,
    selectedItems,
    increaseItem,
    reduceItem
} from '../public_html/_/components/js/actions'



it('should handle ADD_ITEM', () => {
    var a = addItem('Mobile')
    console.log(a)
    // expect(
    //     items([], addItem('Mobile'))
    //     .toEqual([{
    //         itemName: 'Mobile',
    //         itemCount: 1
    //     }])
    // )


})

it('should handle REMOVE_ITEM', () => {})

it('Checking Jest test process', () => {
    function add(a, b) {
        return a + b;
    }
    describe('add', () => {
        it('should add two numbers', () => {
            expect(add(1, 2)).toBe(3);
        })
    })
})
