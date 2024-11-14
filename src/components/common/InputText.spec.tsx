import React from "react"
import {render, screen} from "@testing-library/react"
import {BookStoreThemeProvider} from "../../context/themeContext";
import InputText from "./InputText";


describe("InputText 컴포넌트 테스트 ", () => {
    it("렌더링 확인", () => {
        render(
            <BookStoreThemeProvider>
                <InputText placeholder={"Test"}/>
            </BookStoreThemeProvider>
        );

        expect(screen.getByPlaceholderText("Test")).toBeInTheDocument();
    });

    it("forwardRef 테스트", () => {
        // 레퍼런스 상태 생성
        const ref = React.createRef<HTMLInputElement>();

        render(
            <BookStoreThemeProvider>
                <InputText placeholder={"Test"} ref={ref}/>
            </BookStoreThemeProvider>
        );

        // 가져온 레퍼런스 객체는 Input 엘리먼트 일 것이다. 라는 가정
        expect(ref.current).toBeInstanceOf(HTMLInputElement);
    })
})
