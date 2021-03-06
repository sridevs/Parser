
/* description: Parses and executes markdown expressions. */

/* lexical grammar */
%lex
%%

\s+                   /* skip whitespace */
^[a-zA-Z0-9\s.\-]+$   return 'ALPHANUMERIC'
"#"                   return 'HEADER'
<<EOF>>               return 'EOF'
.                     return 'INVALID'

/lex

/* operator associations and precedence */

%left '#' ALPHANUMERIC

%start expressions

%% /* language grammar */

expressions
    : e EOF
        { typeof console !== 'undefined' ? console.log($1) : print($1);
          return $1; }
    ;

e
    : ALPHANUMERIC
    {$$ = `<p>${yytext}</p>`;}

    | HEADER ALPHANUMERIC
        {
        $$ = `<h1>${$2}</h1>`;
        }
    ;
