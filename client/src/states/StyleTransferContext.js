import { createContext } from "react";

import { StyleTransferStore } from "./StyleTransferStore";

export const StyleTransferContext = createContext(new StyleTransferStore())
