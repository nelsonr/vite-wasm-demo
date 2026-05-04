use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn get_mocking_text(text: &str) -> String {
    text.split("")
        .map(|char| {
            if rand::random_bool(1.0 / 3.0) {
                char.to_uppercase()
            } else {
                char.to_lowercase()
            }
        })
        .collect()
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn it_works() {
        let input = "Some random text";
        let result = get_mocking_text(input);
        assert_ne!(result, input);
    }
}
