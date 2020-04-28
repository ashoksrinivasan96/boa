#[cfg(test)]
mod tests;

use crate::syntax::{
    ast::{keyword::Keyword, node::Node, punc::Punctuator},
    parser::{
        expression::Expression, AllowAwait, AllowReturn, AllowYield, Cursor, ParseError,
        ParseResult, TokenParser,
    },
};

/// Switch statement parsing.
///
/// More information:
///  - [MDN documentation][mdn]
///  - [ECMAScript specification][spec]
///
/// [mdn]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
/// [spec]: https://tc39.es/ecma262/#prod-SwitchStatement
#[derive(Debug, Clone, Copy)]
pub(super) struct SwitchStatement {
    allow_yield: AllowYield,
    allow_await: AllowAwait,
    allow_return: AllowReturn,
}

impl SwitchStatement {
    /// Creates a new `SwitchStatement` parser.
    pub(super) fn new<Y, A, R>(allow_yield: Y, allow_await: A, allow_return: R) -> Self
    where
        Y: Into<AllowYield>,
        A: Into<AllowAwait>,
        R: Into<AllowReturn>,
    {
        Self {
            allow_yield: allow_yield.into(),
            allow_await: allow_await.into(),
            allow_return: allow_return.into(),
        }
    }
}

impl TokenParser for SwitchStatement {
    type Output = Node;

    fn parse(self, cursor: &mut Cursor<'_>, interner: &mut Interner) -> ParseResult {
        cursor.expect(Keyword::Switch, "switch statement", interner)?;
        cursor.expect(Punctuator::OpenParen, "switch statement", interner)?;

        let condition =
            Expression::new(true, self.allow_yield, self.allow_await).parse(cursor, interner)?;

        cursor.expect(Punctuator::CloseParen, "switch statement", interner)?;

        let (cases, default) =
            CaseBlock::new(self.allow_yield, self.allow_await, self.allow_return)
                .parse(cursor, interner)?;

        Ok(Node::switch::<_, _, _, Node>(condition, cases, default))
    }
}

/// Switch case block parsing.
///
/// More information:
///  - [ECMAScript specification][spec]
///
/// [spec]: https://tc39.es/ecma262/#prod-CaseBlock
#[derive(Debug, Clone, Copy)]
struct CaseBlock {
    allow_yield: AllowYield,
    allow_await: AllowAwait,
    allow_return: AllowReturn,
}

impl CaseBlock {
    /// Creates a new `CaseBlock` parser.
    fn new<Y, A, R>(allow_yield: Y, allow_await: A, allow_return: R) -> Self
    where
        Y: Into<AllowYield>,
        A: Into<AllowAwait>,
        R: Into<AllowReturn>,
    {
        Self {
            allow_yield: allow_yield.into(),
            allow_await: allow_await.into(),
            allow_return: allow_return.into(),
        }
    }
}

impl TokenParser for CaseBlock {
    type Output = (Vec<(Node, Vec<Node>)>, Option<Node>);

    fn parse(
        self,
        cursor: &mut Cursor<'_>,
        interner: &mut Interner,
    ) -> Result<Self::Output, ParseError> {
        cursor.expect(Punctuator::OpenBlock, "switch case block", interner)?;

        // CaseClauses[?Yield, ?Await, ?Return]opt
        // CaseClauses[?Yield, ?Await, ?Return]optDefaultClause[?Yield, ?Await, ?Return]CaseClauses[?Yield, ?Await, ?Return]opt

        unimplemented!("switch case block parsing")
    }
}
