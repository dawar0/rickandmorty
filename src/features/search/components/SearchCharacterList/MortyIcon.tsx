import { Box, Typography } from "@mui/material";

export default function MortyIcon({ width = 60 }: { width?: number }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <img
        width={width}
        alt="Morty"
        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIKdmlld0JveD0iMCAwIDEwMCAxMDAiPgo8Y2lyY2xlIGN4PSIyMC41IiBjeT0iNjEuNSIgcj0iNy41IiBmaWxsPSIjZmVkNWIzIj48L2NpcmNsZT48cGF0aCBkPSJNMjAuNSw3MGMtNC42ODcsMC04LjUtMy44MTMtOC41LTguNXMzLjgxMy04LjUsOC41LTguNXM4LjUsMy44MTMsOC41LDguNVMyNS4xODcsNzAsMjAuNSw3MHogTTIwLjUsNTUgYy0zLjU4NCwwLTYuNSwyLjkxNi02LjUsNi41czIuOTE2LDYuNSw2LjUsNi41czYuNS0yLjkxNiw2LjUtNi41UzI0LjA4NCw1NSwyMC41LDU1eiI+PC9wYXRoPjxjaXJjbGUgY3g9Ijc5LjUiIGN5PSI2Mi41IiByPSI3LjUiIGZpbGw9IiNmZWQ1YjMiPjwvY2lyY2xlPjxwYXRoIGQ9Ik03OS41LDcxYy00LjY4NywwLTguNS0zLjgxMy04LjUtOC41czMuODEzLTguNSw4LjUtOC41czguNSwzLjgxMyw4LjUsOC41Uzg0LjE4Nyw3MSw3OS41LDcxeiBNNzkuNSw1NiBjLTMuNTg0LDAtNi41LDIuOTE2LTYuNSw2LjVzMi45MTYsNi41LDYuNSw2LjVzNi41LTIuOTE2LDYuNS02LjVTODMuMDg0LDU2LDc5LjUsNTZ6Ij48L3BhdGg+PHBhdGggZmlsbD0iI2I3Nzc0OCIgZD0iTTg0LDQ5Yy00LjYyOSwxNS4wNDQtMTUuMjIyLDE5LTM0LDE5cy0zMS41ODUtNS42MzUtMzUtMjFjLTItOSw0Ljc0MS0xNy40ODMsNy0yMiBjNS0xMCwxNS40MDMtMTMuMDMxLDI4LTE0YzEzLTEsMjMuMDE0LDUuNDQ0LDI4Ljk5NCwxMy42MDdDODIuMTY5LDI4Ljk0MSw4Niw0Mi41LDg0LDQ5eiI+PC9wYXRoPjxwYXRoIGQ9Ik01MCw2OWMtMjAuOTUxLDAtMzIuNzE5LTcuMTI1LTM1Ljk3Ni0yMS43ODNjLTEuNzAzLTcuNjY0LDIuNTgzLTE0LjkxOSw1LjQxOS0xOS43MjFjMC42NjgtMS4xMzIsMS4yNDYtMi4xMSwxLjY2My0yLjk0MyBjNS42NTEtMTEuMzAzLDE3LjczOS0xMy42OTgsMjguODE4LTE0LjU1YzExLjgwNy0wLjkxMSwyMi42OSw0LjIwMSwyOS44NzcsMTQuMDEzYzMuNDMxLDQuNjg0LDcuMjYsMTguNDM2LDUuMTU1LDI1LjI3OCBDNzkuOTA2LDY1LjcwMyw2Ny44MzcsNjksNTAsNjl6IE01Mi41ODksMTEuOWMtMC44MzIsMC0xLjY2OSwwLjAzMi0yLjUxMiwwLjA5N2MtMTQuOTEzLDEuMTQ3LTIzLjA0Miw1LjE2OS0yNy4xODIsMTMuNDUgYy0wLjQ0OCwwLjg5Ni0xLjA0MiwxLjkwMS0xLjcyOSwzLjA2NmMtMi44MzYsNC44MDEtNi43MjEsMTEuMzc3LTUuMTg5LDE4LjI3QzE5LjA0Miw2MC41NzYsMjkuODUzLDY3LDUwLDY3IGMyMC4yNDEsMCwyOC44ODktNC43ODcsMzMuMDQ0LTE4LjI5NGMxLjg1MS02LjAxMy0xLjcyOS0xOS4yNC00Ljg1Ni0yMy41MDhDNzEuOTMyLDE2LjY1OCw2Mi43MDcsMTEuOSw1Mi41ODksMTEuOXoiPjwvcGF0aD48cGF0aCBmaWxsPSIjZmVkNWIzIiBkPSJNODIsNTYuMDNDODIsNzQuMjU2LDY4LjIyNSw4OCw1MCw4OFMxOCw3My4yMjUsMTgsNTVzMTMuNzc1LTMzLDMyLTMzUzgyLDM3LjgwNSw4Miw1Ni4wM3oiPjwvcGF0aD48cGF0aCBkPSJNNTAsODljLTE4LjUwNSwwLTMzLTE0LjkzNS0zMy0zNHMxNC40OTUtMzQsMzMtMzRjMTguMTk2LDAsMzMsMTUuNzE0LDMzLDM1LjAzQzgzLDc0LjgyNiw2OC44MTMsODksNTAsODl6IE01MCwyMyBjLTE3LjM4MywwLTMxLDE0LjA1Ni0zMSwzMmMwLDE3Ljk0NCwxMy42MTcsMzIsMzEsMzJjMTcuNjczLDAsMzEtMTMuMzE0LDMxLTMwLjk3QzgxLDM3LjgxNyw2Ny4wOTQsMjMsNTAsMjN6Ij48L3BhdGg+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTI1LjUzNiw0Ny40OTZDMjUuNTI4LDQ3LjY2NSwyNS41LDQ3LjgyOSwyNS41LDQ4YzAsNS43OTksNC43MDEsMTAuNSwxMC41LDEwLjUgUzQ2LjUsNTMuNzk5LDQ2LjUsNDhjMC0wLjQzMS0wLjAzOS0wLjg1MS0wLjA5MS0xLjI2OEMzOS40ODksNDUuNTUyLDMyLjUzMSw0NS44MTYsMjUuNTM2LDQ3LjQ5NnoiPjwvcGF0aD48cGF0aCBkPSJNMzYsNTljLTYuMDY1LDAtMTEtNC45MzUtMTEtMTFjMC0wLjExNywwLjAxLTAuMjMxLDAuMDIxLTAuMzQ2bDAuMDE1LTAuMTgzYzAuMDExLTAuMjIyLDAuMTY3LTAuNDEsMC4zODMtMC40NjIgYzcuMDUtMS42OTIsMTQuMTQyLTEuOTUzLDIxLjA3NC0wLjc3MWMwLjIxOCwwLjAzNywwLjM4NiwwLjIxMywwLjQxMiwwLjQzMkM0Ni45NSw0Ny4wMyw0Nyw0Ny41MDYsNDcsNDggQzQ3LDU0LjA2NSw0Mi4wNjUsNTksMzYsNTl6IE0yNi4wMDMsNDcuODk5QzI2LjAwMSw0Ny45MzMsMjYsNDcuOTY2LDI2LDQ4YzAsNS41MTQsNC40ODYsMTAsMTAsMTBzMTAtNC40ODYsMTAtMTAgYzAtMC4yOTEtMC4wMi0wLjU3OS0wLjA0NS0wLjgzN0MzOS4zODYsNDYuMDk0LDMyLjY4LDQ2LjM0MSwyNi4wMDMsNDcuODk5eiI+PC9wYXRoPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik01My41MTcsNDcuNzY2QzUzLjUxNSw0Ny44NDUsNTMuNSw0Ny45MjEsNTMuNSw0OGMwLDUuNzk5LDQuNzAxLDEwLjUsMTAuNSwxMC41IFM3NC41LDUzLjc5OSw3NC41LDQ4YzAtMC40ODctMC4wMzctMC45NjQtMC4xMDItMS40MzNDNjcuNDc1LDQ1LjUzMiw2MC41MTUsNDUuOTM5LDUzLjUxNyw0Ny43NjZ6Ij48L3BhdGg+PHBhdGggZD0iTTY0LDU5Yy02LjA2NSwwLTExLTQuOTM1LTExLTExYzAtMC4wNiwwLjAwNS0wLjExOCwwLjAxMS0wLjE3NmMwLjAwNi0wLjIyMywwLjE2NC0wLjQ4NSwwLjM4LTAuNTQyIGM3LjA0Ni0xLjgzOSwxNC4xMzYtMi4yNDcsMjEuMDgxLTEuMjFjMC4yMTksMC4wMzMsMC4zOTEsMC4yMDYsMC40MjEsMC40MjVDNzQuOTY0LDQ3LjAwOCw3NSw0Ny41MTQsNzUsNDggQzc1LDU0LjA2NSw3MC4wNjUsNTksNjQsNTl6IE01NC4wMDgsNDguMTU2QzU0LjEyNCw1My42MzcsNTguNTYzLDU4LDY0LDU4YzUuNTE0LDAsMTAtNC40ODYsMTAtMTAgYzAtMC4zMjMtMC4wMTgtMC42NTYtMC4wNTMtMC45OTNDNjcuMzc4LDQ2LjA3NSw2MC42NzUsNDYuNDYyLDU0LjAwOCw0OC4xNTZ6Ij48L3BhdGg+PHBhdGggZD0iTTUxLjkzOSw2NC40NzhjLTIuODU4LDAtNS42ODYtMy40ODUtNS44My0zLjY2NWMtMC4xNzItMC4yMTYtMC4xMzctMC41MywwLjA3OC0wLjcwM2MwLjIxNy0wLjE3MiwwLjUzMS0wLjEzNywwLjcwMywwLjA3OCBjMC4wMzgsMC4wNDcsMy43NDcsNC42MTksNi4zMzMsMi44OTZjMC40NDEtMC4yOTQsMC42NzktMC42NzIsMC43MjctMS4xNTZjMC4xNjgtMS42OTUtMS45NjYtNC4yMzctMi44MDMtNS4wNzQgYy0wLjE5NS0wLjE5NS0wLjE5NS0wLjUxMiwwLTAuNzA3czAuNTEyLTAuMTk1LDAuNzA3LDBjMC4xMzcsMC4xMzcsMy4zMzksMy4zNzEsMy4wOTEsNS44OGMtMC4wNzgsMC43OS0wLjQ3MSwxLjQyNi0xLjE2NywxLjg5IEM1My4xODIsNjQuMzEzLDUyLjU2LDY0LjQ3OCw1MS45MzksNjQuNDc4eiI+PC9wYXRoPjxwYXRoIGZpbGw9IiNmZWQ1YjMiIGQ9Ik0zMC41NDUsMzkuMDI5Yy0yLjkxNiwxLjc4MS00Ljg5NCw0Ljk0OC01LjAyNiw4LjU4NmM3LjAwOS0xLjg0MiwxMy45NzktMi4xMiwyMC45MDktMC44MDEgYy0wLjM0My0zLjA1My0xLjk5NS01LjcxMS00LjM4MS03LjM5NyI+PC9wYXRoPjxwYXRoIGZpbGw9IiNmZWQ1YjMiIGQ9Ik01Ny41MzgsMzkuNzI1Yy0wLjg1OCwwLjY3Mi0xLjYwOSwxLjQ3NS0yLjIyMywyLjM3OGMtMC40MjcsMC42MjktMC43ODgsMS4zMDctMS4wNzMsMi4wMjMgYy0wLjQ2MywxLjE2Ny0wLjcyMywyLjQzNy0wLjczNywzLjc2NmM3LjAwNS0xLjk5LDEzLjk3LTIuNDE4LDIwLjg5Ni0xLjI1OGMtMC4zODEtMi45MjYtMS45NjMtNS40NzUtNC4yMzctNy4xMzEiPjwvcGF0aD48cGF0aCBkPSJNMzAuNSwzNWMtMC4xNywwLTAuMzM1LTAuMDg2LTAuNDI5LTAuMjQzYy0wLjE0Mi0wLjIzNy0wLjA2NS0wLjU0NCwwLjE3MS0wLjY4NmMwLjIxMS0wLjEyNyw1LjI2OC0zLjA4OCwxMi4zOTUtMS4wNTIgYzAuMjY2LDAuMDc2LDAuNDE5LDAuMzUzLDAuMzQ0LDAuNjE4Yy0wLjA3NiwwLjI2Ny0wLjM1NSwwLjQxNi0wLjYxOCwwLjM0NGMtNi43MTQtMS45MTktMTEuNTU4LDAuOTE5LTExLjYwNSwwLjk0OCBDMzAuNjc3LDM0Ljk3NywzMC41ODgsMzUsMzAuNSwzNXoiPjwvcGF0aD48cGF0aCBmaWxsPSIjZWFkNmM3IiBkPSJNNDEuNSw3NC41YzAsMCw5Ljk1OC0zLjI5NSwxOSwwIj48L3BhdGg+PHBhdGggZD0iTTYwLjUsNzVjLTAuMDU3LDAtMC4xMTQtMC4wMS0wLjE3MS0wLjAzYy04Ljc3LTMuMTk1LTE4LjU3NC0wLjAyNy0xOC42NzIsMC4wMDVjLTAuMjYxLDAuMDg3LTAuNTQ1LTAuMDU2LTAuNjMxLTAuMzE3IGMtMC4wODctMC4yNjMsMC4wNTYtMC41NDUsMC4zMTctMC42MzJjMC40MTQtMC4xMzcsMTAuMjI3LTMuMzEzLDE5LjMyOCwwLjAwNWMwLjI2LDAuMDk1LDAuMzk0LDAuMzgyLDAuMjk5LDAuNjQxIEM2MC44OTYsNzQuODc0LDYwLjcwNCw3NSw2MC41LDc1eiI+PC9wYXRoPjxnPjxwYXRoIGQ9Ik02OS41LDM1Yy0wLjA3NSwwLTAuMTUxLTAuMDE3LTAuMjI0LTAuMDUzYy01Ljc2LTIuODc5LTEyLjU3MS0wLjk4Ni0xMi42MzktMC45NjZjLTAuMjcxLDAuMDc1LTAuNTQzLTAuMDc5LTAuNjE4LTAuMzQ0IGMtMC4wNzYtMC4yNjUsMC4wNzctMC41NDIsMC4zNDMtMC42MThjMC4yOTUtMC4wODMsNy4yNTctMi4wMTgsMTMuMzYxLDEuMDM0YzAuMjQ3LDAuMTI0LDAuMzQ3LDAuNDI0LDAuMjI0LDAuNjcxIEM2OS44NTksMzQuODk5LDY5LjY4MywzNSw2OS41LDM1eiI+PC9wYXRoPjwvZz48Zz48Y2lyY2xlIGN4PSIzNS41IiBjeT0iNDcuNSIgcj0iMS41Ij48L2NpcmNsZT48L2c+PGc+PGNpcmNsZSBjeD0iNjQuNSIgY3k9IjQ3LjUiIHI9IjEuNSI+PC9jaXJjbGU+PC9nPjxnPjxwYXRoIGQ9Ik0yNS41Miw0OC4xMTZjLTAuMTEyLDAtMC4yMjMtMC4wMzgtMC4zMTMtMC4xMWMtMC4xMjQtMC4wOTktMC4xOTMtMC4yNS0wLjE4Ny0wLjQwOGMwLjA2NC0xLjc4NywwLjU2OS0zLjU0NiwxLjQ1OC01LjA4OSBjMC4xMzctMC4yMzksMC40NDMtMC4zMjEsMC42ODMtMC4xODRzMC4zMjIsMC40NDMsMC4xODQsMC42ODNjLTAuNjk2LDEuMjA4LTEuMTMyLDIuNTYzLTEuMjc4LDMuOTUzIGM2LjYxNi0xLjY0NSwxMy4yNTktMS44OTksMTkuNzY2LTAuNzYzYy0wLjQ2Ny0yLjU1OS0xLjkyNi00Ljg1NC00LjA3My02LjM3MmMtMC4yMjYtMC4xNTktMC4yNzktMC40NzEtMC4xMi0wLjY5NyBjMC4xNTktMC4yMjUsMC40NzItMC4yNzksMC42OTctMC4xMmMyLjU2NiwxLjgxNCw0LjIzOSw0LjYzOSw0LjU4OSw3Ljc1YzAuMDE4LDAuMTU4LTAuMDQxLDAuMzE0LTAuMTU3LDAuNDIyIHMtMC4yODEsMC4xNTQtMC40MzMsMC4xMjVjLTYuODAxLTEuMjkzLTEzLjc2MS0xLjAyNi0yMC42ODksMC43OTNDMjUuNjA0LDQ4LjExLDI1LjU2Miw0OC4xMTYsMjUuNTIsNDguMTE2eiI+PC9wYXRoPjwvZz48Zz48cGF0aCBkPSJNMjguNjkyLDQwLjk2OGMtMC4xMywwLTAuMjYtMC4wNTEtMC4zNTgtMC4xNTFjLTAuMTkyLTAuMTk4LTAuMTg4LTAuNTE1LDAuMDEtMC43MDdjMC41ODgtMC41NzMsMS4yNDEtMS4wOCwxLjk0LTEuNTA3IGMwLjIzNi0wLjE0NCwwLjU0NC0wLjA3LDAuNjg4LDAuMTY2YzAuMTQ0LDAuMjM2LDAuMDcsMC41NDMtMC4xNjYsMC42ODhjLTAuNjM2LDAuMzg4LTEuMjI5LDAuODQ5LTEuNzY1LDEuMzcgQzI4Ljk0NCw0MC45MjEsMjguODE4LDQwLjk2OCwyOC42OTIsNDAuOTY4eiI+PC9wYXRoPjwvZz48Zz48cGF0aCBkPSJNNTMuNTA2LDQ4LjM5M2MtMC4xMDgsMC0wLjIxNS0wLjAzNS0wLjMwNC0wLjEwM2MtMC4xMjUtMC4wOTYtMC4xOTgtMC4yNDUtMC4xOTYtMC40MDIgYzAuMDEzLTEuMzE4LDAuMjU3LTIuNjA2LDAuNzI2LTMuODI5YzAuMDk5LTAuMjU3LDAuMzktMC4zODUsMC42NDYtMC4yODhjMC4yNTgsMC4wOTksMC4zODcsMC4zODgsMC4yODgsMC42NDYgYy0wLjM0NiwwLjkwMi0wLjU1OCwxLjg0NS0wLjYzMSwyLjgxYzYuNjA3LTEuNzg0LDEzLjI0Ny0yLjE4NywxOS43NjEtMS4xOTZjLTAuNDktMi40NDEtMS44OTYtNC42NDYtMy45MjUtNi4xMjQgYy0wLjIyNC0wLjE2My0wLjI3Mi0wLjQ3Ni0wLjExLTAuNjk5YzAuMTYyLTAuMjI0LDAuNDc2LTAuMjcxLDAuNjk4LTAuMTFjMi40MzUsMS43NzMsNC4wNTIsNC40OTYsNC40MzksNy40NzEgYzAuMDIxLDAuMTU3LTAuMDM1LDAuMzE0LTAuMTQ5LDAuNDI0cy0wLjI3LDAuMTU3LTAuNDMsMC4xMzNjLTYuODAyLTEuMTQtMTMuNzU4LTAuNzIxLTIwLjY3NiwxLjI0NiBDNTMuNTk4LDQ4LjM4Niw1My41NTIsNDguMzkzLDUzLjUwNiw0OC4zOTN6Ij48L3BhdGg+PC9nPjxnPjxwYXRoIGQ9Ik01NS40MjksNDIuNDM5Yy0wLjEwMSwwLTAuMjAxLTAuMDMtMC4yODktMC4wOTJjLTAuMjI1LTAuMTU5LTAuMjc4LTAuNDcxLTAuMTE5LTAuNjk3IGMwLjYxOS0wLjg3NSwxLjM2Mi0xLjY1NSwyLjIwOS0yLjMxOWMwLjIxOC0wLjE3LDAuNTMxLTAuMTMyLDAuNzAyLDAuMDg1YzAuMTcsMC4yMTgsMC4xMzIsMC41MzItMC4wODUsMC43MDIgYy0wLjc3MSwwLjYwNC0xLjQ0NywxLjMxMy0yLjAxLDIuMTA5QzU1LjczOSw0Mi4zNjYsNTUuNTg1LDQyLjQzOSw1NS40MjksNDIuNDM5eiI+PC9wYXRoPjwvZz4KPC9zdmc+"
      />
      <Typography variant="body2" sx={{ color: "text.secondary", pb: 1 }}>
        Favorites{" "}
      </Typography>
    </Box>
  );
}
