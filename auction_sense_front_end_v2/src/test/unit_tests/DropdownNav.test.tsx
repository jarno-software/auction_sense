import { render, screen, waitFor } from "@testing-library/react";
import DropdownNav from "../../components/navbar/DropdownNav";
import { SnackbarProvider } from "notistack";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();
render(
    <QueryClientProvider client={queryClient}>
      <SnackbarProvider>
        <DropdownNav />
      </SnackbarProvider>
    </QueryClientProvider>
  );

describe("Dropdown content present on hover.", () => {
  test("Dropdown content initially hidden.", async () => {
    await waitFor(() => expect(screen.getByTestId("dropdown-content").classList.contains("hidden")).toBe(true));
  });
});
