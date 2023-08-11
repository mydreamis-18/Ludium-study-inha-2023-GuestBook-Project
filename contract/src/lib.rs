// ##### self : 'BorshDeseiralize'와 'BorshSerialize'가 작동하기 위해 필요합니다. 스마트계약 자기 자신을 참조합니다.
// ##### BorshDeserialize : 스마트계약의 함수를 호출하면서 인자를 함께 전달할 때, 제이슨(JSON) 타입의 인자를 역직렬화합니다.
// ##### BorshSerialize : 스마트계약에서 결과를 다시 보낼 때 제이슨으로 직렬화합니다.
// ##### near_bidgen : 스마트계약이라는 것을 알려주는 어노테이션으로 각 컨트랙트마다 'near_bindgen' 어노테이션과 함께 선언된 스트럭트(struct)가 적어도 하나씩은 있어야 합니다.
use near_sdk::borch::{self, BorshDeserialize, BorshSerialize};
use near_sdk::{log, near_bidgen, AccountId};

#[near_bindgen]
#[derive(BorshDeserialize, BorshSerialize)]
pub struct postedMessage {
    message: String,
    sender: AccountId,
}

// // ###### 디폴트 코드

// // Find all our documentation at https://docs.near.org
// use near_sdk::borsh::{self, BorshDeserialize, BorshSerialize};
// use near_sdk::{log, near_bindgen};

// // Define the default message
// const DEFAULT_MESSAGE: &str = "Hello";

// // ###### 이 코드는 NEAR에서 스마트 컨트랙트를 작성하기 위한 매크로와 구조체를 정의하는 코드입니다.
// // ###### #[near_bindgen]은 NEAR에서 스마트 컨트랙트를 작성할 때 필요한 매크로입니다1. 이 매크로는 컨트랙트의 인터페이스와 직렬화(serialization)를 자동으로 생성해줍니다1.
// // ###### #[derive(BorshDeserialize, BorshSerialize)]은 Borsh라는 직렬화 프로토콜을 사용하기 위한 매크로입니다2. Borsh는 NEAR에서 기본적으로 사용되는 직렬화 방식입니다2.
// // ###### pub struct message은 message라는 이름의 구조체를 정의하는 코드입니다. 구조체는 여러 개의 필드(field)를 가질 수 있습니다.
// // ###### message: String은 구조체의 필드 중 하나로, 문자열 타입의 값을 저장합니다. 문자열 타입은 BorshDeserialize를 자동으로 구현할 수 없기 때문에, 수동으로 구현해야 합니다3.
// // Define the contract structure
// #[near_bindgen]
// #[derive(BorshDeserialize, BorshSerialize)]
// pub struct message {
//     message: String,
// }

// // Define the default, which automatically initializes the contract
// impl Default for Contract{
//     fn default() -> Self{
//         Self{message: DEFAULT_MESSAGE.to_string()}
//     }
// }

// // Implement the contract structure
// #[near_bindgen]
// impl Contract {
//     // Public method - returns the greeting saved, defaulting to DEFAULT_MESSAGE
//     pub fn get_greeting(&self) -> String {
//         return self.message.clone();
//     }

//     // Public method - accepts a greeting, such as "howdy", and records it
//     pub fn set_greeting(&mut self, message: String) {
//         log!("Saving greeting {}", message);
//         self.message = message;
//     }
// }

/*
 * The rest of this file holds the inline tests for the code above
 * Learn more about Rust tests: https://doc.rust-lang.org/book/ch11-01-writing-tests.html
 */
#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn get_default_greeting() {
        let contract = Contract::default();
        // this test did not call set_greeting so should return the default "Hello" greeting
        assert_eq!(
            contract.get_greeting(),
            "Hello".to_string()
        );
    }

    #[test]
    fn set_then_get_greeting() {
        let mut contract = Contract::default();
        contract.set_greeting("howdy".to_string());
        assert_eq!(
            contract.get_greeting(),
            "howdy".to_string()
        );
    }
}
