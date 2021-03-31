# Stepper

Stepper is helper component to pick range of numeric values.

## Usage
```html
<aux-stepper>
</aux-stepper>
```

## API
##### Inputs
|  Param  |  Description  |  Type  |
|---------|---------------|--------|
| `counterValue` | The value of field   | `number`  |
| `step` | Incremental value step | `number` |
| `minValue` | Min allowed value | `number` |
| `maxValue` | Max allowed value | `number` |
##### Outputs
|  Param  |  Description  |  Type  |
|---------|---------------|--------|
| `(changedStepper)` | On value change   | `number`  |
