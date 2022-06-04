# CUSTOM HOOKS

This is easier than it looks. Basicly you need to create a file called 'use-\*.js' in somewhere in your project. And then you need to move your statetful logic to that file.

### Example

You have a code like this ->

```js
import { useState } from 'react'

export const component () => {
    const [inputs, setInputs] = useState({})

    const handleChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }
    return (
        <div>
            <input type="text" name="name" onChange={handleChange} />
            <input type="text" name="age" onChange={handleChange} />
        </div>
    )
    )
}
```

You can use the hook like this ->

```js
import { useState } from "react";

export const useInputs = (params) => {
  const [inputs, setInputs] = useState({ params });

  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  return [inputs, handleChange];
};
```

And then on your component you can use it like this ->

```js
import { useInputs } from "./use-inputs";
export const component = () => {
    const [inputs, handleChange] = useInputs({name: "", age: ""});
    return (
        <div>
        <input type="text" name="name" onChange={handleChange} />
        <input type="text" name="age" onChange={handleChange} />
        </div>
    );
    };
}
```

This is a so basic example but this is the all you need to do to use it.
