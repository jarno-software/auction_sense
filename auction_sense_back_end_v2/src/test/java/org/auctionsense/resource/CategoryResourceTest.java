package org.auctionsense.resource;

import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;

import io.quarkus.test.junit.QuarkusTest;
import io.restassured.response.Response;

import static io.restassured.RestAssured.given;
import static org.assertj.core.api.Assertions.assertThat;

@QuarkusTest
class CategoryResourceTest {

    @Test
    @Order(1)
    void when_get_all_categories_are_equal_to_assert() {
        Response response = given()
                .when()
                .get("/api/all/categories")
                .then()
                .statusCode(200)
                .contentType("application/json")
                .extract()
                .response();

        assertThat(response.jsonPath().getList("name")).containsExactlyInAnyOrder("Games", "Cars");
    }
}
