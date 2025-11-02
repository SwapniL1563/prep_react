// React.lazy -> lets u lazily load or load component only when it is rendered, reducing initial bundle and faster load
// It takes fn that return dynamic import
// wrap it in Suspense that shows fallback until component is load

import React, { Suspense, useState } from "react";

const BigComponent = React.lazy(() => import("./useState"));

export default function AppLazy() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <h1>Main App</h1>
      <button onClick={() => setShow(true)}>Load Big Component</button>

      {show && (
        <Suspense fallback={<div>Loading component...</div>}>
          <BigComponent />
        </Suspense>
      )}
    </div>
  );
}
