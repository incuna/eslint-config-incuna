module.exports = {
    "plugins": [
        "import"
    ],
    "extends": "eslint:recommended",
    "rules": {
        "no-unsafe-negation": "error",
        "curly": [
            "error",
            "all"
        ],
        "default-case": "error",
        "dot-location": [
            "error",
            "property"
        ],
        "dot-notation": "error",
        "eqeqeq": "error",
        "no-caller": "error",
        "no-else-return": "error",
        "no-empty-function": "error",
        "no-eq-null": "error",
        "no-extra-bind": "error",
        "no-floating-decimal": "error",
        "no-global-assign": "error",
        "no-implicit-coercion": "error",
        "no-implicit-globals": "error",
        "no-implied-eval": "error",
        "no-iterator": "error",
        "no-lone-blocks": "error",
        "no-multi-spaces": "error",
        "no-new-func": "error",
        "no-new-wrappers": "error",
        "no-octal-escape": "error",
        "no-param-reassign": [
            "error",
            {
                "props": false
            }
        ],
        "no-proto": "error",
        "no-return-assign": [
            "error",
            "always"
        ],
        "no-self-assign": [
            "error",
            {
                "props": false
            }
        ],
        "no-self-compare": "error",
        "no-sequences": "error",
        "no-throw-literal": "error",
        "no-useless-call": "error",
        "no-useless-concat": "error",
        "no-useless-escape": "error",
        "no-with": "error",
        "radix": [
            "error",
            "as-needed"
        ],
        "strict": [
            "error",
            "safe"
        ],
        "no-shadow-restricted-names": "error",
        "no-use-before-define": "error",
        "array-bracket-spacing": [
            "error",
            "never"
        ],
        "block-spacing": "error",
        "brace-style": "error",
        "comma-dangle": [
            "error",
            "always-multiline"
        ],
        "comma-spacing": "error",
        "comma-style": "error",
        "computed-property-spacing": "error",
        "eol-last": "error",
        "func-call-spacing": "error",
        "indent": [
            "error",
            4,
            {
                "SwitchCase": 1
            }
        ],
        "key-spacing": "error",
        "line-comment-position": "error",
        "new-parens": "error",
        "no-inline-comments": "error",
        "no-tabs": "error",
        "no-trailing-spaces": "error",
        "no-whitespace-before-property": "error",
        "object-curly-newline": [
            "error",
            {
                "ObjectExpression": {
                    "minProperties": 1
                }
            }
        ],
        "quotes": [
            "error",
            "single",
            {
                "avoidEscape": true,
                "allowTemplateLiterals": true
            }
        ],
        "semi": [
            "error",
            "always"
        ],

        "no-template-curly-in-string": 1,
        "import/named": 2,
        "radix": 0
    }
};
