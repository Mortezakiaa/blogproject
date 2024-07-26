import { renderHook, act } from "@testing-library/react";
import useAddEditBlog from "@/hooks/useAddEditBlog";


beforeEach(()=>{
    global.fetch = jest.fn()
})

afterEach(()=>{
    jest.restoreAllMocks()
})

describe("hook test", () => {
    test('init check' , async()=>{
        const mockData = {title:'sample' , content:'test' , _id:'123'}
        const {result} = renderHook(()=> useAddEditBlog())
        expect(result.current.loading).toBeFalsy()
    }) 


});