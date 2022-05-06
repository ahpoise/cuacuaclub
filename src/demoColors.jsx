import { theme } from "./Theme";

const DemoColors = () => {
  return (
    <div className="App">
      {Object.keys(theme.colors).map((color, i) => {
        return (
          <div key={i} style={{ display: "flex" }}>
            {Object.keys(theme.colors[color]).map((colorType, j) => {
              return (
                <div
                  key={j}
                  style={{
                    width: "80px",
                    height: "80px",
                    backgroundColor: theme.colors[color][colorType],
                  }}
                ></div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default DemoColors;
