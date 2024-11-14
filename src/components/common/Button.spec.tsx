import { render, screen} from "@testing-library/react";
import {BookStoreThemeProvider} from "../../context/themeContext";
import Button from "./Button";

describe("Button 컴포넌트 테스트", () => {
    it("렌더링 확인", () => {
        render(
            <BookStoreThemeProvider>
                <Button size={"large"} scheme={"primary"}>
                    버튼
                </Button>
            </BookStoreThemeProvider>
        );

        expect(screen.getByText("버튼")).toBeInTheDocument();
    });

    it("size props 적용 확인", () => {
        const { container } = render(
            <BookStoreThemeProvider>
                <Button size={"large"} scheme={"primary"}>
                    버튼
                </Button>
            </BookStoreThemeProvider>
        );

        expect(screen.getByRole("button")).toHaveStyle({
            fontSize: "2rem"
        });
    });

    it("color 프롭스 적용 확인", () => {

        render (
            <BookStoreThemeProvider>
                <Button size={"medium"} scheme={"primary"}>
                    버튼
                </Button>
            </BookStoreThemeProvider>
        )

        expect(screen.getByRole("button")).toHaveStyle({
            backgroundColor : "midnightblue"
        });
    });


})