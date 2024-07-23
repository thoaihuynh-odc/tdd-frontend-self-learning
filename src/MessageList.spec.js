import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react";
import MessageList from "./MessageList";
import NewMessageForm from "./NewMessageForm";

describe("MessageList", () => {
    let messageList = [];
    beforeAll(() => {
        messageList = ["abc", "New message"];
    });
    describe("clicking the delete all button", () => {
        let deleteHandler;
        async function deleteMessage() {
            deleteHandler = jest.fn().mockName("deleteHandler");
            render(<MessageList data={messageList} onDelete={deleteHandler} />);

            act(() => {
                userEvent.click(screen.getByTestId("deleteAllButton"));
            });
        }

        it("calls the delete handler", async () => {
            await deleteMessage();
            expect(deleteHandler).toHaveBeenCalled();
        });
    });

    describe("clicking the delete item button", () => {
        let deleteItemHandler;
        async function deleteMessage() {
            deleteItemHandler = jest.fn().mockName("deleteItemHandler");
            render(
                <MessageList
                    data={messageList}
                    onDeleteItem={deleteItemHandler}
                />
            );

            act(() => {
                userEvent.click(screen.getByTestId("deleteButton-0"));
            });
        }

        it("calls the delete handler", async () => {
            await deleteMessage();
            expect(deleteItemHandler).toHaveBeenCalledWith("abc");
        });
    });
});
